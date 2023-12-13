import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, } from "./components";
import Aboutme from './components/Aboutme';
import Loaderpage from './components/Loaderpage';



const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, []);

  return (
    <BrowserRouter>
      {loading ?
        ( <Loaderpage /> ) : 
        (  

          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover 
          bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Aboutme />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className='relative z-0' >
              <Contact />
              <StarsCanvas />
            </div>
          </div>
       )}
    </BrowserRouter>

  )
}

export default App
