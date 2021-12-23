import { useEffect } from "react";
import { useState } from "react"

interface SpanProps{
  blue?: true | null,
  orange?: true | null,
  green?: true | null,
  black?: true | null,
  value: string,
}

export function Span({value, blue, orange, green, black}: SpanProps){
  const [color, setColor] = useState('');
  
  useEffect(() =>{
    if(blue){
      setColor('blue');
    }else if(orange){
      setColor('orange');
    }else if(green){
      setColor('green');
    }else if(black){
      setColor('black');
    }
  }, [])

  return(
    <span className={color}>
      { value }
    </span>
  )
} 