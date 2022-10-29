import React, {useRef} from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'


export default function Contact({theme, bg, transition, setTransition}) {

  const { register, formState:{errors}, handleSubmit } = useForm();
  const form = useRef();
  console.log(form);

  const onSubmit = (e) => {

    emailjs.sendForm("service_2ga7ksy","template_e6szw5t", form.current, 'edZbTam8u8bby17z-')
    .then(res=> console.log(res))
    console.log(form);
  }

  setInterval(()=>{setTransition('1')}, 300);

  return (
    <main className='main_home main_margin tA' 
    style={{
      color: theme,
      opacity:transition
    }}>
      <section className='section_home tA'>
        <form 
        className='form_contact tA'
        ref={form} 
        onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className='divs_contact tA'>
                <label className='contact_font tA'>Name:</label>
                <input  
                {...register('name')}
                style={{
                  background:bg,
                  color:theme,
                  borderColor:theme
                }}
                type='text' 
                className='inputs_contact iC tA'  ></input>
            </div>
            <div className='divs_contact tA'>
              <label className='contact_font tA'>Email:</label>
              <input 
              {...register('email', {
                required:true
              })}
              style={{
                background:bg,
                color:theme,
                borderColor:theme
              }}
              type='email' 
              className=' inputs_contact iC tA'
              ></input>
              {errors.email?.type === 'required' && <p className='bold_font'>Fill the email field</p>}
            </div>
          </div>
          <div className='divs_contact tA'>
            <label className='contact_font tA'>Subject:</label>
            <input
            {...register('subject', {
              required:true,
              maxLength:30
            })}
            style={{
              background:bg,
              color:theme,
              borderColor:theme
            }}
            type='text' 
            className=' inputs_contact iC tA'
            ></input>
            {errors.subject?.type === 'required' && <p className='bold_font'>Fill the subject field</p>}
          </div>
          <div className='divs_contact tA'> 
            <label className='contact_font tA'>Message:</label>
            <textarea 
            {...register('message')}
            style={{
              background:bg,
              color:theme,
              borderColor:theme,
              outline:'none'
            }}
            type='text' 
            className='textA_contact tA'
            ></textarea>
          </div>
          <input 
          type='submit' 
          value='send'
          style={{
            border:'1px solid',
            bordercolor:theme,
            marginTop:'4vh',
            fontSize:'2rem',
            fontWeight:'200',
            padding:'1vh 0'
          }}
          className='contact_font submit_contact tA'
          ></input>
        </form>
      </section>
    </main>
  )
}
