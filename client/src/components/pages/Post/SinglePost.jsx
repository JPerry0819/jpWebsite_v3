import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { deletePost } from "../Features/postingSlice";
import { useDispatch } from "react-redux";

const SinglePost = ({ item, setOpenComments, loggedCustomer, loggedUser }) => {
const dispatch = useDispatch();
    const [company, setCompany] = useState('')
    const [contact, setContact] = useState('')
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div>
            <div className="bringForth">
                <h3 className="blogTitles userContent">{item.title}</h3>
             
                <p className="subTitleAlpha userContent">{item.description} <span className="opacity date">{item.date}</span></p>
                <p className="userContent">{item.userPosting}</p>
             
            </div>
{/* 
            <button type="button"
                className="modal-btn confirm-btn"
                onClick={() => {
                    console.log(item)
                    setIsOpen(true);
                }}
            >
                Comment
            </button> 

             <button
            type="button"
            className="modal-btn confirm-btn"
            onClick={() =>{
              setOpenComments(true)
            }}
            >
            See comments...
            </button> */}
{/* <button className="deletePost" onClick={handleDelete(item._id)}>Delete</button> */}

            {isOpen &&
                <Modal
                    post={item}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />}
        </div>
    )
}

export default SinglePost
