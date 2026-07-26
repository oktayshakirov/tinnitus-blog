import Typography from '@mui/material/Typography';
import { StyledSection, StyledList } from './References.styled';

export type Source = {
  title: string;
  url: string;
  publisher?: string;
};

type Props = {
  sources: Source[];
};

/**
 * Citation list for health posts. Outbound links to primary sources are an
 * E-E-A-T signal on YMYL topics, so they are rendered as normal followed links.
 */
const References = ({ sources }: Props) => {
  if (!sources.length) return null;

  return (
    <StyledSection>
      <Typography component="h2" variant="h5" gutterBottom>
        References
      </Typography>
      <StyledList>
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.title}
            </a>
            {source.publisher && <span> - {source.publisher}</span>}
          </li>
        ))}
      </StyledList>
    </StyledSection>
  );
};

export default References;
