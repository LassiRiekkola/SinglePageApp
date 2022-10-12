import React from 'react'
import './App.css';

import Home from './Home'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import ContactUs from './ContactUs'
import NotFound from './NotFound'
import {Route, Routes} from 'react-router-dom'
import Footer from './Footer'




function App() {
  return (
  <>
    <Navbar />
    <Header />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
