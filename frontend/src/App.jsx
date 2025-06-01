import './App.css'
import HomePage from "./pages/HomePage.jsx"
import SignupPage from './pages/SignupPage.jsx'
import MajorPage from './pages/MajorPage.jsx'
import Navbar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { navigateStore } from "./store/navigateStore.js";
import AuthorPage from './pages/AuthorPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NewPost from './components/NewPost.jsx'


function App() {  
  const { page } = navigateStore();

  return (
    <div className='body'>
      <Navbar/>
      <main>
      {page=="home" && <HomePage/>}
      {page=="signup" && <SignupPage/>}
      {page=="majors" && <MajorPage/>}
      {page=="authors" && <AuthorPage/>}
      {page=="contact" && <ContactPage/>}
      {(page=="create-major" || page=="create-minor") && <NewPost/>}
      </main>
      <Footer/>
    </div>
  )
}

export default App
