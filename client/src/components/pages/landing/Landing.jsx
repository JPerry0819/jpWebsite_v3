import React from 'react'

import AUMascot from '../../assets/images/AUmascot.png'

import TwoSphere from '../sphere/TwoSphere'
import '../../assets/css/landing.css'
import Login from '../account/Login'
import Register from '../account/Account'

const Landing = ({formData, setFormData}) => {
  return (
    <>
    
<Login formData={formData} setFormData={setFormData} />
<Register formData={formData} setFormData={setFormData} />

        <>
        <TwoSphere />
  
        </>
     <>
     <img src={AUMascot} className='aumascot' alt='aumascot' />
     </>
     <>
     {/* <img src={AUSeal} className='auSeal' alt='auSeal' /> */}
     </>
    </>
  )
}

export default Landing