import React from 'react'



function TodoItem({todo,todos,setTodos}) {

function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}

console.log('todo:',todo);
console.log('todos:',todos);

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
            <button onClick={removeTodo}>Удалить</button>
          </div>
      </li>
    </div>
  )
}

export default TodoItem;
