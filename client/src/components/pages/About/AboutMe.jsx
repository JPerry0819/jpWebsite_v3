import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../assets/css/about.css'

const AboutMe = () => {
  const navigate = useNavigate()


  return (
   <>
 <p className='aboutMeBlurb'>Hi, I am Jessica. I have been a web developer for about four years. I am a solutions driven individual with a strong work ethic and a passion for coding. I enjoy working within teams and independently.</p>
     
         
    
   </>
  )
}

export default AboutMe