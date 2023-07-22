/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { EarthCanvas } from './canvas'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
   //PXqmVTG3cUshx1pZ7
  //template_0norh65
  //service_e506it7

  const formRef = useRef()
  const [form , setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loadding, setLoasdding] = useState(false)

  const handleChange = (e) =>{
    const {name, value} = e.target
    setForm({...form , [name]:value})
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    setLoasdding(true)
    emailjs.send('service_e506it7', 
    'template_0norh65',
    {
        from_name: form.name,
        to_name: 'Sabuj Das',
        from_email: form.email,
        to_email: 'sabujdas.cse5.bu@gmail.com',
        message:form.message
    },
     'PXqmVTG3cUshx1pZ7' )
     .then(() =>{
      setLoasdding(false)
      alert('Thank you,I will get back to you as soon as possible.')
      setForm({
        name: '',
        email:'',
        message:'',
      }
      )
     }), (error) =>{
      setLoasdding(false)
      console.log("error from contact Page : ", error)
      alert('Something went wrong')
     }
  }
  return (
    <div className='xl:flex-row xl:mt-12 flex-col-reverse flex gap-10 overflow-hidden '>
      <motion.div variants={slideIn('left', 'tween', 0.2 , 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get touch in</p>
        <h3 className={styles.sectionHeadText} >Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-8 flex flex-col gap-8'  >
            
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your name</span>
              <input type='text' name='name' placeholder="what's your name" onChange={handleChange} value={form.name} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input type='email' name='email' placeholder="what's your email" onChange={handleChange} value={form.email} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea rows={7} name='message' placeholder="what's your message" onChange={handleChange} value={form.message} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
            </label>
            <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' >{loadding ? 'Sending ...':'Send'}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2 , 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]  ' >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact , 'contact' )