import React from 'react';
import Contact from './Contact';
import Home from './Home'
import Info from './Info'
import Projects from './Projects';



export default function Main({main, theme}) {

  const obj  = {
    home: <Home theme={theme}/>,
    projects: <Projects theme={theme}/>,
    info: <Info theme={theme}/>,
    contact: <Contact theme={theme}/>,
  }
  // console.log(obj)
  // console.log(obj[main.main], 'obj')

  return (
    <div>
      {obj[main]}
    </div>
  )
}
