import React from 'react';
import Contact from './Contact';
import Home from './Home'
import Info from './Info'
import Projects from './Projects';



export default function Main({main, theme, bg}) {

  const obj  = {
    home: <Home theme={theme} bg={bg}/>,
    projects: <Projects theme={theme} bg={bg}/>,
    info: <Info theme={theme} bg={bg}/>,
    contact: <Contact theme={theme} bg={bg}/>,
  }
  // console.log(obj)
  // console.log(obj[main.main], 'obj')

  return (
    <div>
      {obj[main]}
    </div>
  )
}
