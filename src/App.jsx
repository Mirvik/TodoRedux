import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';
import ButtonsCategory from './components/ButtonsCategory';
import { createTodo } from './store/todoSlicer';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const todoCreate = () => {
    if (text){
      dispatch(createTodo({text: text}));
      setText('');
    }
  }

  return (
      <div className="card">
        <h1 className="title">Todo List</h1>
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Add a new task...' />
        <button onClick={() => todoCreate()} className="small_button">+</button>
        <ButtonsCategory />
        <hr />
        <TodoList />
      </div>
  )
}

export default App
