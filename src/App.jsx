import React from 'react'
import { Contact, Footer, Header , Intro, Projects, Skills } from './Components/index'
const App = () => {
  return (
   <div className=' h-screen w-screen '>
        <Header/>
        <Intro/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
   </div>
  )
}

export default App