import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../../assets/css/forms.css'
import '../../assets/css/links.css'


const Login = ({formData, setFormData}) =>{

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e) => {
      e.preventDefault();
      // console.log(formData)
      const name = e.target.name;
      const value = e.target.value;

      setFormData({
          ...formData,
          [name]: value,

      })
  }


  const handleSubmit = (e) => {
      console.log('submit is working')
      e.preventDefault();
      if(!formData.email || !formData.password) {
        console.log('this is working', formData)
        navigate('/createAccount')
      }
     axios.post('http://localhost:5000/login', formData).then(({data}) => {

      navigate('/home')
    
      })
 .catch((err) => console.log(err))
}



const getModal = (e) => {
    e.preventDefault()
    setShowModal(!showModal)
}
  return (
      <>
   <button className='loginLink' onClick={getModal}>Login</button>
{showModal &&  <div className="loginModal">
<form className="modalContainerLoginCustomer">
<p className="disclaimer">By logging into your account you are only asking for permission to visit the site. I will not contact you or use your contact information for any reason, unless you request contact. Data will not be sold. Data will not be accessible to outside sources. We will not use your data for any solicitations. At no time will you be asked for finacial or personal data.</p>
  <input type="text" className='EmailInput' placeholder="Email" name="email" onChange={handleChange} required />
  <input type="password" className='PasswordInput2'placeholder="Password" name="password" onChange={handleChange} required />
  <button type="submit" className="submitLogin" onClick={handleSubmit}>login</button>
 
</form>
   </div>  }
  
    </>
  )
}


export default Login