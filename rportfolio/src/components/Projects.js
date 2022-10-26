import React from 'react'

export default function Projects({theme}) {
  const projects_info = [
    {
      proyecto: 'Proyecto AKALY',
      empleador: 'empleador 0',
      año:2022,
      href:'#',
    },
    {
      proyecto: 'Proyecto BELPHEGOR',
      empleador: 'empleador 1',
      año:2022,
      href:'#',
    },
    {
      proyecto: 'Proyecto COLE',
      empleador: 'empleador 1',
      año:2022,
      href:'#',
    },
    {
      proyecto: 'Proyecto DAVID',
      empleador: 'empleador 1',
      año:2022,
      href:'#',
    },
    {
      proyecto: 'Proyecto LUCY',
      empleador: 'empleador 1',
      año:2022,
      href:'#',
    },
    {
      proyecto: 'Proyecto CP S2',
      empleador: 'empleador 1',
      año:2022,
      href:'#',
    },
  ]

  const projectsJsx = () => {
    return projects_info.map((e, i)=>{
      return (
        <li key={i}>
          <a className='projects_a' style={{color: theme}} href={e.href} target='_blank' rel="noreferrer"> 
            <div className='bold_font i empleador_projects'>{e.año} / {e.empleador}</div> 
            <div className='i letter_spacing ligth_font'>{e.proyecto}</div> 
          </a>
        </li>
      )
    })
  }

  // console.log(projects_jsx);

  return (
    <main >
      <section className='section_projects'>
        <ul>
          <li className='Project_li_title subtitle'style={{color: theme}}>■ Projects (Design & Develop)</li>
          {projectsJsx()}
        </ul>
      </section>
    </main>
  )
}
