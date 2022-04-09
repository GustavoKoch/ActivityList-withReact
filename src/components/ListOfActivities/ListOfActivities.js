import React from "react";
import Activity from "../Activity/Activity.js";

export default function ListOfActivities({ list, onDeleteTask, taskIdBeingEdited }) {
  console.log(list);
  return (
    <ul>
      {list.map((activity, index) => {
        return (
          <Activity
            key={index}
            id={activity.id}
            desc={activity.desc}
            checkIfDone={activity.checkIfDone}
            onDeleteTask={onDeleteTask}
            taskIdBeingEdited={taskIdBeingEdited}
          />
        );
      })}
    </ul>
  );
}
