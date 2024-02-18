import React from 'react'
import Higher from './Higher';
type ff={state:number,increment:()=>void}
const Test1 = (props:ff) => {
  return (
    <div><button onClick={props.increment}>increment</button>{props.state}</div>
  )
}

export default Higher(Test1)
