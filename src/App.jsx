import { Alert, Button } from "bootstrap";
import PButton from "./PButton";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodDoItem1 from "./components/TodoItem1";
import AlertModal from "./components/Alert";

function App() {
  let Tasks = [
    { todoName: "Study", todoDate: new Date() },
    { todoName: "Get groceries", todoDate: new Date() },
    { todoName: "Cook food", todoDate: new Date() },
  ];
  //Tasks = [];

  return (
    <center className="todo-container">
      <AppName></AppName>

      <AddToDo></AddToDo>
      <TodDoItem1 tasksList={Tasks}></TodDoItem1>

      <AlertModal>This is alert</AlertModal>
    </center>
  );
}

export default App;
