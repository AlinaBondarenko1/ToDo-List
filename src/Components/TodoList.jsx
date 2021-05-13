import React from 'react'
import TodoItem from '../Components/TodoItem'


function TodoList({todos, setTodos}) {


    const removeTodo = (todos,id) =>{
        debugger
        setTodos(todos.filter(todo => todo.id !== id))
          
      }

debugger
  return (
    <div className ='TodoList_container'>
        <ul>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo} 
                        removeTodo = {removeTodo}
                        todos = {todos} 
                    />
                )
            })}
        </ul>
    </div>
  )
}

export default TodoList
