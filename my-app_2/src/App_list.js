//jshint esversion: 9
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'ayla', age: 10},
      {id: '2', name: 'esat', age: 14},
      {id: '3', name: 'esra', age: 38}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;//bu gercek state aldigi icin kotu cunku  in javascript, objects and arrays are reference types so we shouldn't mutate them directly because we only get a pointer when we reach out to person here and hence we would mutate the original object to which this pointer points. So the better approach is to create a new javascript object like this and then use this spread operator
    // const persons = this.state.persons.slice();//kopyasini olusturuyor
    //You should always update state in an immutable fashion, so without mutating the original state first. Create a copy, change that and then update the state with setState.
    // const persons = this.state.persons.splice();The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    const persons = [...this.state.persons]//es6 spread operator is the best
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    // const person = this.state.persons[personIndex]//don't do this
    // const person = Object.assign({}, this.state.persons[personIndex])
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    //Set state with an object where we only set showPersons does not mean that the entire state gets replaced with showPersons only, the old state persons, another state simply is not touched, react merges the updated showPersons value for us into this state,
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    //everything inside the render method gets executed whenever react re-renders this component and therefore we could take advantage of this, we can add some code here before we return something.
    // eslint-disable-next-line
    const styleButton = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                //I will again use this function syntax to conveniently pass that data. Now this function here, the overall function is the one which gets executed upon the onChange event. So here is where we get the event object just as we before got it when we didn't assign any function at all directly in the nameChangedHandler, now we get it here because this is now the first function which gets executed, this anonymous function we define here.bu kadar aciklamayi asagidaki event arg icin yaptik
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            )
            // return React.createElement('div', {className: App}, .....)
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <button 
          onClick={this.togglePersonHandler}
          // eslint-disable-next-line
          style={styleButton}>toggle-persons</button>
        {/* {//here is we simply take advantage of the fact that all we write here is in the end javascript and we can interject javascript expressions into jsx with single curly braces, you learned that. This means we can of course access any javascript property and use it in a ternary expression.
          this.state.showPersons ?
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'max!')}
              changed={this.nameChangedHandler}>my hobby is game</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} />
          </div> : null
        } */}
        {persons}
      </div>
    );
  }
}

export default App;
