import './todoItem.css';

const TodoItem = ({item}) => {
  return (
    <>
      <h3>{item.title}</h3>
      <h3>{item.completed}</h3>
    </>
  );
}

export default TodoItem;