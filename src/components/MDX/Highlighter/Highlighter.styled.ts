import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/system/colorManipulator';

export const StyledHighlighter = styled('span')<{ $onlyText?: boolean }>`
  ${({ theme, $onlyText }) => css`
    display: ${$onlyText ? 'inline' : 'inline-block'};
    padding: ${$onlyText
      ? '0'
      : `${theme.spacing(0.25)} ${theme.spacing(0.75)}`};
    background: ${$onlyText
      ? 'transparent'
      : alpha(theme.palette.common.white, 0.05)};
    color: ${theme.palette.primary.main};
    border-radius: ${theme.spacing(1)};
  `}
`;
