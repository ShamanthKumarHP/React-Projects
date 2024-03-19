import { useState } from "react"
import Player from "./Player"

const Players = {
    X: "Player 1",
    O: "Player 2"
  }

export default function PlayerForm({handlePlayerNameChange, startGame}){
    
    const [firstPlayer, setFirstPlayer] = useState(Players.X)
    const [secondplayer, setSecondPlayer] = useState(Players.O)
    // function changePlayerNames(){
    //     handlePlayerNameChange("X", firstPlayer)
    //     handlePlayerNameChange("O", secondplayer)
    // }

    return (
        <div className="player-login">
        <p>Enter Player Names</p>
        <form>
        <input type="text" onChange={(event)=>handlePlayerNameChange("X", event.target.value)} required/>
        <br />
        <input type="text" onChange={(event)=>{handlePlayerNameChange("O", event.target.value)}} required/>
        <br />
        <button type="submit" onClick={startGame}>Start      Game</button>
        </form>
        </div>
    )
}