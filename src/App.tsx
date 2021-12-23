import { Header } from "./components/Header";
import { SectionItem } from "./components/SectionItem";
import { ProjectItem } from "./components/ProjectItem";
import { CommentItem } from "./components/CommentItem";

import './styles/app.scss';
import { CertificationSection } from "./components/CertificationSection";
import { CertificationItem } from "./components/CertificationItem";

export function App() {
  const projectsData = [
    {
      title: "NLW6-Letmeask",
      tools: "ReactJs, Typescript, Sass",
      link:"https://github.com/devgustavojs/NLW6-Letmeask"
    },
    {
      title: "Weather-App",
      tools: "ReactJs, Javascript, Css",
      link:"https://github.com/devgustavojs/weather-app-reactjs"
    }
  ]

  const commentsData = [
    {
      name: "Algum Amigo Bem Legal",
      commentary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "Algum Outro Amigo Bem Legal",
      commentary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
  ]

  const certificationData = [
    {
      title: "ReactJs Ignite 03",
      data: "Jun 2021 - Set 2021",
      at: "@Rocketseat",
      content: "O curso ignite é um curso de aceleração bla bla bla"
    },
  ]

  const workingData = [
    {
      title: "Desenvolvedor Front-end Junior",
      data: "Ago 2021 - Atual",
      at: "@PegaPlantão",
      content: "O Pega Plantão é um sistema web de gerenciamento de escalas para médicos e hospitais"
    },
  ]

  return (
    <>
    <Header />
    <main>
      <SectionItem right title="MEUS PROJETOS FAVORITOS">
        {projectsData.map(project =>{
          return <ProjectItem key={project.link} data={project}/>
        })}
      </SectionItem>
      <SectionItem right={false} title="COMENTÁRIOS">
        {commentsData.map(comment => {
          return <CommentItem key={comment.name} data={comment} />
        })}
      </SectionItem>
      <SectionItem right title="EXPERIÊNCIAS">
        <CertificationSection title="Cursos">
          {certificationData.map(cert => { 
            return <CertificationItem key={cert.title} data={cert} />
          })}
        </CertificationSection>
        <CertificationSection title="Profissional">
          {workingData.map(cert => { 
            return <CertificationItem key={cert.title} data={cert} />
          })}
        </CertificationSection>
      </SectionItem>
    </main>
    </>
  );
}
