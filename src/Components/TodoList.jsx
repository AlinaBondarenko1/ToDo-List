import React from 'react'



function TodoList({todos}) {
  return (
    <div>
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
