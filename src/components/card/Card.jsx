import { useState } from "react";
import { Button } from "../Button/Button";
export const Card = ({ title, children }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <span>{title}</span>
          <Button variant="outline-secondary" onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </Button>
        </div>
        <div className="card-body">{show && children}</div>
      </div>
    </div>
  );
};
