import NextImage, { ImageProps } from 'next/image';
import { StyledImageContainer } from './Image.styled';

type Props = ImageProps;
const Image = ({ fill = true, ...rest }: Props) => (
  <StyledImageContainer>
    <NextImage fill={fill} {...rest} />
  </StyledImageContainer>
);

export default Image;
