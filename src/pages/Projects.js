import styled from "styled-components";

function Projects() {
  return (
    <Container>
      Projetos Recentes
    </Container>
  );
};

export default Projects;

const Container = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
    `;