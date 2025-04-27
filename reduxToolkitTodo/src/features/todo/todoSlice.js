import { createSlice, nanoid } from '@reduxjs/toolkit'
// reducers are the redux toolkit method
const initialState = { //initialState object is a state variable
    todos: [{id:1, text: "Hello World"}]
}

export const todoSlice = createSlice({ // inside createSlice method most of the time, there will objects
    name: 'todo',
    initialState, // define initialState object as a state variable in addTodo function
    reducers: {
        addTodo: (state, action) => { // state and action is a syntax of reduxToolkit, which will going to be used every time. state variable gives present values of initialState and action variable will give return values like "id", "text"
            const todo = {
                id: nanoid(), // id should be unique by using nanoid() function
                text: action.payload // will will take a todo text value from action variable, where (action.payload) payload is an object
            }
            state.todos.push(todo)
        }, 

        removeTodo: (state, action) => { // state: current state of the state(initialState) & action: data passed from inputs
            state.todos = state.todos.filter((todo) => todo.id !== action.payload ) // where action.payload will be id, which was given to the action variable of removeTodo
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.id ? {...todo, text: action.payload} : todo )
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer


