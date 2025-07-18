import Item from "./Item";

const FoodItems = ({ items }) => {
  // let foodItems = ["Dal", "Roti", "Green Vegetables", "Salad", "Milk", "Ghee"];
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item key={index} fooditem={item} />
      ))}
    </ul>
  );
};
export default FoodItems;
