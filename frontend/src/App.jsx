import { useState } from 'react'
import './App.css'
import SignupPage from './pages/SignupPage'
import Navbar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { navigateStore } from "./store/navigateStore.js";


function App() {  
  const { page } = navigateStore();

  return (
    <div className='body'>
      <Navbar/>
      <main>
      {page=="signup" && <SignupPage/>}
      </main>
      <Footer/>
    </div>
  )
}

export default App
