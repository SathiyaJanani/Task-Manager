import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [result, setResult] = useState([]);

  function handleAction() {
    if (text.trim() !== "") {
      setList([...list, text]);
      setResult([...result, text]);
      setText("");
    }
  }

  return (
    <div className="App">
      <h1>TASK MANAGER</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your task"
      />
      <button onClick={handleAction}>Add Task</button>
      <h2>Task List</h2>
      <ul>
        {list.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <h2>Completed Tasks</h2>
      <ul>
        {result.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <h3>Delete Task</h3>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task to delete"
      />
      <button
        onClick={() => {
          setList(list.filter((t) => t !== task));
          setResult(result.filter((t) => t !== task));
          setTask("");
        }}
      >
        Delete Task
      </button>
    </div>
  );
}

export default App;
