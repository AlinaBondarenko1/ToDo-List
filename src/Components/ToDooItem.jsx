import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Button from "./Button";

const ToDoItem =() =>{
  
//   const [error, setError] = useState(null);
//   const [todos, setTodos] = useState([]); 
  
//   useEffect(() => {
//     const apiUrl = 'http://185.246.66.84:3000/abondarenko/tasks';
//     axios.get(apiUrl).then(res => setTodos(res.data))
//     .catch(err => setError(err))
// },[])

  return (
    <div className = "ToDoItem_container">
    {/* <input type="checkbox" /> 
                 <ul>
                    {todos.map(task =>(<li key={task.id}>{task.title} </li>))}
                </ul> */}
              <div className="list_wrapper">
                <ul>
                  <input type="checkbox" />
                  <li className ="list-item"> Text </li>
                </ul>
              </div>
    </div>
  )
}

export default ToDoItem;