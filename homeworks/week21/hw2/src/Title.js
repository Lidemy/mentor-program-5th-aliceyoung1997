export default function Title({ blackIsNext, winner }) {
  return (
    <div className='title-container'>
      <h1>五子棋</h1>
      <div className='next-player'>
        {winner ? `贏家：${winner === 'black' ? '黑棋' : '白棋'}` : `輪到：${blackIsNext.current ? '白棋' : '黑棋'}`}
      </div>
      <button
        className='restart'
        onClick={() => window.location.reload()}>
        Restart
      </button>
    </div>
  )
}
