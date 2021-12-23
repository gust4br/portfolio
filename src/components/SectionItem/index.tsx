import { ReactNode } from "react";

import './styles.scss';

interface SectionItemProps{
  title: string,
  right: true | false,
  children?: ReactNode;
}

export function SectionItem({ title, right, children, ...rest}: SectionItemProps){

  return(
    <>
      <header className="sectionTitle">
        {
          right ? 
          <>
            <h1>{title}</h1>
            <div className="line" />
          </>
          :
          <>
            <div className="line" />
            <h1 className="left">{title}</h1>
          </>
        }
      </header>
      <div className="sectionContent">
        {children}
      </div>
    </>
  )
}