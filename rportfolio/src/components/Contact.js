import React, {useRef} from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'


export default function Contact({theme, bg}) {

  const { register, formState:{errors}, handleSubmit } = useForm();
  const form = useRef();
  console.log(form);

  const onSubmit = (e) => {

    emailjs.sendForm("service_2ga7ksy","template_e6szw5t", form.current, 'edZbTam8u8bby17z-')
    .then(res=> console.log(res))
    console.log(form);
  }

  return (
    <main className='main_home main_margin' style={{color: theme}}>
      <section className='section_home'>
        <form 
        className='form_contact'
        ref={form} 
        onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className='divs_contact'>
                <label className='contact_font'>Name</label>
                <input  
                {...register('name')}
                style={{
                  background:bg,
                  color:theme,
                  borderColor:theme
                }}
                type='text' 
                className='inputs_contact iC'  ></input>
            </div>
            <div className='divs_contact'>
              <label className='contact_font'>Email</label>
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
              className=' inputs_contact iC'></input>
              {errors.email?.type === 'required' && <p className='bold_font'>Fill the email field</p>}
            </div>
          </div>
          <div className='divs_contact'>
            <label className='contact_font'>Subject</label>
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
            className=' inputs_contact iC'></input>
            {errors.subject?.type === 'required' && <p className='bold_font'>Fill the subject field</p>}
          </div>
          <div className='divs_contact'> 
            <label className='contact_font'>Message</label>
            <textarea 
            {...register('message')}
            style={{
              background:bg,
              color:theme,
              borderColor:theme,
              outline:'none'
            }}
            type='text' 
            className='textA_contact'></textarea>
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
          className='contact_font submit_contact'
          ></input>
        </form>
      </section>
    </main>
  )
}
