import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems = [];
  let foodItems = ["Rice", "Roti", "Green Vegetables", "Salad", "Milk", "Ghee"];

  // if (foodItems.length === 0) {
  //   return <h3>I'm still hungry</h3>;
  // }

  return (
    <React.Fragment>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </React.Fragment>
  );
}

export default App;
