import React from 'react';
import { useState } from 'react';
import "./AddActandInputChange.css";

function AddActandInputChange ({addFunc})  {
    const [input, setInput] = useState(''); // '' is the initial state value
    
    const handleClick = (event) => {    
      event.preventDefault();            
       addFunc(input);
       setInput("");       
    };

    return (
      <form>
        <input placeholder="Add your activity here" type="text" name="inputField" value={input} onInput={e => setInput(e.target.value)}/>
        <button onClick={(e)=>handleClick(e)} >➕</button>
      </form>  
      
    );
  };
  
  export default AddActandInputChange;