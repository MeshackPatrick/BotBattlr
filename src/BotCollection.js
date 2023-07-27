import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots }) => {
    return (
        <div className="bot-list">
            <h2>Available Bots</h2>
            {bots.map((bot) => (
                <BotCard key={bot.id} bot={bot} />
            ))}
        </div>
    );
};

export default BotCollection;
