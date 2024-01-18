import React from 'react'
import '../../../assets/css/resume.css'

const Education = () => {
  return (
    <div className='educationContainer'>
          
        <h2 className=" padding-16" style={{color: 'gold'}}><i className="fa fa-certificate fa-fw margin-right xxlarge "></i>Education</h2>
        <div className="container">
          <h5 className="opacity" style={{color: 'gold'}}><b>Ashland University</b></h5>
          <h6 style={{color: 'gold'}}><i className="fa fa-calendar fa-fw margin-right"></i>B.A in Applied Communications - August 2023</h6>
          <p></p>
          <hr />
        </div>
        <div className="container">
          <h5 className="opacity" style={{color: 'gold'}}><b>Persevere</b></h5>
          <h6  style={{color: 'gold'}}><i className="fa fa-calendar fa-fw margin-right"></i>MERN stack Certification - April 2021 </h6>
          <p></p>
          <hr />
   
        </div>
    </div>
  )
}

export default Education