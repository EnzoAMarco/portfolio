import './App.css';
import Main from './components/Main';
import Aside from './components/Aside';
import React, {useState} from 'react'

function App() {

  const colores = {
    w: 'hsl(0, 0%, 90%)',
    b: 'hsl(0, 0%, 10%)',
    Border: '#fff'
  }

  const navContent ={
    Home:'Home',
    Projects:'Projects',
    Info:'Info',
    Contact:'Contact',
    selectesI:'●'
  }

  const [main, setMain] = useState('info');
  const [navText, setnavText] = useState(navContent)
  const [theme, setTheme] = useState(colores.b);
  const [bg, setBg] = useState(colores.w);
  
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
    className="app main_padding" 
    style={{ backgroundColor: bg,
    }}>
      <div 
      className="box main_padding" 
      style={{ backgroundColor: bg ,
      border: `0.1px solid ${theme}`}} >
        <header className='header ' style={{color: theme}}>
          <h1 className='title' >Enzo Marco</h1>
          <h2 className='subtitle' >Designer & Developer</h2>
        </header>
        <div className='body'>
          <nav className='nav' style={{color: theme}}>
            <ul>
              <li className='li_app bold_font'>
                <button onClick={()=>nav_selected('Home')}>{navText.Home}</button>
              </li>
              <li className='li_app bold_font'>
                <button onClick={()=>nav_selected('Projects')}>{navText.Projects}</button>
              </li>
              <li className='li_app bold_font'>
                <button onClick={()=>nav_selected('Info')}>{navText.Info}</button>
              </li>
              <li className='li_app bold_font'>
                <button onClick={()=>nav_selected('Contact')}>{navText.Contact}</button>
              </li>
            </ul>
          </nav>
          <Main main={main} theme={theme} bg={bg}/>
        </div>
      </div>
      <Aside main={main} theme={theme} changeTheme={changeTheme}/>
    </div>
  );
}

export default App;
