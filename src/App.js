import React, { Component } from "react";
import { Card, Button, InputGroup } from "@blueprintjs/core";

import "./App.css";
import Stage from "./components/Stage";

export const NUM_STAGES = 4;
export const STAGE_NAMES = ["Backlog", "To Do", "Ongoing", "Done"];


export let store = {
  0: ['Task 1', 'Task 2'],
  1: ['Task 3'],
  2: ['Task 4'],
  3: []
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    let result = [];
    for (let i = 0; i < NUM_STAGES; i++) {
      result.push(<Stage stageId={i} name={STAGE_NAMES[i]} main={this} />)

    }
    return (
      <div className="App">
        <h1>Kanban board</h1>

        <div
          style={{
            display: "flex"
          }}
        >
          {result}

        </div>
      </div>
    );
  }
}

export default App;
