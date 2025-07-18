const ErrorMessage = ({ items }) => {
  // let foodItems = ["Dal", "Roti", "Green Vegetables", "Salad", "Milk", "Ghee"];
  return <>{items.length === 0 && <h3>I'm still hungry</h3>}</>;
};

export default ErrorMessage;
