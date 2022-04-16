import { useEffect, useState } from "react";
import "./App.css";
import AddActandInputChange from "./components/AddActandInputChange/AddActandInputChange";
import ListOfActivities from "./components/ListOfActivities/ListOfActivities";
import { nanoid } from 'nanoid';

function App() {
  const [list, setList] = useState([
    /* { id: 1, desc: "This is your first Activity", checkIfDone:false , editing:false, category:"I" }  */
  ]);

  //Useeffect: recalling the storedList is the first to do here. After that useeffect again for every task added.
  const KEY = "ActivityList";
  
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem(KEY));
    if (storedList) {
      setList(storedList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(list));
  }, [list]);

  const handleAdd = (textInput) => {
    const newItem = {
      id: nanoid(),
      desc: textInput,
      checkIfDone: false,
      editing: false,
    };
    const newList = [...list, newItem];
    setList(newList);
  };

  const deleteTask = (targetTaskId) => {
    const filteredList = list.filter((x) => x.id !== targetTaskId);
    setList(filteredList);
  };

  const handleMixedChanges = (e, id) => {
    const listCopy = [...list];
    const targetListItem = listCopy.find((x) => x.id === id);
    targetListItem[e.target.name] =
      e.target.name === "editing" || e.target.name === "checkIfDone"
        ? !targetListItem[e.target.name]
        : e.target.value;
    setList(listCopy);
  };

  const handleCleanDones = () => {
    const filteredListNotDone = list.filter((x) => x.checkIfDone === false);
    setList(filteredListNotDone);
  };

  const numAct = list.length;
  const numDone = list.filter((x) => x.checkIfDone === true).length;

  return (
    <div className="App">
      <h2>Your activity list: </h2>
      <AddActandInputChange
        addFunc={handleAdd}
        handleCleanDones={handleCleanDones}
      />
      <ListOfActivities
        list={list}
        onDeleteTask={deleteTask}
        onMixedChanges={handleMixedChanges}
      />
      <h4>
        {numAct < 1
          ? "You don´t have activities yet!"
          : "You have " + numAct + " activities listed."}
      </h4>
      <h4>{numAct > 0 && "Only " + numDone + " are done!"}</h4>
    </div>
  );
}

export default App;
