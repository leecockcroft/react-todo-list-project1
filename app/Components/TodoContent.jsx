export default function Page({ 
  todoData,
  editToDOInput,
  editModeKey,
  editedToDoValue,
  editTempValue,
  saveEdits,
  cancelEdit,
  deleteTodo,
  inputValues
}) {

  return (
    <main>
      <ul className=" grid-rows-1">
{ todoData && todoData.length > 0 ?  todoData.map( (item,index) =>  (

  <li className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] sm:gap-4 py-2 gap-8" key={item.id}> 
    { item.id === editModeKey ? 
    
    (<> <input type="text" 
          // onBlur={editToDOInput}  
          // autoFocus 
          onChange={editedToDoValue}  
          value={editTempValue}
          />
          
       <button className="rounded-md bg-[green] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-green dark:focus-visible:outline-indigo-500" onClick={()=>saveEdits(item.id)}> Save</button> 
        <button className="rounded-md bg-[black] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-green dark:focus-visible:outline-indigo-500" onClick={cancelEdit}> cancel</button> 
       </>) 
       
       
       : 
       (  <>   <span className="border-b border-gray">{item.name}</span>

        <button  className="rounded-sm bg-indigo-500/20 px-2 py-1 text-sm font-semibold text-blackhover:bg-indigo-500/30" onClick={()=>editToDOInput(item.id)}>Edit</button>
        <button  className="rounded-sm bg-[red] px-2 py-1 text-sm font-semibold text-white hover:bg-indigo-500/30"  onClick={()=>deleteTodo(item.id)}>Delete</button> 
       </>
       )  
}
       
        </li> 
       
      )) : <p>no list</p>
    
    }
    
    
    

   </ul>
    </main>
  );

}