import React from "react";
import { Callout, Card, Button } from "@blueprintjs/core";

const SELECTED_COLOR = "#106ba3";
const Task = ({ name }) => {
  const taskTestId = `task-${name.split(" ").join("-")}`;

  return (
    <div key={taskTestId.toLowerCase} data-testid={taskTestId.toLowerCase()}>{name}</div>

  );
};

export default Task;
