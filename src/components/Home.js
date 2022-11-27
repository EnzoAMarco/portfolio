import React from 'react'

export default function Home({theme, transition, setTransition}) {

  setInterval(()=>{setTransition('1')}, 300);

  return (
    <main 
    className='main_home main_margin tA' 
    style={{
      color: theme,
      opacity:transition
    }}
    >
      <section className='section_home bold_font tA'>
        <p className='tA'>
          <span className='span_home tA'>
            Born in 2002
          </span>
          <span className='span_home tA'>
            in Buenos aires, Argentina.
          </span>
          <span className='span_home tA'>
            I believe
          </span>
          <span className='span_home tA'>
          that programming
          </span>
          <span className='span_home tA'>
            can be seem
          </span>
          <span className='span_home tA'>
            like a new way 
          </span>
          <span className='span_home tA'>
            of thinking 
          </span>
          <span className='span_home tA'>
            about the world
          </span>
          <span className='span_home tA'>
            around us
          </span>
          <span className='span_home tA'>
            instead of just
          </span>
          <span className='span_home tA'>
            writting code
          </span>
          <span className='span_home tA'>
            on a text editor.
          </span>
        </p>
      </section>
    </main>
  )
}
