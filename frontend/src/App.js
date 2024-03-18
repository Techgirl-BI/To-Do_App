import "./App.css";
import react from 'react'
import TodoItem from "./TodoItem.js";
import { useState, useEffect } from "react";
const base_url = "http://localhost:4002/tasks";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    fetch(base_url)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = async() => {
    const data = await fetch(base_url + "/new", {
     method: "POST",
     headers: {
       "content-type" : "application/json"
     },
     body: JSON.stringify({
       name: input,
         })
    }).then(res => res.json()) 
    await getTasks()
    setInput('')
   }
  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO-APP</h1>
      </div>

      <div className="form">
        <input type="text" value={input} onChange={handleChange}></input>
        <button onClick={() => addTask()}>
          <span className="add">ADD</span>
        </button>
      </div>

      <div className="todolist">
        {items.map((item) => {
          const { _id, name } = item;
          return <TodoItem name={name} id={_id} setItems={setItems} />;
        })}
      </div>
    </div>
  );
}

export default App;
