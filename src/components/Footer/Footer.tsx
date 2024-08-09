import Link from '@components/Link';
import {
  StyledFooter,
  StyledContainer,
  StyledCopyright,
  StyledText,
} from '@components/Footer/Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledCopyright>TinnitusHelp.me © 2023 - {currentYear}</StyledCopyright>
      <StyledContainer>
        <Link href="/privacy" style={{ textDecoration: 'none' }}>
          <StyledText>Privacy Policy</StyledText>
        </Link>
        <StyledText>|</StyledText>
        <Link href="/terms" style={{ textDecoration: 'none' }}>
          <StyledText>Terms of Use</StyledText>
        </Link>
        <StyledText>|</StyledText>
        <Link href="/about" style={{ textDecoration: 'none' }}>
          <StyledText>About</StyledText>
        </Link>
        <StyledText>|</StyledText>
        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <StyledText>Contact</StyledText>
        </Link>
        <StyledText>|</StyledText>
        <Link href="/faq" style={{ textDecoration: 'none' }}>
          <StyledText>FAQ</StyledText>
        </Link>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
