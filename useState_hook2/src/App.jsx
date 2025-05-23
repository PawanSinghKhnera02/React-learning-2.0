import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import btnModule from "./Button.module.css";
//menu status slider with hamburger menu
function App() {
  let [menuStatus, setMenuStatus] = useState(false);

  return (
    <>
      <button className="mIcon" onClick={() => setMenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${menuStatus ? "activeMenu" : " "}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  );
}

export default App;
