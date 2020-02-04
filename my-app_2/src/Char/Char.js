//jshint esversion: 6
import React from 'react';

const char = (props) => {
  const charStyle = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid red',
    textAlign: 'center'
  }
  return (
    <div style={charStyle} onClick={props.clicked}>
      {props.character}
    </div>
  )
}

export default char;