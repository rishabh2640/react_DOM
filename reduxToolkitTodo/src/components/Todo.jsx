import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()
    return (
        <>
            <div className='text-center'>Todo List</div>

            {todos.map(todo => (
                <li key={todo.id} className='text-center'>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        ❌
                    </button>
                </li>
            ))}
        </>
    )
}

export default Todo