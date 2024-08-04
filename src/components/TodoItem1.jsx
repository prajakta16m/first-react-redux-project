import styles from "./TodoItem1.module.css";
import { Task } from "../classes/Task";

function TodDoItem1({ tasksList, myname, onRemoveItem }) {
  let todoName = "Get groceries";
  let todoDate = "";

  let time = new Date();

  // This is where importance of Typescript is understood !
  if (tasksList.length === 0) {
    return <p>No items found</p>;
  }

  function deleteTask(item) {
    console.log(item);
    onRemoveItem(item);
  }

  return (
    <>
      {" "}
      <p>{myname}</p>
      <p>{tasksList.length}</p>
      {tasksList.length > 0 &&
        tasksList.map((task) => (
          <div key={task.name} className={`row ${styles.row_custom}`}>
            <div className="col-6">{task.name}</div>
            <div className="col-4">{task.date}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  deleteTask(task);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default TodDoItem1;
