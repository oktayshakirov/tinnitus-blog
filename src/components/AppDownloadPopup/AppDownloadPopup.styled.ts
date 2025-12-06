import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { colors } from '@theme/colors';
import { alpha } from '@mui/system/colorManipulator';

export const StyledPopupBackdrop = styled(Box)<{ $isAnimating: boolean }>`
  ${({ $isAnimating }) => css`
    position: fixed;
    inset: 0;
    z-index: 40;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s;
    opacity: ${$isAnimating ? 1 : 0};
  `}
`;

export const StyledPopupContainer = styled(Box)<{ $isAnimating: boolean }>`
  ${({ theme, $isAnimating }) => css`
    position: fixed;
    inset-x: 0;
    bottom: 0;
    z-index: 50;

    ${theme.breakpoints.up('md')} {
      inset-x: auto;
      bottom: auto;
      left: 50%;
      top: 50%;
      transform: translate(-50%, ${$isAnimating ? '-50%' : '0%'});
    }

    ${theme.breakpoints.down('md')} {
      transform: translateY(${$isAnimating ? '0%' : '100%'});
    }

    transition: transform 0.3s ease-out;
  `}
`;

export const StyledPopupContent = styled(Box)`
  ${({ theme }) => css`
    margin: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};
    max-height: 95vh;
    overflow-y: auto;
    border-radius: ${theme.spacing(4)};
    border: 1px solid ${alpha(theme.palette.primary.main, 0.2)};
    background: ${colors.background};
    padding: ${theme.spacing(4)};
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(16px);

    ${theme.breakpoints.up('md')} {
      margin-bottom: 0;
      border-radius: ${theme.spacing(4)};
    }

    /* Custom scrollbar */
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${alpha(theme.palette.primary.main, 0.1)};
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${alpha(theme.palette.primary.main, 0.3)};
      border-radius: 4px;

      &:hover {
        background: ${alpha(theme.palette.primary.main, 0.4)};
      }
    }
  `}
`;

export const StyledPopupHeader = styled(Box)`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: ${theme.spacing(3)};

    .header-content {
      display: flex;
      align-items: center;
      gap: ${theme.spacing(2)};
    }

    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 56px;
      width: 56px;
      border-radius: ${theme.spacing(2.5)};
      background: linear-gradient(
        135deg,
        ${theme.palette.primary.main}33,
        ${theme.palette.primary.main}1a
      );

      .icon {
        font-size: ${theme.spacing(3)};
        color: ${theme.palette.primary.main};
      }
    }

    .title-section {
      flex: 1;

      h3 {
        font-size: ${theme.spacing(3)};
        font-weight: bold;
        color: ${theme.palette.text.primary};
        margin: 0 0 ${theme.spacing(0.5)} 0;
      }

      p {
        font-size: ${theme.spacing(1.75)};
        color: ${theme.palette.text.secondary};
        margin: 0 0 ${theme.spacing(1)} 0;
      }

      .rating-section {
        display: flex;
        align-items: center;
        gap: ${theme.spacing(1)};
        margin-top: ${theme.spacing(0.5)};

        .stars {
          display: flex;
          color: ${theme.palette.primary.main};
        }

        .rating-text {
          font-size: ${theme.spacing(1.5)};
          color: ${theme.palette.text.secondary};
        }
      }
    }
  `}
`;

export const StyledCloseButton = styled('button')`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.spacing(4)};
    width: ${theme.spacing(4)};
    border-radius: 50%;
    background: ${alpha(theme.palette.primary.main, 0.15)};
    color: ${theme.palette.text.secondary};
    border: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: ${alpha(theme.palette.primary.main, 0.25)};
    }

    &:focus {
      outline: 2px solid ${theme.palette.primary.main};
      outline-offset: 2px;
    }
  `}
`;

export const StyledSocialProof = styled(Box)`
  ${({ theme }) => css`
    border-radius: ${theme.spacing(1)};
    padding: ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(3)};
    background: ${alpha(theme.palette.primary.main, 0.1)};
    border: 1px solid ${alpha(theme.palette.primary.main, 0.2)};

    display: flex;
    align-items: center;
    gap: ${theme.spacing(1)};

    .shield-icon {
      color: ${theme.palette.primary.main};
      font-size: ${theme.spacing(2)};
    }

    .social-text {
      font-size: ${theme.spacing(1.75)};
      font-weight: 600;
      color: ${theme.palette.text.primary};
    }
  `}
`;

export const StyledBenefitsList = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1.5)};
  `}
`;

export const StyledBenefitItem = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    gap: ${theme.spacing(1.5)};

    .benefit-icon {
      margin-top: ${theme.spacing(0.5)};
      color: ${theme.palette.primary.main};
      flex-shrink: 0;
    }

    .benefit-content {
      flex: 1;

      .benefit-title {
        display: block;
        font-size: ${theme.spacing(1.75)};
        font-weight: 500;
        color: ${theme.palette.text.primary};
        margin-bottom: ${theme.spacing(0.25)};
      }

      .benefit-description {
        font-size: ${theme.spacing(1.5)};
        color: ${theme.palette.text.secondary};
        margin: 0;
      }
    }
  `}
`;

export const StyledAppBadges = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacing(2)};
    margin-top: ${theme.spacing(2)};

    .app-badge {
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.9;
      }

      .badge-image {
        height: ${theme.spacing(6)};
        width: auto;
      }
    }
  `}
`;

export const StyledFooterActions = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${alpha(theme.palette.primary.main, 0.2)};
    padding-top: ${theme.spacing(2)};
    margin-top: ${theme.spacing(3)};

    .learn-more-link {
      font-size: ${theme.spacing(1.75)};
      color: ${theme.palette.primary.main};
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${theme.palette.primary.dark};
      }
    }

    .action-buttons {
      display: flex;
      align-items: center;
      gap: ${theme.spacing(2)};
    }

    .action-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: ${theme.spacing(1.75)};
      transition: color 0.2s;
      padding: 0;

      &.has-app {
        color: ${theme.palette.text.secondary};

        &:hover {
          color: ${theme.palette.text.primary};
        }
      }

      &.not-interested {
        color: ${theme.palette.text.secondary};

        &:hover {
          color: ${theme.palette.text.secondary};
          opacity: 0.8;
        }
      }

      &:focus {
        outline: 2px solid ${theme.palette.primary.main};
        outline-offset: 2px;
        border-radius: 4px;
      }
    }
  `}
`;

// Additional styles for sections in the component
export const StyledBenefitsSection = styled(Box)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing(4)};

    .benefits-title {
      font-size: ${theme.spacing(2.25)};
      font-weight: 600;
      color: ${theme.palette.text.primary};
      margin: 0 0 ${theme.spacing(2)} 0;
    }
  `}
`;

export const StyledDownloadSection = styled(Box)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing(3)};

    .download-text {
      text-align: center;
      margin-bottom: ${theme.spacing(2)};

      .download-title {
        font-size: ${theme.spacing(1.75)};
        font-weight: 600;
        color: ${theme.palette.text.primary};
        margin: 0 0 ${theme.spacing(0.5)} 0;
      }

      .download-subtitle {
        font-size: ${theme.spacing(1.5)};
        color: ${theme.palette.text.secondary};
        margin: 0;
      }
    }
  `}
`;
