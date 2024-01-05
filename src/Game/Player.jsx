import { useContext, useState } from "react";
import "./Style/Character.scss";
import MainContext from "../Context/MainContext";
const Player = () => {
  const {
    character,
    gameReady,
    arena,
    setArena,
    shop,
    setShop,
    worldMap,
    setWorldMap,
    setCharStats,
    charStats,
  } = useContext(MainContext);

  return (
    character ? 
    <div
    className="character"
    data-active={gameReady}
    // data-active={arena || shop ? true : false}
    onClick={() => setCharStats((e) => !e)}
  >
    <div className="char-level config">
      {Object.keys(character)[0]}: {character.level}
    </div>
    <div className="char-health config">
      {Object.keys(character)[1]} : {character.health}
    </div>
    <div className="char-stamina config">
      {Object.keys(character)[2]} : {character.stamina}
    </div>
    <div className="char-stats config" data-stats={charStats}>
      <div className="skills">
        <div className="skill">
          {Object.keys(character.skills)[0]}:
          <div className="count">{character.skills.strength}</div>
        </div>
        <div className="skill">
          {Object.keys(character.skills)[1]}:
          <div className="count">{character.skills.dexterity}</div>
        </div>
        <div className="skill">
          {Object.keys(character.skills)[2]}:
          <div className="count">{character.skills.vitality}</div>
        </div>
        <div className="skill">
          {Object.keys(character.skills)[3]}:
          <div className="count">{character.skills.stamina}</div>
        </div>
      </div>
    </div>
  </div>
  : null
  );
};

export default Player;
