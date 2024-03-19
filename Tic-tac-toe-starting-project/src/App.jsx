
import { useState } from "react";
import PlayerForm from "./components/PlayerForm.jsx";
import GameStart from "./GameStart.jsx";
let Players = {
  X: "Player 1",
  O: "PLayer 2"
}
function App() {
  const [startGame, setStartGame] = useState(false)
  const [playerName, setPlayerNames] = useState(Players);

  function handlePlayerNameChange(symbol, newName) {
    setPlayerNames((prevName) => {
      return {
        ...prevName,
        [symbol]: newName,
      };
    });
  }

  function handleStartGame (){
    setStartGame(true)
  }
  
  return (
    <main>
      { !startGame && <PlayerForm handlePlayerNameChange={handlePlayerNameChange}  startGame={handleStartGame}/>}
      {startGame && <GameStart playerName={playerName} /> }
    </main>
  );
}

export default App;
