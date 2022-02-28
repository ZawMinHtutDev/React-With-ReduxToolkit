import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import logo from "./logo.svg";
import { Blog, BlogDetails } from "./pages";

export const Router = () => {
    const goTopRef = useRef();

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        document.title = "React With Redux-Toolkit";
        window.onscroll = () => {
            if (window.scrollY > 100) {
                goTopRef.current.classList.add("display");
            } else {
                goTopRef.current.classList.remove("display");
            }
        };
    }, []);

    return (
        <BrowserRouter>
            <menu className="p-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <NavLink to="/">
                                <img
                                    src={logo}
                                    alt="React"
                                    className="img-fluid logo"
                                />
                            </NavLink>
                        </div>

                        <div className="col-md-10">
                            <nav>
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link">
                                            Blogs
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link">Todos</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </menu>

            <Routes>
                <Route path="/" element={<Blog />} />
                <Route path="/blogs/:postId" element={<BlogDetails />} />
            </Routes>

            <button id="goTop" onClick={scrollTop} ref={goTopRef}>
                <div>TOP</div>
            </button>
        </BrowserRouter>
    );
};
