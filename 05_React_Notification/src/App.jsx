import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// =====================================important====================================
//install toastify 
// import its css file and toastcontainer, toast 


function App() {
    

  return (
    <>
      <MyNotifications/>
    </>
  )
}

export default App


function MyNotifications(){
  
  let showNotification =()=>{
    // toast.info('Welcome to my page')
    // toast.success('Welcome to my page')
    // toast.error('Welcome to my page')
    toast.warning('Welcome to my page')
  }

  return (
    <>
      <ToastContainer/>
      <button onClick={showNotification}>
        Save
      </button>
    </>
  )
}


  
// export default function App(){
//   const notify = () => toast.success("Wow so easy!");

//   return (
//     <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>
//   );
// }


