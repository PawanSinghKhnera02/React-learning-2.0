import React from "react";
import "./App.css";

function App() {
  let foodItems = [];
  // let foodItems = ["Dal", "Roti", "Green Vegetables", "Salad", "Milk", "Ghee"];

  // if (foodItems.length === 0) {
  //   return <h3>I'm still hungry</h3>;
  // }

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.length === 0 && <h3>I'm still hungry</h3>}
        {foodItems.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
