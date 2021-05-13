import styles from '../assets/css/Header.module.css';
import React from 'react'


const Header =({todos}) =>{
  return (
<header className={styles.header}>
  <h1>TODO List</h1>
  <p>Список задач:{todos.length}</p>
</header>
  )
}

export default Header;