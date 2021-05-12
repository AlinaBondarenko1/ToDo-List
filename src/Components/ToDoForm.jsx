import styles from '../assets/css/TodoForm.module.css';
import React, {useState} from 'react'
import Button from "./Button";

function ToDoForm({todos,setTodos}) {

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
  title: input,
  id: Date.now(),
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

export default ToDoForm
