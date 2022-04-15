import { useEffect, useState } from "react";
import "./App.css";
import AddActandInputChange from "./components/AddActandInputChange/AddActandInputChange";
import ListOfActivities from "./components/ListOfActivities/ListOfActivities";

function App() {
  const [list, setList] = useState([
/* { id: 1, desc: "This is your first Activity", checkIfDone:false , editing:false}  */
  ]);

  
  //Useeffect: recalling the storedList is the first to do here. After that useeffect again for every task added.
  const KEY="ActivityList";
  useEffect(()=>{
      const storedList=JSON.parse(localStorage.getItem(KEY)); 
    if(storedList){setList(storedList);}
  },[]);

  useEffect( ()=>{    
    localStorage.setItem(KEY, JSON.stringify(list)) }
    ,[list] );




  const handleAdd = (textInput) => {
    const newItem = {
      id: new Date().getTime(),
      desc: textInput,
      checkIfDone: false,
      editing:false
    };
    const newList = [...list, newItem];
    setList(newList);
  };

  const toggleEditTask = (targetTaskId) => {   
    const list3=[...list];
    const taskBeingEdited = list3.find((x)=> x.id === targetTaskId);
    taskBeingEdited.editing=!taskBeingEdited.editing;
    console.log(list3);   
    setList(list3);
  };

  const deleteTask = (targetTaskId) => {
    const filteredList = list.filter((x)=> x.id !== targetTaskId)
    setList(filteredList);
  };

  const toggleDone = (targetTaskId) => {
    const list2=[...list];
    const taskDone = list2.find((x)=> x.id === targetTaskId)
    taskDone.checkIfDone=!taskDone.checkIfDone;
    setList(list2);
  };

 const editInput =(e)=>{ 
   const list4=[...list];
   const actInputBeingChanged = list4.find((x)=> x.id == e.target.name);  
   actInputBeingChanged.desc=e.target.value;
   setList(list4);
 }



  return (
    <div className="App">
      <h2>Your activity list: </h2>
      <AddActandInputChange addFunc={handleAdd} />
      <ListOfActivities list={list} onDeleteTask={deleteTask} toggleEditTask={toggleEditTask} toggleDone={toggleDone} editInput={editInput}/>
      <h4>{list.length<1?"You don´t have activities yet!":""}</h4>
    </div>
  );
}

export default App;
