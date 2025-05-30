import React from 'react';
import NextLink from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NoSsr from '@mui/material/NoSsr';

const GoBackLink = ({ option = 'blog' }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  if (isDesktop) return null;

  const { href, text } =
    option === 'zen'
      ? { href: '/zen', text: 'All Sounds' }
      : { href: '/blog', text: 'All Posts' };

  return (
    <NoSsr>
      <Link
        component={NextLink}
        href={href}
        sx={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'white',
          '&:hover': {
            textDecoration: 'none',
          },
        }}
      >
        <ArrowBackIosIcon sx={{ mr: 0.5, color: 'white' }} />
        {text}
      </Link>
    </NoSsr>
  );
};

export default GoBackLink;
