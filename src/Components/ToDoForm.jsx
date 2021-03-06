import styles from '../assets/css/TodoForm.module.css';
import React, {useState} from 'react'
import Button from "./Button";

function TodoForm({todos,setTodos}) {

const [input, setInput] = useState('')

const handleChange = e => {
  setInput(e.target.value);
};

const handleSubmit = e => {
  e.preventDefault();
};

const addTodo = () =>{
console.log(input);
  setTodos(todos.concat([{
      id: Date.now(),
      title: input,
      completed: false,
      sequence: todos.length
  }]))
  setInput('')
};

  return (
    
    <form className ={styles.todo_form} onSubmit ={handleSubmit}>
      <input type="text" 
      placeholder ="Задача..."
      value ={input}
      className ={styles.todo_input}
      onChange = {handleChange}
      />
       <Button type="submit" text="Добавить" onClick={addTodo}/>
    </form>
  )
}

export default TodoForm;