import React from "react";
import Activity from "../Activity/Activity.js";

export default function ListOfActivities({ list, onDeleteTask, toggleEditTask, toggleDone, editInput, comboChange }) {
  /* console.log(list); */
  return (
    <ul>
      {list.map((activity, index) => {
        return (
          <Activity
            key={index}
            id={activity.id}
            desc={activity.desc}
            cat={activity.category}
            checkIfDone={activity.checkIfDone}
            editing={activity.editing}
            onDeleteTask={onDeleteTask}
            toggleEditTask={toggleEditTask}
            toggleDone={toggleDone}
            editInput={editInput}
            comboChange={comboChange}
          />
        );
      })}
    </ul>
  );
}
