import './App.css'
import Navbar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { navigateStore } from "./store/navigateStore.js";
import NewPost from './components/NewPost.jsx'
import { checkLogin } from './lib/helper.js'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'


function App() {  
  const { page, setUser, setLikes } = navigateStore();


  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await checkLogin();
      console.log(res)
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
        <main>
          <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default App