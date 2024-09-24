import { useState } from "react";

export function Task() {
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
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <span>Task List</span>
          <button className="btn btn-sm btn-outlne-secondary">View All</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">Task List</h5>
          <ul className="list-group">
            {tasks.map((task) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={task.id}
                onClick={() => handleDelete(task.id)}
              >
                <span className="text-decoration-line-through">
                  {task.task}
                </span>
                <div className="btn-group">
                  <button className="btn btn-sm btn-outline-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
