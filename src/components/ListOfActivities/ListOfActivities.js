import React from "react";
import Activity from "../Activity/Activity.js";
import "./ListOfActivities.css";

export default function ListOfActivities({ list, onDeleteTask, onMixedChanges }) {
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
            onMixedChanges={onMixedChanges}
          />
        );
      })}
    </ul>
  );
}
