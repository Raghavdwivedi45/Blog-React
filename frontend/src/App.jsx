import './App.css'
import HomePage from "./pages/HomePage.jsx"
import SignupPage from './pages/SignupPage.jsx'
import MajorMinorPage from './pages/MajorMinorPage.jsx'
import Navbar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { navigateStore } from "./store/navigateStore.js";
import AuthorPage from './pages/AuthorPage.jsx'
import ContactPage from './pages/ContactPage.jsx'


function App() {  
  const { page, user } = navigateStore();

  return (
    <div className='body'>
      <Navbar/>
      <main>
      {page=="signup" && <SignupPage/>}
      {page=="home" && <HomePage/>}
      {(page=="majors" || page=="minors") && <MajorMinorPage/>}
      {page=="authors" && <AuthorPage/>}
      {page=="contact" && <ContactPage/>}
      </main>
      <Footer/>
    </div>
  )
}

export default App
