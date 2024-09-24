import { useState } from "react";
import { Card } from "../card/Card";
import { Button } from "../Button/Button";
import { ButtonGroup } from "../Button/ButtonGroup";

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
      <Card title="Counter App">
        <h5 class="card-title">{count}</h5>
        <ButtonGroup>
          <Button variant="outline-primary" onClick={handleDecrement}>
            <i class="fa-solid fa-minus"></i>
          </Button>
          <Button variant="outline-primary" onClick={() => setCount(0)}>
            <i class="fa-solid fa-rotate-left"></i>
          </Button>
          <Button variant="outline-primary" onClick={handleIncrement}>
            <i class="fa-solid fa-plus"></i>
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
}
