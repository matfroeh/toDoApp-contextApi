import { useApp } from "../context/AppContext";

const ToDoItem = ({ todo }) => {
  const { toggleTodo } = useApp();
  
  return (
    <li className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="mr-2"
      />
      {todo.text}
    </li>
  );
};

export default ToDoItem;
