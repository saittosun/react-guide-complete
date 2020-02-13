// //jshint esversion: 6
// import React from 'react';
// // import './Person.css';
// // import styled from 'styled-components';
// import Radium from 'radium';

// // const StyledDiv = styled.div`
// //   width: 60%;
// //   margin: 16px auto;
// //   border: 1px solid #eee;
// //   box-shadow: 0 2px 3px #ccc;
// //   padding: 16px;
// //   text-align: center;
// //   @media (min-width: 500px) {
// //     width: 450px;
// //   }
// // `;

// const person = (props) => {//properties means the attributes you add on your component.props simply an object giving us access to all the attributes we pass to our own components.
//   // eslint-disable-next-line
//   const styleMediaQuery = {
//     '@media (min-width: 500px)': {width: '450px'}
//   }
//   return (
//     <div>
//       <div className="Person" style={styleMediaQuery}></div>
//       {/* <StyledDiv>
//           <p onClick={props.click}>she is {props.name} and I am {props.age} years old.</p>
//           <p>{props.children}</p>
//           <input type="text" onChange={props.changed} value={props.name} />
//       </StyledDiv> */}
//     </div>
//   )
// }
// export default Radium(person);
// // export default Radium(person);
// //we can't define javascript class in there or anything like that. We can execute one line expressions.
// //Children refers to any elements and this includes plain text as we have it here between the opening and closing tag of our component, and you could nest complex hmtl code in-between too. 
// //This doesn't have to be just text, could be unordered list with multiple list items, could be other react components, anything can go between here. And these children are now output with this syntax, of course you don't have to wrap it in a paragraph, you can use it anywhere in your jsx code
// //you can pass methods also as props so that you can call a method which might change the state in another component which doesn't have direct access to the state and which shouldn't have direct access to the state. It's a common pattern and it's important to know, you can pass down click handlers which allow you to change data in the parent component, in the app component in this case for the person component. Maybe we also want to pass a value to our function,
// //onChange will be fired whenever the value in this input changes.

//jshint esversion: 9
import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';

// import './Person.css';
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
      width: 450px;
  }
`

const person = ( props ) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    return (
      <StyledDiv>
        {/* <div className="Person" style={style}> */}
          <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
          <p>{props.children}</p>
          <input type="text" onChange={props.changed} value={props.name} />
        {/* </div> */}
      </StyledDiv>
    )
};

export default person;
