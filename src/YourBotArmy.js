import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ enlistedBots,onRelease }) => {

    const  handleRelease=(bot)=>{
        onRelease(bot)
    }
    return (
        <div>
            <h2>Your Bot Army</h2>
            {enlistedBots.map((bot) => (
                <div key={bot.id} className="enlisted-bot">
                    <img src={bot.avatar_url} alt={bot.name}/>
                    <h3>{bot.name}</h3>
                    <p>Health: {bot.health}</p>
                    <p>Damage: {bot.damage}</p>
                    <p>Armor: {bot.armor}</p>
                    <p>Class: {bot.bot_class}</p>
                    <p>Catchphrase: {bot.catchphrase}</p>
                    <button onClick={() => handleRelease(bot)}>Release</button>
                </div>
            ))}
        </div>
    );
};

export default YourBotArmy;
