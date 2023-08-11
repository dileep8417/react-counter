import { useState } from "react";
import "../assets/CounterDevice.css";

const CounterDevice = () => {
    // Define the initial count value
    const intialCount = 0;

    // Define the incremental/decremental value
    const countUpdateVal = 1;
    
    // State variable to store the counter value
    const [count, setCount] = useState(intialCount);

    // Define the actions that can be performed on the counter
    const operations = {
        increment: () => {
            setCount(prevCount => prevCount + countUpdateVal);
        },
        decrement: () => {
            setCount(prevCount => prevCount - countUpdateVal);
        },
        reset: () => {
            setCount(intialCount);
        },
    };

    return (
        <div className="counter-container">
            <div className={`counter ${count === 0 ? '' : (count > 0 ? 'positive' : 'negative')}`}>{count}</div>
            <div className="counter-actions">
                <button className="btn increment" onClick={operations.increment}>+</button>
                <button className="btn decrement" onClick={operations.decrement}>-</button>
                <button className="btn reset" onClick={operations.reset}>x</button>
            </div>
        </div>
    );
}

export default CounterDevice;