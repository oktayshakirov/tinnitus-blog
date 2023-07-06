import * as React from 'react';
import Image from 'next/image';
import logo from 'public/logo.png';

type Props = {
  width?: number;
};

const Logo = ({ width = 50 }: Props) => (
  <Image src={logo} alt="Logo" width={width} height={width} />
);

export default Logo;
