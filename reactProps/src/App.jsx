import { useState } from "react";
import Header, { click, Card } from "./components/Header";
import "./App.css";

function App() {
  let addData = (a, b) => {
    console.log(a + b);
  };

  let [count, setcount] = useState(10);

  let handleClick = () => {
    setcount(count + 1);
  };

  return (
    <>
      <Card />
      <div className="flex flex-wrap justify-between items-center">
        <img
          src="https://images.pexels.com/photos/31074953/pexels-photo-31074953/free-photo-of-young-woman-posing-outdoors-with-arms-raised.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={100}
        />
        <img
          src="https://images.pexels.com/photos/31074953/pexels-photo-31074953/free-photo-of-young-woman-posing-outdoors-with-arms-raised.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={100}
        />
        <img
          src="https://images.pexels.com/photos/31074953/pexels-photo-31074953/free-photo-of-young-woman-posing-outdoors-with-arms-raised.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={100}
        />
        <img
          src="https://images.pexels.com/photos/31074953/pexels-photo-31074953/free-photo-of-young-woman-posing-outdoors-with-arms-raised.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={100}
        />
      </div>

      <Header />
      <h1 className="text-[40px] text-red-900 font-bold">welcome pawan</h1>
      <button
        className="bg-blue-700 p-2 m-4 text-black font-bold border-1 rounded"
        onClick={() => click()}
      >
        Click me
      </button>
      <button
        className="bg-blue-700 p-2 text-black font-bold border-1 rounded-md m-2"
        onClick={() => addData(5, 5)}
      >
        addData
      </button>

      <MyButton c={count} o={handleClick} />
      <MyButton c={count} o={handleClick} />
    </>
  );
}

export default App;

function MyButton({ c, o }) {
  return (
    <button
      className="bg-white-700 p-2 text-black font-bold border-1 rounded"
      onClick={o}
    >
      Count Up = {c}
    </button>
  );
}
