import { useEffect, useState, useRef } from 'react';
import { FaEye } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';
import Icon from '@components/Icon';

interface ViewsCounterProps {
  type: string;
  slug: string;
}

// The counter keeps its footprint from first paint: the eye icon is always
// there and a skeleton bar stands in for the number until the count arrives, so
// there is never an empty gap and nothing around it shifts.
const StyledViewsCounter = styled('p')`
  ${({ theme }) => css`
    color: ${theme.palette.text.secondary};
    margin: 0;
    display: flex;
    align-items: center;
    gap: ${theme.spacing(0.5)};
    min-height: ${theme.spacing(3)};
    min-width: 9ch;
  `}
`;

const ViewsSkeleton = styled('span')`
  height: 0.7em;
  width: 5.5ch;
  border-radius: 999px;
  background-color: currentColor;
  opacity: 0.2;
  animation: views-skeleton-pulse 1.5s ease-in-out infinite;

  @keyframes views-skeleton-pulse {
    0%,
    100% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.08;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ViewsValue = styled('span')`
  animation: views-fade-in 200ms ease-in both;

  @keyframes views-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ViewsCounter = ({ type, slug }: ViewsCounterProps) => {
  const [views, setViews] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const hasIncrementedRef = useRef<Record<string, boolean>>({});
  const currentKeyRef = useRef<string | null>(null);

  useEffect(() => {
    const componentKey = `${type}_${slug}`;
    const viewKey = `view_${type}_${slug}`;

    if (currentKeyRef.current !== componentKey) {
      currentKeyRef.current = componentKey;
      setViews(null);
      setIsLoading(true);
    }

    const hasIncremented = hasIncrementedRef.current[componentKey] || false;

    if (typeof window !== 'undefined') {
      const sessionIncremented = sessionStorage.getItem(viewKey);
      if (sessionIncremented === 'true' || hasIncremented) {
        const getViews = async () => {
          try {
            const getResponse = await fetch(`/api/views/${type}/${slug}`);
            if (getResponse.ok) {
              const data = await getResponse.json();
              setViews(data.views);
            }
          } catch (err) {
            console.error('Error fetching views:', err);
          } finally {
            setIsLoading(false);
          }
        };
        getViews();
        return;
      }
    }

    hasIncrementedRef.current[componentKey] = true;

    const incrementViews = async () => {
      try {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem(viewKey, 'true');
        }

        const incrementResponse = await fetch(`/api/views/${type}/${slug}`, {
          method: 'POST',
        });

        if (incrementResponse.ok) {
          const data = await incrementResponse.json();
          setViews(data.views);
        } else {
          const getResponse = await fetch(`/api/views/${type}/${slug}`);
          if (getResponse.ok) {
            const data = await getResponse.json();
            setViews(data.views);
          }
        }
      } catch (error) {
        console.error('Error updating views:', error);
        hasIncrementedRef.current[componentKey] = false;
        if (typeof window !== 'undefined') {
          sessionStorage.removeItem(viewKey);
        }
        try {
          const getResponse = await fetch(`/api/views/${type}/${slug}`);
          if (getResponse.ok) {
            const data = await getResponse.json();
            setViews(data.views);
          }
        } catch (err) {
          console.error('Error fetching views:', err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    incrementViews();
  }, [type, slug]);

  const hasViews = !isLoading && views !== null;

  return (
    <StyledViewsCounter aria-live="polite" aria-busy={!hasViews}>
      <Icon icon={FaEye} />
      {hasViews ? (
        <ViewsValue>
          {views.toLocaleString()} {views === 1 ? 'view' : 'views'}
        </ViewsValue>
      ) : (
        <ViewsSkeleton aria-label="Loading views" />
      )}
    </StyledViewsCounter>
  );
};

export default ViewsCounter;
