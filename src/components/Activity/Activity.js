import React from "react";

export default function Activity({ id, desc, cat, checkIfDone, editing, onDeleteTask, toggleEditTask, toggleDone, editInput, comboChange }) {

  return (
    <li key={id}>
      <input name={id} class="form-control" type="text" defaultValue={desc} disabled={!editing} onChange={editInput}/>
      
    <label htmlFor="toDos"></label>
    <select class="form-select form-select-md" aria-label=".form-select-md example" name={id} onChange={comboChange} value={cat}>
      <option selected>Type</option>
      <option value="Urgent">🚨</option>
      <option value="Important">🔥</option> 
      <option value="Idea">💡</option>
      <option value="House">🏠</option>
      <option value="Food">🍔</option>
      <option value="Shopping">🛒</option>
      <option value="Sport">⚽</option>
      <option value="Doctor">👨‍⚕️</option>
      <option value="Holiday">🏖️</option>          
      <option value="Reminders">🧠</option>
      <option value="Idea">💡</option>      
      <option value="Others">🌈</option>
  </select>


      <button class="btn btn-outline-secondary" onClick={() => toggleEditTask(id)}>{editing?"🔓":"🔒"}</button>
      <button class="btn btn-outline-secondary" onClick={() => onDeleteTask(id)}>🗑️</button>
      <button
        class="btn btn-outline-secondary"
        name="check"
        onClick={() => {toggleDone(id)}}
        checked={checkIfDone}
      >{checkIfDone?"✅":"⏳"}</button>
    </li>
  );
}
