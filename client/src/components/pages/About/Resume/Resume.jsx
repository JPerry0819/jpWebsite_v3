import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../../../assets/css/myResume.css'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import '../../../assets/css/links.css'
     

const Resume = () => {
  const navigate = useNavigate()
  const handleHome = (e) =>{
    e.preventDefault()
    navigate('/home')
    
  }
  return (
    <div className='content margin-top' style={{maxWidth:"1200px"}}>
 
       <div row-padding>
         <div className='third'>
           <div className='white text-grey card-4'>
             <div className='display-container'>
             <Contact />
             <Skills /> 
             </div>

           </div>
         </div>
         </div> 
<div className='twothird'>
  <div className='container card white margin-bottom'>
  <Experience /> 
  <Education />
  </div>
</div>

<button className="homeLink" onClick={handleHome}>Home</button>
    </div>
  )
}

export default Resume