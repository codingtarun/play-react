import { useState } from "react";
import { Card } from "../card/Card";
import { Form } from "../Form/Form";
import { InputText } from "../Input/InputText";
import { ButtonGroup } from "../Button/ButtonGroup";

export function Task({ title }) {
  let taskList = [];
  const [tasks, setTasks] = useState(taskList);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  const [inputTask, setInputTask] = useState("");
  function handleReset() {
    setInputTask("");
  }
  function handleInput(e) {
    setInputTask(e.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 1000),
      task: inputTask,
      isComplete: false,
    };
    setTasks([...tasks, task]);
    setInputTask("");
  }
  return (
    <div>
      <Card title="Task List">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
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
        </form>
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              className="list-group-item d-flex justify-content-between shadow-sm mb-1"
              key={task.id}
            >
              <span
                className={
                  task.isComplete ? "text-decoration-line-through" : ""
                }
              >
                {task.task}
              </span>
              <div className="btn-group">
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(task.id)}
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
