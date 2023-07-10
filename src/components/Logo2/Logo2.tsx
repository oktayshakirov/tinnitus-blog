import * as React from 'react';
import Image from 'next/image';
import logo from 'public/logo2.png';

type Props = {
  width?: number;
};

const Logo2 = ({ width = 50 }: Props) => (
  <Image src={logo} alt="Logo 2" width={width} height={width} />
);

export default Logo2;
