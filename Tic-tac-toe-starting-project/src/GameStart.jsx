import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winningCombination.js";
import Log from "./components/Log";
import { useState } from "react";
const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const Players = {
    X: "Player 1",
    O: "PLayer 2"
  }
  function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
      currentPlayer = "O";
    }
    return currentPlayer;
  }
  
  function deriveGameBoard(gameTurns){
    let gameBoard = [...INITIAL_GAME_BOARD.map((innerArr) => [...innerArr])];
    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
  
      gameBoard[row][col] = player;
    }
  return gameBoard;
  }
  function deriveWinner(gameBoard, playerNames) {
    let winner = null;
  
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol =
        gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol =
        gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol =
        gameBoard[combination[2].row][combination[2].column];
  
      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = playerNames[firstSquareSymbol];
      }
    }
    return winner;
  }
  function handlePlayerNameChange(symbol, newName) {
    setPlayerNames((prevName) => {
      return {
        ...prevName,
        [symbol]: newName,
      };
    });
  }

export default function GameStart({playerName}){
      // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [playerNames, setPlayerNames] = useState(playerName);
  const activePlayer = deriveActivePlayer(gameTurns);

  // let gameBoard = initalGameBoard; cant do rematch because it uses original array. so,

  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, playerNames);
  const hasDraw = gameTurns.length == 9 && !winner;

  function handleActivePlayer(rowIdx, colIdx) {
    // setActivePlayer((curPlayer) => (curPlayer === "X" ? "O" : "X"));
    setGameTurns(prevTurns => {
      console.log("gameTurns", gameTurns)
      // const updatedTurns = [ {square : {row: rowIdx, col: colIdx}, player:activePlayer}, ...prevTurns ]
      // above: should not merge between state variables(activePlayer, gameTurns). not a good idea. guarantee of error. so,

      // let currentPlayer = "X";
      // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "O";
      // }

      const currentPlayer = deriveActivePlayer(gameTurns);
      const updatedTurns = [
        { square: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...gameTurns,
      ];
      console.log("updatedTurns", updatedTurns)

      return updatedTurns;
    });
  }

  function handleRematch() {
    console.log("r");
    setGameTurns([]);
  }

    return(<>
    <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={playerName.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            initialName={playerName.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRestart={handleRematch} />
        )}
        <GameBoard onSelectSquare={handleActivePlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
      </>)
}