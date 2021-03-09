import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Table from "./Table.js";
import "./style.css";
import TestComponent from "./testComponent.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [
        { name: "Charlie", job: "Janitor" },
        { name: "Mack", job: "Bouncer" },
        { name: "Dee", job: "Aspring actress" },
        { name: "Dennis", job: "Bartender" }
      ]
    };
  }
  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="">
        <h1 className="">
          <TestComponent />
          <Hello name={this.state.name} />{" "}
        </h1>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not on
        </p>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
