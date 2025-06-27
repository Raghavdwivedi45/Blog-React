import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AuthorPage from './pages/AuthorPage.jsx';
import MajorPage from './pages/MajorPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<HomePage/>} />
        <Route path="signup" element={<SignupPage/>} />
        <Route path="majors" element={<MajorPage/>} />
        <Route path="authors" element={<AuthorPage/>} />
        <Route path="contact" element={<ContactPage/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
