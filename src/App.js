import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import "./App.css";

const App = () => {
    const [bots, setBots] = useState([]);
    const [enlistedBots, setEnlistedBots] = useState([]);

    useEffect(() => {
        fetch("https://json-bot-data.onrender.com/bots")
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

    const handleDischargeBot=(bot)=>{
        //send a delete request to the backend to delete the bot
        fetch(`https://json-bot-data.onrender.com/bots/${bot.id}`,{
            method:"DELETE",
        })
            .then(()=>{
                //after successful deletion on backend,also remove the bot from the frontend
                setEnlistedBots(enlistedBots.filter((b)=>b.id !==bot.id))
            })
            .catch((error)=>console.error("Error discharging bot :",error))
    }

    return (
        <div className="container">
            <header>
                <h1>Welcome To Bot Battlr</h1>
                <p>The one and only spot in the known universe where you can custom
                    build your own Bot Army!</p>
            </header>
            <section>
                <div className="your-bot-army">
                    <YourBotArmy
                        enlistedBots={enlistedBots}
                        onRelease={handleReleaseBot}
                        onDischarge={handleDischargeBot}
                    />

                </div>
                <div className="bot-list">
                    <BotCollection bots={bots} onEnlist={handleEnlistBot} />

                </div>
            </section>
        </div>
    );
};

export default App;
