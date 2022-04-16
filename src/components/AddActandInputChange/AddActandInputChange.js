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
        <input class="form-control" placeholder="Add your activity here" type="text" name="inputField" value={input} onInput={e => setInput(e.target.value)}/>
        <button class="btn btn-outline-secondary" onClick={(e)=>handleAdd(e)}>➕</button>
        <button class="btn btn-outline-secondary" onClick={(e)=>handleCleanDones(e)}>🧹</button>
      </form>  
      
    );
  };
  
  export default AddActandInputChange;