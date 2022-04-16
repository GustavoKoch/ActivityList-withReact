import React from "react";

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
        name="desc"
        type="text"
        defaultValue={desc}
        disabled={!editing}
        onChange={(e) => onMixedChanges(e, id)}
      />
      <label htmlFor="toDos"></label>
      <select
        ClassName="form-select form-select-md"
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

      <button name="editing" ClassName="btn btn-outline-secondary" onClick={(e) => onMixedChanges(e, id)}>
        {editing ? "🔓" : "🔒"}
      </button>
      <button ClassName="btn btn-outline-secondary" onClick={(e) => onDeleteTask(e, id)}>🗑️</button>
      <input
        name="checkIfDone"
        type="checkbox"
        onChange={(e) => {
          onMixedChanges(e, id);
        }}
        checked={checkIfDone}
      >{checkIfDone?"✅":"⏳"}</button>
    </li>
  );
}
