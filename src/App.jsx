import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Componet/Home'
import Search from './Componet/Search'
import School from './Componet/School'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home></Home> */}
      {/* <Search></Search> */}
      <School></School>
    </>
  )
}

export default App
