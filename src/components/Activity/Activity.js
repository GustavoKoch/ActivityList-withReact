import React from "react";

export default function Activity({onDeleteTask, key, id, desc, checkIfDone, taskIdBeingEdited }) {

  return (
    <li>
      <input name="text" type="text" value={desc} disabled={id === taskIdBeingEdited ? false : true} />
      
      <button onClick={() => {}}>✏️</button>
      <button onClick={() => onDeleteTask(id)}>🗑️</button>
      <input
        name="check"
        type="checkbox"
        onChange={() => {}}
        checked={checkIfDone}
      />
    </li>
  );
}
