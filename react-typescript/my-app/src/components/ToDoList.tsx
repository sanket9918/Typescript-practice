import React from 'react'

interface TodoListProps {
    items: { id: string, text: string }[];
    onDeleteTodo: (id: string) => void
}
const TodoList: React.FC<TodoListProps> = props => {

    return (<ul>
        {props.items.map((e) => (
            <li key={e.id}>
                <span>{e.text}</span>
                <button onClick={props.onDeleteTodo.bind(null, e.id)}>DELETE</button>
            </li>
        ))}
    </ul>)
}

export default TodoList