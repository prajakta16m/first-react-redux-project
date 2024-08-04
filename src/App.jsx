import { Alert, Button } from "bootstrap";
import PButton from "./PButton";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodDoItem1 from "./components/TodoItem1";
import AlertModal from "./components/Alert";
import { Task } from "./classes/Task";
import { useEffect, useState } from "react";

function App() {
  let Tasks = [
    { todoName: "Study", todoDate: new Date() },
    { todoName: "Get groceries", todoDate: new Date() },
    { todoName: "Cook food", todoDate: new Date() },
  ];

  let [TasksList, setTasksList] = useState([]);

  let [myname, setMyname] = useState("Prajakta");

  function onAddItem(item) {
    console.log("item", item);
    setTasksList([...TasksList, item]);

    setMyname("xyz");
  }

  let onRemoveItem = (item) => {
    console.log("remove", item);

    setTasksList((TasksList) =>
      TasksList.splice(
        TasksList.findIndex(
          (e) => e.name === item.name && e.date === item.date
        ),
        1
      )
    );
  };

  useEffect(() => {
    console.log("TaskList", TasksList);
  }, [TasksList]);

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
