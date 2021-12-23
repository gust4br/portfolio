
import { HeaderTitle } from './HeaderTitle';
import { CodeBlock } from './CodeBlock';

import backgroundImage from '../../images/bg-image.png'

import './styles.scss';

export function Header(){

  return(
    <section className="dev-bg" style={{backgroundImage: `url(${backgroundImage})`}}>
      <HeaderTitle />
      <CodeBlock />
    </section>
  )
}