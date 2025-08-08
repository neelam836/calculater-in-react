import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ToDo = () => {
  // ======= STATE =======
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [theme, setTheme] = useState("auto");
  const [emojis, setEmojis] = useState([]);

  // ======= AUTO THEME HANDLING =======
  useEffect(() => {
    if (theme === "auto") {
      const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.body.className = darkMode ? "bg-dark text-white" : "bg-light text-dark";
    } else {
      document.body.className =
        theme === "dark" ? "bg-dark text-white" : "bg-light text-dark";
    }
  }, [theme]);

  // ======= ADD TASK =======
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  // ======= DELETE TASK =======
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // ======= RANDOM EMOJI GENERATOR =======
  const generateEmojis = () => {
    const emojiList = [
      "😀", "😂", "😍", "🤩", "😎",
      "🥳", "😇", "🤯", "🤑", "🤠",
      "🙌", "👏", "💪", "🔥", "🌟",
      "🍕", "🍔", "🍣", "🍩", "☕",
      "🚀", "🏖", "🏔", "🎯", "🎉"
    ];
    let randomEmojis = [];
    for (let i = 0; i < 5; i++) {
      randomEmojis.push(emojiList[Math.floor(Math.random() * emojiList.length)]);
    }
    setEmojis(randomEmojis);
  };

  return (
    <div className="container py-4">
      
      <h2 className="mb-4">📝 React Interactive Playground</h2>

      {/* Theme Switcher */}
      <div className="mb-4">
        <label className="form-label me-2">Theme:</label>
        <select
          className="form-select w-auto d-inline"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">☀ Light</option>
          <option value="dark">🌙 Dark</option>
          <option value="auto">⚙ Auto</option>
        </select>
      </div>

      {/* To-Do List */}
      <div className="mb-4">
        <h4>✅ To-Do List</h4>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTask}>
            Add
          </button>
        </div>
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {task}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTask(index)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Random Emoji Generator */}
      <div className="mb-4">
        <h4>🎲 Random Emoji Generator</h4>
        <button className="btn btn-success mb-3" onClick={generateEmojis}>
          Generate Emojis
        </button>
        <div style={{ fontSize: "2rem" }}>{emojis.join(" ")}</div>
      </div>
    </div>
  );
};

export default ToDo;
