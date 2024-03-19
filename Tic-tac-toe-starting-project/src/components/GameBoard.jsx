// import { useState } from "react";
// const initalGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

// export default function GameBoard({onSelectSquare, activePlayerSymbol, currentBoard}) {
//     const [gameBoard, setGameBoard] = useState(initalGameBoard);

//     function handleSelectSquare(rowIdx, colIdx){
//         setGameBoard((prevBoard) => {
//             const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])];
//             updatedBoard[rowIdx][colIdx] = activePlayerSymbol
//             return updatedBoard;
//         })
//         currentBoard(updatedBoard)
//         onSelectSquare();
//     }
//   return (
//     <ol id="game-board">
//       {gameBoard.map((row, rowIdx) => (
//         <li key={rowIdx}>
//           <ol>
//             {row.map((playerSymbol, colIdx) => (
//               <li key={colIdx}>
//                 <button onClick={() => {handleSelectSquare(rowIdx,colIdx)}}>{playerSymbol}</button>
//               </li>
//             ))}
//           </ol>
//         </li>
//       ))}
//     </ol>
//   );
// }
import { useState } from "react";
// const initalGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

export default function GameBoard({onSelectSquare, board}) {
    // let gameBoard = initalGameBoard;
    // for (const turn of turns){
    //     const {square, player} = turn;
    //     const {row, col} = square

    //     gameBoard[row][col] = player; 
    // }

  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button onClick={() => {onSelectSquare(rowIdx,colIdx)}} disabled={playerSymbol ? true : null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
