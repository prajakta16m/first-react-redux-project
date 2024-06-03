import { useState } from "react";

function AddToDo({ onAdd }) {
  const [nameVal, setNameVal] = useState("prajakta");
  const [taskDate, setNewDate] = useState(undefined);

  function addItem() {
    // alert("add works");
    console.log(nameVal);

    onAdd({
      name: nameVal,
      date: taskDate,
    });
  }

  return (
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter todo here"
          value={nameVal}
          onChange={(v) => setNameVal(v.target.value)}
        ></input>
      </div>
      <div className="col-4">
        <input
          type="date"
          value={taskDate}
          onChange={(d) => {
            setNewDate(d.target.value);
          }}
        ></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success" onClick={addItem}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
