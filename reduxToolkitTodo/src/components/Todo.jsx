import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { createAction } from '@reduxjs/toolkit';

function Todo() {
    
    const updateTodo = createAction('todos/updateTodo', (id, text) => ({
        payload: { id, text },
    }));
    const [isEditable, setIsEditable] = useState(false)
    const [edtiText, setEditText] = useState("")
    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()

    return (
        <>
            <div className='text-center'>Todo List</div>
            
            {todos.map(todo => (
                <li key={todo.id} className='text-center'>
                    {todo.text}
                    <button onClick={(e) => dispatch(updateTodo(todo.id), setEditText(e.target.value))}>
                        📝
                    </button>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        ❌
                    </button>
                </li>
            ))}
        </>
    )
}

export default Todo