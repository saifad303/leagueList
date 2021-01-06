import React, {useState, useContext} from 'react';
import { ThemeContext } from "./App";

function CounterHooks({title}){
    const [count, setCount] = useState('string')
    const theme = useContext(ThemeContext);

    let increase = () =>{
        setCount(count + 1);
    }

    let decrese = () =>{
        setCount(count-1);
    }

    return(
        <>
            <div>
                <h2>{title}</h2>
                <button style={theme} onClick={increase}>+</button>
                <h1>{count}</h1>
                <button style={theme} onClick={decrese}>-</button>
            </div> 
        </>
    );
}

export default CounterHooks;