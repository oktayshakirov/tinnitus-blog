import Image from 'next/image';
import { Box } from '@mui/material';
import Link from '@components/Link';

const AppsBanner = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Link
          href="https://apps.apple.com/de/app/tinnitushelp-me/id6741688965?l=en-GB"
          target="_blank"
        >
          <Image
            src="./app-store-badge-ios.svg"
            alt="Download on the App Store"
            width={135}
            height={40}
          />
        </Link>
        <Link href="/" target="_blank">
          <Image
            src="./google-play-badge.svg"
            alt="Get it on Google Play"
            width={135}
            height={40}
          />
        </Link>
      </Box>
    </>
  );
};

export default AppsBanner;
