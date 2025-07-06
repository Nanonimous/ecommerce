import { useState } from 'react'
import Navbar from './components/NavBar/Navbar.jsx';
import MainSection from './components/MainSection/MainSection.jsx';
import BrowseRange from './components/BrowseRange/BrowseRange.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
    <>
      <Navbar/>
      <MainSection/>
      <BrowseRange/>
      <Footer/>
    </>
  )
}

export default App
