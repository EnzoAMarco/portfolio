import React from 'react'

export default function Info({theme, transition, setTransition}) {

  const socialMedia_info = [
    {
      red: 'github',
      href: 'https://github.com/EnzoAMarco',
    },
    {
      red: 'Linkedin',
      href: 'https://www.linkedin.com/in/enzomarco',
    },
    {
      red: 'CodeWars',
      href: 'https://www.codewars.com/users/LaPlaced',
    },
  ]

  const tecnologias_info = [
    'js, ','React js, ','nodeJs, ', 'CSS, ', 'Bootsrap, ', 'Tailwind, ',
    'MUI and ', 'HTML',
  ]

  const socialMediaJsx = () => {
    return socialMedia_info.map((e, i)=>{
      return (
        <li key={i} className='tA li_font hover_info'>
          <a 
          href={e.href}
          target='-blank' 
          className='hover_info'
          style={{color:theme}}
          >
            {e.red}
          </a>
        </li>
      )
    })
  }


  const tecnologiasJsx = tecnologias_info.reduce((p, c)=>{
    return p.concat(c)
  })

  console.log(tecnologiasJsx, 'info')

  setInterval(()=>{setTransition('1')}, 300);

  return (
    <main className='main_home tA' 
    style={{
      color: theme,
      opacity:transition,
      }}>
      <section className='section_home tA'>
        <div className='div_info tA'>
          <article className='tA article_info'>
            <h4 className='h4_font tA'>Technologies:</h4>
            <p 
            className='ul_info li_font tA'
            style={{color:theme}}
            >
              {tecnologiasJsx}
            </p>
          </article>
          <article className='tA article_info'>
            <h4 className='h4_font tA'>Social media:</h4>
            <ul className='ul_info tA hover_info'>
              {socialMediaJsx()}
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}
