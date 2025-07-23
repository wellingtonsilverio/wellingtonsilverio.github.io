import styled from "styled-components";

function Budget() {
  return (
    <Container>
      Orçamento
    </Container>
  );
};

export default Budget;

const Container = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
    `;