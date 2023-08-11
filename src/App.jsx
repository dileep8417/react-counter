import { useState } from "react";
import "./App.css";

const App = () => {
    const [count, setCount] = useState(0);
    const countUpdateVal = 1;

    const operations = {
        increment: () => {
            setCount(prevCount => prevCount + countUpdateVal);
        },
        decrement: () => {
            setCount(prevCount => prevCount - countUpdateVal);
        },
        reset: () => {
            setCount(0);
        },
    };

    return (
        <main>
            <p className="heading">React Counter</p>
            <div className="counter-container">
                <div className={`counter ${count === 0 ? '' : (count > 0 ? 'positive' : 'negative')}`}>{count}</div>
                <div className="counter-actions">
                    <button className="btn increment" onClick={operations.increment}>+</button>
                    <button className="btn decrement" onClick={operations.decrement}>-</button>
                    <button className="btn reset" onClick={operations.reset}>x</button>
                </div>
            </div>
        </main>
    );
}

export default App;