import './todoList.css';
import { useState, useEffect } from 'react';
import { fetcher } from '../../utils'
import ToDoCard from '../todoItem/todoItem';

const getData = async () => {
  const data = await fetcher(
    "/todos/get", 
    {userid: "auth0|666830ab14e5d9b2b6bcd851"},
    "POST"
  );
  setToDo(data);
}

useEffect(() => {
  getData();
}, [todo])

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  return (
    <>
      <h1>ToDoList</h1>
      {todo.map((item, index) => (
        <ToDoCard 
          key={index}
          item={item}
        />
      ))}
    </>
  )
}

export default TodoList;