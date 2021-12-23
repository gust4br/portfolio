import { Span } from './Span';

import './styles.scss';

export function CodeBlock(){
  return(
    <pre className="pre-ts">
      <code className="code-ts">
        
        <Span blue value="const " />
        anoAtual
        <Span blue value=" = new" />
        <Span green value=" Date()" />
        <Span blue value="." />
        <Span green value="getFullYear()" />
        <Span blue value=";" />
        <br/>
        <Span blue value="const " />
        idade
        <Span blue value=" = anoAtual - "/>
        2000
        <Span blue value=";" />
        <Span black value={` //${new Date().getFullYear() - 2000} anos`} />
        <br/>
        <br/>
        <Span blue value="const " />
        quemSou
        <Span blue value=" = " />
        <Span orange value="`" />
        <br/>
        <Span orange value="Gustavo, " />
        <Span blue value="${" />
        idade
        <Span blue value="}" />
        <Span orange value=" anos, apaixonado por desenvolvimento web..." />
        <br/>
        <Span orange value="`" />
        <br />
        <br/>
        <Span blue value="const " />
        contatos
        <Span blue value=" = {" />
        <br />
        {' '}Email: <Span orange value="'gustavosgdev@outlook.com'" /><Span blue value=","/>
        <br />
        {' '}Github: <Span orange value="'https://github.com/gustavosgdev'" /><Span blue value=","/>
        <br />
        {' '}Currículo: <Span orange value="'src/meuCv.pdf'" />
        <br />
        <Span blue value="};," />
        <br/>
        <br/>
        <Span blue value="const " />
        ferramentas
        <Span blue value = " = [" />
        <br />
        <Span orange value="'ReactJs'"/><Span blue value=","/>
        <Span orange value="'NextJs'"/><Span blue value=","/>
        <Span orange value="'Typescript'"/><Span blue value=","/>
        <Span orange value="'Sass'"/><Span blue value=","/>
        <br/>
        <Span blue value="];" />
      </code>
    </pre>
  )
}