import React, { useState, useEffect } from "react";
import { commentToAdd } from "../Features/postingSlice";
import { useSelector, useDispatch } from 'react-redux';
import '../../assets/css/modalStyle.css';

const Modal = ({ post, setIsOpen }) => {
    const [newComment, setNewComment] = useState('')
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user);

    const commentPost = (id, currentCommentArray) => {
        const commentAdd = {
            comment: newComment,
            company: user.company,
            contact: user.contact
        }
        console.log(currentCommentArray)
        const newCommentArray = [...currentCommentArray, commentAdd]

        const sendToRedux = {
            commentsToAdd: newCommentArray,
            id: id
        }
        dispatch(commentToAdd(sendToRedux))
    }


    return (
        <div className="modal-container">
            <div className="modal">
                <textarea
                    className="post-input"
                    name="comment"
                    id="comment"
                    cols="15"
                    rows="5"
                    placeholder="Comment on this posting...."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                >
                </textarea>

                <button type="button"
                    className="modal-btn btn confirm-btn"
                    onClick={() => {
                        commentPost(post._id, post.commentSection)
                        setIsOpen(false)
                    }}
                >Submit</button>


                <button
                    type="button"
                    className=" modal-btn btn clear-btn"
                    onClick={() => {
                        setIsOpen(false)
                    }}
                >Cancel</button>


            </div>
        </div>
    )
}
export default Modal;