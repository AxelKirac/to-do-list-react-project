import "./App.css";
import { ItemsContainer } from "./itemsContainer";
import { useState } from "react";

export const newTodo = {
  value: "",
  isDone: false,
};

export const ToDoAddInput = () => {
  const [list, setList] = useState([]);

  return (
    <div>
      <input
        className="input__text"
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const newTodo = {
              value: e.target.value,
              isDone: false,
            };
            setList([...list, newTodo]);
            e.target.value = "";
            console.log(list);
          }
        }}
      />
      <ItemsContainer list={list} setList={setList} />
    </div>
  );
};
