import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPostById, resetCurrentPost } from "../redux/actions";
import "../css/blogDetails.style.css";

export const BlogDetails = () => {
    const { postId } = useParams();
    const { current } = useSelector((state) => state.Posts, shallowEqual);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /*
        According to the jsonplacholder api routes, it can be also used as below 
        but I will fetch a post by its id in this project.
    */
    // const currentPost = Posts.data.filter(post => post.id == postId)[0];

    useEffect(() => {
        if (!current) {
            dispatch(fetchPostById(postId));
        }

        return () => {
            dispatch(resetCurrentPost());
        };
    }, []);

    return (
        <section className="page blog-details">
            <div className="container">
                <div className="row">
                    {current ? (
                        <div className="col-12">
                            <div className="blog-detail-wrapper">
                                <div className="blog-detail-box">
                                    <h5>Title</h5>
                                    <h6>{current.title}</h6>
                                </div>
                                <div className="blog-detail-box">
                                    <h5>Body</h5>
                                    <p>{current.body}</p>
                                </div>
                                <div className="blog-detail-box">
                                    <p className="mb-0 text-end posted-by">
                                        Posted by :
                                        <span className="fw-bold">
                                            {" "}
                                            User {current.userId}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                <div className="row">
                    <div className="col-6 mt-4">
                        <button className="btn btn-primary" onClick={() => {
                            navigate(-1)
                        }}>Go Back</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
