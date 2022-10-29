import React from 'react'

export default function Aside({changeTheme, theme, bg}) {

  return (
    <aside 
    className='main_aside' 
    onClick={()=> changeTheme()}
    >
      <div 
      className='div_ligth tA'
      >
        <div
        className='aside_symbols tA'
        style={{
          border:'2px solid',
          borderColor:theme,
          height:'.9rem',
          width:'.9rem',
          backgroundColor: 'hsl(0, 0%, 90%)'
        }}
        ></div>
        <small 
        className='aside_font tA'
        style={{
          color:theme
        }}
        >DARK</small>
      </div>
      <div className='div_ligth tA'>
        <div 
        className='aside_symbols tA'
        style={{
          border:'2px solid',
          borderColor:theme,
          height:'.9rem',
          width:'.9rem',
          backgroundColor: 'hsl(0, 0%, 10%)'
        }}
        ></div>
        <small 
        className='aside_font tA'
        style={{
          color:theme
        }}
        >LIGHT</small>
      </div>
    </aside>
  )
}
