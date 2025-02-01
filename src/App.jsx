import React from 'react'
import "./App.css"
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'
import { Outlet } from 'react-router-dom'
import Listing from './components/Listing/Listing'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App