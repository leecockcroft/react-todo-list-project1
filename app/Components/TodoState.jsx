
"use client"
import React from 'react';
import { useState,useEffect } from 'react';
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

// const [todoData,setTodoData]=useState([])  // main data 

const [todoData, setTodoData] = useState(() => {
   const saved = localStorage.getItem("todos"); 
   return saved ? JSON.parse(saved) : []; }); 
   
   useEffect(() => { 
    localStorage.setItem("todos", JSON.stringify(todoData)); },
     [todoData]); 
     const [editModeKey, setEditModeKey] = useState(null); 
     const [editTempValue, setEditTempValue] = useState("");
      const [inputValues, setInputValues] = useState({ mainInput: "" });


       const getTextForTodo = (e) => { 
        setInputValues({ mainInput: e.target.value }); 
      };

        const submitTodoItem = () => {
           setTodoData(prev => [...prev, { id: Date.now(), name: inputValues.mainInput }]);
            setInputValues({ mainInput: "" });
           }; 
           
           
      const editToDOInput = (id) => { 
            setEditModeKey(id); 
      const item = todoData.find(todo => todo.id === id);
             setEditTempValue(item.name);
             };
             
        const saveEdits = (id) => { 
              setTodoData(todoData.map(item => item.id === id ? 
                { ...item, name: editTempValue } : item ));
                
                setEditModeKey(null); 
              
              };
              
       const editedToDoValue = (e) => { 
                setEditTempValue(e.target.value);
               };
                
        const cancelEdit = () => {
                   setEditModeKey(null); 
                  };
                  
        const deleteTodo = (id) => {
                     setTodoData(todoData.filter(item => item.id !== id));
                     }; 
                     
                     const pressOnEnter = (e) => {
                       if (e.key === "Enter")
                         { submitTodoItem();

                          } };

  return (
    <main>
       <h1> Todo List</h1>
      <TodoInput getTextForTodo={getTextForTodo} 
                  submitTodoItem={submitTodoItem}
                  pressOnEnter={pressOnEnter}
                  value={inputValues.mainInput}
                  />


      <TodoContent todoData={todoData}
              editToDOInput={editToDOInput}
              editModeKey={editModeKey} 
              editedToDoValue={editedToDoValue}
              editTempValue={editTempValue}
              saveEdits={saveEdits}
              cancelEdit={cancelEdit}
              deleteTodo={deleteTodo}
              
              />
              
    </main>
  );
}