import { useContext, createContext } from "react";

export const TodoContext = createContext({ // here you can see, we have created context name TodoContext, where we have assigned some property (todos which is an array having object inside) and functions (addTodo, updateTodo, etc...)
    todos: [{}],
    addTodo: (todo) => { }, // todo message will be passed to addTodo function
    updateTodo: (id, todo) => { }, // same here id and todo will be passed to updateTodo
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
})


export const useTodo = () => { // to use the context functions or methods and values, we will use function useContext, so we can also fetch the function and even we can send the value to the variable of context
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider // Context provider which is going to use in App.jsx, where we will define the Todo Context functions or methods such as addTodo()

// export default { TodoContext, useTodo, TodoProvider } // instead of exporting here, we have created index.js file, there will will export all context