import { configureStore } from '@reduxjs/toolkit' // Configure store is a redux toolkit function
import todoReducer from '../features/todo/todoSlice' // this is a exported default in todoSlice.js file as a todoSlice.reducer, that's why we can name it here as todoReducer which has the value of todoSlice.reducer 

export const store = configureStore({
    reducer: todoReducer
})
