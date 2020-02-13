// jshint esversion: 6
import React from 'react';

const valid = (props) => {
  let validMessage = 'text is long enough';
  if (props.inputLength <= 5) {
    validMessage = 'text is too short';
  }
  return (
    <div>
      <p>{validMessage}</p>
    </div>
  )
}

export default valid;