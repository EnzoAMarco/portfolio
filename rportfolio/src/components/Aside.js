import React from 'react'

export default function Aside({changeTheme}) {
  return (
    <aside className='main_aside' onClick={()=> changeTheme()}>
      <div className='div_ligth'>
        <div 
        className='aside_symbols'
        style={{
          border:'2px solid black',
          height:'.7rem',
          width:'.7rem',
        }}
        ></div>
        <small className='aside_font'>LIGHT</small>
      </div>
      <div className='div_ligth'>
        <div
        className='aside_symbols'
        style={{
          border:'2px solid black',
          height:'.7rem',
          width:'.7rem',
        }}
        ></div>
        <small className='aside_font'>DARK</small>
      </div>
    </aside>
  )
}
