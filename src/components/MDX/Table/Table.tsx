import {
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  StyledHint,
  StyledScroller,
  StyledTable,
  StyledViewport,
  StyledWrap,
} from './Table.styled';

type Props = {
  children?: ReactNode;
};

type ElementProps = { children?: ReactNode };
type Element = ReactElement<ElementProps>;

// Narrow columns are what made wide tables unreadable on a phone: five columns
// sharing 343px shreds sentences into one word per line. Rather than squeezing,
// the table keeps usable column widths and scrolls sideways.
const LONG_CELL_CHARS = 30;
const LONG_CELLS_FOR_PROSE = 2;
const MIN_COLS_TO_SCROLL = 3;
const PROSE_COL_WIDTH = 170;
const VALUE_COL_WIDTH = 130;
const MAX_TABLE_WIDTH = 960;

type Overflow = 'none' | 'start' | 'middle' | 'end';

const toText = (node: ReactNode): string => {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return '';
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(toText).join('');
  }
  if (isValidElement(node)) {
    return toText((node as Element).props.children);
  }
  return '';
};

const elementsOf = (node: ReactNode): Element[] =>
  Children.toArray(node).filter(isValidElement) as Element[];

const sectionsOf = (children: ReactNode, tag: 'thead' | 'tbody'): Element[] =>
  elementsOf(children).filter((child) => child.type === tag);

const rowsOf = (section: Element): Element[] =>
  elementsOf(section.props.children).filter((row) => row.type === 'tr');

const Table = ({ children, ...rest }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState<Overflow>('none');

  const measure = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) {
      return;
    }
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 1) {
      setOverflow('none');
    } else if (el.scrollLeft <= 1) {
      setOverflow('start');
    } else if (el.scrollLeft >= max - 1) {
      setOverflow('end');
    } else {
      setOverflow('middle');
    }
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) {
      return;
    }
    // On the first pass the row is often still unlaid-out and measures 0 wide,
    // so re-check after a frame and once the webfont has swapped in - both
    // change the table's width and therefore whether it overflows at all.
    measure();
    const frame = requestAnimationFrame(measure);
    document.fonts?.ready.then(measure).catch(() => undefined);

    el.addEventListener('scroll', measure, { passive: true });
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    const table = el.firstElementChild;
    if (table) {
      observer.observe(table);
    }
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('scroll', measure);
      observer.disconnect();
    };
  }, [measure]);

  const headRow = sectionsOf(children, 'thead').flatMap(rowsOf)[0];
  const bodyRows = sectionsOf(children, 'tbody').flatMap(rowsOf);
  const cols =
    (headRow ? elementsOf(headRow.props.children).length : 0) ||
    (bodyRows[0] ? elementsOf(bodyRows[0].props.children).length : 0);

  // Cells holding sentences need more room than cells holding "12%" or "Yes".
  const longCells = bodyRows.reduce(
    (total, row) =>
      total +
      elementsOf(row.props.children).filter(
        (cell, index) =>
          index > 0 && toText(cell.props.children).length > LONG_CELL_CHARS
      ).length,
    0
  );
  const colWidth =
    longCells >= LONG_CELLS_FOR_PROSE ? PROSE_COL_WIDTH : VALUE_COL_WIDTH;
  const minWidth =
    cols >= MIN_COLS_TO_SCROLL
      ? Math.min(cols * colWidth, MAX_TABLE_WIDTH)
      : undefined;

  return (
    <StyledWrap>
      <StyledViewport
        $fadeStart={overflow === 'middle' || overflow === 'end'}
        $fadeEnd={overflow === 'start' || overflow === 'middle'}
      >
        <StyledScroller ref={scrollerRef} tabIndex={0} role="region" aria-label="Table">
          <StyledTable style={minWidth ? { minWidth } : undefined} {...rest}>
            {children}
          </StyledTable>
        </StyledScroller>
      </StyledViewport>
      {/* Clears itself once the reader has scrolled, so it never nags. */}
      {overflow === 'start' && (
        <StyledHint>Scroll the table sideways for more →</StyledHint>
      )}
    </StyledWrap>
  );
};

export default Table;
