import { useState } from 'react'
import Navbar from './components/NavBar/Navbar.jsx';
import MainSection from './components/MainSection/MainSection.jsx';
import BrowseRange from './components/BrowseRange/BrowseRange.jsx';

function App() {

  return (
    <>
      <Navbar/>
      <MainSection/>
      <BrowseRange/>
    </>
  )
}

export default App
