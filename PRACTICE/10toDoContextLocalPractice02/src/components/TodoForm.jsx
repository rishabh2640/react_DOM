import React, { useState } from 'react'
import { useTodo } from '../context/todoContext';

function TodoForm() {

    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()


    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({ todo, complete: false })
        setTodo("")
    }

    return (
        <form className="flex">
            <input
                type="text"
                placeholder="Write your Tasks to be done......"
                className='w-full border border-white/20 rounded-l-lg px-3 outline-none duration-150 bg-white/15 py-1.5'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type='submit' className='rounded-r-lg px-3 py-1 bg-green-700 text-white shrink-0'
                onClick={add}>
                Add
            </button>
        </form>
    );
}

export default TodoForm 