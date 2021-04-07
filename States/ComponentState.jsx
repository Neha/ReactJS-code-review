import React, { useState } from "react";

const Button = (props) => {
  const { text } = props;
  
  const newText = 'Booked';

  const [ newText, setState ] = useState({text});

  const changeText = () => {
    setState(newText);
  }
  
  return(
    <button onClick={changeText}>{ text }</button>
  );
};

export default Button;