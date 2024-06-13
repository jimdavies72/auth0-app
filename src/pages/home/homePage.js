import { useState } from 'react';
import './homePage.css'
import ToDoList from '../../components/todoList/todoList';

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <ToDoList />
    </>
  )
}

export default Home;
