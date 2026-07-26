import Typography from '@mui/material/Typography';
import { FaqItem } from '@lib/schema';
import { StyledSection, StyledItem } from './FaqSection.styled';

type Props = {
  faq: FaqItem[];
  heading?: string;
};

/**
 * Visible counterpart to the FAQPage JSON-LD emitted in BlogPost.SEO.
 * Google requires the answers to be on the page, not only in the markup.
 */
const FaqSection = ({ faq, heading = 'Frequently Asked Questions' }: Props) => {
  if (!faq.length) return null;

  return (
    <StyledSection>
      <Typography component="h2" variant="h4" gutterBottom>
        {heading}
      </Typography>
      {faq.map((item) => (
        <StyledItem key={item.question}>
          <Typography component="h3" variant="h6">
            {item.question}
          </Typography>
          <Typography component="p" variant="body1">
            {item.answer}
          </Typography>
        </StyledItem>
      ))}
    </StyledSection>
  );
};

export default FaqSection;
