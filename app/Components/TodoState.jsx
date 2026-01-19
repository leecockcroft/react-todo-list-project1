
"use client"
import React from 'react';
import { useState } from 'react';
import TodoContent from "./TodoContent.jsx"
import TodoInput from './TodoInput.jsx'

export default function TodoState() {

// create input and button.
// get value from input 
//submit to data array
//loop the information with a edit delete cta.

//onclick edit - show input with save.
//onclick delete - remove from array.

//state
//main input 
//cta submin main
//edit cta
//on edit input 
//save edit
//delete 

const [todoData,setTodoData]=useState([])  // main data

const [editModeKey,setEditModeKey]=useState(-1) // use onclick the edit/delete
const [editTempValue, setEditTempValue]= useState("")


const [inputValues,SetInputValues]=useState({
mainInput:"",
editedValue:"" // original input value

})

const [indexKey,setIndexKey]=useState(0)  // gives all todo index value - will stand at the data.length


/*  MAIN TODO INPUT */
const getTextForTodo = (e)=>{
  SetInputValues({ mainInput:e.target.value})

}
 /* submits data to list */

const submitTodoItem = ()=>{
  setTodoData( prev => [...prev,{id:indexKey,name:inputValues.mainInput}])
  setIndexKey(indexKey+1)
console.log(todoData)
}


/* END MAIN TODO INPUT  */


/* EDIT TODO MODE */

const editToDOInput = (index)=>{
  setEditModeKey(index)
  setEditTempValue(todoData[index].name)
  console.log(todoData[index].name,'wanted state',editTempValue)

}

const saveEdits =(id)=>{

setTodoData(todoData.map((item,index)=>

item.id === id ? {...item,name:editTempValue} : item
))
setEditModeKey(-1)
console.log(id,'id',editTempValue)
}

const editedToDoValue = (e)=>{

  SetInputValues(prev => ({ ...prev, mainInput:e.target.value}))
  setEditTempValue(e.target.value)

}


  return (
    <main>
       <h1> Todo List</h1>
      <TodoInput getTextForTodo={getTextForTodo} 
                  submitTodoItem={submitTodoItem}/>

      <TodoContent todoData={todoData}
              editToDOInput={editToDOInput}
              editModeKey={editModeKey} 
              editedToDoValue={editedToDoValue}
              editTempValue={editTempValue}
              saveEdits={saveEdits}
              
              />
              
    </main>
  );
}