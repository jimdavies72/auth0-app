//import { useState } from 'react';
import './homePage.css'
import ToDoList from '../../components/todoList/todoList';

const Home = ({auth}) => {
  return (
    <>
      <h1>Home Page</h1>
      {auth ? (
        <ToDoList
          auth={auth}
        />
        
      ) : (
        <h1>Please Login</h1>
      )}
    </>
  )
}

export default Home;
