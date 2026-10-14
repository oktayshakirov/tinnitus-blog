import Link from '@components/Link';
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import Icon from '@components/Icon';
import {
  StyledFooter,
  StyledContainer,
  StyledCopyright,
  StyledText,
  StyledIconContainer,
  StyledDisclaimer,
} from '@components/Footer/Footer.styled';
import Box from '@mui/material/Box';
import AppsBanner from '@components/AppsBanner';
import AudiobookBanner from '@components/AudiobookBanner';
import { usePathname } from 'next/navigation';

type FooterProps = {
  isApp?: boolean;
};

const Footer = ({ isApp = false }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <StyledFooter>
      <StyledContainer className="isApp">
        {pathname !== '/app' && <AppsBanner />}
        <AudiobookBanner />
      </StyledContainer>
      {!['/disclaimer', '/about', '/contact'].includes(pathname) && (
        <StyledContainer>
          <StyledDisclaimer>
            This site provides informational content only; it is not medical
            advice. Consult a qualified health professional for any tinnitus or
            health questions.{' '}
            <Link href="/disclaimer">Read our full Disclaimer</Link>.
          </StyledDisclaimer>
        </StyledContainer>
      )}
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
        <Link href="/authors" style={{ textDecoration: 'none' }}>
          <StyledText>Author</StyledText>
        </Link>
        <StyledText>|</StyledText>
        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <StyledText>Contact</StyledText>
        </Link>
        <StyledText>|</StyledText>
        <Link href="/faq" style={{ textDecoration: 'none' }}>
          <StyledText>FAQ</StyledText>
        </Link>
        <StyledText>|</StyledText>
        <Link href="/impressum" style={{ textDecoration: 'none' }}>
          <StyledText>Impressum</StyledText>
        </Link>
      </StyledContainer>
      <StyledIconContainer>
        {isApp ? (
          // Keeps the footer clear of the app's tab bar.
          <Box sx={{ height: '60px' }} />
        ) : (
          // Rendered on the first pass in the app too, so the class hides
          // them there until `isApp` arrives after mount.
          <Box className="isApp" sx={{ display: 'contents' }}>
            <Link
              href="https://github.com/oktayshakirov/tinnitus-blog"
              target="_blank"
              aria-label="GitHub"
            >
              <Icon icon={FaGithub} size={24} />
            </Link>
            <Link
              href="https://www.facebook.com/TheTinnitusHelp"
              target="_blank"
              aria-label="Facebook"
            >
              <Icon icon={FaFacebookF} size={24} />
            </Link>
            <Link
              href="https://x.com/TinnitusHelp_me"
              target="_blank"
              aria-label="Twitter"
            >
              <Icon icon={FaTwitter} size={24} />
            </Link>
            <Link
              href="https://instagram.com/tinnitushelp.me"
              target="_blank"
              aria-label="Instagram"
            >
              <Icon icon={FaInstagram} size={24} />
            </Link>
            <Link
              href="https://www.tiktok.com/@tinnitushelp.me"
              target="_blank"
              aria-label="TikTok"
            >
              <Icon icon={FaTiktok} size={24} />
            </Link>
            <Link
              href="https://www.youtube.com/@TinnitusHelpMe"
              target="_blank"
              aria-label="YouTube"
            >
              <Icon icon={FaYoutube} size={24} />
            </Link>
            <Link
              href="https://t.me/tinnitushelpme"
              target="_blank"
              aria-label="Telegram"
            >
              <Icon icon={FaTelegramPlane} size={24} />
            </Link>
          </Box>
        )}
      </StyledIconContainer>
    </StyledFooter>
  );
};

export default Footer;
