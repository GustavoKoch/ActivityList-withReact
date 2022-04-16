import React from "react";
import "./Activity.css";

export default function Activity({
  id,
  desc,
  cat,
  checkIfDone,
  editing,
  onDeleteTask,
  editInput,
  comboChange,
  onMixedChanges,
}) {
  return (
    <li key={id}>
      <input
        class="form-control"
        name="desc"
        type="text"
        defaultValue={desc}
        disabled={!editing}
        onChange={(e) => onMixedChanges(e, id)}
      />
      <label htmlFor="toDos"></label>
      <select
        class="form-select form-select-md"
        aria-label=".form-select-md example"
        id="toDos"
        name="category"
        onChange={(e) => onMixedChanges(e, id)}
        value={cat}
      >
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

      <button name="editing" class="btn btn-outline-secondary" onClick={(e) => onMixedChanges(e, id)}>
        {editing ? "🔓" : "🔒"}
      </button>
      <button class="btn btn-outline-secondary" onClick={(e) => onDeleteTask(e, id)}>🗑️</button>
      <button
        name="checkIfDone"
        class="btn btn-outline-secondary"
        type="checkbox"
        onClick={(e) => {
          onMixedChanges(e, id);
        }}
        checked={checkIfDone}
      >{checkIfDone?"✅":"🚀"}</button>
    </li>
  );
}
