import './todoList.css';
import { useState, useEffect } from 'react';
import { fetcher } from '../../utils'
import ToDoCard from '../todoItem/todoItem';


const TodoList = ({auth}) => {
  const [todo, setTodo] = useState([]);
  
  const getData = async () => {
    if (!auth) {
      return null
    }
    const data = await fetcher(
      "/todos/get", 
      {userid: "auth0|666830ab14e5d9b2b6bcd851"},
      "POST"
    );
    setTodo(data.todos);
    console.log(data.todos);
  }
  
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <h1>ToDoList</h1>
      <h1>{auth}</h1>
      {todo.map((item, index) => (
        <ToDoCard 
          key={item._id}
          item={item}
        />
      ))}
    </>
  )
}

export default TodoList;