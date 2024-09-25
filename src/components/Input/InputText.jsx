import { useState } from "react";
import { ButtonGroup } from "../Button/ButtonGroup";
import { Button } from "../Button/Button";

export const InputText = () => {
  const [inputTask, setInputTask] = useState("");
  function handleReset() {
    setInputTask("");
  }
  function handleInput(e) {
    setInputTask(e.target.value);
  }
  return (
    <div className="input-group mb-3 shadow-sm">
      <input
        type="text"
        className="form-control"
        placeholder="Add Task"
        aria-label="Add New Task"
        aria-describedby="add-task"
        id="task"
        name="task"
        autoComplete="off"
        onChange={handleInput}
        value={inputTask}
      />
      <ButtonGroup>
        <button className="btn btn-sm btn-outline-primary" type="submit">
          Add Task
        </button>
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={handleReset}
        >
          Reset
        </button>
      </ButtonGroup>
    </div>
  );
};
