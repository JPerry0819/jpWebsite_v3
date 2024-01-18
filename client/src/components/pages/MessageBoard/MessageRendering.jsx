import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost, getPost } from '../Features/postingSlice';
import { useSelector, useDispatch } from 'react-redux';
import Post from "../Post/PostMap";
import '../../assets/css/messageStyle.css';



const MessageRendering = ({loggedUser, loggedCustomer}) => {
    const [userPosting, setUserPosting] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { post, isError } = useSelector((state) => state.post)
    const { user } = useSelector((state) => state.user);

    const [showPost, setShowPost] = useState(false)
    const handleClick = () => {
        navigate('/home')
    }

    const handlePost = () => {
        const newPost = {
            title: title,
            description: description,
            userPosting: userPosting,
            userId: user.userId,
           contact: user.contact,
           company: user.company
        };
        dispatch(createPost(newPost))
        setTitle('');
        setDescription('');
        setUserPosting('');
        setShowPost(false)
    }
    const getPostModal = (e) => {
        e.preventDefault()
        setShowPost(!showPost)
    }

    return (
        <>
      
   
        <button className="returnFromMessage" onClick={handleClick}>Home</button>
            <div className="content">
                {/* Message Board Title */}
                <div className="container">
                  
                        <h1 className="title">Jessica's Blog</h1>
                           <p className="post-heading"></p>
                  
                </div>
                
          

                <hr />

                {/* Main content */}
            <button className="getPost" onClick={getPostModal}>Post a Message</button>
                <div className="margins">
                    {showPost &&  <div className="posting-container">
                        
                        <input
                            type='text'
                            placeholder="TITLE..."
                            className="post-input"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="SubTitle..."
                            className="post-input"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <textarea
                            className="post-input"
                            type='text'
                            placeholder="Questions, comments...."
                            cols='30'
                            rows='10'
                            value={userPosting}
                            onChange={(e) => setUserPosting(e.target.value)}
                        />
                        <button type="button" className="confirm-btn modal-btn" onClick={() => {
                            handlePost()
                        }}>Post</button>
                    </div>}

                   {/* <div className="post-reverse">
                    <Post />
                    </div> */}
                </div>
            </div>
    
        </>
    )
}
export default MessageRendering
