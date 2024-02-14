import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';
import ButtonsCategory from './components/ButtonsCategory';
import { createTodo } from './store/todoSlicer';

function App() {
  const [text, setText] = useState('');
  const input = useRef();
  const dispatch = useDispatch();

  return (
      <div className="card">
        <h1 className="title">Todo List</h1>
        <input onChange={(e) => setText(e.target.value)} ref={input} type="text" placeholder='Add a new task...' />
        <button onClick={() => {dispatch(createTodo({text: text})); input.current.value = ''}} className="small_button">+</button>
        <ButtonsCategory />
        <hr />
        <TodoList />
      </div>
  )
}

export default App
