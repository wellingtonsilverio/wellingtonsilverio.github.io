import styled from "styled-components";
import HRDate from "../components/HRDate";
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

function About() {
  return (
    <Body>
      <HRDate />
      <Container>
        <Photo src="https://media.licdn.com/dms/image/v2/D4D03AQEerGwcW1Uukg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702095742976?e=1756339200&v=beta&t=CqU-jod0EZ1VDzBKK-e9TiTggNOxkW0cY5qCbQIkqf4" />
        <H1>Wellington Silverio</H1>
        <Text>
          Desenvolvedor de software experiente, trabalhando principalmente com plataformas Web, iOS e Android, com uma notável interesse por aprendizado de máquina e Web3.
        </Text>
        <IconContainer>
          <Icon href="https://github.com/wellingtonsilverio" target="_blank"><GitHubIcon /></Icon>
          <Icon href="https://www.linkedin.com/in/wellington-silverio/" target="_blank"><LinkedInIcon /></Icon>
          <Icon href="mailto:wellington.alves.silverio@gmail.com" target="_blank"><EmailIcon /></Icon>
        </IconContainer>
      </Container>
    </Body>
  );
};

export default About;

const Body = styled.div`
  flex: 1;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
  padding-top: 16px;

  color: #d1d2d3;

  background-color: #1b1d21;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  margin-top: 16px;
  padding: 16px;
`;
const Photo = styled.img`
  width: 160px;
  height: 160px;

  border-radius: 50%;
`;
const H1 = styled.h1`
`;
const Text = styled.p`
  max-width: 540px;

  font-size: 20px;
  text-align: center;
`;
const IconContainer = styled.div`
  display: flex;
  gap: 16px;
`;
const Icon = styled.a`
  margin-top: 16px;
  color: inherit;

  > .MuiSvgIcon-root {
    font-size: 36px;
  }
  &:hover {
    opacity: 0.5;

    transition-property: opacity;
    transition-duration: 1s, 5s;
  }
`;