import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/ToDoList';
import { Todo } from './todoModel'


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])


  const todoAddHandler = (text: string) => {
    setTodos(prevTodo => [...prevTodo, { id: Math.random().toString(), text: text }])

  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => {
        return todo.id !== todoId
      })
    })
  }
  return <div className="App">
    <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    <NewTodo onAddTodo={todoAddHandler} />
  </div>
    ;
}

export default App;
