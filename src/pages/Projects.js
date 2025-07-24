import styled from "styled-components";
import HRDate from "../components/HRDate";

function Projects() {
  return (
    <Body>
      <HRDateSteled date="05/01/2024" />
      <Container>Projetos Recentes</Container>
    </Body>
  );
};

export default Projects;

const Body = styled.div`
  flex: 1;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;

  color: #d1d2d3;

  background-color: #1b1d21;
`;
const HRDateSteled = styled(HRDate)`
  margin: 16px 0;
`;
const Container = styled.div`
  padding: 0 16px;
`;