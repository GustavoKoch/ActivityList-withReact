import React from 'react';
import { useState } from 'react';
import "./AddActandInputChange.css";

function AddActandInputChange ({addFunc, handleCleanDones})  {
    const [input, setInput] = useState(''); // '' is the initial state value
    
    const handleAdd = (event) => {    
      event.preventDefault();            
       addFunc(input);
       setInput("");       
    };

  

    return (
      <form>
        <input placeholder="Add your activity here" type="text" name="inputField" value={input} onInput={e => setInput(e.target.value)}/>
        <button onClick={(e)=>handleAdd(e)}>➕</button>
        <button onClick={(e)=>handleCleanDones(e)}>🧹</button>
      </form>  
      
    );
  };
  
  export default AddActandInputChange;