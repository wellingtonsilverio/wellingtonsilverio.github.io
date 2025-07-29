import styled from "styled-components";
import { useEffect, useRef } from "react";

import HRDate from "../components/HRDate";

function Experiences() {
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
      <HRDateSteled date="12/01/2014" />
      <Container>
        <NoLogo
        />
        <div>
          <div>
            <Heading2>Epub Digital</Heading2>
            <div>trabalhou até março de 2015</div>
          </div>
          <Section>
            <Heading3>Desenvolvedor em Android e Web</Heading3>
            <SubText>Campinas, Brasil · Presencial</SubText>
            <Text>
              Desenvolvimento de sites responsivos e de aplicativos mobile com Java.
            </Text>
            <ButtonSection>
              <Button href="https://www.linkedin.com/search/results/all/?keywords=Epub%20Digital" target="_blank">Entre no Linkedin</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

      <HRDateSteled date="3/01/2015" />
      <Container>
        <Logo
          src="https://media.licdn.com/dms/image/v2/C4E0BAQGkepCvZp_oww/company-logo_200_200/company-logo_200_200/0/1631346230167?e=1756339200&v=beta&t=lJGAU6S7WGxZAgKxZBq2Uk2MFFmgP9ZlWTdTkhzQKzM"
          alt="Unicamp Logo"
        />
        <div>
          <div>
            <Heading2>Universidade Estadual de Campinas</Heading2>
            <div>trabalhou até março de 2018</div>
          </div>
          <Section>
            <Heading3>Estágio em Web com PHP e SQL</Heading3>
            <SubText>Campinas, Brasil · Presencial</SubText>
            <Text>
              Atuei no Instituto de Geografia (IG) e no Instituto de Matemática, Estatística e Computação Científica (IMECC), desenvolvendo e mantendo sistemas internos voltados à pós-graduação. Além da atualização do site institucional. Também desenvolvi um mapa interativo em SVG para o totem de autoatendimento, facilitando a navegação e a localização dentro do instituto.
            </Text>
            <ButtonSection>
              <Button href="https://www.ime.unicamp.br/" target="_blank">Conheça o IMECC</Button>
              <Button href="https://www.linkedin.com/school/universidade-estadual-de-campinas" target="_blank">Entre no Linkedin</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

      <HRDateSteled date="3/01/2018" />
      <Container>
        <Logo
          src="https://media.licdn.com/dms/image/v2/C560BAQH5IweG49tkWA/company-logo_200_200/company-logo_200_200/0/1630634974179/tecnometrica_estatistica_logo?e=1756339200&v=beta&t=b2zSNhTLn_Ex7eIzV8OujuY1p6n2vqCEv-_JVhhXmn8"
          alt="Tecnometrica Logo"
        />
        <div>
          <div>
            <Heading2>Tecnometrica Estatistica</Heading2>
            <div>trabalhou até outubro de 2018</div>
          </div>
          <Section>
            <Heading3>Analista Júnior de Sistemas</Heading3>
            <SubText>Campinas, Brasil · Presencial</SubText>
            <Text>
              Atuando como desenvolvedor de sistemas para Android e IOS nativo e desenvolvedor de análise de dados e desenvolvimento de API restful em Python, trabalhei como arquiteto e analista de software com a equipe de construção de web e sistemas móveis para atender grandes empresas como McDonalds Brasil, PepsiCo, Tropicana entre outros
            </Text>
            <ButtonSection>
              <Button href="http://www.tecnometrica.com.br/" target="_blank">Conheça a Tecnometrica</Button>
              <Button href="https://www.linkedin.com/company/tecnometrica-estatistica" target="_blank">Entre no Linkedin</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

      <HRDateSteled date="10/01/2018" />
      <Container>
        <Logo
          src="https://media.licdn.com/dms/image/v2/D4D0BAQFyOWX7M_SVWg/company-logo_200_200/company-logo_200_200/0/1719601888759/synvia_logo?e=1756339200&v=beta&t=8uWWKGsnX2vxdrf3fpb3brjaDMGbjAV0Slt1AyXvDd0"
          alt="Synvia Logo"
        />
        <div>
          <div>
            <Heading2>Synvia</Heading2>
            <div>trabalhou até agosto de 2019</div>
          </div>
          <Section>
            <Heading3>Desenvolvedor full stack Junior</Heading3>
            <SubText>Campinas, Brasil · Presencial</SubText>
            <Text>
              Atuei no desenvolvimento e evolução do principal sistema da Synvia, empresa especializada em testes toxicológicos. Fui responsável por projetar e implementar a API em Node.js com MongoDB e Front-end em Ionic, integrando áreas como finanças, logística, medicina e vendas em uma solução coesa e eficiente. No front-end, contribui com melhorias no painel do sistema interno e também no desenvolvimento da página institucional da empresa, utilizando Angular 6. Trouxe soluções que melhoraram a performance do sistema e a experiência do usuário, aplicando práticas de desenvolvimento contínuo e metodologias ágeis para garantir entregas consistentes e de valor para o negócio.
            </Text>
            <ButtonSection>
              <Button href="https://synvia.com/" target="_blank">Conheça a Synvia</Button>
              <Button href="https://www.linkedin.com/company/synvia" target="_blank">Entre no Linkedin</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

      <HRDateSteled date="09/01/2019" />
      <Container>
        <Logo
          src="https://media.licdn.com/dms/image/v2/D4D0BAQH0yWTE9RZ2cQ/company-logo_200_200/company-logo_200_200/0/1666894408173/letrus_logo?e=1756339200&v=beta&t=NKeuyUBTevuc1U7intg8DZlfHfnObdKV8PgFHFIqAMQ"
          alt="Letrus Logo"
        />
        <div>
          <div>
            <Heading2>Letrus</Heading2>
            <div>trabalhou até dezembro de 2021</div>
          </div>
          <Section>
            <Heading3>Desenvolvedor Front-end pleno</Heading3>
            <SubText>Campinas, Brasil · Remota</SubText>
            <Text>
              Desenvolvendo soluções junto com squads de produto e design, ajudando a criar e gerenciar tarefas no quadro do Trello e PRs no Github e branchs do Git, além de solucionar bugs e criar funcionalidades sólidas com entrega contínua.
            </Text>
            <ButtonSection>
              <Button href="https://www.letrus.com/" target="_blank">Conheça a Letrus</Button>
              <Button href="https://www.linkedin.com/company/letrus" target="_blank">Entre no Linkedin</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

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
const NoLogo = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 8px;

  background-color: #fff;
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
