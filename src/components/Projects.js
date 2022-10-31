import React from 'react'

export default function Projects({theme, transition, setTransition}) {
  const projects_info = [
    {
      proyecto: 'Estío',
      empleador: 'Personal',
      año:2022,
      href:'https://p1codoacodo.netlify.app/',
    },
    {
      proyecto: 'Portfolio',
      empleador: 'Personal',
      año:2022,
      href:'https://LaPlaceDPF.netlify.app/',
    },
    {
      proyecto: 'Proyect Ex I',
      empleador: 'Employer',
      año:'20XX',
      href:'#',
    },
    {
      proyecto: 'Proyect Ex II ',
      empleador: 'Employer',
      año:'20XX',
      href:'#',
    },
    {
      proyecto: 'Proyect Ex III',
      empleador: 'Employer',
      año:'20XX',
      href:'#',
    },
    {
      proyecto: 'Proyect Ex IV',
      empleador: 'Employer',
      año:'20XX',
      href:'#',
    },
  ]


  const projectsJsx = () => {
    return projects_info.map((e, i)=>{
      return (
        <li key={i} className='tA'>
          <a className='projects_a tA' style={{color: theme}} href={e.href} target='_blank' rel="noreferrer"> 
            <div className='bold_font i empleador_projects tA'>{e.año} / {e.empleador}</div> 
            <div className='i p_projects letter_spacing ligth_font tA'>{e.proyecto}</div> 
          </a>
        </li>
      )
    })
  }

  setInterval(()=>{setTransition('1')}, 300);

  return (
    <main className='tA'
    style={{
      color: theme,
      opacity:transition
    }}>
      <section className='section_projects tA'>
        <ul className='ul_projects'>
          <li className='Project_li_title subtitle tA'style={{color: theme}}>
            <div 
            className='tA'
            style={{
              border:'2px solid',
              borderColor:theme,
              height:'1rem',
              width:'1rem',
              backgroundColor: theme,
              marginRight:'1vw',
            }}
            ></div>
            Projects (Own Design & Develop)
          </li>
          {projectsJsx()}
        </ul>
      </section>
    </main>
  )
}
