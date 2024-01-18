import React from 'react'
import '../../assets/css/home.css'
import { useNavigate } from 'react-router-dom'
import ContactMe from '../account/ContactMe'
import Logout from '../account/Logout'
import ImageGrid from '../ImageGrid/ImageGrid'
import BallSphere from '../sphere/BallSphere'
import { Link } from 'react-router-dom'
const Home = ({formData, contactData, setContactData}) => {
  const navigate = useNavigate()
const handleClick = (e) => {
  e.preventDefault()
  navigate('/hidden')

}


  return (
    <div className='homePage'>
      <Logout />
      <ContactMe contactData={contactData} setContactData={setContactData} />
      <Link className='downloadResumebtn' to='/files/Bruner_Resume.pdf' target="_blank" download>Download Resume</Link>
      <button className="hiddenLink" onClick={handleClick}>Shh...</button>


      <div className="welcomeBox">

      <br />    <br />    <br />
    <p className='contactName'>
      Hello {formData.contact}! My Name is Jessica Perry and I am a full-stack web developer. I have 4+ years experience building full stack websites utilizing the MERN stack.     </p>
      <br />    <br />    <br />
      <hr />
      <br />    <br />    <br />
      <BallSphere />
      <br />    <br />    <br />
      <hr />
      <br />    <br />   
      <p className="moreInfo">I am passionate about my work and enjoy working within teams and independently. Examples of my work as well as my blog can be found to the right of the page. Select a box and enjoy!</p>


      </div>
     <ImageGrid />
    

  
    </div>
  )
}

export default Home