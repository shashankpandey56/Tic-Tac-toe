import { useEffect, useState } from 'react';
import './App.css';
import './index.css'
import SquareComponent from './SquareComponent';
const clearState=["","","","","","","","","",""]

function App() {
  const [gameState, updateGameState] = useState(clearState)
  const [isXChance, updateIsXChance] = useState(false)
  const [message,setMessage] = useState('')
  const [winner,setWinner] = useState(null);

  const onUserClicked = (index) => {
      let strings = Array.from(gameState);
      if (strings[index])
          return;
      strings[index] = isXChance ? "X" : "0";
      updateIsXChance(!isXChance)
      updateGameState(strings)
  }

  const clearGame = () => {
      updateGameState(clearState)
  }
  useEffect(() => {
      let win =checkWinner();
      setWinner(win)
      console.log(winner);
      if (winner) {
        setMessage(`Winner is ${winner}`)
          clearGame();
          
      }
      else{
        setMessage(`Next Player is ${isXChance ? 'X':'0'}`)
      }
  }, [gameState])

  const checkWinner = () => {
      const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ];
      
      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
              return gameState[a];
          }
      }
      return null;
  }

  return (
    <div className="App-header">
     <h1 className="heading-text">Tic Tac Toe</h1>
     <h2>{message}</h2>
     <div className="row jc-center">
       <SquareComponent className="b-bottom-right" state={gameState[0]} onClick={()=>onUserClicked(0)}/>
       <SquareComponent className="b-bottom-right" state={gameState[1]} onClick={()=>onUserClicked(1)}/>
       <SquareComponent className="b-bottom" state={gameState[2]} onClick={()=>onUserClicked(2)}/>
      </div>
      <div className="row jc-center">
        <SquareComponent className="b-bottom-right" state={gameState[3]} onClick={()=>onUserClicked(3)}/>
        <SquareComponent className="b-bottom-right" state={gameState[4]} onClick={()=>onUserClicked(4)}/>
        <SquareComponent className="b-bottom" state={gameState[5]} onClick={()=>onUserClicked(5)}/>
      </div>
      <div className="row jc-center">
        <SquareComponent className="b-right" state={gameState[6]} onClick={()=>onUserClicked(6)}/>
        <SquareComponent className="b-right" state={gameState[7]} onClick={()=>onUserClicked(7)}/>
        <SquareComponent state={gameState[8]} onClick={()=>onUserClicked(8)}/>
      </div>
      
      <button className="clear-button" onClick={clearGame}>Clear Game</button>
      <p>By Shashank Pandey</p>
      
     

    
    </div>
  );
}

export default App;
