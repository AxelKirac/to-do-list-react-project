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
    document.querySelector(`li:nth-child(${index + 1})`).style.backgroundColor =
      "green";
  };
  const resetItem = (index) => {
    // Copy current list into a new array
    const listCopy = [...list];

    // Mark item as not done
    listCopy[index].isDone = false;

    // Set state with the new array
    setList(listCopy);

    // Reset style of the element
    document.querySelector(`li:nth-child(${index + 1})`).style.backgroundColor =
      "#f2f2f2";
  };

  const resetList = () => {
    // Copy current list into a new array
    const listCopy = [...list];

    // Reset all items to not done
    listCopy.forEach((item, index) => {
      item.isDone = false;

      // Reset style of the element
      document.querySelector(
        `li:nth-child(${index + 1})`
      ).style.backgroundColor = "#f2f2f2";
    });

    // Set state with the new array
    setList(listCopy);
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

  const editTodo = (value, index) => {
    // Copy current list into a new array
    const listCopy = [...list];

    // Edit item
    listCopy[index].value = value;

    // Set state with the new array
    setList(listCopy);
  };

  // Function to remove an item from the list
  const removeAllTodo = (index) => {
    // Copy current list into a new array
    const listCopy = [...list];

    // Remove item from the new array
    listCopy.splice(index, 999);

    // Set state with the new array
    setList(listCopy);
  };
  return (
    <div>
      <h1>My Todo List</h1>

      <input
        className="input__text"
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(e.target.value);
            e.target.value = "";
          }
        }}
      />
      <button onClick={(index) => resetList(index)}>Reset All</button>
      <button onClick={(index) => removeAllTodo(index)}>Remove All</button>
      <ul>
        {list.map((item, index) => (
          <li key={index} className={item.isDone ? "done" : ""}>
            {item.value}
            <button onClick={() => markDone(index)}>Mark as Done</button>
            <button onClick={() => resetItem(index)}>Reset</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
            <button
              onClick={() => {
                const value = prompt("Entrez le nouveau titre");
                editTodo(value, index);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
