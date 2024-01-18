
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../assets/css/blog.css'
import '../../assets/css/links.css'
import '../../assets/css/messageStyle.css'

import Post from '../Post/PostMap'
const Blog = () => {
const navigate = useNavigate()

const goToBlog = (e) => {
  e.preventDefault()
  navigate('/message')
}


  return (
    <>

    <div className="blogheader">
  <h2 className='headingTitle'>Jessica's Blog </h2>
  <a className='blogLink' onClick={goToBlog} href='/message'> Blog</a>
  
</div>



   

  <div className="post-reverse">
                    <Post />
                    </div>

    
    </>
  )
}

export default Blog