// //jshint esversion: 6
// import React, { Component } from 'react';
// import './App.css';

// class Appp extends Component {
//   state = {
//     userInput: ''
//   }
//   inputChangedHandler = (event) => {
//     this.setState({userInput: event.target.value})
//   }
//   render() {
//     const charList = this.state.userInput.split('')
//       .map((char, i) => {
//         return (
//           <Char 
//             character={char}
//             key={i}
//             clicked={() => this.deleteCharHandler(i)} />
//         )
//       })
//     return (
//       <div className="App">
//         <input
//           type="text"
//           onChange={this.inputChangedHandler}
//           value={this.state.userInput}
//         />
//         {<p>{this.state.userInput}</p>}
//         {charList}
//       </div>
//     )
//   }
// }

// export default Appp;

// jshint esversion: 6
import React, { Component } from 'react';
import './App.css';
import Valid from './Validation/Valid';
import Charr from './Char/Charr';

class Appp extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (e) => {
    this.setState({userInput: e.target.value});
  }

  deleteCharHandler(index) {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})
  }

  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return (
        <Charr 
          character={char}
          key={index}
          clicked={() => this.deleteCharHandler(index)}/>
      )
    })
    return (
      <div className="App">
        <input 
          type="text"
          value={this.state.userInput}
          onChange={this.inputChangedHandler}/>
        <Valid 
          inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    )
  }
}

export default Appp;
