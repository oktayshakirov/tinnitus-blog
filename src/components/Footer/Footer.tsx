import Link from '@components/Link';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
import {
  StyledFooter,
  StyledContainer,
  StyledCopyright,
  StyledText,
  StyledIconContainer,
} from '@components/Footer/Footer.styled';
import Box from '@mui/material/Box';
import AppsBanner from '@components/AppsBanner';

type FooterProps = {
  isApp?: boolean;
};

const Footer = ({ isApp = false }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      {!isApp && <AppsBanner />}
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
      <StyledIconContainer>
        {isApp ? (
          <Box sx={{ height: '60px' }} />
        ) : (
          <>
            <Link
              href="https://github.com/oktayshakirov/tinnitus-blog"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://www.facebook.com/TheTinnitusHelp"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://x.com/TinnitusHelp_me"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </Link>
          </>
        )}
      </StyledIconContainer>
    </StyledFooter>
  );
};

export default Footer;
