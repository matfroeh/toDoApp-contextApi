import ToDoItem from "./ToDoItem";
import { useApp } from "../context/AppContext";

const ToDoList = () => {
  const { filteredTodos } = useApp();

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
