import React from "react";
import "../../css/style.default.css";
import "../../vendor/bootstrap/css/bootstrap.min.css";
import "../../vendor/font-awesome/css/font-awesome.min.css";
import "../../vendor/owl.carousel/assets/owl.carousel.css";
import "../../vendor/owl.carousel/assets/owl.theme.default.css";

const Home = () => {
    return (
        <>
            <div id="all">
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="main-slider" className="owl-carousel owl-theme">
                                    <div className="item"><img src="img/main-slider1.jpg" alt="" className="img-fluid" /></div>
                                    <div className="item"><img src="img/main-slider2.jpg" alt="" className="img-fluid" /></div>
                                    <div className="item"><img src="img/main-slider3.jpg" alt="" className="img-fluid" /></div>
                                    <div className="item"><img src="img/main-slider4.jpg" alt="" className="img-fluid" /></div>
                                </div>
                                {/* <!-- /#main-slider--> */}
                            </div>
                        </div>
                    </div>
                    <div id="hot">
                        <div className="box py-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className="mb-0">스타일 제안</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="product-slider owl-carousel owl-theme">
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="detail.html"><img src="img/product1.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="detail.html"><img src="img/product1_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="detail.html" className="invisible"><img src="img/product1.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="detail.html">Fur coat with very but very very long name</a></h3>
                                            <p className="price">
                                                <del></del>$143.00
                                            </p>
                                        </div>
                                        {/* <!-- /.text--> */}
                                        <div className="ribbon sale">
                                            <div className="theribbon">SALE</div>
                                            <div className="ribbon-background"></div>
                                        </div>
                                        {/* <!-- /.ribbon--> */}
                                        <div className="ribbon new">
                                            <div className="theribbon">NEW</div>
                                            <div className="ribbon-background"></div>
                                        </div>
                                        {/* <!-- /.ribbon--> */}
                                        <div className="ribbon gift">
                                            <div className="theribbon">GIFT</div>
                                            <div className="ribbon-background"></div>
                                        </div>
                                        {/* <!-- /.ribbon--> */}
                                    </div>
                                    {/* <!-- /.product--> */}
                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="detail.html"><img src="img/product2.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="detail.html"><img src="img/product2_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="detail.html" className="invisible"><img src="img/product2.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="detail.html">White Blouse Armani</a></h3>
                                            <p className="price">
                                                <del>$280</del>$143.00
                                            </p>
                                        </div>
                                        {/* <!-- /.text--> */}
                                        <div className="ribbon sale">
                                            <div className="theribbon">SALE</div>
                                            <div className="ribbon-background"></div>
                                        </div>
                                        {/* <!-- /.ribbon--> */}
                                        <div className="ribbon new">
                                            <div className="theribbon">NEW</div>
                                            <div className="ribbon-background"></div>
                                        </div>
                                        {/* <!-- /.ribbon--> */}
                                        <div className="ribbon gift">
                                            <div className="theribbon">GIFT</div>
                                            <div className="ribbon-background"></div>
                                        </div>
                                        {/* <!-- /.ribbon--> */}
                                    </div>
                                    {/* <!-- /.product--> */}
                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="detail.html"><img src="img/product3.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="detail.html"><img src="img/product3_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="detail.html" className="invisible"><img src="img/product3.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="detail.html">Black Blouse Versace</a></h3>
                                            <p className="price">
                                                <del></del>$143.00
                                            </p>
                                        </div>
                                        {/* <!-- /.text--> */}
                                    </div>
                                    {/* <!-- /.product--> */}
                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="detail.html"><img src="img/product3.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="detail.html"><img src="img/product3_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="detail.html" className="invisible"><img src="img/product3.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="detail.html">Black Blouse Versace</a></h3>
                                            <p className="price">
                                                <del></del>$143.00
                                            </p>
                                        </div>
                                        {/* <!-- /.text--> */}
                                    </div>
                                    {/* <!-- /.product--> */}
                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="detail.html"><img src="img/product2.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="detail.html"><img src="img/product2_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="detail.html" className="invisible"><img src="img/product2.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="detail.html">White Blouse Versace</a></h3>
                                            <p className="price">
                                                <del></del>$143.00
                                            </p>
                                        </div>
                                        {/* <!-- /.text--> */}
                                        <div className="ribbon new">
                                            <div className="theribbon">NEW</div>
                                            <div className="ribbon-background"></div>
                                        </div>
                                        {/* <!-- /.ribbon--> */}
                                    </div>
                                    {/* <!-- /.product--> */}
                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="detail.html"><img src="img/product1.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="detail.html"><img src="img/product1_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="detail.html" className="invisible"><img src="img/product1.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="detail.html">Fur coat</a></h3>
                                            <p className="price">
                                                <del></del>$143.00
                                            </p>
                                        </div>
                                        {/* <!-- /.text--> */}
                                        <div className="ribbon gift">
                                            <div className="theribbon">GIFT</div>
                                            <div className="ribbon-background"></div>
                                        </div>
                                        {/* <!-- /.ribbon--> */}
                                    </div>
                                    {/* <!-- /.product--> */}
                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="detail.html"><img src="img/product2.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="detail.html"><img src="img/product2_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="detail.html" className="invisible"><img src="img/product2.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="detail.html">White Blouse Armani</a></h3>
                                            <p className="price">
                                                <del>$280</del>$143.00
                                            </p>
                                        </div>
                                        {/* <!-- /.text--> */}
                                        <div className="ribbon sale">
                                            <div className="theribbon">SALE</div>
                                            <div className="ribbon-background"></div>
                                        </div>
                                        {/* <!-- /.ribbon--> */}
                                        <div className="ribbon new">
                                            <div className="theribbon">NEW</div>
                                            <div className="ribbon-background"></div>
                                        </div>
                                        {/* <!-- /.ribbon--> */}
                                        <div className="ribbon gift">
                                            <div className="theribbon">GIFT</div>
                                            <div className="ribbon-background"></div>
                                        </div>
                                        {/* <!-- /.ribbon--> */}
                                    </div>
                                    {/* <!-- /.product--> */}
                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="detail.html"><img src="img/product3.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="detail.html"><img src="img/product3_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="detail.html" className="invisible"><img src="img/product3.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="detail.html">Black Blouse Versace</a></h3>
                                            <p className="price">
                                                <del></del>$143.00
                                            </p>
                                        </div>
                                        {/* <!-- /.text--> */}
                                    </div>
                                    {/* <!-- /.product--> */}
                                </div>
                                {/* <!-- /.product-slider--> */}
                            </div>
                            {/* <!-- /.container--> */}
                        </div>
                        {/* <!-- /#hot-->
          <!-- *** HOT END ***--> */}
                    </div>
                    {/* <!--
        *** GET INSPIRED ***
        _________________________________________________________
        --> */}
                    <div className="container">
                        <div className="col-md-12">
                            <div className="box slideshow">
                                <h3>추천 아이템</h3>
                                <p className="lead">Get the inspiration from our world class designers</p>
                                <div id="get-inspired" className="owl-carousel owl-theme">
                                    <div className="item"><a href="#"><img src="img/getinspired1.jpg" alt="Get inspired" className="img-fluid" /></a></div>
                                    <div className="item"><a href="#"><img src="img/getinspired2.jpg" alt="Get inspired" className="img-fluid" /></a></div>
                                    <div className="item"><a href="#"><img src="img/getinspired3.jpg" alt="Get inspired" className="img-fluid" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- *** GET INSPIRED END ***-->
        <!--
        *** BLOG HOMEPAGE ***
        _________________________________________________________
        --> */}
                    <div className="box text-center">
                        <div className="container">
                            <div className="col-md-12">
                                <h3 className="text-uppercase">당일 배송</h3>
                                <p className="lead mb-0">What's new in the world of fashion? <a href="blog.html">Check our blog!</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-md-12">
                            <div id="blog-homepage" className="row">
                                <div className="col-sm-6">
                                    <div className="post">
                                        <h4><a href="post.html">Fashion now</a></h4>
                                        <p className="author-category">By <a href="#">John Slim</a> in <a href="">Fashion and style</a></p>
                                        <hr />
                                        <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                        <p className="read-more"><a href="post.html" className="btn btn-primary">Continue reading</a></p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="post">
                                        <h4><a href="post.html">Who is who - example blog post</a></h4>
                                        <p className="author-category">By <a href="#">John Slim</a> in <a href="">About Minimal</a></p>
                                        <hr />
                                        <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                        <p className="read-more"><a href="post.html" className="btn btn-primary">Continue reading</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /#blog-homepage--> */}
                        </div>
                    </div>
                    {/* <!-- /.container-->
        <!-- *** BLOG HOMEPAGE END ***--> */}
                </div>
            </div>
        </>
    )
};

export default Home;