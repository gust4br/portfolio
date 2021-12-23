import './styles.scss';

interface ProjectItemProps{
  data: {
    title: string,
    tools: string,
    link: string
  }
}

export function ProjectItem({data}: ProjectItemProps){
  return(
    <button className="project" onClick={() => window.open(data.link)}>
      <div className="projectInfos">
        <h1>{data.title}</h1>
        <p>{data.tools}</p>
      </div>
    </button>
  )
}