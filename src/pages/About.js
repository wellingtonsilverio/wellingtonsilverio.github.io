import styled from "styled-components";

function About() {
  return (
    <Container>
      Sobre
    </Container>
  );
};

export default About;

const Container = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
    `;