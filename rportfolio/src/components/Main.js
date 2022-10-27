import React from 'react';
import Contact from './Contact';
import Home from './Home'
import Info from './Info'
import Projects from './Projects';



export default function Main({main, theme, bg}) {

  const obj  = {
    Home: <Home theme={theme} bg={bg}/>,
    Projects: <Projects theme={theme} bg={bg}/>,
    Info: <Info theme={theme} bg={bg}/>,
    Contact: <Contact theme={theme} bg={bg}/>,
  }

  const dark_light =()=>{

  }

  // console.log(obj)
  // console.log(obj[main.main], 'obj')

  return (
    <div>
      {obj[main]}
    </div>
  )
}
