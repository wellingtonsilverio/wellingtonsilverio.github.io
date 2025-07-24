import styled from "styled-components";
import { useEffect, useRef } from "react";

import HRDate from "../components/HRDate";

function Experiences() {
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef?.current) endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [endRef]);

  return (
    <Body>
      <HRDateSteled date="05/01/2021" />
      <Container>
        <Logo
          src="https://media.licdn.com/dms/image/v2/C4E0BAQELUtnSpNmCkg/company-logo_100_100/company-logo_100_100/0/1630634249320?e=1756339200&v=beta&t=B5TD95uZ4kXiDKysCfupQW0g8x087EUEazhPYXtgHlA"
          alt="Baurets Logo"
        />
        <div>
          <div>
            <Heading2>Baurets Delivery</Heading2>
            <div>trabalhou até janeiro de 2023</div>
          </div>
          <Section>
            <Heading3>Engenheiro de desenvolvimento de software</Heading3>
            <SubText>Campinas, Brasil · Remota</SubText>
            <Text>
              Liderei o desenvolvimento de um projeto de e-commerce do zero para uma empresa que até então realizava vendas exclusivamente via WhatsApp, com catálogo em PDF. Propus e implementei uma solução moderna utilizando Next.js, hospedada na DigitalOcean e outras técnologias de ponta, que transformou completamente a experiência de compra online. Também gerenciei a contratação de um freelancer para o desenvolvimento do aplicativo em React Native, atuando ativamente na revisão e no desenvolvimento do código para garantir consistência e qualidade em todas as plataformas.
            </Text>
            <ButtonSection>
              <Button href="https://baurets.com.br" target="_blank">Conheça a Baurets</Button>
              <Button href="https://www.linkedin.com/company/baurets-delivery" target="_blank">Entre no Linkedin</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

      <HRDateSteled date="12/01/2021" />
      <Container>
        <Logo
          src="https://media.licdn.com/dms/image/v2/C4D0BAQFaxPZucbLbRQ/company-logo_200_200/company-logo_200_200/0/1662494525266/cotabest_logo?e=1756339200&v=beta&t=xQhV9AIjRDfZkujZMYfAkmXU7QellrSh85AB5MW4Yfw"
          alt="CotaBest Logo"
        />
        <div>
          <div>
            <Heading2>CotaBest Solutions</Heading2>
            <div>trabalhou até novembro de 2023</div>
          </div>
          <Section>
            <Heading3>Desenvolvedor Front-end Sênior</Heading3>
            <SubText>São Paulo, Brasil · Remota</SubText>
            <Text>
              Atuei no Time de Novas Funcionalidades, contribuindo ativamente na concepção e arquitetura de novos projetos, além do desenvolvimento, refinamento e manutenção das tarefas da equipe. Trabalhei em um ambiente ágil e de entrega contínua, utilizando ferramentas como Jira (Scrum Board) e GitLab (Merge Requests) para garantir entregas consistentes, de alta qualidade e com performance acima do esperado.
            </Text>
            <ButtonSection>
              <Button href="https://www.cotabest.com.br/" target="_blank">Conheça a CotaBest</Button>
              <Button href="https://www.linkedin.com/company/cotabest" target="_blank">Entre no Linkedin</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

      <HRDateSteled date="05/01/2024" />
      <Container>
        <Logo
          src="https://media.licdn.com/dms/image/v2/C4E0BAQHS9HemPwAGBw/company-logo_100_100/company-logo_100_100/0/1630651330142/quality24medical_logo?e=1756339200&v=beta&t=qjOtkhoqlg_01ZDccmh5MGfxdT-3XsZ_GvB3v_iw9Bs"
          alt="Quality24 Logo"
        />
        <div>
          <div>
            <Heading2>Quality24</Heading2>
            <div>trabalha até o momento</div>
          </div>
          <Section>
            <Heading3>Desenvolvedor React e React-Native</Heading3>
            <SubText>São Paulo, Brasil · Remota</SubText>
            <Text>
              Atuo no desenvolvimento de soluções para plataformas iOS, Android e
              Web, com foco na evolução contínua dos sistemas da empresa, por meio
              da implementação de novas funcionalidades, correções estruturais e
              melhorias de desempenho.
            </Text>
            <ButtonSection>
              <Button href="https://quality24.com.br/" target="_blank">Conheça a Quality24</Button>
              <Button href="https://www.linkedin.com/company/quality24medical" target="_blank">Entre no Linkedin</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

      <Footer ref={endRef} />
    </Body>
  );
}

export default Experiences;

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
  display: flex;
  gap: 14px;

  max-width: 800px;

  padding: 0 16px;
`;
const Logo = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 8px;
`;
const Section = styled.div`
  padding-left: 12px;
  margin-top: 8px;

  border-left: 5px solid #5ca0e1;
`;
const Heading2 = styled.h2`
font-size: 20px;

  margin: 0;
  margin-top: -4px;
  padding: 0;
`;
const Heading3 = styled.h3`
  font-size: 16px;

  margin: 0;
`;
const SubText = styled.p`
  color: #ffffff88;
`;
const Text = styled.p`
  margin-top: 8px;
`;
const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 8px;

  margin-top: 16px;
`;
const Button = styled.a`
  padding: 6px 8px;

  border-radius: 8px;
  border: 1px solid #ffffff66;

  color: #ffffff;
  text-decoration: none;

  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;
const Footer = styled.div`
  margin-bottom: 32px;
`;
