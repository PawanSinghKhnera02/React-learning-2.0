import { useState } from 'react'
import Faqs from './Faqs'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Faqs/>
    </>
  )
}

export default App
