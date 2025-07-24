import styled from "styled-components";

function Hobbies() {
  return (
    <Body>
      <Container>Hobbies</Container>
    </Body>
  );
};

export default Hobbies;

const Body = styled.div`
  flex: 1;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;

  color: #d1d2d3;

  background-color: #1b1d21;
`;
const Container = styled.div`
  padding: 16px;
`;