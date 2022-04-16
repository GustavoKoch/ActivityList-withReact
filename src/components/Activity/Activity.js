import React from "react";

export default function Activity({ id, desc, cat, checkIfDone, editing, onDeleteTask, toggleEditTask, toggleDone, editInput, comboChange }) {

  return (
    <li key={id}>
      <input name={id} type="text" defaultValue={desc} disabled={!editing} onChange={editInput}/>
      
    <label htmlFor="toDos"></label>
    <select id="toDos" name={id} onChange={comboChange} value={cat}>
      <option value="Urgent">🚨</option>
      <option value="Important">🔥</option> 
      <option value="Idea">💡</option>
      <option value="House">🏠</option>
      <option value="House">🍔</option>
      <option value="Shopping">🛒</option>
      <option value="Sport">⚽</option>
      <option value="Doctor">👨‍⚕️</option>
      <option value="Holiday">🏖️</option>          
      <option value="Reminders">🧠</option>
      <option value="Idea">💡</option>      
      <option value="Others">🌈</option>
    </select>


      <button onClick={() => toggleEditTask(id)}>{editing?"🔓":"🔒"}</button>
      <button onClick={() => onDeleteTask(id)}>🗑️</button>
      <input
        name="check"
        type="checkbox"
        onChange={() => {toggleDone(id)}}
        checked={checkIfDone}
      />
    </li>
  );
}
