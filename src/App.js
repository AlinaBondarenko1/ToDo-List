import './App.css';
import React, {useState, useEffect} from 'react'
import ToDoItem from './Components/ToDoItem.jsx'
import Header from './Components/Header.jsx'
import ToDoForm from './Components/ToDoForm.jsx'
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
      {/* <div>
        <ToDoForm /> 
        <ToDoItem /> 
        <ToDoItem /> 
        <ToDoItem /> 
      </div> */}

  <TodoList todos={todos} />
  </div>
  );
}

export default App;
