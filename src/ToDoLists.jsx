import React from 'react'

const ToDoLists = (currelem) => {
 
  return (
    <>
     <div className='todo_style'>
       
       <li>  {currelem.text}   </li>
       <i className="far fa-trash-alt add btn" id='icon-delete' onClick={() => {
         currelem.onSelect(currelem.id);
       }}></i>
       </div>
    </>
  )
        
}

export default ToDoLists