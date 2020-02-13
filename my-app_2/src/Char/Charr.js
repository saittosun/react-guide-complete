//jshint esversion: 6
import React from 'react';

const charr = (props) => {
  const charStyle = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid pink',
    textAlign: 'center'
  }
  return (
    <div style={charStyle}
      onClick={props.clicked}>
      {props.character}
    </div>
  )
}

export default charr;