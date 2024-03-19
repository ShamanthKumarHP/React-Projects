export default function GameOver({winner, handleRestart}){
    return ( 
        <div id="game-over">
            <h2>
                Game Over!
            </h2>
            {winner && <p>{winner} won.</p>}
            {!winner && <p>Match Drawn</p>}
            <button onClick={handleRestart}>Rematch?</button>
        </div>
        
    )
}