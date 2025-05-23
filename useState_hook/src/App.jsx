import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import btnModule1 from "./Button.module.css";

//use ternary operator in app2 and if else in app to add functionality hide and show using usestate
function App() {
  let template = "";
  const [count, setCount] = useState(0);
  let [pshow, setPshow] = useState(false);

  if (pshow) {
    template = (
      // <Card/>
      <>
        <p>Welcome to Mywebsite</p>
        <button
          onClick={() => setPshow(!pshow)}
          className="bg-blue-700 font-bold p-4"
        >
          Click Hide
        </button>
      </>
    );
  } else {
    template = (
      <button
        className="bg-blue-700 p-4 font-bold"
        onClick={() => setPshow(!pshow)}
      >
        Click Show
      </button>
    );
  }
  return (
    <>
      {template}

      <h1 className="bg-red-500 text-3xl font-bold m-4">Hello</h1>
      <p className="bg-black font-bold text-white">Hi brother</p>
      <div className="m-4">
        <App2 />
      </div>

      <div>
        <App3 />
      </div>
    </>
  );
}

export default App;

let Card = () => {
  return <h1>Welcome to Dehradun</h1>;
};

function App2() {
  let [status, setStatus] = useState(false);

  return (
    <>
      <button
        className="text-black px-4 py-2 rounded "
        onClick={() => setStatus(!status)}
      >
        {status ? (
          <button className={btnModule1.input}>Click Hide App2</button>
        ) : (
          <button className={btnModule1.input}>Click Show App2 </button>
        )}
      </button>
      {status ? (
        <p className="bg-red-700 text-lg p-2">Welcome to my page</p>
      ) : (
        " "
      )}
    </>
  );
}

function App3() {
  let [pstatus, setPstatus] = useState(false);
  //password -text , show and hide
  return (
    <>
      <input
        className={btnModule1.input}
        type={pstatus ? "text" : "password"}
      />
      <button className={btnModule1.input} onClick={() => setPstatus(!pstatus)}>
        {pstatus ? "Hide" : "Show"}
      </button>
    </>
  );
}
