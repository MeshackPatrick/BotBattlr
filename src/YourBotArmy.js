import React from "react";

const YourBotArmy = ({ enlistedBots,onRelease,onDischarge }) => {

    const  handleRelease=(bot)=>{
        onRelease(bot)
    }

    const handleDischarge=(bot)=>{
        onDischarge(bot)
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
                    <button  onClick={()=>handleDischarge(bot)}>X</button>
                </div>
            ))}
        </div>
    );
};

export default YourBotArmy;
