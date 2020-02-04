//jshint esversion: 6
import React from 'react';
import './Person.css';

const person = (props) => {//properties means the attributes you add on your component.props simply an object giving us access to all the attributes we pass to our own components.
  return (
    //you can pass methods also as props so that you can call a method which might change the state in another component which doesn't have direct access to the state and which shouldn't have direct access to the state. It's a common pattern and it's important to know, you can pass down click handlers which allow you to change data in the parent component, in the app component in this case for the person component. Maybe we also want to pass a value to our function,
    //onChange will be fired whenever the value in this input changes.
    <div className="Person">
      <p onClick={props.click}>she is {props.name} and I am {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}
export default person;
      //we can't define javascript class in there or anything like that. We can execute one line expressions.
      //Children refers to any elements and this includes plain text as we have it here between the opening and closing tag of our component, and you could nest complex hmtl code in-between too. 
      //This doesn't have to be just text, could be unordered list with multiple list items, could be other react components, anything can go between here. And these children are now output with this syntax, of course you don't have to wrap it in a paragraph, you can use it anywhere in your jsx code