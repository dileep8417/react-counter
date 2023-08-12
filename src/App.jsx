import CounterDevice from "./components/CounterDevice";
import "./App.css";
import { useEffect } from "react";
import { trackPageVisits } from "./utils";

const App = () => {
    useEffect(() => {
        trackPageVisits();
    }, []);

    return (
        <main>
            <p className="heading">React Counter</p>
            <CounterDevice />
        </main>
    );
}

export default App;