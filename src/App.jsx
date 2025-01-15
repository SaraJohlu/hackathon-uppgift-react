
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./components/Home"
import Hälsning from './components/Hälsning'



function App() {

  return (
    <>
    <Home />
      <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Hälsning" element={<Hälsning />} />
      </Routes>
      </main>
    </>
  )
}

export default App
