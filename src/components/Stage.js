import React, { useState } from "react";
import { connect } from 'react-redux';

import Task from "./Task";
import { Card, Button, InputGroup, Collapse } from "@blueprintjs/core";
import { store, NUM_STAGES } from "../App.js";

const Stage = (props) => {
  const { name, stageId, main } = props;
  const [show, setShow] = useState(false);
  const [taskSelected, setTaskSelected] = useState(null);
  const [newTask, setNewTask] = useState(null)

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
  function onClickTask(task) {
    setTaskSelected(task)
  }
  function onClickDelete() {
    deleteTask(taskSelected)
    main.forceUpdate()
    //revisit
    setTaskSelected(null)
  }
  function deleteTask(task) {
    let ourStore = store[stageId]
    store[stageId] = ourStore.filter((item) => {
      return item !== task
    })
  }
  function onClickRight() {
    if (stageId < NUM_STAGES) {
      deleteTask(taskSelected)
      store[stageId + 1].push(taskSelected)
      main.forceUpdate()
      setTaskSelected(null)
    }
  }
  function onClickLeft() {
    if (stageId > 0) {
      deleteTask(taskSelected)
      store[stageId - 1].push(taskSelected)
      main.forceUpdate()
      setTaskSelected(null)
    }
  }
  function clickConfirm() {
    store[stageId].push(newTask);
    main.forceUpdate()
    setTaskSelected(null)
    setShow(false);
  }

  function onInputChange(e) {
    console.log(e.target.value)
    setNewTask(e.target.value);
  }

  // console.log(stageId, store)
  const result = store[stageId].map(item => {
    return <Card onClick={() => onClickTask(item)}><Task name={item}> </Task></Card>
  })
  const confirmationButton = <Button data-testid={newTaskInputConfirmTestId} onClick={clickConfirm}>Confirm</Button>

  console.log(props)
  return (
    <Card>
      <div data-testid={stageTestId}>
        {name}
        <Collapse isOpen={taskSelected !== null}>
          <Button data-testid={moveLeftButtonTestId} onClick={onClickLeft}>{'<'} Back</Button>
          <Button data-testid={moveRightButtonTestId} onClick={onClickRight} >{'>'} Forward</Button>
          <Button data-testid={deleteButtonTestId} onClick={onClickDelete}>Delete</Button>
        </Collapse>
        {result}
        <Collapse isOpen={show}>
          <InputGroup data-testid={newTaskInputTestId} onChange={onInputChange} rightElement={confirmationButton} />
        </Collapse>
        <Collapse isOpen={!show}>
          <Button data-testid={addButtonTestId} onClick={onClickAdd}>Add Task</Button>
        </Collapse>

      </div>
    </Card>
  );


};

const mapStateToProps = (state) => {
  return {
    tasks: state.Tasks
  }
}

export default connect(mapStateToProps)(Stage);
