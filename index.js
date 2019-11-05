import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Table from './Table.js';
import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="">
      <h1  className = "">
        <Hello name={this.state.name} /> </h1>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not on
        </p>
        <Table />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
