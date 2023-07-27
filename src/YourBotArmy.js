import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ enlistedBots }) => {
    return (
        <div>
            <h2>Your Bot Army</h2>
            {enlistedBots.map((bot) => (
                <BotCard key={bot.id} bot={bot} />
            ))}
        </div>
    );
};

export default YourBotArmy;
