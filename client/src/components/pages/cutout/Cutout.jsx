import React from 'react'
import '../../assets/css/sphere.css'
import maskPic from '../../assets/images/myInitials.png'
// className='mask1'
const Cutout = () => {
  return (
    <div >
      <img src={maskPic} className='cutout' alt='myName' />  
    </div>
  )
}

export default Cutout