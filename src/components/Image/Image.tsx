import NextImage, { ImageProps } from 'next/image';
import { StyledImageContainer } from './Image.styled';
import Logo from '@components/Logo';

type Props = ImageProps & { fetchPriority?: 'high' | 'low' | 'auto' };

const Image = ({
  fill = true,
  src,
  priority,
  loading,
  fetchPriority,
  sizes,
  ...rest
}: Props) => (
  <StyledImageContainer>
    {src ? (
      <NextImage
        fill={fill}
        src={src}
        priority={priority}
        loading={priority ? 'eager' : loading ?? 'lazy'}
        fetchPriority={priority ? 'high' : fetchPriority}
        sizes={sizes ?? '100vw'}
        {...rest}
      />
    ) : (
      <Logo />
    )}
  </StyledImageContainer>
);

export default Image;
