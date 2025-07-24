import moment from "moment";
import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'


function HRDate({ className, date }) {
  return (
    <Container className={className}>
      <Line />
      <Content>
        {moment(date).format('DD \\d\\e MMMM \\d\\e YYYY')}
        <KeyboardArrowDownIcon />
      </Content>
      <Line />
    </Container>
  );
}

export default HRDate;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Line = styled.div`
  flex: 1;
  border-top: 1px solid #ffffff66;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 6px 8px 6px 12px;
  border: 1px solid #ffffff66;
  border-radius: 48px;

  font-size: 12px;

  > .MuiSvgIcon-root {
    font-size: 14px;

    padding: 0;
    margin: 0;
  }
`;