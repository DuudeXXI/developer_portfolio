import "./Style/Container.scss";
import Player from "./Player";
import Enemy from "./Enemy";
import { useState, useEffect } from "react";
import MainContext from "../Context/MainContext";
import { delay } from "./Functions/Mechanics"

const Game = () => {
  // State declarations
  // Screen state
  const [gameReady, setGameReady] = useState(false);
  // Environment states
  const [worldMap, setWorldMap] = useState(false);
  const [arena, setArena] = useState(false);
  const [shop, setShop] = useState(false);
  const [bossArena, setBossArena] = useState(false);
  // Character states
  const [charStats, setCharStats] = useState(false);
  const [character, setCharacter] = useState(
    JSON.parse(localStorage.getItem("the_game_player"))
      ? JSON.parse(localStorage.getItem("the_game_player"))
      : null
  );
  const [enemyChar, setEnemyChar] = useState(
    JSON.parse(localStorage.getItem("the_game_enemy"))
      ? JSON.parse(localStorage.getItem("the_game_enemy"))
      : null);
  const [playerTurn, setPlayerTurn] = useState(false);
  // Functions
  function takeTurn(event) {
    const button = event.target.dataset;
    if (playerTurn) {
      return;
    } else {
      if (button.heavy || button.medium || button.low) {
        handleAttack(event);
      }
      if (button.rest) {
        takeRest();
      }
    }
  }
  function handleAttack(event) {
    const player = JSON.parse(localStorage.getItem("the_game_player"));
    const button = event.target.dataset;
    const baseDamage = player.skills.strength * 3;
    const heavyAtt = baseDamage + 2;
    const mediumAtt = baseDamage + 1;
    const lowAtt = baseDamage;
    const enemy = JSON.parse(localStorage.getItem("the_game_enemy"));
    if (button.heavy) {
      setPlayerTurn(() => true);
      enemy.health = enemy.health - heavyAtt
    }
    if (button.medium) {
      setPlayerTurn(() => true);
      enemy.health = enemy.health - mediumAtt
    }
    if (button.low) {
      setPlayerTurn(() => true);
      enemy.health = enemy.health - lowAtt
    }
    setEnemyChar(() => enemy)
    localStorage.setItem("the_game_enemy", JSON.stringify(enemy));
    delay(1000).then(() => setPlayerTurn(() => false));
  }

  function takeRest() {
    const player = JSON.parse(localStorage.getItem("the_game_player"));
    player.health += 5;
    setCharacter(() => player);
    localStorage.setItem("the_game_player", JSON.stringify(player));
    setPlayerTurn(() => true);
    delay(1000).then(() => setPlayerTurn(() => false));
  }
  // UseEffect section
  useEffect(() => {
    const body = document.body;
    body.dataset.active = gameReady;
    if (gameReady) {
      window.scrollTo(0, document.body.scrollHeight);
      delay(1000).then(() => (body.style.overflow = "hidden"));
      // load player - DONE
      // load enemy
      // load environment
      if (JSON.parse(localStorage.getItem("the_game_player"))) {
        return;
      } else {
        const newPlayer = {
          level: 1,
          health: 10,
          stamina: 10,
          skills: {
            strength: 1,
            dexterity: 1,
            vitality: 1,
            stamina: 1,
          },
          inventory: [{}, {}, {}],
        };
        newPlayer.baseHealth = newPlayer.health * newPlayer.skills.vitality * 1.3
        setCharacter(newPlayer)
        localStorage.setItem("the_game_player", JSON.stringify(newPlayer));
      }
      if (JSON.parse(localStorage.getItem("the_game_enemy"))) {
        return;
      } else {
        const newEnemy = {
          level: 1,
          health: 10,
          stamina: 10,
          skills: {
            strength: 1,
            dexterity: 1,
            vitality: 1,
            stamina: 1,
          }
        };
        newEnemy.baseHealth = newEnemy.health * newEnemy.skills.vitality * 1.3
        setEnemyChar(newEnemy)
        localStorage.setItem("the_game_enemy", JSON.stringify(newEnemy));
      }
    }
  }, [gameReady]);

  return (
    <MainContext.Provider
      value={{
        character,
        setCharacter,
        arena,
        setArena,
        shop,
        setShop,
        worldMap,
        setWorldMap,
        charStats,
        setCharStats,
        gameReady,
        setGameReady,
        enemyChar,
        setEnemyChar,
      }}
    >
      <div className="game-container">
        <div className="nav-buttons">
          <div
            className="the-game-btn"
            value={gameReady}
            onClick={() => setGameReady((e) => !e)}
          >
            The Game
          </div>
        </div>
        {/* Game Screen */}
        <div className="game-screen" data-active={gameReady}>
          <div
            className="screen-line"
            data-active={
              gameReady
            } /* data-active={arena || shop ? true : null} */
          ></div>
          {/* Characters */}
          {/* Main Player */}
          <Player />
          {/* Enemies */}
          <Enemy />
          {/* Attack buttons */}
          <div
            className="actions-container"
            data-active={gameReady}
            data-turn={playerTurn}
          >
            <div
              className="action-btn heavy"
              data-heavy={true}
              onClick={takeTurn}
            >
              Heavy att
            </div>
            <div
              className="action-btn medium"
              data-medium={true}
              onClick={takeTurn}
            >
              med att
            </div>
            <div className="action-btn low" data-low={true} onClick={takeTurn}>
              low att
            </div>
            <div
              className="action-btn rest"
              data-rest={true}
              onClick={takeTurn}
            >
              Rest
            </div>
          </div>
        </div>
        <div
          className="fog-of-war"
          style={
            gameReady
              ? { height: window.innerHeight + "1px", width: window.innerWidth }
              : null
          }
          data-active={gameReady}
        ></div>
        <div className="ingame-nav" data-active={gameReady}>
          <div value={gameReady} onClick={() => setGameReady((e) => false)}>
            Exit Game
          </div>
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default Game;
