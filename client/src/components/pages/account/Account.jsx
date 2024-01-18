import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../assets/css/forms.css'
import '../../assets/css/links.css'

const Account = ( { formData, setFormData } ) => {
    const navigate = useNavigate();
const [showModal, setShowModal] = useState(false)
    const handleChange = (e) => {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.password !== formData.passtwo){
            alert('password does not match')
        }
        else{
            delete formData.passtwo

            axios.post('http://localhost:5000/createAccount', formData).then((res) => {
                if(formData !== ""){
                    localStorage.setItem('account', JSON.stringify(formData));
                    navigate('/home')
                }
                setShowModal(false)
            })
        }
    }
    const getModal = (e) => {
        e.preventDefault()
        setShowModal(!showModal)
    }
  return (
<>
<button className='registerLink' onClick={getModal}>Register</button>
{showModal && <div className="registerModal" name="Form">
               
               <form className='registerForm'>
                   <p className="disclaimer">By creating an account you are only asking for permission to visit the site. I will not contact you or use your contact information for any reason, unless you request contact. Data will not be sold. Data will not be accessible to outside sources. We will not use your data for any solicitations. At no time will you be asked for finacial or personal data.</p>
                   <input
                       type='text'
                       name='name'
                       onChange={ handleChange }
                       className='NameInput'
                       placeholder='Enter Username: '
                       required
                   />
               
                   <input
                       type='email'
                       name='email'
                       onChange={ handleChange }
                       className='EmailInput'
                       placeholder="Enter email: "
                       required
                   />
                       <input
                       type='text'
                       name='company'
                       onChange={ handleChange }
                       className='NameInput'
                       placeholder='Enter Company (optional): '
                     
                   />
                       <input
                       type='tel'
                       name='phone'
                       onChange={ handleChange }
                       className='NameInput'
                       placeholder='Enter Contact Number (optional): '
                    
                   />
                
                   <input
                       type='password'
                       name="password"
                       onChange={ handleChange }
                       className='PasswordInput'
                       placeholder="Create your Password:"
   
                       required
                   />
              
                   <input
                       type='password'
                       name="passtwo"
                       onChange={ handleChange }
                       placeholder="Confirm your Password:"
                       className='ConfirmInput'
                       required
                   />
                   <br />
                   <input type='submit' className="submitRegister" 
                   name="submit" 
                   onClick={ handleSubmit }  />
               </form>
               </div>}

            </>

)
}




export default Account