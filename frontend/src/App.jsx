import { useState } from 'react'
import './App.css'
import SignupPage from './pages/SignupPage'
import Navbar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [currentPg, setCurrentPg] = useState("signup")

  return (
    <div className='body'>
      <Navbar/>
      <main>
      {currentPg=="signup" && <SignupPage/>}
      </main>
      <Footer/>
    </div>
  )
}

export default App
