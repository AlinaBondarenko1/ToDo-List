import React from 'react'
import TodoItem from '../Components/TodoItem'


function TodoList({todos}) {
  return (
    <div className ='TodoList_container'>
        <ul>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo} 
                    />
                )
            })}
        </ul>
    </div>
  )
}

export default TodoList
