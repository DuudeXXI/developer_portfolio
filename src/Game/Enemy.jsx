import { useContext, useState } from "react";
import MainContext from "../Context/MainContext";
import "./Style/Enemy.scss";

const Enemy = () => {
  const { enemyChar, setEnemyChar, gameReady } = useContext(MainContext);
  return (
    enemyChar ? 
    <div
    className="enemy-character"
    data-active={gameReady}
    // data-active={arena || shop ? true : false}
  >
    <div className="char-level config">{Object.keys(enemyChar)[0]} : {enemyChar.level}</div>
    <div className="char-health config">{Object.keys(enemyChar)[1]} : {enemyChar.health}</div>
    <div className="char-stamina config">{Object.keys(enemyChar)[2]} : {enemyChar.stamina}</div>
  </div> 
  : null
  );
};

export default Enemy;
