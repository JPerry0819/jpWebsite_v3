import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../../assets/css/forms.css'
import '../../assets/css/links.css'
const ContactMe = () => {
    const [showContactModal, setShowContactModal] = useState(false)
    const [contactData, setContactData] = useState({
        company: '',
        contact: '',
        phone: '',
        email: '',
        message: ''
      })
    const navigate = useNavigate()
    const handleChange = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value

        setContactData({
            ...contactData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/contact/contact', contactData)
        .then(({data}) => {
            console.log(data)
            localStorage.setItem('contactme', JSON.stringify(contactData))
        }
    
        )
    console.log(contactData)
    alert('successful submission. I will be in touch shortly.')
        console.log('axios is working')
     setShowContactModal(false)
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setShowContactModal(false)
    }
    const getModal = (e) => {
        e.preventDefault()
        setShowContactModal(!showContactModal)
    }


  return (
<>
<button className="contactLink" onClick={getModal}>Contact Me</button>
{showContactModal && 
    <div className='contactModal'>
        <h1 className="titleContact">Contact Me</h1>
     <form onSubmit={handleSubmit} className="contactForm">
         <input type="text" name='company' onChange={handleChange} placeholder='Please Provide Company Name: (Optional)' className="companyInput" />
         <input type="text" name='contact' onChange={handleChange} placeholder='Please Provide Name: ' className="contactInput" />
         <input type="email" name='email' onChange={handleChange} placeholder='Please Provide Email: ' className="emailInput" />
         <input type="tel" name='phone' onChange={handleChange} placeholder='Please Provide Phone Number: (Optional) ' className="contactInput" />
         <textarea className='messageInput' name='message' onChange={handleChange} placeholder='Please leave a message: ' />
         <button className="cancelContact" onClick={handleCancel}>Close</button>
         <button className="submitContact">Send Contact Form</button>


     </form>
    </div>
    }
</>
  )
}

export default ContactMe