
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Houses from './components/Houses/Houses.jsx'
import Listing from './components/Listing/Listing.jsx'
import UserContext from './Context/UserContext.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path='' element={<Home />}></Route>
        <Route path='Login' element={<Login />}></Route>
        <Route path='Signup' element={<Signup />}></Route>
        <Route path='Houses' element={<Houses />}></Route>
        <Route path='Listing' element={<Listing />}></Route>
        <Route path='Contact' element={<Contact />}></Route>
    </Route>
))
createRoot(document.getElementById('root')).render(
    <UserContext>
        <RouterProvider router={router} />
    </UserContext>
)
