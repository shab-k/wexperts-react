import {
  Container,
  Wrapper,
  H2,
  Paragraph,
  DangerButton,
  StyledLink,
} from '../globalStyles';

const NotFound = () => {
  return (
    <Wrapper>
      <Container>
        <H2 white>Sorry!</H2>
        <Paragraph white>Page Not Found</Paragraph>
        <StyledLink to="/">
          <DangerButton>Back To Home</DangerButton>
        </StyledLink>
      </Container>
    </Wrapper>
  );
};

export default NotFound;
