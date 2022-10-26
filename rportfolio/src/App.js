import './App.css';
import Main from './components/Main';
import React, {useState} from 'react'

function App() {

  const colores = {
    w: 'hsl(0, 0%, 90%)',
    b: 'hsl(0, 0%, 5%)',
    Border: '#fff'
  }

  const [main, setMain] = useState('projects');
  const [theme, setTheme] = useState(colores.b);
  const [bg, setBg] = useState(colores.w);
  
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
    <div className="app main_padding" style={{ backgroundColor: bg,
    }}>
      <div className="box main_padding" style={{ backgroundColor: bg ,
      border: `.5px solid ${theme}`}} >
        <header className='header ' style={{color: theme}}>
          <h1 className='title' >Enzo Marco</h1>
          <h2 className='subtitle' onClick={()=>{changeTheme()}}>Designer & Developer</h2>
        </header>
        <div className='body'>
          <nav className='nav' style={{color: theme}}>
            <ul>
              <li className='li_main bold_font'>
                <button onClick={()=>{setMain('home')}}>Home</button>
              </li>
              <li className='li_main bold_font'>
                <button onClick={()=>{setMain('projects')}}>● Projects</button>
              </li>
              <li className='li_main bold_font'>
                <button onClick={()=>{setMain('info')}}>Info</button>
              </li>
              <li className='li_main bold_font'>
                <button onClick={()=>{setMain('contact')}}>Contact</button>
              </li>
            </ul>
          </nav>
          <Main main={main} theme={theme}/>
        </div>
      </div>
    </div>
  );
}

export default App;
