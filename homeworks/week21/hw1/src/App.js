import './App.css';
import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(id, value)
    setValue('')
    id++
  }
  return (
    <form className='todo__input' onSubmit={handleSubmit}>
      <input
        className='todo__input-area'
        type='text'
        placeholder='add some tasks!'
        onChange={(e) => { setValue(e.target.value) }}
        value={value} />
      <button
        className='input__btn'>add</button>
    </form>

  )
}

function Todos({ todo, id, isDone, deleteTodo, toggleIsDone }) {
  return (
    <div className='todo__list'>
      <div
        className='todo__content'
        style={
          { textDecoration: todo.isDone ? 'line-through' : 'none' }} >
        {todo.content}
      </div>
      <div className='todo__btn'>
        <button
          className={todo.isDone ? 'undone-btn' : 'done-btn'}
          onClick={() => toggleIsDone(id)}>
          {todo.isDone ? 'undone' : 'done'}
        </button>
        <button
          className='delete-btn'
          onClick={() => deleteTodo(id)}>delete</button>
      </div>
    </div >
  )
}

function Buttons({ clearAll, filterAll, filterActive, filterCompleted }) {
  return (
    <div className='filter__btns'>
      <button
        className='show-all-btn'
        onClick={() => filterAll()}>
        all
      </button>
      <button
        className='active-btn'
        onClick={() => filterActive()}>
        active
      </button>
      <button
        className='completed-btn'
        onClick={() => filterCompleted()}>
        completed
      </button>
      <button
        className='clear-btn'
        onClick={() => clearAll()}>
        clear all
      </button>
    </div>
  )
}

let id = 1
function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const addTodo = (id, content) => {
    const newTodos = [...todos, { id, content, isDone: false }]
    setTodos(newTodos)
  }
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const handleToggleIsDone = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }))
  }
  const handleClearAll = () => {
    setTodos([])
  }
  const handleFilterAll = () => {
    setFilter('all')
  }
  const handleFilterActive = () => {
    setFilter('undone')
  }
  const handleFilterCompleted = () => {
    setFilter('done')
  }


  return (
    <div className='wrapper'>
      <h1 className='title'>TO-DO LIST</h1>
      <TodoForm addTodo={addTodo} />
      {
        todos
          .filter(todo => {
            if (filter === 'all') return todo
            if (filter === 'done') return todo.isDone
            return !todo.isDone
          })
          .map(todo =>
            < Todos
              key={todo.id}
              todo={todo}
              id={todo.id}
              isDone={todo.isDone}
              deleteTodo={handleDeleteTodo}
              toggleIsDone={handleToggleIsDone}
            />)
      }
      <Buttons
        clearAll={handleClearAll}
        filterAll={handleFilterAll}
        filterActive={handleFilterActive}
        filterCompleted={handleFilterCompleted}
      />
    </div>
  );
}

export default App;
