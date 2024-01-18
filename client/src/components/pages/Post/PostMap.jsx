import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import SinglePost from "./SinglePost";

const PostMap = () => {

    const dispatch = useDispatch();
    const [openComments, setOpenComments] = useState(false)
    const { user } = useSelector((state) => state.user);
    const { post, isError } = useSelector((state) => state.post)

    return (
        <>
            {post.map((item, index) => (
                <div key={index} className="mainPostContainer">

                    <div className="center" key={index}>

                        <SinglePost item={item} openComments={openComments} setOpenComments={setOpenComments} />

                        {openComments &&
                            <div className="comment-section">

                                {item.commentSection.map((item, index) => {
                                    return (
                                        <div key={index} className="comment-item">

                                            <h3 className="postBox">{item.company} from  {item.contact}</h3>
                                            <p className="postBox">{item.date}</p>
                                            <p className="postBox">{item.comment}</p>
                                        </div>
                                    )
                                })}

                                <button
                                    type="button"
                                    className=" modal-btn btn clear-btn"
                                    onClick={() => {
                                        setOpenComments(false)
                                    }}
                                >
                                    See less...
                                </button>
                            </div>
                        }

                    </div>
                </div>
            ))}
        </>
    )
}
export default PostMap
