import { css, keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const gradientBackground = (theme: Theme) => css`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: ${theme.spacing(4)};
`;

const commonHoverEffect = css`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const glassEffect = css`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
`;

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacing(8)};
    max-width: 1200px;

    ${theme.breakpoints.up('md')} {
      padding-top: ${theme.spacing(4)};
    }

    .bounce-arrow {
      animation: ${bounce} 2s infinite;
      color: ${theme.palette.primary.main};
    }
  `}
`;

export const HeaderSection = styled(Box)`
  ${({ theme }) => css`
    text-align: center;
    position: relative;
    padding: ${theme.spacing(4)};
    ${gradientBackground(theme)}

    h1 {
      background: linear-gradient(
        135deg,
        ${theme.palette.primary.main},
        ${theme.palette.secondary.main}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: ${theme.spacing(2)};
    }
  `}
`;

export const FeaturesSection = styled(Box)`
  ${({ theme }) => css`
    margin: ${theme.spacing(12)} 0;
    padding: ${theme.spacing(6)};
    ${gradientBackground(theme)}
  `}
`;

export const FeaturesGrid = styled(Box)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacing(4)};
    margin-top: ${theme.spacing(8)};

    ${theme.breakpoints.down('md')} {
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.spacing(4)};
    }

    ${theme.breakpoints.down('sm')} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const FeatureBox = styled(Box)`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacing(4)};
    ${glassEffect}
    ${commonHoverEffect}
    
    .icon-wrapper {
      font-size: 48px;
      margin-bottom: ${theme.spacing(2)};
      color: ${theme.palette.primary.main};
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        filter: drop-shadow(0 0 8px ${theme.palette.primary.main}40);
      }
    }
  `}
`;

export const FeatureItem = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    padding: ${theme.spacing(2.5)};
    gap: ${theme.spacing(3)};
    border-radius: ${theme.spacing(2)};
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.05);

    .icon-wrapper {
      padding: ${theme.spacing(2)};
      color: ${theme.palette.primary.main};
      background: rgba(255, 255, 255, 0.05);
      border-radius: ${theme.spacing(2)};
      min-width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .content {
      flex: 1;
    }

    .feature-content-wrapper {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing(1)};
      margin-top: ${theme.spacing(1)};
    }
  `}
`;

export const ReviewsSection = styled(Box)`
  ${({ theme }) => css`
    padding: ${theme.spacing(6)};
    ${gradientBackground(theme)}
  `}
`;

export const ReviewsGrid = styled(Box)`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing(4)};
    margin-top: ${theme.spacing(6)};

    ${theme.breakpoints.up('md')} {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;

export const ReviewCard = styled(Box)`
  ${({ theme }) => css`
    ${glassEffect}
    border-radius: ${theme.spacing(3)};
    padding: ${theme.spacing(4)};
    height: 100%;
    display: flex;
    flex-direction: column;

    .review-header {
      display: flex;
      align-items: center;
      margin-bottom: ${theme.spacing(3)};
    }

    .avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(
        135deg,
        ${theme.palette.primary.main}40,
        ${theme.palette.secondary.main}40
      );
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: ${theme.spacing(2)};
      color: ${theme.palette.primary.main};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .rating {
      margin: ${theme.spacing(2)} 0;
      color: #ffd700;
    }

    .review-date {
      margin-top: auto;
      padding-top: ${theme.spacing(2)};
      color: ${theme.palette.text.secondary};
      font-size: 0.875rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
  `}
`;

export const CallToActionSection = styled(Box)`
  ${({ theme }) => css`
    text-align: center;
    position: relative;
    padding: ${theme.spacing(6)};
    ${gradientBackground(theme)}

    .bounce-arrow {
      color: ${theme.palette.primary.main};
      margin-top: ${theme.spacing(2)};
      animation: ${bounce} 2s infinite;
    }

    a {
      transition: transform 0.2s ease-in-out;
      display: inline-block;

      &:hover {
        transform: translateY(-2px);
      }
    }
  `}
`;
