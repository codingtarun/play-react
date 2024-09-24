import { useState } from "react";
import { Card } from "../card/Card";

export function Task({ title }) {
  let taskList = [
    {
      id: 1,
      task: "Learn React",
      isComplete: false,
    },
    {
      id: 2,
      task: "Learn Core PHP",
      isComplete: false,
    },
    {
      id: 3,
      task: "Learn Laravel",
      isComplete: true,
    },
  ];
  const [tasks, setTasks] = useState(taskList);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <div>
      <Card title="Task List">
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
