function TodDoItem1() {
  let todoName = "Get groceries";
  let todoDate = "";

  let Tasks = [
    { todoName: "Study", todoDate: new Date() },
    { todoName: "Get groceries", todoDate: new Date() },
    { todoName: "Cook food", todoDate: new Date() },
  ];

  let time = new Date();

  return (
    <>
      {Tasks.map((task) => (
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
