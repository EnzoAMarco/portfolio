import './css/App.css';
import './css/aside.css';
import './css/projects.css';
import './css/contact.css';
import Main from './components/Main';
import Aside from './components/Aside';
import React, {useState} from 'react'

function App() {

  const colores = {
    w: 'hsl(0, 0%, 85%)',
    b: 'hsl(0, 0%, 6%)',
    Border: '#fff'
  }

  const navContent ={
    Home:'●',
    Projects:'Projects',
    Info:'Info',
    Contact:'Contact',
    selectesI:'●'
  }

  const [main, setMain] = useState('Home');
  const [navText, setnavText] = useState(navContent)
  const [theme, setTheme] = useState(colores.b);
  const [bg, setBg] = useState(colores.w);
  const [transition, setTransition] = useState('1');
  
  const nav_selected = (section)=>{
    // console.log();
    for (let z in navContent){
      if(z === section){
        navContent[z] = navContent.selectesI;
      }else{
        navContent[z] = z;
      }
    }
    setMain(section);
    setnavText(navContent);
    setTransition('0')
  }

  const changeTheme = () => {
    if (theme === colores.b){
      setTheme(colores.w);
      setBg(colores.b)
    }else{
      setTheme(colores.b);
      setBg(colores.w)
    }
  }

  return (
    <div 
    className="app main_padding tA" 
    style={{ backgroundColor: bg,
    }}>
      <div 
      className="box main_padding tA" 
      style={{ backgroundColor: bg ,
      border: `0.1px solid ${theme}`}} >
        <header className='header tA' style={{color: theme}}>
          <h1 className='title tA' >Enzo Marco</h1>
          <h2 className='subtitle tA' >Designer & Developer</h2>
        </header>
        <div className='body tA'>
          <nav className='nav tA' style={{color: theme}}>
            <ul>
              <li className='li_app bold_font tA'>
                <button
                className='tA'
                onClick={()=>nav_selected('Home')}
                >{navText.Home}</button>
              </li>
              <li className='li_app bold_font tA'>
                <button 
                className='tA'
                onClick={()=>nav_selected('Projects')}>{navText.Projects}</button>
              </li>
              <li className='li_app bold_font tA'>
                <button 
                className='tA'
                onClick={()=>nav_selected('Info')}>{navText.Info}</button>
              </li>
              <li className='li_app bold_font tA'>
                <button 
                className='tA'
                onClick={()=>nav_selected('Contact')}>{navText.Contact}</button>
              </li>
            </ul>
          </nav>
          <Main
          className='tA'
          main={main} 
          theme={theme} 
          bg={bg} 
          transition={transition} 
          setTransition={setTransition}
          />
        </div>
      </div>
      <Aside
      className='tA'
      main={main}
      theme={theme} 
      changeTheme={changeTheme} 
      />
    </div>
  );
}

export default App;
