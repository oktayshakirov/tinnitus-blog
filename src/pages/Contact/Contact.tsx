import React from 'react';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import Link from '@components/Link';
import ContactSEO from './Contact.SEO';
import {
  StyledContainer,
  StyledTabContainer,
  StyledSocialSection,
  StyledSocialTitle,
  StyledIconContainer,
  StyledContactInfo,
} from './Contact.styled';
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
} from 'react-icons/fa';

const Contact = ({}: Props) => {
  return (
    <>
      <ContactSEO />
      <Layout>
        <StyledContainer>
          <StyledTabContainer>
            <Headline>Contact TinnitusHelp.me</Headline>

            <h2>We&apos;d Love to Hear from You</h2>
            <p>
              Have questions, suggestions, or need support? We’re here to help.
              At TinnitusHelp.me, we’re committed to providing valuable
              resources and insights to help you better understand and manage
              tinnitus. Your feedback is vital to our mission, helping us
              continually improve and grow.
            </p>

            <h2>Contact Information</h2>
            <p>
              For any inquiries, advertising opportunities, or partnership
              proposals, please don&apos;t hesitate to get in touch:
            </p>
            <StyledContactInfo>
              <ul>
                <li>
                  <strong>Email:</strong>{' '}
                  <Link
                    href="mailto:contact@tinnitushelp.me"
                    style={{ color: '#FFFF9B', textDecoration: 'none' }}
                  >
                    contact@tinnitushelp.me
                  </Link>
                </li>
                <li>
                  <strong>Developer:</strong>{' '}
                  <Link
                    href="http://www.oktayshakirov.com"
                    target="_blank"
                    style={{ color: '#FFFF9B', textDecoration: 'none' }}
                  >
                    oktayshakirov.com
                  </Link>
                </li>
              </ul>
            </StyledContactInfo>

            <StyledSocialSection>
              <StyledSocialTitle>Connect With Us</StyledSocialTitle>
              <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
                Follow us on social media for the latest updates, tips, and
                community support:
              </p>
              <StyledIconContainer>
                <Link
                  href="https://www.facebook.com/TheTinnitusHelp"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={28} />
                </Link>
                <Link
                  href="https://x.com/TinnitusHelp_me"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter size={28} />
                </Link>
                <Link
                  href="https://instagram.com/tinnitushelp.me"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram size={28} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@tinnitushelp.me"
                  target="_blank"
                  aria-label="TikTok"
                >
                  <FaTiktok size={28} />
                </Link>
                <Link
                  href="https://t.me/tinnitushelpme"
                  target="_blank"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane size={28} />
                </Link>
                <Link
                  href="https://github.com/oktayshakirov/tinnitus-blog"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <FaGithub size={28} />
                </Link>
              </StyledIconContainer>
            </StyledSocialSection>

            <h2>Feedback and Suggestions</h2>
            <p>
              We greatly value the thoughts and suggestions of our readers. If
              you have ideas on how we can enhance our content, website, or
              services, we’d love to hear them. Your input is crucial in helping
              us create a better experience for our community.
            </p>
          </StyledTabContainer>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default Contact;
