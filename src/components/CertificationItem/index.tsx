import './styles.scss';

interface CertificationItemProps {
  data: {
    title: string,
    data: string,
    at: string,
    content: string,
  }
}

export function CertificationItem({data}: CertificationItemProps){
  return(
    <div className="certificationItem">
      <header>
        <h3>{data.title}</h3>
        <span>{data.data}</span>
      </header>
      <p id="at">{data.at}</p>
      <p id="content">{data.content}</p>
    </div>
  )
}