//jshint esversion: 6
import React, { Component } from 'react';
import './App.css';

class Appp extends Component {
  state = {
    userInput: ''
  }
  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
  }
  render() {
    const charList = this.state.userInput.split('')
      .map((char, i) => {
        return (
          <Char 
            character={char}
            key={i}
            clicked={() => this.deleteCharHandler(i)} />
        )
      })
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        {<p>{this.state.userInput}</p>}
        {charList}
      </div>
    )
  }
}

export default Appp;