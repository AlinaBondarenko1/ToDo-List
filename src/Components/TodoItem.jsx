import React from 'react'



function TodoItem({todo}) {
  return (
    <div>
      <li>
                <span>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                    />
                    { todo.title }
                </span>
                <span>
                    <button>Редактировать</button>
                    <button className="button-delete" >Удалить</button>
                </span>
      </li>
    </div>
  )
}

export default TodoItem
