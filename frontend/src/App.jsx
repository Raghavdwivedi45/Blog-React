import './App.css'
import Navbar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { navigateStore } from "./store/navigateStore.js";
import { checkLogin } from './lib/helper.js'
import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'


function App() {  
  const { page, setUser, setLikes } = navigateStore();
  const parentCon = useRef(null);


  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await checkLogin();
      if(!res || res.length==0) return
      if (!res.error) {
        setUser(res.data.userId);
        setLikes([...res.data.likes])
      }
    } catch (err) {
      console.log("App.jsx", err)
    }
  };
  fetchData();
  return () => {};
  }, [])


  return (
    <div className='body'>
      <Navbar/>
        <main ref={parentCon}>
          <Outlet parentCon={parentCon}/>
        </main>
      <Footer/>
    </div>
  )
}

export default App