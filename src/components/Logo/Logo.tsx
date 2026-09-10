import * as React from 'react';
import Image from 'next/image';
import logo from 'public/logo.png';

type Props = {
  width?: number;
};

const Logo = ({ width = 220 }: Props) => (
  // Fixed-size brand asset served on every page - optimizing it just burns
  // Vercel image transformations for no visible gain.
  <Image src={logo} alt="Logo" width={width} height={width} unoptimized />
);

export default Logo;
