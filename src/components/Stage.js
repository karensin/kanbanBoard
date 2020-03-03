import React, { useState } from "react";

import Task from "./Task";
import { Card, Button, InputGroup, Collapse } from "@blueprintjs/core";
import { store } from "../App.js";

const Stage = ({ name, stageId }) => {
  const [show, setShow] = useState(false);
  const [showButtons, setShowButtons] = useState(false)
  const stageTestId = `stage-${stageId}`;
  const addButtonTestId = `${stageTestId}-add-button`;
  const newTaskInputTestId = `${stageTestId}-new-task-input`;
  const newTaskInputConfirmTestId = `${stageTestId}-new-task-input-confirm`;
  const moveLeftButtonTestId = `${stageTestId}-move-left`;
  const moveRightButtonTestId = `${stageTestId}-move-right`;
  const deleteButtonTestId = `${stageTestId}-delete`;

  function onClickAdd() {
    setShow(true)
  }
  function onClickTask() {
    setShowButtons(true)
  }
  console.log(stageId, store)
  const result = store[stageId].map(item => {
    return <Card onClick={onClickTask}>  <Task name={item}> </Task></Card>
  })
  return (
    <Card>
      <div data-testid={stageTestId}>
        <Collapse isOpen={showButtons}>
          <Button data-testid={moveLeftButtonTestId}>{'<'} Back</Button>
          <Button data-testid={moveRightButtonTestId} >{'>'} Forward</Button>
          <Button data-testid={deleteButtonTestId}>Delete</Button>
        </Collapse>

        {name}
        {result}
        <Collapse isOpen={show}>
          <InputGroup data-testid={newTaskInputTestId} />
        </Collapse>
        <Button data-testid={addButtonTestId} onClick={onClickAdd} >Add Task</Button>

      </div>
    </Card>
  );


};

export default Stage;
