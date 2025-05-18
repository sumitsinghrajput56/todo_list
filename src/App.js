import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [todolist,setTodolist]=useState([]);

  let saveToDoList=(event)=>{
    event.preventDefault();

    let toname=event.target.toname.value;
    if(!todolist.includes(toname))
    {
      let finalDolist=[...todolist,toname];
      setTodolist(finalDolist);
    }
    else
    {
      alert("todolist already exist");
    }
  }
  let list=todolist.map((value,index)=>{
    return(
      <TodoListItems value={value}/>
    )
  })
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname"/><button>save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {
            list
          }
        </ul>
      </div>
    </div>
  );
}


export default App;

function TodoListItems({value})
{
    return(
          <li>{value} <span>&times;</span></li>

    )
}
