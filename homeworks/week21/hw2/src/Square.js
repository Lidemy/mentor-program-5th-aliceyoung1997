import { useState } from 'react';

export default function Square({ row, col, blackIsNext, updateBoard, winner }) {
  const [color, setColor] = useState(null)
  const handleClick = () => {
    if (color) return
    if (winner) return
    blackIsNext.current ? setColor('white') : setColor('black')
    blackIsNext.current = !blackIsNext.current
    updateBoard(row, col)
  }
  return (
    <button
      className='square'
      onClick={handleClick}>
      <div className={color}></div>
    </button>
  )
}