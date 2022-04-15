import React from "react";

export default function Activity({ id, desc, checkIfDone, editing, onDeleteTask, toggleEditTask, toggleDone, editInput }) {

  return (
    <li>
      <input name={id} type="text" defaultValue={desc} disabled={!editing} onChange={editInput}/>
      
      <button onClick={() => toggleEditTask(id)}>{editing?"🔒":"✏️"}</button>
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
