import React from 'react'

export default function Home({theme}) {
  return (
    <main className='main_home main_margin' style={{color: theme}}>
      <section className='section_home bold_font'>
        <p >
          <span className='span_home'>
            Born in 1994
          </span>
          <span className='span_home'>
            in Osaka, Japan.
          </span>
          <span className='span_home'>
            I believe
          </span>
          <span className='span_home'>
            web design
          </span>
          <span className='span_home'>
            can be more
          </span>
          <span className='span_home'>
            diverse and inspiring.
          </span>
          <span className='span_home'>
            With a mission
          </span>
          <span className='span_home'>
            to present
          </span>
          <span className='span_home'>
            the possibilities
          </span>
          <span className='span_home'>
            of web design,
          </span>
          <span className='span_home'>
            I am pursuing
          </span>
          <span className='span_home'>
            new expressions
          </span>
          <span className='span_home'>
            through experiments
          </span>
          <span className='span_home'>
            and thoughts.
          </span>
        </p>
      </section>
    </main>
  )
}
