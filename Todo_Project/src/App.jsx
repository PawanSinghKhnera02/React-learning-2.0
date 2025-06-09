import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

export default function App() {
  let [todolist, settodolist] = useState([]);

  let saveToDOList = (event) => {
    event.preventDefault();
    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalDolist = [...todolist, toname];
      settodolist(finalDolist);
    } else {
      alert(`${toname} already exist`);
    }
  };

  let list = todolist.map((value, i) => {
    return (
      <ToDOListItems
        value={value}
        key={i}
        indexNumber={i}
        todolist={todolist}
        settodolist={settodolist}
      />
    );
  });

  return (
    <>
      <div className="App">
        <h1 className="heading">ToDo List</h1>
        <form onSubmit={saveToDOList}>
          <input type="text" name="toname" />
          <button>Save</button>
        </form>
        <div className="outerDiv">
          <ul>{list}</ul>
        </div>
      </div>
    </>
  );
}

function ToDOListItems({ value, indexNumber, todolist, settodolist }) {
  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumber);
    settodolist(finalData);
  };

  let checkStatus = ()=>{
    setStatus(!status);
  };

  return (
    <li className={status ? 'completetodo' : ''} onClick={checkStatus}>
      {indexNumber + 1}.
      {value} 
      <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
