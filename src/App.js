import React from "react";
import "./index.css";
import {useState} from 'react'
import Todo from "./Todo";
function App() {

  const [elements,setElements]=useState('')
  const [items,setItems]=useState([])
  const inputHandler=(e)=>{
    setElements(e.target.value)
  }
const addElementHandler=()=>{
  if(elements!=='')
 { setItems([...items,{item:elements,key:Date.now()}])
  setElements('')}


}

  return (
    <div className="app">
       <h3>ToDo List</h3>
      <div className="appheader">
       
        <div className="wrapper">
         <div> <input onChange={inputHandler} value={elements} type="text" /></div>
         <div > <button className="inputBtn" onClick={addElementHandler}>+</button></div>
     
        </div>
       
      </div>
      <Todo items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
