// import React from "react";
// import React, { useState } from "react";

//   // Function to add items to our list
//   export default function addTodo() {
//     return (value) => {
//         const newTodo = {
//             value,
//             isDone: false,
//         };
//         const [list, setList] = useState([]);
//         // Copy current list into a new array
//         const listCopy = [...list];

//         // Add new item to the new array
//         listCopy.push(newTodo);

//         // Set state with the new array
//         setList(listCopy);
        
        
//         return <input
//     className="input__text"
//       type="text"
//       onKeyDown={(e) => {
//         if (e.key === "Enter") {
//           addTodo(e.target.value);
//           e.target.value = "";
//         }
//     }}
//     />
//     };
// }

    
