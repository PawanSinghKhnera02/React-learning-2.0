import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
// import TodoItem from "./TodoItem";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      Name: "Buy Milk",
      dueDate: "20/12/2025",
    },
    {
      Name: "Go to College",
      dueDate: "10/12/2025",
    },
    {
      Name: "Study JS",
      dueDate: "01/12/2025",
    },
  ];
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItems todoItems={todoItems} />
      </div>
    </center>
  );
}

export default App;
