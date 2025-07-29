import styled from "styled-components";
import { useEffect, useRef } from "react";

import HRDate from "../components/HRDate";

function Academics() {
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
      <HRDateSteled date="03/01/2012" />
      <Container>
        <Logo
          src="https://media.licdn.com/dms/image/v2/C4E0BAQHeLGPy-Irjiw/company-logo_100_100/company-logo_100_100/0/1631356443434?e=1756944000&v=beta&t=oEvVCSCxCnTHALpc03fqox7m5NgYUwnVNdBDJhIp-xY"
          alt="Logo da ETEC"
        />
        <div>
          <div>
            <Heading2>ETEC - Escola Técnica Estadual de São Paulo</Heading2>
            <div>estudou até dezembro de 2014</div>
          </div>
          <Section>
            <Heading3>Técnico em Informática</Heading3>
            <SubText>Hortolândia, Brasil · Presencial</SubText>
            <Text>
              O curso ensina a desenvolver e operar sistemas, aplicativos e interfaces gráficas. Construir estruturas de banco de dados e código em C#, Java e Javascript. Desenhar, implantar e mantém sistemas e formulários. Assim como recursos de trabalho, linguagens de programação, ferramentas e metodologias para desenvolvimento de sistemas.
            </Text>
            <ButtonSection>
              <Button href="https://www.cps.sp.gov.br/etec/" target="_blank">Conheça a ETEC</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

      <HRDateSteled date="03/01/2013" />
      <Container>
        <Logo
          src="https://media.licdn.com/dms/image/v2/C4E0BAQHeLGPy-Irjiw/company-logo_100_100/company-logo_100_100/0/1631356443434?e=1756944000&v=beta&t=oEvVCSCxCnTHALpc03fqox7m5NgYUwnVNdBDJhIp-xY"
          alt="Logo da ETEC"
        />
        <div>
          <div>
            <Heading2>ETEC - Escola Técnica Estadual de São Paulo</Heading2>
            <div>estudou até dezembro de 2014</div>
          </div>
          <Section>
            <Heading3>Técnico em Programação WEB</Heading3>
            <SubText>Hortolândia, Brasil · Presencial</SubText>
            <Text>
              O curso ensina raciocínio lógico e linguagens de programação, que usa comandos para desenvolver recursos e moldar um site. Além disso, design para deixar a página mais agradável e fácil de usar.
              Também é ensinado a como criar e alterar bancos de dados que alimentarão os sites, noções de
              marketing digital para web e empreendedorismo.
              O curso ensina raciocínio lógico e linguagens de programação, que usa comandos para desenvolver recursos e moldar um site. Além disso, design para deixar a página mais agradável e fácil de usar. Também é ensinado a como criar e alterar bancos de dados que alimentarão os sites, noções de marketing digital para web e empreendedorismo.
            </Text>
            <ButtonSection>
              <Button href="https://www.cps.sp.gov.br/etec/" target="_blank">Conheça a ETEC</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

      <HRDateSteled date="03/01/2015" />
      <Container>
        <Logo
          src="https://media.licdn.com/dms/image/v2/C4E0BAQGkepCvZp_oww/company-logo_100_100/company-logo_100_100/0/1631346230167?e=1756944000&v=beta&t=V8rp4VqVbxVygGLuS8NihmiwW7hkCBhu3ZmE7IK1UWk"
          alt="Logo da Unicamp"
        />
        <div>
          <div>
            <Heading2>Universidade Estadual de Campinas</Heading2>
            <div>estudou até novembro de 2018 (Interrompido)</div>
          </div>
          <Section>
            <Heading3>Graduação em Licenciatura em Física</Heading3>
            <SubText>Campinas, Brasil · Presencial</SubText>
            <Text>
              Durante a graduação, cursei disciplinas como Cálculo I e II, Álgebra Linear, Geometria Analítica, Física Experimental, Programação, entre outras, com foco em fundamentos matemáticos e computacionais.
            </Text>
            <ButtonSection>
              <Button href="https://unicamp.br/" target="_blank">Conheça a Unicamp</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

      <HRDateSteled date="03/01/2019" />
      <Container>
        <Logo
          src="https://media.licdn.com/dms/image/v2/C4E0BAQGkepCvZp_oww/company-logo_100_100/company-logo_100_100/0/1631346230167?e=1756944000&v=beta&t=V8rp4VqVbxVygGLuS8NihmiwW7hkCBhu3ZmE7IK1UWk"
          alt="Logo da Unicamp"
        />
        <div>
          <div>
            <Heading2>Universidade Estadual de Campinas</Heading2>
            <div>estudou até dezembro de 2023</div>
          </div>
          <Section>
            <Heading3>Bacharel em Tecnólogo de Análise e Desenvolvimento de Sistemas, Sistemas da computação e Desenvolvimento</Heading3>
            <SubText>Campinas, Brasil · Presencial</SubText>
            <Text>
              O curso contempla disciplinas voltadas à programação Web, Mobile (Dart) e Desktop, além de fundamentos em engenharia de software, banco de dados, sistemas operacionais, redes de computadores e computação gráfica. Também abrange áreas de gestão, como administração, empreendedorismo, governança de TI e gerenciamento de projetos.

              A formação inclui ainda sólida base teórica em estruturas de dados, algoritmos, análise de sistemas, interfaces humano-computador e disciplinas de apoio em matemática e metodologia científica.
            </Text>
            <ButtonSection>
              <Button href="https://unicamp.br/" target="_blank">Conheça a Unicamp</Button>
            </ButtonSection>
          </Section>
        </div>
      </Container>

      <Footer ref={endRef} />
    </Body>
  );
}

export default Academics;

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