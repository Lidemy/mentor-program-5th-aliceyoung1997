import './App.css';
import { useState, useRef, useEffect } from 'react';
import Board from './Board.js';
import Title from './Title.js';

function Game() {
  const [board, setBoard] = useState(Array(19).fill(Array(19).fill(null)))
  const [winner, setWinner] = useState(null)
  const positionRow = useRef()
  const positionCol = useRef()
  const blackIsNext = useRef(false)
  const updateBoard = (row, col) => {
    positionRow.current = row
    positionCol.current = col
    const newBoard = JSON.parse(JSON.stringify(board))
    newBoard[row][col] = blackIsNext.current ? 'black' : 'white'
    setBoard(newBoard)
  }
  useEffect(() => {
    if (!positionRow.current && !positionCol.current) return
    whoWins(board, positionRow.current, positionCol.current)
    function whoWins(board, x, y) {
      if (
        countChess(board, x, y, 1, 0) + countChess(board, x, y, -1, 0) >= 4 ||
        countChess(board, x, y, 0, 1) + countChess(board, x, y, 0, -1) >= 4 ||
        countChess(board, x, y, 1, 1) + countChess(board, x, y, -1, -1) >= 4 ||
        countChess(board, x, y, 1, -1) + countChess(board, x, y, -1, 1) >= 4
      ) {
        setWinner(board[x][y])
      }
    }

    function countChess(board, x, y, directionX, directionY) {
      const now = board[x][y]
      let tempX = x
      let tempY = y
      let total = 0
      while (total >= 0) {
        tempX += directionX
        tempY += directionY
        if (board[tempX] && board[tempX][tempY] === now) {
          total++
        } else {
          break
        }
      }
      return total
    }
  }, [board])

  return (
    <div className='game'>
      <Title
        blackIsNext={blackIsNext}
        winner={winner} />
      <div className='game-board'>
        <Board
          blackIsNext={blackIsNext}
          board={board}
          updateBoard={updateBoard}
          winner={winner} />
      </div>
    </div>
  )
}

function App() {
  return (
    <Game />
  );
}

export default App;
