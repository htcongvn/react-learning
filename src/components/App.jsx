import React, { useState } from "react";

import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [itemsList, setItemsList] = useState([]);

  function addItem(inputText) {
    setItemsList((prevItemsList) => {
      return [...prevItemsList, inputText];
    });
  }

  function deleteItem(itemId) {
    setItemsList((prevItemsList) => {
      return prevItemsList.filter((element, index) => {
        return index !== itemId;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAddItem={addItem} />
      <div>
        <ul>
          {itemsList.length > 0 &&
            itemsList.map((item, index) => (
              <TodoItem
                key={index}
                id={index}
                text={item}
                onChecked={deleteItem}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
