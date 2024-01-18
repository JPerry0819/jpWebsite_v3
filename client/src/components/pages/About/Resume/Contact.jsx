import React from 'react'
import '../../../assets/css/myResume.css'
import '../../../assets/css/resume.css'
import profilePic from '../../../assets/images/profilePicture.jpg'

const Contact = () => {
  return (
    <div className='leftSideContainer' style={{backgroundColor: 'black'}}>
      
          <img src={profilePic} style={{width: "71.25%"}} className="profilePic" alt="Avatar" />
          <div className="displayBottomLeft  container textBlack">
            <h2 style={{color: 'gold'}}>Jessica L. Bruner</h2>
            <p style={{color: 'gold'}}>A full-stack developer with 3 years exprience.</p>
       </div>
        <div className="container">
         
          <p  style={{color: 'gold'}}><i className="marginRight large " ></i>Phoenix, AZ</p>
          <p  style={{color: 'gold'}}><i className="marginRight large "></i>jessicaPerry0819@hotmail.com</p>
          <p  style={{color: 'gold'}}><i className="marginRight large "></i>602-475-2274</p>
          <hr /> 
 </div>
    </div>
  )
}

export default Contact