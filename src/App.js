import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './Components/Header.jsx'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList.jsx'
import axios from 'axios'
function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     "id": 1,
  //     "sequence": 1,
  //     "title": "Task 1",
  //     "completed": true
  //   },
  //   {
  //     "completed": false,
  //     "title": "Task 2",
  //     "id": 2,
  //     "sequence": 2
  //   },
  //   {
  //     "completed": false,
  //     "title": "Task 3",
  //     "id": 3,
  //     "sequence": 3
  //   }
  // ])

  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([]); 
  
  useEffect(() => {
    const apiUrl = 'http://185.246.66.84:3000/abondarenko/tasks';
    axios.get(apiUrl).then(res => setTodos(res.data))
    .catch(err => setError(err))
},[])

  return (
  <div className ="wrapper">
      <Header todos={todos}/>
      
     <div>
        <TodoForm todos ={todos} setTodos ={setTodos}/> 
      </div> 
      <h3>Актвные задачи</h3>
      <TodoList todos={todos}/>
      <h3>Завершенные задачи</h3>
  </div>
  );
}

export default App;
