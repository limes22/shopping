import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../css/style.default.css";
import "../../vendor/bootstrap/css/bootstrap.min.css";
import "../../vendor/font-awesome/css/font-awesome.min.css";
import "../../vendor/owl.carousel/assets/owl.carousel.css";

const SideBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    // const [current, setCurrent] = useState("nav-link")
    // const [current2, setCurrent2] = useState("dropdown-toggle nav-link")
    // const [current3, setCurrent3] = useState("dropdown-toggle nav-link")
    // const [current4, setCurrent4] = useState("dropdown-toggle nav-link")

    console.log(location.pathname);

    useEffect(() => {
        console.log("now im mount");
        return () => console.log("now im unmount")
    }, [location])

    // switch (location.pathname) {
    //     case "/":
    //         setCurrent("nav-link active");
    //         setCurrent2("dropdown-toggle nav-link");
    //         setCurrent3("dropdown-toggle nav-link");
    //         setCurrent4("dropdown-toggle nav-link");
    //         break;
    //     case "/brand":
    //         setCurrent2("dropdown-toggle nav-link active");
    //         setCurrent("nav-link");
    //         setCurrent3("dropdown-toggle nav-link");
    //         setCurrent4("dropdown-toggle nav-link");
    //         break;
    //     case "/best":
    //         setCurrent("nav-link");
    //         setCurrent2("dropdown-toggle nav-link");
    //         setCurrent3("dropdown-toggle nav-link active");
    //         setCurrent4("dropdown-toggle nav-link");
    //         break;
    //     case "/sale":
    //         setCurrent2("dropdown-toggle nav-link");
    //         setCurrent("nav-link");
    //         setCurrent3("dropdown-toggle nav-link");
    //         setCurrent4("dropdown-toggle nav-link active");
    //         break;
    //     default:
    //         return;}

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
                                <a className={location.pathname === "/" ? "nav-link active" : "nav-link"}
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
                                    className={location.pathname === "/brand" ? "dropdown-toggle nav-link active" : "nav-link"}
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
                                    data-toggle="dropdown"
                                    data-hover="dropdown"
                                    data-delay="200"
                                    className={location.pathname === "/best" ? "dropdown-toggle nav-link active" : "nav-link"}
                                    onClick={() => {
                                        navigate("/best");
                                    }}
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
                                    data-toggle="dropdown"
                                    data-hover="dropdown"
                                    data-delay="200"
                                    className={location.pathname === "/sale" ? "dropdown-toggle nav-link active" : "nav-link"}
                                    onClick={() => {
                                        navigate("/sale");
                                    }}
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
