import React from 'react'

export default function Info({theme, transition, setTransition}) {

  setInterval(()=>{setTransition('1')}, 300);

  return (
    <main className='main_home main_margin tA' 
    style={{
      color: theme,
      opacity:transition,
      }}>
      <section className='section_home tA'>
        <p className='tA'>
          <span className='span_home tA'>
            Info
          </span>
          <span className='span_home tA'>
            lorem lorem
          </span>
          <span className='span_home tA'>
            lorem
          </span>
          <span className='span_home tA'>
            lorem lorem lorem 
          </span>
          <span className='span_home tA'>
            diverse and inspiring.
          </span>
          <span className='span_home tA'>
            lorem lorem
          </span>
          <span className='span_home tA'>
            any work from overseas.
          </span>
          <span className='span_home tA'>
            lorem lorem  zzzz
          </span>
        </p>
      </section>
    </main>
  )
}
