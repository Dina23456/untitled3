import React from 'react';
import {useSelector, useDispatch} from "react-redux"
import {INC_COUNTER,
    DEC_COUNTER,
    RESET_COUNTER} from "./redux/action-types"
export default function App() {
    const counter = useSelector(({counter}) => counter)
    const dispatch = useDispatch();
    const handleInc = () => dispatch({
        type: INC_COUNTER
    });
    const handleDec = () => dispatch({
        type: DEC_COUNTER
    });
    const handleReset = () => dispatch({
        type: RESET_COUNTER
    });
    return (
        <div className='App'>
            <h1>Hello CodeSandbox {counter}</h1>
            <button onClick={handleInc}>inc</button>
            <button onClick={handleDec}>dec</button>
            <button onClick={handleReset}>reset</button>

            <h2>start editing to see some magic happen"</h2>
        </div>
    )
}
