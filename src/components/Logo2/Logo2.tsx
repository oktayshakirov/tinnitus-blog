import * as React from 'react';
import Image from 'next/image';
import logo from 'public/logo2.png';

type Props = {
  width?: number;
};

const Logo2 = ({ width = 220 }: Props) => (
  // Fixed-size brand asset - see Logo.tsx; skip Vercel optimization.
  <Image src={logo} alt="Logo 2" width={width} height={width} unoptimized />
);

export default Logo2;
