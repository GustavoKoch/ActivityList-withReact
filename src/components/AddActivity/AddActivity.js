import React from 'react';
import { useState } from 'react';
import "./AddActivity.css";

function AddActivity ()  {
    const [input, setInput] = useState(''); // '' is the initial state value
    const handleClick = (event) => {
      /* Insert component Activity */;
      event.preventDefault();
      
      console.log(input);
    };

    return (
      <form>
        <input placeholder="Add your activity here" type="text" name="inputField" value={input} onInput={e => setInput(e.target.value)}/>
        <button onClick={handleClick}>Add</button>
      </form>  
      
    );
  };
  
  export default AddActivity;