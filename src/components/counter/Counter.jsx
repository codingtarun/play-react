import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <div class="card">
        <div class="card-header">Counter App</div>
        <div class="card-body">
          <h5 class="card-title">{count}</h5>
          <div className="btn-group">
            <button
              className="btn btn-outline-primary"
              onClick={handleDecrement}
            >
              <i class="fa-solid fa-minus"></i>
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => setCount(0)}
            >
              <i class="fa-solid fa-rotate-left"></i>
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={handleIncrement}
            >
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
