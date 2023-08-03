import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots,onEnlist }) => {
    return (
        <div className="bot-list">
            <div className="bot-list">
            <h2>Available Bots</h2>
            </div>
            {bots.map((bot) => (
                <BotCard key={bot.id} bot={bot} onEnlist={onEnlist} />
            ))}
        </div>
    );
};

export default BotCollection;
