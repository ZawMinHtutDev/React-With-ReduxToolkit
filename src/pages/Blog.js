import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../redux/actions";
import "../css/blog.style.css";
import { Link } from "react-router-dom";

const BlogItem = ({ post }) => {
    return (
        <Link to={`/blogs/${post.id}`} className="blog-item-wrapper">
            <div className="col-12">
                <h5>{post.title}</h5>
                <p>{post.body}</p>
            </div>
        </Link>
    );
};

export const Blog = () => {
    const { Posts } = useSelector((state) => state, shallowEqual);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        BlogList: null,
    });

    useEffect(() => {
        if (!Posts.data) {
            dispatch(fetchAllPosts());
        }
    }, []);

    useEffect(() => {
        if (Posts.data) {
            setState({
                BlogList: Posts.data.map((post) => (
                    <BlogItem post={post} key={post.id.toString()} />
                )),
            });
        }
    }, [Posts]);

    return (
        <section className="page blog-page">
            <div className="container">
                <div className="row">{Posts.data ? state.BlogList : <></>}</div>
            </div>
        </section>
    );
};
