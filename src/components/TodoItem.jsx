import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/todoSlicer';

export default function TodoItem({id, text, completed}) {

    const dispatch = useDispatch();

    return (
        <div className='todo_item'>
            <input onChange={() => dispatch(toggleTodo({id: id}))} checked={completed} type="checkbox" name="checkbox" className='checkbox' />
            <p onClick={() => dispatch(toggleTodo({id: id}))} className="text">{text}</p>
            <button onClick={() => dispatch(removeTodo({id: id}))} className="small_button">&#10006;</button>
        </div>
    )
}
