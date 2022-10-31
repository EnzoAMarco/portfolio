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
            Born in 1994
          </span>
          <span className='span_home tA'>
            in Osaka, Japan.
          </span>
          <span className='span_home tA'>
            I believe
          </span>
          <span className='span_home tA'>
            web design
          </span>
          <span className='span_home tA'>
            can be more
          </span>
          <span className='span_home tA'>
            diverse and inspiring.
          </span>
          <span className='span_home tA'>
            With a mission
          </span>
          <span className='span_home tA'>
            to present
          </span>
          <span className='span_home tA'>
            the possibilities
          </span>
          <span className='span_home tA'>
            of web design,
          </span>
          <span className='span_home tA'>
            I am pursuing
          </span>
          <span className='span_home tA'>
            new expressions
          </span>
          <span className='span_home tA'>
            through experiments
          </span>
          <span className='span_home tA'>
            and thoughts.
          </span>
        </p>
      </section>
    </main>
  )
}
