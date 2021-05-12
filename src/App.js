import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './Components/Header.jsx'
import ToDoForm from './Components/ToDoForm'
import TodoList from './Components/TodoList.jsx'

function App() {
  const [todos, setTodos] = useState([
    {
      "id": 1,
      "sequence": 1,
      "title": "Task 1",
      "completed": true
    },
    {
      "completed": false,
      "title": "Task 2",
      "id": 2,
      "sequence": 2
    },
    {
      "completed": false,
      "title": "Task 3",
      "id": 3,
      "sequence": 3
    }
  ])

  return (
  <div className ="wrapper">
      <Header />
     <div>
        <ToDoForm todos ={todos} setTodos ={setTodos}/> 
      </div> 

  <TodoList todos={todos} />
  </div>
  );
}

export default App;
