import { Button } from "bootstrap";
import PButton from "./PButton";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodDoItem1 from "./components/TodoItem1";

function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>

      <AddToDo></AddToDo>
      <TodDoItem1></TodDoItem1>
    </center>
  );
}

export default App;
