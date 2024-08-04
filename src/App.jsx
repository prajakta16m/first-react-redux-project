import { Alert, Button } from "bootstrap";
import PButton from "./PButton";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodDoItem1 from "./components/TodoItem1";
import AlertModal from "./components/Alert";
import { Task } from "./classes/Task";
import { useState } from "react";

function App() {
  let Tasks = [
    { todoName: "Study", todoDate: new Date() },
    { todoName: "Get groceries", todoDate: new Date() },
    { todoName: "Cook food", todoDate: new Date() },
  ];

  let [TasksList, setTasksList] = useState([]);

  let [myname, setMyname] = useState("Prajakta");

  function onAddItem(item) {
    setTasksList([...TasksList, item]);
    console.log("TaskList = ", TasksList);
    setMyname("xyz");
  }

  let onRemoveItem = (item) => {
    console.log(TasksList);

    setTasksList((TasksList) => TasksList.splice(TasksList.indexOf(item), 1));
    console.log("TaskList = ", TasksList);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo onAdd={onAddItem}></AddToDo>
      <TodDoItem1
        tasksList={TasksList}
        myname={myname}
        onRemoveItem={onRemoveItem}
      ></TodDoItem1>
    </center>
  );
}

export default App;
