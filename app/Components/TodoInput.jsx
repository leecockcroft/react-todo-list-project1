export default function TodoInput({getTextForTodo,submitTodoItem,pressOnEnter,value}) {
  return (
    <div className="flex gap-4 mb-10">
      <input className="  inline-block w-full rounded-md  px-3 py-1.5 text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-black bg-gray-100 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" type="text" placeholder="enter details" value={value} onChange={getTextForTodo} onKeyDown={pressOnEnter}/>
       <button  type="button"
        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick=
        {submitTodoItem}> Enter</button>
    
    </div>
  );
}