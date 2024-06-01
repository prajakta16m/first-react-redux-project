function AddToDo() {
  return (
    <div className="row">
      <div className="col-6">
        <input type="text" placeholder="Enter todo here"></input>
      </div>
      <div className="col-4">
        <input type="date"></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success">
          Success
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
