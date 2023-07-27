import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import "./App.css";

const App = () => {
    const [bots, setBots] = useState([]);

    useEffect(() => {
        // Fetch bots from the backend when the component mounts
        fetch("http://localhost:3000/bots")
            .then((response) => response.json())
            .then((data) => setBots(data))
            .catch((error) => console.error("Error fetching bots:", error));
    }, []);

    return (
        <div className="container">
            <header>
                <h1>
                    Welcome to <strong>Bot Battlr</strong>, the one and only spot in the known universe where you can custom build your own Bot Army!
                </h1>
            </header>
            <BotCollection bots={bots} />
        </div>
    );
};

export default App;
