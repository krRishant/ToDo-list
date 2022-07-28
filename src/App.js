import React,{useState} from 'react'
import ToDoLists from './ToDoLists';

const App = () => {
  const [inputList, setInputList] =useState('');
  const [items, setItems]= useState([]);
  const itemEvent = (event)  =>{
    setInputList(event.target.value);
  };
  const listofItems =() =>{
      setItems((olditems) =>{
        return [...olditems,inputList]
      });
      setInputList("");
  };
  const deleteitems= (id) =>{
    console.log("delete");
    setItems((oldItems) =>{
      return oldItems.filter((arrElem,index)  =>{
        return index!==id;
      })
    })
}
  return (
     <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1> ToDo List</h1>
        <br />
       <input type="text" placeholder="add new item" value={inputList}  onChange={itemEvent}/>
       <button onClick={listofItems}> + </button>
       <ol>
        {
          items.map((currelem,index) =>{
            return <ToDoLists text = {currelem} 
            key={index}  
            id={index} 
            onSelect = {deleteitems} />
          })
        }
       </ol>

      </div>
      
     </div>
  )
};

export default App