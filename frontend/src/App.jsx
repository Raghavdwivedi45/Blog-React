import './App.css'
import Navbar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { navigateStore } from "./store/navigateStore.js";
import NewPost from './components/NewPost.jsx'
import { checkLogin } from './lib/helper.js'
import { useEffect } from 'react'
import NewSubmajor from './components/NewSubmajor.jsx'
import { Outlet } from 'react-router-dom'


function App() {  
  const { page, setUser, setLikes } = navigateStore();


  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await checkLogin();
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

// {page.at(-1)==="home" && <HomePage/>}
//       {page.at(-1)==="signup" && <SignupPage/>}
//       {page.at(-1)==="majors" && <MajorPage/>}
//       {page.at(-1)==="authors" && <AuthorPage/>}
//       {page.at(-1)==="contact" && <ContactPage/>}
//       {(page.at(-1)==="create-majors" || page.at(-1)==="create-minors") && <NewPost/>}
//       {(page.at(-1).startsWith("submajors")) && <NewSubmajor/>}