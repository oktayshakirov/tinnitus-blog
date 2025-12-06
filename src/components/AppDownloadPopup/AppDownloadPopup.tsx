import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  FaTimes,
  FaMobile,
  FaStar,
  FaShieldAlt,
  FaDownload,
  FaBell,
  FaCheckCircle,
} from 'react-icons/fa';
import {
  StyledPopupBackdrop,
  StyledPopupContainer,
  StyledPopupContent,
  StyledPopupHeader,
  StyledCloseButton,
  StyledSocialProof,
  StyledBenefitsList,
  StyledBenefitItem,
  StyledAppBadges,
  StyledFooterActions,
  StyledBenefitsSection,
  StyledDownloadSection,
} from './AppDownloadPopup.styled';

const COOLDOWN_PERIODS = {
  CLOSE: 24 * 60 * 60 * 1000, // 24 hours
  NOT_INTERESTED: 7 * 24 * 60 * 60 * 1000, // 7 days
  MIN_TIME_ON_SITE: 30000, // 30 seconds
  CHECK_INTERVAL: 5000, // 5 seconds
  ANIMATION_DELAY: 100,
  CLOSE_DELAY: 300,
};

const STORAGE_KEYS = {
  PERMANENTLY_DISMISSED: 'appPopupPermanentlyDismissed',
  DISMISSED_UNTIL: 'appPopupDismissedUntil',
  NOT_INTERESTED_UNTIL: 'appPopupNotInterestedUntil',
  IS_APP: 'isApp',
  PAGE_VIEWS: 'pageViews',
};

interface Benefit {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
}

type AppDownloadPopupProps = {
  isApp?: boolean;
};

const AppDownloadPopup = ({ isApp = false }: AppDownloadPopupProps) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const checkPopupVisibility = useCallback(() => {
    try {
      if (router.pathname === '/app') return false;

      if (isApp) return false;

      if (typeof document !== 'undefined') {
        const isAppClass =
          document.documentElement.classList.contains('is-app');
        const isAppStorage =
          localStorage.getItem(STORAGE_KEYS.IS_APP) === 'true';
        if (isAppClass || isAppStorage) return false;
      }

      const permanentlyDismissed = localStorage.getItem(
        STORAGE_KEYS.PERMANENTLY_DISMISSED
      );
      if (permanentlyDismissed === 'true') return false;

      const dismissedUntil = localStorage.getItem(STORAGE_KEYS.DISMISSED_UNTIL);
      const notInterestedUntil = localStorage.getItem(
        STORAGE_KEYS.NOT_INTERESTED_UNTIL
      );
      const currentTime = Date.now();

      if (dismissedUntil && currentTime < parseInt(dismissedUntil))
        return false;
      if (notInterestedUntil && currentTime < parseInt(notInterestedUntil))
        return false;

      return true;
    } catch (error) {
      console.warn('Error checking popup visibility:', error);
      return false;
    }
  }, [router.pathname, isApp]);

  const setCooldown = useCallback((key: string, duration: number) => {
    try {
      const cooldown = Date.now() + duration;
      localStorage.setItem(key, cooldown.toString());
    } catch (error) {
      console.warn('Error setting cooldown:', error);
    }
  }, []);

  const dismissPopup = useCallback(
    (cooldownKey: string, duration: number) => {
      setIsAnimating(false);
      setCooldown(cooldownKey, duration);
      setTimeout(() => setIsVisible(false), COOLDOWN_PERIODS.CLOSE_DELAY);
    },
    [setCooldown]
  );

  const handleClose = useCallback(() => {
    dismissPopup(STORAGE_KEYS.DISMISSED_UNTIL, COOLDOWN_PERIODS.CLOSE);
  }, [dismissPopup]);

  const handleNotInterested = useCallback(() => {
    dismissPopup(
      STORAGE_KEYS.NOT_INTERESTED_UNTIL,
      COOLDOWN_PERIODS.NOT_INTERESTED
    );
  }, [dismissPopup]);

  const handleHasApp = useCallback(() => {
    setIsAnimating(false);
    try {
      localStorage.setItem(STORAGE_KEYS.PERMANENTLY_DISMISSED, 'true');
    } catch (error) {
      console.warn('Error setting permanent dismissal:', error);
    }
    setTimeout(() => setIsVisible(false), COOLDOWN_PERIODS.CLOSE_DELAY);
  }, []);

  const benefits = useMemo<Benefit[]>(
    () => [
      {
        icon: FaCheckCircle,
        title: 'Track your tinnitus management journey',
        description: 'Monitor your progress over time',
      },
      {
        icon: FaBell,
        title: 'Push notifications for new content',
        description: 'Never miss the latest articles and tips',
      },
      {
        icon: FaDownload,
        title: '100% Free to download',
        description: 'No subscription required',
      },
    ],
    []
  );

  useEffect(() => {
    if (!checkPopupVisibility()) {
      setIsInitialized(true);
      return;
    }

    let pageViews = 0;
    let timeOnSite = 0;
    let hasScrolled = false;

    try {
      pageViews = parseInt(
        localStorage.getItem(STORAGE_KEYS.PAGE_VIEWS) || '0'
      );
      pageViews += 1;
      localStorage.setItem(STORAGE_KEYS.PAGE_VIEWS, pageViews.toString());
    } catch (error) {
      console.warn('Error managing page views:', error);
    }

    const startTime = Date.now();
    const timer = setInterval(() => {
      timeOnSite = Date.now() - startTime;
    }, 1000);

    const handleScroll = () => {
      hasScrolled = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const checkConditions = () => {
      if (!checkPopupVisibility()) {
        clearInterval(timer);
        clearInterval(checkInterval);
        window.removeEventListener('scroll', handleScroll);
        setIsInitialized(true);
        return;
      }

      const shouldShow =
        (timeOnSite >= COOLDOWN_PERIODS.MIN_TIME_ON_SITE && hasScrolled) ||
        pageViews >= 2;

      if (shouldShow) {
        setIsVisible(true);
        setTimeout(
          () => setIsAnimating(true),
          COOLDOWN_PERIODS.ANIMATION_DELAY
        );
        clearInterval(timer);
        window.removeEventListener('scroll', handleScroll);
        setIsInitialized(true);
      }
    };

    const checkInterval = setInterval(
      checkConditions,
      COOLDOWN_PERIODS.CHECK_INTERVAL
    );

    return () => {
      clearInterval(timer);
      clearInterval(checkInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [checkPopupVisibility]);

  if (!isInitialized || !isVisible) return null;

  return (
    <div
      className="app-download-popup"
      role="dialog"
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
    >
      <StyledPopupBackdrop
        $isAnimating={isAnimating}
        onClick={handleClose}
        aria-hidden="true"
      />

      <StyledPopupContainer $isAnimating={isAnimating}>
        <StyledPopupContent>
          <StyledPopupHeader>
            <div className="header-content">
              <div className="icon-wrapper">
                <FaMobile className="icon" aria-hidden="true" />
              </div>
              <div className="title-section">
                <h3 id="popup-title">Get the App</h3>
                <p id="popup-description">
                  Exclusive features not on the website
                </p>
                <div
                  className="rating-section"
                  aria-label="4.9 out of 5 stars rating"
                >
                  <div className="stars" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={12} />
                    ))}
                  </div>
                  <span className="rating-text">4.9/5 rating</span>
                </div>
              </div>
            </div>
            <StyledCloseButton onClick={handleClose} aria-label="Close popup">
              <FaTimes size={14} aria-hidden="true" />
            </StyledCloseButton>
          </StyledPopupHeader>

          <StyledSocialProof>
            <FaShieldAlt className="shield-icon" aria-hidden="true" />
            <span className="social-text">Your trusted tinnitus companion</span>
          </StyledSocialProof>

          <StyledBenefitsSection>
            <h4 className="benefits-title">Why download the app?</h4>
            <StyledBenefitsList>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <StyledBenefitItem key={index}>
                    <IconComponent
                      className="benefit-icon"
                      size={16}
                      aria-hidden="true"
                    />
                    <div className="benefit-content">
                      <span className="benefit-title">{benefit.title}</span>
                      <p className="benefit-description">
                        {benefit.description}
                      </p>
                    </div>
                  </StyledBenefitItem>
                );
              })}
            </StyledBenefitsList>
          </StyledBenefitsSection>

          <StyledDownloadSection>
            <div className="download-text">
              <p className="download-title">Don&apos;t miss out!</p>
              <p className="download-subtitle">
                Download now and join the community
              </p>
            </div>
            <StyledAppBadges>
              <Link
                href="https://apps.apple.com/de/app/tinnitushelp-me/id6741688965"
                target="_blank"
                rel="noopener noreferrer"
                className="app-badge"
                aria-label="Download TinnitusHelp.me on the App Store"
              >
                <Image
                  src="/app-store-badge-ios.png"
                  alt="Download on the App Store"
                  width={160}
                  height={53}
                  className="badge-image"
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.shadev.tinnitushelpme"
                target="_blank"
                rel="noopener noreferrer"
                className="app-badge"
                aria-label="Get TinnitusHelp.me on Google Play"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={160}
                  height={53}
                  className="badge-image"
                />
              </Link>
            </StyledAppBadges>
          </StyledDownloadSection>

          <StyledFooterActions>
            <Link href="/app" className="learn-more-link">
              Learn more
            </Link>
            <div className="action-buttons">
              <button
                onClick={handleHasApp}
                className="action-button has-app"
                aria-label="I already have the app"
              >
                I have the app
              </button>
              <button
                onClick={handleNotInterested}
                className="action-button not-interested"
                aria-label="Not interested in the app"
              >
                Not interested
              </button>
            </div>
          </StyledFooterActions>
        </StyledPopupContent>
      </StyledPopupContainer>
    </div>
  );
};

export default AppDownloadPopup;
