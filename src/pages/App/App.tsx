import React from 'react';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Image from 'next/image';
import AppSEO from './App.SEO';
import { Typography, Box } from '@mui/material';
import {
  FaHeadphones,
  FaRegClock,
  FaStar,
  FaUser,
  FaQuoteLeft,
  FaBookReader,
  FaBrain,
  FaLightbulb,
  FaChevronDown,
} from 'react-icons/fa';
import {
  StyledContainer,
  HeaderSection,
  FeatureItem,
  ReviewsSection,
  ReviewsGrid,
  ReviewCard,
  FeaturesGrid,
  FeatureBox,
  FeaturesSection,
  CallToActionSection,
} from './App.styled';
import Rating from '@mui/material/Rating';
import Link from 'next/link';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}

interface KeyFeature {
  icon: React.ReactNode;
  title: string;
}

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const SectionTitle = ({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) => (
  <Box sx={{ textAlign: 'center', mb: 6 }}>
    <Typography
      variant="h4"
      sx={{
        fontWeight: 'bold',
        mb: 2,
      }}
    >
      {children}
    </Typography>
    {subtitle && (
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ maxWidth: '600px', mx: 'auto' }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

const AppStoreBadges = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      gap: 3,
      mt: 4,
      flexWrap: 'wrap',
    }}
  >
    <Link
      href="https://apps.apple.com/de/app/tinnitushelp-me/id6741688965?l=en-GB"
      target="_blank"
    >
      <Image
        src="/app-store-badge-ios.png"
        alt="Download on the App Store"
        width={180}
        height={60}
      />
    </Link>
    <Link
      href="https://play.google.com/store/apps/details?id=com.shadev.tinnitushelpme"
      target="_blank"
    >
      <Image
        src="/google-play-badge.png"
        alt="Get it on Google Play"
        width={185}
        height={60}
      />
    </Link>
  </Box>
);

const FEATURES: Feature[] = [
  {
    icon: <FaBookReader />,
    title: 'Educational Articles',
    description: 'Explore our extensive library of tinnitus articles',
    highlight: '100+ Articles',
  },
  {
    icon: <FaHeadphones />,
    title: 'Stream Anywhere',
    description: 'Listen on Spotify, Apple Music, YouTube & more',
    highlight: 'All Platforms',
  },
  {
    icon: <FaRegClock />,
    title: 'Always Improving',
    description: 'Regular updates with new features and content',
    highlight: 'Weekly Updates',
  },
] as const;

const KEY_FEATURES: KeyFeature[] = [
  {
    icon: <FaBookReader />,
    title: 'Learn & Understand',
  },
  {
    icon: <FaHeadphones />,
    title: 'Sound Therapy',
  },
  {
    icon: <FaBrain />,
    title: 'Mindfulness',
  },
  {
    icon: <FaLightbulb />,
    title: 'Lifestyle Tips',
  },
] as const;

const REVIEWS: Review[] = [
  {
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    rating: 5,
    text: "This app has completely transformed how I cope with tinnitus. The soundscapes are incredibly effective, and the mindfulness exercises have become part of my daily routine. Couldn't recommend it more!",
    date: '2 weeks ago',
  },
  {
    name: 'David Thompson',
    location: 'London, UK',
    rating: 5,
    text: 'After trying numerous solutions, TinnitusHelp.me has been a game-changer. The educational content helped me understand my condition better, and the relaxation techniques actually work.',
    date: '1 month ago',
  },
  {
    name: 'Maria Garcia',
    location: 'Barcelona, Spain',
    rating: 5,
    text: "I've been using this app for 6 months now, and my quality of life has improved significantly. The variety of sounds and the ability to customize them to my needs is fantastic.",
    date: '3 months ago',
  },
] as const;

const App = ({}: Props) => {
  return (
    <>
      <AppSEO />
      <Layout>
        <StyledContainer>
          <HeaderSection>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
              }}
            >
              TinnitusHelp.me App
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 'md',
                mx: 'auto',
                color: 'text.secondary',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              Your personalized companion for managing tinnitus
            </Typography>
          </HeaderSection>

          <Box
            sx={{
              mb: 8,
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/app.jpg"
              alt="Download on the App Store"
              layout="responsive"
              width={815}
              height={351}
            />
          </Box>

          <Box
            sx={{
              textAlign: 'center',
              mb: 8,
              padding: { xs: 3, md: 6 },
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)',
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                mb: 3,
              }}
            >
              Your Journey to Tinnitus Relief Starts Here
            </Typography>
            <Typography
              sx={{
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.6,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Take control of your tinnitus with our scientifically-backed app,
              designed to provide immediate relief and long-term management
              solutions.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 1.5,
                alignItems: 'center',
                justifyContent: 'center',
                mb: 4,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FaStar style={{ color: '#FFD700', marginRight: '4px' }} />
                <Typography sx={{ fontWeight: 'bold' }}>4.9/5</Typography>
              </Box>
              <Typography color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                |
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                Available Worldwide
              </Typography>
            </Box>

            <Box
              sx={{
                p: 2,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.1)',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <FaQuoteLeft size={14} style={{ opacity: 0.5 }} />
                <Box component="span">
                  Rated <strong>5 stars</strong> by thousands of users worldwide
                </Box>
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
              mb: 8,
            }}
          >
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title}>
                <div className="icon-wrapper">{feature.icon}</div>
                <div className="content">
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      mb: 0.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <div className="feature-content-wrapper">
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: '1rem', fontWeight: 'bold', mb: 1 }}
                    >
                      {feature.description}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.8rem',
                        color: 'primary.main',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        px: 1,
                        py: 0.5,
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'inline-block',
                        alignSelf: 'flex-start',
                      }}
                    >
                      {feature.highlight}
                    </Typography>
                  </div>
                </div>
              </FeatureItem>
            ))}
          </Box>

          <FeaturesSection>
            <SectionTitle subtitle="Everything you need to manage your tinnitus effectively">
              Key Features
            </SectionTitle>

            <FeaturesGrid>
              {KEY_FEATURES.map((feature) => (
                <FeatureBox key={feature.title}>
                  <div className="icon-wrapper">{feature.icon}</div>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary.main',
                    }}
                  >
                    {feature.title}
                  </Typography>
                </FeatureBox>
              ))}
            </FeaturesGrid>
          </FeaturesSection>

          <ReviewsSection>
            <SectionTitle subtitle="Join thousands of satisfied users who have found relief with TinnitusHelp.me">
              What Our Users Say
            </SectionTitle>

            <ReviewsGrid>
              {REVIEWS.map((review) => (
                <ReviewCard key={review.name}>
                  <div className="review-header">
                    <div className="avatar">
                      <FaUser size={24} />
                    </div>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {review.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {review.location}
                      </Typography>
                    </Box>
                  </div>

                  <Box sx={{ mb: 2 }}>
                    <FaQuoteLeft
                      size={20}
                      style={{
                        color: 'rgba(255, 255, 255, 0.3)',
                        marginRight: '8px',
                      }}
                    />
                    <Typography variant="body1">{review.text}</Typography>
                  </Box>

                  <div className="rating">
                    <Rating
                      value={review.rating}
                      readOnly
                      icon={<FaStar />}
                      emptyIcon={<FaStar />}
                    />
                  </div>

                  <Typography className="review-date">{review.date}</Typography>
                </ReviewCard>
              ))}
            </ReviewsGrid>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography
                variant="h5"
                color="primary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  mb: 2,
                }}
              >
                <FaStar /> 4.9 out of 5 stars
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Based on 1,000+ reviews from App Store and Google Play
              </Typography>
            </Box>
          </ReviewsSection>

          <CallToActionSection>
            <Typography variant="h4" gutterBottom>
              Ready to Find Your Peace?
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Join thousands of users who have found relief with
              TinnitusHelp.me. Download now and start your journey to a calmer
              life today!
            </Typography>
            <FaChevronDown className="bounce-arrow" size={24} />

            <AppStoreBadges />
          </CallToActionSection>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default App;
