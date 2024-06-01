function TodDoItem1({ tasksList }) {
  let todoName = "Get groceries";
  let todoDate = "";

  let time = new Date();

  if (tasksList.length === 0) {
    return <p>No items found</p>;
  }

  return (
    <>
      {tasksList.map((task) => (
        <div key={task.todoName} className="row">
          <div className="col-6">{task.todoName}</div>
          <div className="col-4">{task.todoDate.toDateString()}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodDoItem1;
