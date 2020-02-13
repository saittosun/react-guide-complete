// //jshint esversion: 9
// import React, { Component } from 'react';
// import classes from './App.css';
// import Person from './Person/Person';
// // import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';

// // const StyledButton = styled.button`
// //   background-color: ${props => props.alt ? 'red' : 'green'};
// //   color: white;
// //   font: inherit;
// //   border: 1px solid blue,
// //   padding: 8px;
// //   cursor: pointer;
// //   &:hover {
// //     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
// //     color: black;
// //   }
// // `;

// class App extends Component {
//   state = {
//     persons: [
//       {id: '1', name: 'ayla', age: 10},
//       {id: '2', name: 'esat', age: 14},
//       {id: '3', name: 'esra', age: 38}
//     ],
//     otherState: 'some other value',
//     showPersons: false
//   }

//   deletePersonHandler = (personIndex) => {
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({persons: persons});
//   }

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(person => {
//       return person.id === id;
//     });
//     const person = {
//       ...this.state.persons[personIndex]
//     }
//     person.name = event.target.value;
//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState({persons: persons});
//   };

//   togglePersonHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow});
//   }

//   render() {
//     // eslint-disable-next-line
//     const styleButton = {
//       backgroundColor : 'green',
//       color: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer',
//       ':hover': {
//         backgroundColor: 'lightgreen',
//         color: 'black'
//       }
//     }

//     let persons = null;
//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <Person 
//                 click={() => this.deletePersonHandler(index)}
//                 name={person.name}
//                 age={person.age}
//                 key={person.id}
//                 changed={(event) => this.nameChangedHandler(event, person.id)}
//               />
//             )
//           })}
//         </div>
//       );
//       //bu sekilde style dinamik hale getirdik
//       styleButton.backgroundColor = 'red';
//       styleButton[':hover'] = {
//         backgroundColor: 'salmon',
//         color: 'black'
//       };
//     }

//     // eslint-disable-next-line
//     // let classes = ['red', 'bold'].join(' ');//ciktisi "red bold"
//     // setting class names dynamically
//     const assignedClasses = [];
//     if (this.state.persons.length <= 2) {
//       assignedClasses.push(classes.red);//classes = ['red']
//     }
//     if (this.state.persons.length <= 1) {
//       assignedClasses.push(classes.bold);//classes = ['red', 'bold'] oncesinde => classes.bold degil 'bold' du.
//     }

//     return (
//       <StyleRoot>
//         <div className={classes.App}>
//             <p className={assignedClasses.join(' ')}>this is working</p>
//             <button 
//               style={styleButton}
//               className={classes.Button}
//               // eslint-disable-next-line//style={styleButton}
//               onClick={this.togglePersonHandler}
//               >toggle-persons</button>
//             {/* <StyledButton 
//               onClick={this.togglePersonHandler}
//               alt={this.state.showPersons}>toggle-persons
//             </StyledButton> */}
//             {persons}
//           </div>
//       </StyleRoot>
//     );
//   }
// }

// // export default Radium(App);//this is called a higher order component,
// export default Radium(App);//this is called a higher order component,{/* <StyleRoot> */}

/////////////
//jshint esversion: 9
import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
    color: black;
  }
`

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map( ( person, index ) => {
            return <Person
              click={() => this.deletePersonHandler( index )}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={( event ) => this.nameChangedHandler( event, person.id )} />
          } )}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if ( this.state.persons.length <= 2 ) {
      classes.push( 'red' ); // classes = ['red']
    }
    if ( this.state.persons.length <= 1 ) {
      classes.push( 'bold' ); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join( ' ' )}>This is really working!</p>
        <StyledButton
          onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
