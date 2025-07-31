import styled from "styled-components";
import { useEffect, useRef } from "react";

import HRDate from "../components/HRDate";

function Projects() {
  const endRef = useRef(null);

  useEffect(() => {
    let timeout;
    if (endRef?.current) {
      timeout = setTimeout(() => endRef.current.scrollIntoView({ behavior: 'smooth' }), 300);
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [endRef]);

  return (
    <Body>

      <HRDateSteled date="2021-03-01" />
      <Container>
        <ProjectIcon>
          <IconWrapper>
            <Icon>🛒</Icon>
          </IconWrapper>
        </ProjectIcon>
        <div>
          <div>
            <Heading2>Baurets Tabacaria - E-commerce Completo</Heading2>
            <div>Projeto Concluído • Janeiro 2023</div>
          </div>
          <Section>
            <Heading3>Sistema de E-commerce Multiplataforma para Tabacaria</Heading3>
            <SubText>React Native • Next.js • MongoDB • Node.js • E-commerce</SubText>
            <Text>
              Desenvolvimento completo de uma solução de e-commerce multiplataforma para a Baurets Tabacaria,
              incluindo website responsivo, aplicativo mobile para clientes e sistema interno de gestão.
              O projeto abrangeu controle de estoque, gestão de pedidos, sistema de entregas e billing automatizado,
              proporcionando uma experiência de compra integrada e eficiente para todos os stakeholders.
            </Text>
            <ProjectImage
              src="https://user-images.githubusercontent.com/7907668/125681261-eb7bebe6-4ef4-4696-a846-885774f70cd9.png"
              alt="Screenshot do sistema Baurets Tabacaria - Interface do e-commerce"
            />
            <TechStack>
              <TechTag>React Native</TechTag>
              <TechTag>Next.js</TechTag>
              <TechTag>MongoDB</TechTag>
              <TechTag>Node.js</TechTag>
              <TechTag>E-commerce</TechTag>
            </TechStack>
            <ButtonSection>
              <Button href="https://www.facebook.com/BauretsTabacaria/" target="_blank">Visitar Facebook</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

      <HRDateSteled date="2023-11-01" />
      <Container>
        <ProjectIcon>
          <IconWrapper>
            <Icon>🎓</Icon>
          </IconWrapper>
        </ProjectIcon>
        <div>
          <div>
            <Heading2>Making Progress AI - Gestão Escolar</Heading2>
            <div>Projeto em Andamento</div>
          </div>
          <Section>
            <Heading3>Sistema de Gestão Educacional com Inteligência Artificial</Heading3>
            <SubText>React • Next.js • Node.js • MongoDB • IA/ML</SubText>
            <Text>
              Plataforma web inovadora para gestão educacional que integra inteligência artificial
              para otimizar o acompanhamento de alunos e análise de resultados. Desenvolvido para
              escolas e professores, o sistema oferece dashboards inteligentes, relatórios automatizados
              e insights baseados em IA para melhorar o desempenho acadêmico dos estudantes.
            </Text>
            <ProjectImage
              src="https://cdn.prod.website-files.com/63e4387123e65ca7c0feedb7/6757b5463bf331c84b494bc3_Screenshot%202024-12-09%20at%207.22.52%20PM-p-800.png"
              alt="Screenshot do Making Progress AI - Interface do sistema de gestão educacional"
            />
            <TechStack>
              <TechTag>React</TechTag>
              <TechTag>Next.js</TechTag>
              <TechTag>Node.js</TechTag>
              <TechTag>MongoDB</TechTag>
              <TechTag>IA/ML</TechTag>
            </TechStack>
            <ButtonSection>
              <Button href="https://www.makeprogressai.ca/" target="_blank">Visitar Site</Button>
              <Button href="https://makingprogressai.com/" target="_blank">Visitar Sistema</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

      <Footer ref={endRef} />
    </Body>
  );
}

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
  display: flex;
  gap: 14px;

  max-width: 800px;

  padding: 0 16px;
`;

const ProjectIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #5ca0e1, #4a90e2);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(92, 160, 225, 0.3);
`;

const Icon = styled.span`
  font-size: 24px;
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
  margin: 4px 0;
`;

const Text = styled.p`
  margin-top: 8px;
  line-height: 1.5;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 12px;
  margin: 16px 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  border: 1px solid #ffffff22;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

const TechTag = styled.span`
  padding: 4px 8px;
  background-color: #2d3748;
  border-radius: 6px;
  font-size: 12px;
  color: #5ca0e1;
  border: 1px solid #4a5568;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 12px;

  margin-top: 16px;
`;

const Button = styled.a`
  padding: 8px 16px;

  border-radius: 8px;
  border: 1px solid #ffffff66;

  color: #ffffff;
  text-decoration: none;

  background-color: transparent;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: #ffffff11;
    border-color: #5ca0e1;
    color: #5ca0e1;
  }
`;

const Footer = styled.div`
  margin-bottom: 32px;
`;