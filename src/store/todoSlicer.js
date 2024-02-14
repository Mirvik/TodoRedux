import { createSlice } from "@reduxjs/toolkit";

export const filters = {
    ALL: "ALL",
    COMPLETED: "COMPLETED",
    NOT_COMPLETED: "NOT_COMPLETED"
};

let todos = [];
if (localStorage.getItem("todos")){
    todos = JSON.parse(localStorage.getItem("todos"));
}

export const counterSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: todos,
        filter: filters.ALL
    },
    reducers: {
        showAllTodos: state => {
            state.todos;
        },
        showPendingTodos: state => {
            state.todos.filter(todo => todo.completed === false);
        },
        showCompletedTodos: state => {
            state.todos = state.todos.filter(todo => todo.completed === false);
        },
        clearAllTodos: state => {
            state.todos = [];

            localStorage.removeItem("todos");
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);

            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        toggleTodo: (state, action) => {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;

            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        createTodo: (state, action) => {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false
            });

            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        filterBy: (state, action) => {
            state.filter = action.payload;
        }


    }
});

export const {showAllTodos, showPendingTodos, showCompletedTodos, clearAllTodos, removeTodo, createTodo, toggleTodo, filterBy} = counterSlice.actions;

export default counterSlice.reducer;