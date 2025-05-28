import { useState } from "react";

import "./App.css";

function App() {
  let [modalStatus, setmodalStatus] = useState(false);

  return (
    <>
      <div className="App">

        <button className="en" onClick={()=>setmodalStatus(true)} >Enquire Now</button>

        <div onClick={()=>setmodalStatus(false) } className={`modalOverlay ${modalStatus ?'modalShow':''} `}>

        </div>

        <div className={`modalDiv ${modalStatus ? 'showModalDiv' : ''}`}>
          <h3>Enquire Now <span onClick={()=>setmodalStatus(false)}>&times;</span> </h3>
        </div>

        {/* {modalStatus && (
          <div className="modalDiv showModalDiv">
            <span onClick={() => setmodalStatus(false)}> &times;</span>
          </div>
        )} */}
      </div>
    </>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [modalStatus, setmodalStatus] = useState(false);

//   return (
//     <>
//       <div className="App">
//         <button className="en" onClick={() => setmodalStatus(true)}>
//           Enquire Now
//         </button>

//         {modalStatus && (
//           <div className="modalOverlay" onClick={() => setmodalStatus(false)}></div>
//         )}

//         {modalStatus && (
//           <div className="modalDiv showModalDiv">
//             <span onClick={() => setmodalStatus(false)}> &times;</span>
//           </div>
//         )}

//         {!modalStatus && (
//           <div className="modalDiv">
//             <h3>Enquire Now</h3>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;
