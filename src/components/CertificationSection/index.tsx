
import { ReactNode } from "react";

import { IoMdSchool } from 'react-icons/io';

import './styles.scss';

interface CertificationSectionProps{
  title: string;
  children?: ReactNode;
}

export function CertificationSection({title, children} : CertificationSectionProps){
  return(
    <section className="certification">
      <header>
       <IoMdSchool />
        <h2>{title}</h2>
      </header>
      <div className="certificationItems">
        <aside />
        <div className="certificationAllItems">
          {children}
        </div>
      </div>
    </section>
  )
}