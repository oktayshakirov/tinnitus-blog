import NextImage, { ImageProps } from 'next/image';
import { StyledImageContainer } from './Image.styled';

type Props = ImageProps;
const Image = ({ fill = true, loading = 'lazy', ...rest }: Props) => (
  <StyledImageContainer>
    <NextImage fill={fill} loading={loading} {...rest} />
  </StyledImageContainer>
);

export default Image;
