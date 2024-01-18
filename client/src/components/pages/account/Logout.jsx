import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../assets/css/links.css'

const Logout = () => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    navigate('/')

  }
  return (
    <button type='button' name='logout' className='logoutLink' onClick={handleClick}>Logout</button>
  )
}

export default Logout