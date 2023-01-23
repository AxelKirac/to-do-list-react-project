import "./App.css";

import React, { useState } from "react";

const App = () => {
  // State to store our list
  const [list, setList] = useState([]);

  // Function to add items to our list
  const addTodo = (value) => {
    const newTodo = {
      value,
      isDone: false,
    };

    // Copy current list into a new array
    const listCopy = [...list];

    // Add new item to the new array
    listCopy.push(newTodo);

    // Set state with the new array
    setList(listCopy);
  };


  const markDone = (index) => {
    // Copy current list into a new array
    const listCopy = [...list];

    // Mark item as done
    listCopy[index].isDone = true;

    // Set state with the new array
    setList(listCopy);

    // Add style to the element
    document.querySelector(`li:nth-child(${index + 1})`).style.backgroundColor = 'green';
};

  // Function to remove an item from the list
  const removeTodo = (index) => {
    // Copy current list into a new array
    const listCopy = [...list];

    // Remove item from the new array
    listCopy.splice(index, 1);

    // Set state with the new array
    setList(listCopy);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(e.target.value);
            e.target.value = "";
          }
        }}
      />
      <ul>
        {list.map((item, index) => (
          <li key={index} className={item.isDone ? 'done' : ''}>
            {item.value}
            <button onClick={() => markDone(index)}>Mark as Done</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
