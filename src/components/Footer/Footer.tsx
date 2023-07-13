import {
  StyledFooter,
  StyledContainer,
  StyledCopyright,
  StyledText,
} from '@components/Footer/Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledCopyright>Tinnitus</StyledCopyright>
        <StyledText>Beyond the Buzz</StyledText>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
