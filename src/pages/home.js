
import React from "react";
import logimg from "../assets/images/logo/lg.png";
import sideB from "../assets/images/categories/side bs.jpg";
import ecoB from "../assets/images/categories/eco bs.jpg";
import onlineB from "../assets/images/categories/online bs.jpg";
import seo from "../assets/images/categories/dg seo.jpg";
import web from "../assets/images/categories/build website.jpg";
import log from "../assets/images/categories/logcr.jpg";
import wedimg from "../assets/images/todo/photography.jpg";
import businessimg from "../assets/images/todo/business (1).jpg";
import progmimg from "../assets/images/todo/programmer.jpg";
import profficeimg from "../assets/images/todo/prooffice.jpg";
import servimg from "../assets/images/todo/service market.jpg";
import homeimg from "../assets/images/todo/home service.jpg";
import visaimg from "../assets/images/todo/visaguy (1).jpg";
import eleimg from "../assets/images/todo/elect.jpg";
import docimg from "../assets/images/todo/documentation.jpg";
import brandimg from "../assets/images/brand/1.png";
import brandimg2 from "../assets/images/brand/2.png";
import brandimg3 from "../assets/images/brand/3.png";
import brandimg4 from "../assets/images/brand/4.png";
import processimg from "../assets/images/icon/process1.png";
import processimg2 from "../assets/images/icon/process2.png";
import processimg3 from "../assets/images/icon/process3.png";
import lineimg from "../assets/images/others/linearrow.png";
class Home extends React.Component {
  render() {
    return (
      <div class="site-content">
        <header class="site-header header-style-one">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-12">
                <div class="navigation-area">
                  <div class="header-navigation-left">
                    <div class="site-branding">
                      <a href="index.html">
                        <img src={logimg} alt="Livi Leads" />
                      </a>
                    </div>
                    <div class="mobile-element-meta">
                      <div class="search-wrap">
                        <div class="search-btn">
                          <span class="icon-search32"></span>
                        </div>
                        <div class="search-form">
                          <form action="#">
                            <input type="search" placeholder="Search" />
                            <button type="submit">
                              <span class="icon-search32"></span>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div class="mobile-user-registration"></div>
                    </div>
                  </div>

                  <div class="site-navigation">
                    <div class="hamburger-menus">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <nav class="navigation">
                      <div class="overlaybg"></div>

                      <div class="menu-wrapper">
                        <div class="menu-content">
                          <ul class="mainmenu">
                            <li>
                              <a class="active" href="#">
                                Home
                              </a>
                              <ul class="sub-menu">
                                <li>
                                  <a href="index02.html">Vendor</a>
                                </li>
                              </ul>
                            </li>
                            <li class="megamenu">
                              <a href="#">Explore</a>
                              <div class="sub-menu megamenu-main megamenu-carousel carousel-nav-text owl-carousel">
                                <a href="#" class="cat-item cat-nightlife">
                                  <figure class="cat-thumb">
                                    <img
                                      src="assets/images/todo/photography.jpg"
                                      alt="Thmubnail"
                                    />
                                  </figure>

                                  <div class="cat-content">
                                    <div class="cat-content-inner">
                                      <p class="listing-no">20</p>
                                      <h3 class="title">Photography</h3>
                                    </div>
                                  </div>
                                  <div class="cat-content-hover">
                                    <div class="content-hover-inner">
                                      <div class="icon">
                                        <span class="icon-cafe"></span>
                                      </div>
                                      <h3 class="title">photography</h3>
                                    </div>
                                  </div>
                                </a>
                                <a href="#" class="cat-item cat-hotel">
                                  <figure class="cat-thumb">
                                    <img
                                      src="assets/images/todo/business (1).jpg"
                                      alt="Thmubnail"
                                    />
                                  </figure>

                                  <div class="cat-content">
                                    <div class="cat-content-inner">
                                      <p class="listing-no">10</p>
                                      <h3 class="title">Business</h3>
                                    </div>
                                  </div>
                                  <div class="cat-content-hover">
                                    <div class="content-hover-inner">
                                      <div class="icon">
                                        <span class="icon-building"></span>
                                      </div>
                                      <h3 class="title">Business</h3>
                                    </div>
                                  </div>
                                </a>
                                <a href="#" class="cat-item cat-sopping">
                                  <figure class="cat-thumb">
                                    <img
                                      src="assets/images/todo/programmer.jpg"
                                      alt="Thmubnail"
                                    />
                                  </figure>

                                  <div class="cat-content">
                                    <div class="cat-content-inner">
                                      <p class="listing-no">35</p>
                                      <h3 class="title">Programming-Tech</h3>
                                    </div>
                                  </div>
                                  <div class="cat-content-hover">
                                    <div class="content-hover-inner">
                                      <div class="icon">
                                        <span class="icon-shopping-cart"></span>
                                      </div>
                                      <h3 class="title">Programming-Tech</h3>
                                    </div>
                                  </div>
                                </a>
                                <a href="#" class="cat-item cat-places">
                                  <figure class="cat-thumb">
                                    <img
                                      src="assets/images/todo/service market.jpg"
                                      alt="Thmubnail"
                                    />
                                  </figure>

                                  <div class="cat-content">
                                    <div class="cat-content-inner">
                                      <p class="listing-no">80</p>
                                      <h3 class="title">service-market</h3>
                                    </div>
                                  </div>
                                  <div class="cat-content-hover">
                                    <div class="content-hover-inner">
                                      <div class="icon">
                                        <span class="icon-vynil"></span>
                                      </div>
                                      <h3 class="title">service-market</h3>
                                    </div>
                                  </div>
                                </a>
                                <a href="#" class="cat-item cat-nightlife">
                                  <figure class="cat-thumb">
                                    <img
                                      src="assets/images/todo/visaguy (1).jpg"
                                      alt="Thmubnail"
                                    />
                                  </figure>

                                  <div class="cat-content">
                                    <div class="cat-content-inner">
                                      <p class="listing-no">20</p>
                                      <h3 class="title">visaguy</h3>
                                    </div>
                                  </div>
                                  <div class="cat-content-hover">
                                    <div class="content-hover-inner">
                                      <div class="icon">
                                        <span class="icon-cafe"></span>
                                      </div>
                                      <h3 class="title">visaguy</h3>
                                    </div>
                                  </div>
                                </a>
                                <a href="#" class="cat-item cat-hotel">
                                  <figure class="cat-thumb">
                                    <img
                                      src="assets/images/todo/home service.jpg"
                                      alt="Thmubnail"
                                    />
                                  </figure>

                                  <div class="cat-content">
                                    <div class="cat-content-inner">
                                      <p class="listing-no">10</p>
                                      <h3 class="title">Homeservices</h3>
                                    </div>
                                  </div>
                                  <div class="cat-content-hover">
                                    <div class="content-hover-inner">
                                      <div class="icon">
                                        <span class="icon-building"></span>
                                      </div>
                                      <h3 class="title">Homeservices</h3>
                                    </div>
                                  </div>
                                </a>
                                <a href="#" class="cat-item cat-sopping">
                                  <figure class="cat-thumb">
                                    <img
                                      src="assets/images/todo/documentation.jpg"
                                      alt="Thmubnail"
                                    />
                                  </figure>

                                  <div class="cat-content">
                                    <div class="cat-content-inner">
                                      <p class="listing-no">35</p>
                                      <h3 class="title">
                                        Documentation-approvals
                                      </h3>
                                    </div>
                                  </div>
                                  <div class="cat-content-hover">
                                    <div class="content-hover-inner">
                                      <div class="icon">
                                        <span class="icon-shopping-cart"></span>
                                      </div>
                                      <h3 class="title">
                                        Documentation-approvals
                                      </h3>
                                    </div>
                                  </div>
                                </a>
                                <a href="#" class="cat-item cat-places">
                                  <figure class="cat-thumb">
                                    <img
                                      src="assets/images/todo/prooffice.jpg"
                                      alt="Thmubnail"
                                    />
                                  </figure>

                                  <div class="cat-content">
                                    <div class="cat-content-inner">
                                      <p class="listing-no">80</p>
                                      <h3 class="title">Prooffice</h3>
                                    </div>
                                  </div>
                                  <div class="cat-content-hover">
                                    <div class="content-hover-inner">
                                      <div class="icon">
                                        <span class="icon-vynil"></span>
                                      </div>
                                      <h3 class="title">Prooffice</h3>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </li>

                            <li>
                              <a href="features-cat-list-area">Services</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>

                  <div class="header-navigation-right">
                    <div class="user-registration-area">
                      <a class="user-reg-btn" href="#">
                        <span class="icon icon-user-1"></span>
                        <span class="text">Sign In</span>
                      </a>
                      <div class="user-register-area">
                        <div class="user-signin-area">
                          <div class="form-content">
                            <div class="form-content-signin">
                              <form class="default-form signin-form">
                                <div class="form-group">
                                  <input
                                    id="email"
                                    name="email"
                                    class="form-controllar"
                                    type="email"
                                    placeholder="Email Address"
                                  />
                                  <span class="icon-user-1"></span>
                                </div>

                                <div class="form-group">
                                  <input
                                    id="pass"
                                    name="password"
                                    class="form-controllar"
                                    type="password"
                                    placeholder="Password"
                                  />
                                  <span class="icon-key3"></span>
                                  <div class="forget-pass">
                                    <a class="btn-password" href="#">
                                      Forget?
                                    </a>
                                  </div>
                                </div>

                                <div class="form-btn-group">
                                  <button
                                    type="submit"
                                    class="btn btn-default btn-black"
                                  >
                                    Login in
                                    <span class="fas fa-caret-right"></span>
                                  </button>
                                </div>
                                <div class="reg-others-midea">
                                  <div class="text">Or Login With</div>
                                  <div class="midea-icons">
                                    <ul class="social-share">
                                      <li>
                                        <a class="facebook" href="#">
                                          <i class="fab fa-facebook-f"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="twitter" href="#">
                                          <i class="fab fa-twitter"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="google-plus" href="#">
                                          <i class="fab fa-google-plus-g"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="linkedin" href="#">
                                          <i class="fab fa-linkedin-in"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </form>
                              <div class="login-form-register-now">
                                Dont have an account?{" "}
                                <a class="btn-register-now" href="#">
                                  Register Now
                                </a>
                              </div>
                            </div>

                            <div class="form-content-password">
                              <form class="default-form password-form">
                                <div class="form-group">
                                  <input
                                    id="re-email"
                                    name="email"
                                    class="form-controllar"
                                    type="email"
                                    placeholder="Email Address"
                                  />
                                  <span class="icon-user-1"></span>
                                </div>

                                <div class="form-group">
                                  <input
                                    id="re-pass-up"
                                    name="password"
                                    class="form-controllar"
                                    type="password"
                                    placeholder="Password"
                                  />
                                  <span class="icon-key3"></span>
                                </div>

                                <div class="form-group">
                                  <input
                                    id="re-pass-up-confirm"
                                    name="password"
                                    class="form-controllar"
                                    type="password"
                                    placeholder="Confirm Password"
                                  />
                                  <span class="icon-key3"></span>
                                </div>

                                <div class="form-btn-group pt-10">
                                  <button
                                    type="submit"
                                    class="btn btn-default btn-recet"
                                  >
                                    Reset Password
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-default btn-back"
                                  >
                                    Back
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>

                        <div class="user-signup-area">
                          <div class="form-content">
                            <form
                              id="signup-form"
                              class="default-form signup-form"
                              method="post"
                            >
                              <div class="form-group">
                                <input
                                  id="name"
                                  name="name"
                                  class="form-controllar"
                                  type="text"
                                  placeholder="Username"
                                />
                                <span class="icon-user-1"></span>
                              </div>
                              <div class="form-group">
                                <input
                                  id="email-up"
                                  name="email"
                                  class="form-controllar"
                                  type="email"
                                  placeholder="Email Address"
                                />
                                <span class="icon-user-1"></span>
                              </div>
                              <div class="form-group">
                                <input
                                  id="pass-up"
                                  name="password"
                                  class="form-controllar"
                                  type="password"
                                  placeholder="Password"
                                />
                                <span class="icon-key3"></span>
                              </div>

                              <div class="form-group">
                                <input
                                  id="pass-up-confirm"
                                  name="password"
                                  class="form-controllar"
                                  type="password"
                                  placeholder="Confirm Password"
                                />
                                <span class="icon-key3"></span>
                              </div>

                              <div class="login-form-remember">
                                <label>
                                  <input
                                    id="remembermesignup"
                                    value=""
                                    type="checkbox"
                                  />
                                  <span>I Agree to the </span>{" "}
                                  <a href="#"> Privacy Policy</a>
                                </label>
                              </div>
                              <div class="form-btn-group">
                                <button
                                  type="submit"
                                  class="btn btn-default btn-register"
                                >
                                  Register
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-default btn-signin btn-back"
                                >
                                  Sign In
                                </button>
                                <div class="reg-others-midea">
                                  <div class="text">Or Connect With</div>
                                  <div class="midea-icons">
                                    <ul class="social-share">
                                      <li>
                                        <a class="facebook" href="#">
                                          <i class="fab fa-facebook-f"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="twitter" href="#">
                                          <i class="fab fa-twitter"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="google-plus" href="#">
                                          <i class="fab fa-google-plus-g"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="linkedin" href="#">
                                          <i class="fab fa-linkedin-in"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="sticky-header" class="sticky-header-one"></div>

        <div class="frontpage-banner-section frontpage-banner-style-one bg-overlay-violet bg-image ptb-100">
          <div class="waves-effect bottom"></div>
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-lg-10">
                <div class="frontpage-banner-content text-center text-white">
                  <h1 class="banner-title">
                    Explore a Wide Range of <span> Services</span> For Your
                    Unique Need
                  </h1>
                  <h3 class="banner-subtitle">
                    Our platform connects you with trusted local service
                  </h3>
                  <form action="#" class="advance-search-form">
                    <div class="inner-form">
                      <div class="advance-form-input search">
                        <input
                          id="search"
                          type="text"
                          placeholder="What are you looking for?"
                        />
                      </div>

                      <div class="advance-form-input submitbtn">
                        <button class="btn btn-default" type="button">
                          EXPLORE NOW
                        </button>
                      </div>
                    </div>
                  </form>

                  <div class="banner-divider">
                    Or Browse Featured Categories
                  </div>

                  <div class="features-cat-area">
                    <div class="features-cat-carousel owl-carousel">
                      <a href="listing-grid.html" class="cat-item">
                        <div class="icon">
                          <span class="icon-fast-food"></span>
                        </div>
                        <div class="cat-name">Food & Drinks</div>
                      </a>

                      <a href="listing-grid.html" class="cat-item">
                        <div class="icon">
                          <span class="icon-building"></span>
                        </div>
                        <div class="cat-name">Hotels</div>
                      </a>

                      <a href="listing-grid.html" class="cat-item">
                        <div class="icon">
                          <span class="icon-wrench"></span>
                        </div>
                        <div class="cat-name">Automotive</div>
                      </a>

                      <a href="listing-grid.html" class="cat-item">
                        <div class="icon">
                          <span class="icon-dress"></span>
                        </div>
                        <div class="cat-name">Nightlife</div>
                      </a>

                      <a href="listing-grid.html" class="cat-item">
                        <div class="icon">
                          <span class="icon-shopping-cart"></span>
                        </div>
                        <div class="cat-name">Shopping</div>
                      </a>

                      <a href="listing-grid.html" class="cat-item">
                        <div class="icon">
                          <span class="icon-sunbed"></span>
                        </div>
                        <div class="cat-name">Travels</div>
                      </a>

                      <a href="listing-grid.html" class="cat-item">
                        <div class="icon">
                          <span class="icon-house"></span>
                        </div>
                        <div class="cat-name">Real Estates</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="popular-categories-block popular-categories-style-one ptb-100">
          <div class="container ml-b-30">
            <div class="row">
              <div class="col-12">
                <div class="section-title text-center">
                  <h4 class="title-sub">What Do You Want to Do </h4>
                  <h2 class="title-main">
                    Techniques and Tools for your Growth
                  </h2>
                  <div class="divider">
                    <span class="icon-star-full"></span>
                    <span class="icon-star-full"></span>
                    <span class="icon-star-full"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <a href="#" class="cat-item cat-food">
                  <figure class="cat-thumb">
                    <img src={sideB} alt="Thmubnail" />
                  </figure>

                  <div class="cat-content">
                    <div class="cat-content-inner">
                      <p class="listing-no">30</p>
                      <h3 class="title">Start a Side Business</h3>
                    </div>
                  </div>
                  <div class="cat-content-hover">
                    <div class="content-hover-inner">
                      <div class="icon">
                        <span class="icon-fast-food"></span>
                      </div>
                      <h3 class="title">Start a Side Business</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-lg-3 col-md-6">
                <a href="#" class="cat-item cat-nightlife">
                  <figure class="cat-thumb">
                    <img src={ecoB} alt="Thmubnail" />
                  </figure>

                  <div class="cat-content">
                    <div class="cat-content-inner">
                      <p class="listing-no">20</p>
                      <h3 class="title">Ecommerce Business Ideas</h3>
                    </div>
                  </div>
                  <div class="cat-content-hover">
                    <div class="content-hover-inner">
                      <div class="icon">
                        <span class="icon-cafe"></span>
                      </div>
                      <h3 class="title">Nightlife</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-lg-3 col-md-6">
                <a href="#" class="cat-item cat-hotel">
                  <figure class="cat-thumb">
                    <img src={web} alt="Thmubnail" />
                  </figure>

                  <div class="cat-content">
                    <div class="cat-content-inner">
                      <p class="listing-no">10</p>
                      <h3 class="title">Build a Website</h3>
                    </div>
                  </div>
                  <div class="cat-content-hover">
                    <div class="content-hover-inner">
                      <div class="icon">
                        <span class="icon-building"></span>
                      </div>
                      <h3 class="title">Hotels</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-lg-3 col-md-6">
                <a href="#" class="cat-item cat-service">
                  <figure class="cat-thumb">
                    <img src={log} alt="Thmubnail" />
                  </figure>

                  <div class="cat-content">
                    <div class="cat-content-inner">
                      <p class="listing-no">40</p>
                      <h3 class="title">Create your Logo</h3>
                    </div>
                  </div>
                  <div class="cat-content-hover">
                    <div class="content-hover-inner">
                      <div class="icon">
                        <span class="icon-wrench"></span>
                      </div>
                      <h3 class="title">Service</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-lg-3 col-md-6">
                <a href="#" class="cat-item cat-sopping">
                  <figure class="cat-thumb">
                    <img src={onlineB} alt="Thmubnail" />
                  </figure>

                  <div class="cat-content">
                    <div class="cat-content-inner">
                      <p class="listing-no">35</p>
                      <h3 class="title">Online Business</h3>
                    </div>
                  </div>
                  <div class="cat-content-hover">
                    <div class="content-hover-inner">
                      <div class="icon">
                        <span class="icon-shopping-cart"></span>
                      </div>
                      <h3 class="title">Shopping</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-lg-6">
                <a href="#" class="cat-item cat-places">
                  <figure class="cat-thumb">
                    <img src={seo} alt="Thmubnail" />
                  </figure>

                  <div class="cat-content">
                    <div class="cat-content-inner">
                      <p class="listing-no">80</p>
                      <h3 class="title">SEO</h3>
                    </div>
                  </div>
                  <div class="cat-content-hover">
                    <div class="content-hover-inner">
                      <div class="icon">
                        <span class="icon-vynil"></span>
                      </div>
                      <h3 class="title">Places</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="work-brand-block bg-main ptb-100">
          <div class="container ml-t-15 ml-b-15">
            <div class="row">
              <div class="col-12">
                <div class="brands-carousel owl-carousel">
                  <div class="brands-link">
                    <img src={brandimg} alt="logo" />
                  </div>
                  <div class="brands-link">
                    <img src={brandimg2} alt="logo" />
                  </div>
                  <div class="brands-link">
                    <img src={brandimg3} alt="logo" />
                  </div>
                  <div class="brands-link">
                    <img src={brandimg4} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="todos-block bg-snow ptb-100">
          <div class="container ml-b-30">
            <div class="row">
              <div class="col-12">
                <div class="section-title text-center">
                  <h4 class="title-sub">Top-Rated Local Businesses</h4>
                  <h2 class="title-main">Popular Services</h2>
                  <div class="divider">
                    <span class="icon-star-full"></span>
                    <span class="icon-star-full"></span>
                    <span class="icon-star-full"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="todo-item">
                  <div class="todo-thumbnail-area">
                    <figure class="item-thumb">
                      <img src={wedimg} alt="Thmubnail" />
                    </figure>
                    <div class="todo-overlay-info">
                      <div class="todo-type-cat">
                        <a href="#" class="offer">
                          Wedding
                        </a>
                        <a href="#" class="nightlife">
                          Portrait
                        </a>
                      </div>
                      <div class="todo-meta-bottom">
                        <div class="todo-rating">
                          <span>4.8</span>19 Ratings
                        </div>
                        <div class="save">
                          <a href="#" class="">
                            <i class="fa fa-heart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="todo-content">
                    <h3 class="title">
                      <a href="Photography.html">Photography</a>
                    </h3>
                    <div class="todo-price-status">
                      <div class="todo-price">$12 - $33</div>
                      <div class="todo-status">Open Now</div>
                    </div>
                    <div class="todo-meta"></div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="todo-item status-closed">
                  <div class="todo-thumbnail-area">
                    <figure class="item-thumb">
                      <img src={businessimg} alt="Thmubnail" />
                    </figure>
                    <div class="todo-overlay-info">
                      <div class="todo-type-cat">
                        <a href="#" class="hotel">
                          Business
                        </a>
                      </div>
                      <div class="todo-meta-bottom">
                        <div class="todo-rating">
                          <span>4.8</span>19 Ratings
                        </div>
                        <div class="save">
                          <a href="#" class="">
                            <i class="fa fa-heart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="todo-content">
                    <h3 class="title">
                      <a href="Business.html">Business</a>
                    </h3>
                    <div class="todo-price-status">
                      <div class="todo-price">
                        <del>$12</del> - $33
                      </div>
                      <div class="todo-status">closed</div>
                    </div>
                    <div class="todo-meta"></div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="todo-item">
                  <div class="todo-thumbnail-area">
                    <figure class="item-thumb">
                      <img src={progmimg} alt="Thmubnail" />
                    </figure>
                    <div class="todo-overlay-info">
                      <div class="todo-type-cat">
                        <a href="#" class="rated">
                          top rated
                        </a>
                        <a href="#" class="fitness">
                          samples
                        </a>
                      </div>
                      <div class="todo-meta-bottom">
                        <div class="todo-rating">
                          <span>4.8</span>19 Ratings
                        </div>
                        <div class="save">
                          <a href="#" class="">
                            <i class="fa fa-heart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="todo-content">
                    <h3 class="title">
                      <a href="listing-details.html">Programming-Tech</a>
                    </h3>
                    <div class="todo-price-status">
                      <div class="todo-price">$12 - $33</div>
                      <div class="todo-status">Open Now</div>
                    </div>
                    <div class="todo-meta"></div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="todo-item">
                  <div class="todo-thumbnail-area">
                    <figure class="item-thumb">
                      <img src={servimg} alt="Thmubnail" />
                    </figure>
                    <div class="todo-overlay-info">
                      <div class="todo-type-cat">
                        <a href="#" class="sale">
                          Cleaning
                        </a>
                        <a href="#" class="services">
                          Plumbing
                        </a>
                      </div>
                      <div class="todo-meta-bottom">
                        <div class="todo-rating">
                          <span>4.8</span>19 Ratings
                        </div>
                        <div class="save">
                          <a href="#" class="">
                            <i class="fa fa-heart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="todo-content">
                    <h3 class="title">
                      <a href="listing-details.html">Service Market</a>
                    </h3>
                    <div class="todo-price-status">
                      <div class="todo-price">$12 - $33</div>
                      <div class="todo-status">Open Now</div>
                    </div>
                    <div class="todo-meta"></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="todo-item status-closed">
                  <div class="todo-thumbnail-area">
                    <figure class="item-thumb">
                      <img src={visaimg} alt="Thmubnail" />
                    </figure>
                    <div class="todo-overlay-info">
                      <div class="todo-type-cat">
                        <a href="#" class="limited">
                          limited
                        </a>
                        <a href="#" class="services">
                          services
                        </a>
                      </div>
                      <div class="todo-meta-bottom">
                        <div class="todo-rating">
                          <span>4.8</span>19 Ratings
                        </div>
                        <div class="save">
                          <a href="#" class="">
                            <i class="fa fa-heart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="todo-content">
                    <h3 class="title">
                      <a href="listing-details.html">Visaguy</a>
                    </h3>
                    <div class="todo-price-status">
                      <div class="todo-price">$12 - $33</div>
                      <div class="todo-status">closed</div>
                    </div>
                    <div class="todo-meta"></div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="todo-item">
                  <div class="todo-thumbnail-area">
                    <figure class="item-thumb">
                      <img src={homeimg} alt="Thmubnail" />
                    </figure>
                    <div class="todo-overlay-info">
                      <div class="todo-type-cat">
                        <a href="#" class="restaurant">
                          Designs
                        </a>
                        <a href="#" class="sale">
                          sale
                        </a>
                      </div>
                      <div class="todo-meta-bottom">
                        <div class="todo-rating">
                          <span>4.8</span>19 Ratings
                        </div>
                        <div class="save">
                          <a href="#" class="">
                            <i class="fa fa-heart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="todo-content">
                    <h3 class="title">
                      <a href="listing-details.html">Home Service</a>
                    </h3>
                    <div class="todo-price-status">
                      <div class="todo-price">$12 - $33</div>
                      <div class="todo-status">Open Now</div>
                    </div>
                    <div class="todo-meta"></div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="todo-item status-closed">
                  <div class="todo-thumbnail-area">
                    <figure class="item-thumb">
                      <img src={docimg} alt="Thmubnail" />
                    </figure>
                    <div class="todo-overlay-info">
                      <div class="todo-type-cat">
                        <a href="#" class="limited">
                          limited
                        </a>
                        <a href="#" class="services">
                          services
                        </a>
                      </div>
                      <div class="todo-meta-bottom">
                        <div class="todo-rating">
                          <span>4.8</span>19 Ratings
                        </div>
                        <div class="save">
                          <a href="#" class="">
                            <i class="fa fa-heart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="todo-content">
                    <h3 class="title">
                      <a href="documentation-approvals.html">
                        Documentation-approvals
                      </a>
                    </h3>
                    <div class="todo-price-status">
                      <div class="todo-price">$12 - $33</div>
                      <div class="todo-status">closed</div>
                    </div>
                    <div class="todo-meta"></div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="todo-item status-closed">
                  <div class="todo-thumbnail-area">
                    <figure class="item-thumb">
                      <img src={eleimg} alt="Thmubnail" />
                    </figure>
                    <div class="todo-overlay-info">
                      <div class="todo-type-cat">
                        <a href="#" class="limited">
                          limited
                        </a>
                        <a href="#" class="services">
                          services
                        </a>
                      </div>
                      <div class="todo-meta-bottom">
                        <div class="todo-rating">
                          <span>4.8</span>19 Ratings
                        </div>
                        <div class="save">
                          <a href="#" class="">
                            <i class="fa fa-heart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="todo-content">
                    <h3 class="title">
                      <a href="listing-details.html">Electrician</a>
                    </h3>
                    <div class="todo-price-status">
                      <div class="todo-price">$12 - $33</div>
                      <div class="todo-status">closed</div>
                    </div>
                    <div class="todo-meta"></div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="todo-item">
                  <div class="todo-thumbnail-area">
                    <figure class="item-thumb">
                      <img src={profficeimg} height="50px" alt="Thmubnail" />
                    </figure>
                    <div class="todo-overlay-info">
                      <div class="todo-type-cat">
                        <a href="#" class="restaurant">
                          Check
                        </a>
                        <a href="#" class="sale">
                          sale
                        </a>
                      </div>
                      <div class="todo-meta-bottom">
                        <div class="todo-rating">
                          <span>4.8</span>19 Ratings
                        </div>
                        <div class="save">
                          <a href="#" class="">
                            <i class="fa fa-heart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="todo-content">
                    <h3 class="title">
                      <a href="listing-details.html">Prooffice</a>
                    </h3>
                    <div class="todo-price-status">
                      <div class="todo-price">$12 - $33</div>
                      <div class="todo-status">Open Now</div>
                    </div>
                    <div class="todo-meta"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="work-process-block ptb-100">
          <div class="container ml-b-45">
            <div class="row" style={{ lineimg }}>
              <div class="col-12">
                <div class="section-title text-center">
                  <h4 class="title-sub">easy steps in few moments</h4>
                  <h2 class="title-main">How Does It Work</h2>
                  <div class="divider">
                    <span class="icon-star-full"></span>
                    <span class="icon-star-full"></span>
                    <span class="icon-star-full"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row process-list">
              <div class="bg-line"></div>

              <div class="col-lg-4 col-md-6">
                <div class="single-process">
                  <div class="icon">
                    <img src={processimg} alt="Icon" />
                  </div>
                  <h2 class="process-step">Choose What To Do</h2>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="single-process">
                  <div class="icon">
                    <img src={processimg2} alt="Icon" />
                  </div>
                  <h2 class="process-step">Find What You Want</h2>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-process">
                  <div class="icon">
                    <img src={processimg3} alt="Icon" />
                  </div>
                  <h2 class="process-step">Explore Place & Enjoy</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="features-cat-list-area bg-blue-violet">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="cat-list-item">
                    <div class="cat-title">
                      <div class="icon">
                        <span class="icon-sunbed"></span>
                      </div>
                      <div class="cat-name">Photography</div>
                    </div>
                    <ul class="list">
                      <li>
                        <a href="#">
                          Portrait<span>4</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Wedding Shoot<span>6</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Fashion Photography<span>7</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Fine Art Photography<span>10</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="cat-list-item">
                    <div class="cat-title">
                      <div class="icon">
                        <span class="icon-fast-food"></span>
                      </div>
                      <div class="cat-name">Home Service</div>
                    </div>
                    <ul class="list">
                      <li>
                        <a href="#">
                          Painting<span>4</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          Grocery Delivery<span>6</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Electrician<span>7</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Carpenter<span>10</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="cat-list-item">
                    <div class="cat-title">
                      <div class="icon">
                        <span class="icon-cafe"></span>
                      </div>
                      <div class="cat-name">Programming-Tech</div>
                    </div>
                    <ul class="list">
                      <li>
                        <a href="#">
                          Web Developer<span>4</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          WordPress Developer<span>6</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          SEO<span>7</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Software Developer<span>10</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="cat-list-item">
                    <div class="cat-title">
                      <div class="icon">
                        <span class="icon-bag-1"></span>
                      </div>
                      <div class="cat-name">Service Market</div>
                    </div>
                    <ul class="list">
                      <li>
                        <a href="#">
                          Plumbing Service<span>4</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          cleaning Service<span>6</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Laundry services<span>7</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Beauty services<span>10</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer class="site-footer bg-blue-violet footer-default-style pd-t-60 pd-b-60">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-3">
                  <div class="footer-logo">
                    <a href="index.html">
                      <img src={logimg} alt="Logo" />
                    </a>
                  </div>
                </div>
                <div class="col-lg-6">
                  <ul class="footer-menu">
                    <li>
                      <a href="#">Join Us</a>
                    </li>
                    <li>
                      <a href="#">Privcay Policy</a>
                    </li>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3">
                  <ul class="footer-social">
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
