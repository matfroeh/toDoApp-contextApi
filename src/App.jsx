import AddToDo from "./components/AddToDo";
import FilterComponent from "./components/FilterComponent";
import ToDoList from "./components/ToDoList";
import { AppContextProvider } from "./context/AppContext";

// Additional challenges
// Save the todos list in localStorage
//  Whenever you add a new todo, add it also in the array you keep in localStorage
//  Initialise the value of todos in state to the array in localStorage or an empty array if there’s nothing there yet
//  On toggling a todo status, also modify localStorage
// Conditionally render the text in the todo item with the class line-through if its completed status is true

const App = () => {

  return (
    <div className="container mx-auto p-4">
      <AppContextProvider>
        <AddToDo />
        <FilterComponent />
        <ToDoList />
      </AppContextProvider>
    </div>
  );
};

export default App;
