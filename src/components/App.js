import React from "react";
import './../styles/App.css';
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

const App = () => {
  const [value,setValue] = useState("");
  const [tasks,setTasks] = useState([]);
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"50vh",flexDirection:"column"}}>
        <h3>To-Do List</h3>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", width:"500px"}}>
          <input type="text" placeholder="Enter your task" value={value} onChange={(e)=>{
            setValue(e.target.value)
          }}/>
          <button onClick={()=>{
            if(!value)return
            const newTask = {
              task:value,
              id:uuidv4()
            }
            setTasks([...tasks,newTask])
            setValue("");
          }}>Add Todo</button>
        </div>
        <ul>
          {
            tasks && tasks.map((item)=>{
              return <li style={{listStyle:"none"}} key={item.id}>
                  {item.task} <button onClick={()=>{
                    const newArr = tasks.filter((taskss)=>{
                      return taskss.id!==item.id
                    })
                    setTasks(newArr)
                  }}>
                      Delete
                  </button>
              </li>
            })
          }
        </ul>
    </div>
  )
}

export default App
