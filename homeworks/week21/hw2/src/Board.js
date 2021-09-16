import Square from './Square.js';

export default function Board({ blackIsNext, board, updateBoard, winner }) {
  return (
    <div>
      {board.map((row, rowIndex) => {
        return (
          <div className="board-row" key={rowIndex}>
            {board.map((col, columnIndex) =>
              <Square
                key={columnIndex}
                row={rowIndex}
                col={columnIndex}
                blackIsNext={blackIsNext}
                updateBoard={updateBoard}
                winner={winner} />)}
          </div>
        )
      })}
    </div>
  )
}