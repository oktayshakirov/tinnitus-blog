import AdSlot from '@components/AdSlot';

/** Native in-article unit placed inside post bodies from MDX. */
const AdComponent: React.FC = () => (
  <AdSlot
    slot="3845515975"
    format="fluid"
    layout="in-article"
    placeholder="Ad Example (Content)"
  />
);

export default AdComponent;
