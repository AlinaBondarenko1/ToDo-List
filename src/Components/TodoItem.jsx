import React from 'react'

const styles = {
  li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',        
}
}


function TodoItem({todo}) {
  return (
    <div>
      <li style = {styles.li}>
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
