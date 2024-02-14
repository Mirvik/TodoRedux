import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { filters } from '../store/todoSlicer';

export default function TodoList() {

    const todos = useSelector(state => state.todos.todos);
    const filter = useSelector(state => state.todos.filter);

    const filteredTodos = () => {
        if (filter === filters.ALL){
            return todos;
        }
        if (filter === filters.NOT_COMPLETED){
            return todos.filter(todo => !todo.completed);
        }

        if (filter === filters.COMPLETED){
            return todos.filter(todo => todo.completed);
        }
        return []
    }

    return (
        <>
            {filteredTodos().map( todo => (
                <li key={todo.id}>
                    <TodoItem 
                        id={todo.id}
                        text={todo.text} 
                        completed={todo.completed}
                    />
                    <hr />
                </li>
            ))}
        </>
    )
}
