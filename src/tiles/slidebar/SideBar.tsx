import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../css/style.default.css";
import "../../vendor/bootstrap/css/bootstrap.min.css";
import "../../vendor/font-awesome/css/font-awesome.min.css";
import "../../vendor/owl.carousel/assets/owl.carousel.css";

const SideBar = () => {
    const [current, setCurrent] = useState("nav-link")
    let navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a href="index.html" className="navbar-brand home">
                        <img
                            src="img/logo.png"
                            alt="Obaju logo"
                            className="d-none d-md-inline-block"
                        />
                        <img
                            src="img/logo-small.png"
                            alt="Obaju logo"
                            className="d-inline-block d-md-none"
                        />
                        <span className="sr-only">Obaju - go to homepage</span>
                    </a>
                    <div className="navbar-buttons">
                        <button
                            type="button"
                            data-toggle="collapse"
                            data-target="#navigation"
                            className="btn btn-outline-secondary navbar-toggler"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <i className="fa fa-align-justify"></i>
                        </button>
                        <button
                            type="button"
                            data-toggle="collapse"
                            data-target="#search"
                            className="btn btn-outline-secondary navbar-toggler"
                        >
                            <span className="sr-only">Toggle search</span>
                            <i className="fa fa-search"></i>
                        </button>
                        <a
                            href="basket.html"
                            className="btn btn-outline-secondary navbar-toggler"
                        >
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                    </div>
                    <div id="navigation" className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link"
                                    onClick={() => {
                                        navigate("/");
                                    }}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item dropdown menu-large">
                                <a
                                    data-toggle="dropdown"
                                    data-hover="dropdown"
                                    data-delay="200"
                                    className="dropdown-toggle nav-link"
                                    onClick={() => {
                                        navigate("/brand");
                                    }}
                                >
                                    Brand<b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu megamenu">
                                    <li>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Clothing</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            상의
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            하의
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Shoes</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Trainers
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Sandals
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Hiking shoes
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Casual
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Accessories</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Trainers
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Sandals
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Hiking shoes
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Casual
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Hiking shoes
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Casual
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>life</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Trainers
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Sandals
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Hiking shoes
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown menu-large">
                                <a
                                    href="#"
                                    data-toggle="dropdown"
                                    data-hover="dropdown"
                                    data-delay="200"
                                    className="dropdown-toggle nav-link"
                                >
                                    Best<b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu megamenu">
                                    <li>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Clothing</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            상의
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            하의
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Shoes</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Trainers
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Sandals
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Hiking shoes
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Casual
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Accessories</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Trainers
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Sandals
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Hiking shoes
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Casual
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Hiking shoes
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Casual
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>life</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Trainers
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Sandals
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="category.html" className="nav-link">
                                                            Hiking shoes
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown menu-large">
                                <a
                                    href="#"
                                    data-toggle="dropdown"
                                    data-hover="dropdown"
                                    data-delay="200"
                                    className="dropdown-toggle nav-link"
                                >
                                    Sale<b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu megamenu">
                                    <li>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-3">
                                                <h5>24시간 라이프 타임 특가</h5>
                                                <ul className="list-unstyled mb-3">
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="navbar-buttons d-flex justify-content-end">
                            {/* <!-- /.nav-collapse--> */}
                            <div
                                id="search-not-mobile"
                                className="navbar-collapse collapse"
                            ></div>
                            <a
                                data-toggle="collapse"
                                href="#search"
                                className="btn navbar-btn btn-primary d-none d-lg-inline-block"
                            >
                                <span className="sr-only">Toggle search</span>
                                <i className="fa fa-search"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default SideBar;
