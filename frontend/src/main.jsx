import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AuthorPage from './pages/AuthorPage.jsx';
import MajorPage from './pages/MajorPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import MajorChapters from './components/Major/MajorChapters.jsx';
import Author from './components/Author/Author.jsx';
import NewSubmajor from './components/NewSubmajor.jsx';
import Minor from './components/Minor.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        
        <Route path="/authors" element={<AuthorPage/>} />
        <Route path="/authors/:authorId" element={<Author/>} />
        
        <Route path="/contact" element={<ContactPage/>} />
        
        <Route path="/:postType/" element={<MajorPage/>} />
        
        <Route path="/majors/:majorId" element={<MajorChapters/>} />
        <Route path="/minors/:minorId" element={<Minor/>} />
        
        <Route path="/majors/:majorId/sub" element={<NewSubmajor/>} />
        <Route path="/minors/:majorId/sub" element={<NewSubmajor/>} />
        

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
