// App.js
import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import "./App.css";

const App = () => {
    const [bots, setBots] = useState([]);
    const [enlistedBots, setEnlistedBots] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/bots")
            .then((response) => response.json())
            .then((data) => setBots(data))
            .catch((error) => console.error("Error fetching bots:", error));
    }, []);

    const handleEnlistBot = (bot) => {
        // Check if the bot is already enlisted before adding it
        if (!enlistedBots.find((b) => b.id === bot.id)) {
            setEnlistedBots([...enlistedBots, bot]);
        }
    };

    const handleReleaseBot=(bot)=>{
        //filter out the  released bot from the enlistedBots
        setEnlistedBots(enlistedBots.filter((b)=>b.id !== bot.id))
    }

    return (
        <div className="container">
            <header>
                <h1>
                    Welcome to <strong>Bot Battlr</strong>, the one and only spot in the known universe where you can custom build your own Bot Army!
                </h1>
            </header>
            <section>
                <div className="bot-list">
                    <BotCollection bots={bots} onEnlist={handleEnlistBot} />
                </div>
                <div className="your-bot-army">
                    <YourBotArmy enlistedBots={enlistedBots} onRelease={handleReleaseBot}/>
                </div>
            </section>
        </div>
    );
};

export default App;
