import React from 'react'
import { Header , Intro, Projects, Skills } from './Components/index'
const App = () => {
  return (
   <div className=' h-screen w-screen '>
        <Header/>
        <Intro/>
        <Skills/>
        <Projects/>
   </div>
  )
}

export default App