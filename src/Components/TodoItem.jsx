import React from 'react'



function TodoItem({todo,removeTodo,todos}) {

// const removeTodo = (todo) =>{
//   // setTodos(todos.filter(todo => todo.id !== id))
// }

  return (
    <div>
      <li>
          <div>
            <input
            type="checkbox"
            // checked={todo.completed}/>
            />
                {todo.title }
          </div>
          <div>
            <button>Редактировать</button>
            <button onClick={() => removeTodo(todos, todo.id)}>Удалить</button>
          </div>
      </li>
    </div>
  )
}

export default TodoItem;
