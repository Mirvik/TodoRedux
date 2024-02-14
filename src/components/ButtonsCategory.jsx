import React, { useRef } from 'react';
import { filterBy, filters, clearAllTodos } from '../store/todoSlicer';
import { useDispatch } from 'react-redux';

export default function ButtonsCategory() {

    const dispatch = useDispatch();
    const b1 = useRef();
    const b2 = useRef();
    const b3 = useRef();

    const addStyle = (e) => {
        b1.current.classList.remove('select');
        b2.current.classList.remove('select');
        b3.current.classList.remove('select');
        e.target.classList.add('select');
    }

    return (
        <div className="buttons">
            <button onClick={(e) => {addStyle(e); dispatch(filterBy(filters.ALL))}} ref={b1} className='status' type='submit'>All</button>
            <button onClick={(e) => {addStyle(e); dispatch(filterBy(filters.NOT_COMPLETED))}} ref={b2} className='status' type='submit'>Pending</button>
            <button onClick={(e) => {addStyle(e); dispatch(filterBy(filters.COMPLETED))}} ref={b3} className='status' type='submit'>Completed</button>
            <button onClick={() => {dispatch(clearAllTodos())}} className='btn' type='submit'>Clear all</button>
        </div>
    )
}
