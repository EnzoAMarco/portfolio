import React from 'react';
import Contact from './Contact';
import Home from './Home'
import Info from './Info'
import Projects from './Projects';



export default function Main({main, theme, bg, transition, setTransition}) {

  const obj  = {
    Home: 
      <Home
      className='tA'
      theme={theme} 
      bg={bg} 
      transition={transition} 
      setTransition={setTransition}
      />,
    Projects: 
      <Projects 
      className='tA'
      theme={theme} 
      bg={bg} 
      transition={transition} 
      setTransition={setTransition}
      />,
    Info: 
      <Info 
      className='tA'
      theme={theme} 
      bg={bg} 
      transition={transition} 
      setTransition={setTransition}
      />,
    Contact: 
      <Contact
      className='tA'
      theme={theme} 
      bg={bg} 
      transition={transition} 
      setTransition={setTransition}
      />,
  }

  // console.log(obj)
  // console.log(obj[main.main], 'obj')

  return (
    <div>
      {obj[main]}
    </div>
  )
}
