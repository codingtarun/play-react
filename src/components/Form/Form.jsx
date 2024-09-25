import { useState } from "react";

export const Form = ({ children, handleFormSubmit }) => {
  const [parentState, setParentState] = useState("");
  return (
    <div>
      <form handleSubmit={handleFormSubmit}>{children}</form>
    </div>
  );
};
