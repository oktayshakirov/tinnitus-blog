import Link from '@components/Link';
import {
  StyledFooter,
  StyledContainer,
  StyledCopyright,
  StyledText,
} from '@components/Footer/Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledCopyright>Beyond the Buzz</StyledCopyright>
        <Link href="/privacy" style={{ textDecoration: 'none' }}>
          <StyledText>Privacy Policy</StyledText>
        </Link>
        <Link href="/terms" style={{ textDecoration: 'none' }}>
          <StyledText>Terms of Use</StyledText>
        </Link>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
