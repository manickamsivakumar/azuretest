import React, { useState, useReducer} from 'react'
import Test1 from './Test1'
type state = {
    "btn1": boolean,
    "btn2": boolean,
    "btn3": boolean,
}
type action = {
    type: string
}

function reducer(state: state, action: action): state {
    switch (action.type) {
        case 'btn1':
            return { 'btn1': true,'btn2': false,'btn3': false };
        case 'btn2':
            return { 'btn1': false,'btn2': true,'btn3': false };
        case 'btn3':
            return { 'btn1': false,'btn2': false,'btn3': true };
    
        default:
            return state;
    }
}
const Test = () => {
    const [count, setCount] = useState<number>(0);
    const [state, dispatch] = useReducer(reducer, { "btn1": true, "btn2": false, "btn3": false });
    return (
        <div><button onClick={() => setCount(count + 1)}>+</button><p>{count}</p><button onClick={() => setCount(count - 1)}>-</button>
         <div>
            <button onClick={()=>dispatch({type:"btn1"})}>One {state.btn1 ? 'Clicked' : ''}</button>
            <button onClick={()=>dispatch({type:"btn2"})}>Two{state.btn2 ? 'Clicked' : ''}</button>
            <button onClick={()=>dispatch({type:"btn3"})}>Three {state.btn3 ? 'Clicked' : ''}</button>

         </div>
         <Test1 />
        </div>
    )
}

export default Test