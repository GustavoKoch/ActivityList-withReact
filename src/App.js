import { useState } from "react";
import "./App.css";
import AddActandInputChange from "./components/AddActandInputChange/AddActandInputChange";
import ListOfActivities from "./components/ListOfActivities/ListOfActivities";

function App() {
  const [list, setList] = useState([
    { id: 1, desc: "This is your first Activity", checkIfDone: false },
  ]);

  const [taskIdBeingEdited, setTaskIdBeingEdited] = useState()

  const handleAdd = (textInput) => {
    const newItem = {
      id: new Date().getTime(),
      desc: textInput,
      checkIfDone: false,
    };
    const newList = [...list, newItem];
    setList(newList);
  };

  const editTask = (targetTaskId) => {
    setTaskIdBeingEdited(targetTaskId)
  };

  const deleteTask = (targetTaskId) => {
    const filteredList = list.filter((x)=> x.id !== targetTaskId)
    setList(filteredList);
  };

  const checkIt = (e) => {};

  return (
    <div className="App">
      <AddActandInputChange addFunc={handleAdd} />
      <ListOfActivities list={list} onDeleteTask={deleteTask} taskIdBeingEdited={taskIdBeingEdited} />
      Your activities come here!
    </div>
  );
}

export default App;
