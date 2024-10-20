import NextImage, { ImageProps } from 'next/image';
import { StyledImageContainer } from './Image.styled';
import Logo from '@components/Logo';

type Props = ImageProps;
const Image = ({ fill = true, src, ...rest }: Props) => (
  <StyledImageContainer>
    {src ? (
      <NextImage fill={fill} src={src} loading="lazy" {...rest} />
    ) : (
      <Logo />
    )}
  </StyledImageContainer>
);

export default Image;
