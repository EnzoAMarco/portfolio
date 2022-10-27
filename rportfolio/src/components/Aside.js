import React from 'react'

export default function Aside({changeTheme, theme, bg}) {

  return (
    <aside className='main_aside' onClick={()=> changeTheme()}>
      <div className='div_ligth'>
        <div
        className='aside_symbols'
        style={{
          border:'2px solid',
          borderColor:theme,
          height:'.7rem',
          width:'.7rem',
          backgroundColor: 'hsl(0, 0%, 90%)'
        }}
        ></div>
        <small 
        className='aside_font'
        style={{
          color:theme
        }}
        >DARK</small>
      </div>
      <div className='div_ligth'>
        <div 
        className='aside_symbols'
        style={{
          border:'2px solid',
          borderColor:theme,
          height:'.7rem',
          width:'.7rem',
          backgroundColor: 'hsl(0, 0%, 10%)'
        }}
        ></div>
        <small 
        className='aside_font'
        style={{
          color:theme
        }}
        >LIGHT</small>
      </div>
    </aside>
  )
}
