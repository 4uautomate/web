import React from "react";
import PropTypes from "prop-types";
import Logo from "../assets/images/logo_4automate.jpg";

const Header = () => {
  return (
    <>
      {/* HEADER			============================================= -->*/}

      <header id="header" className="tra-menu navbar-light white-scroll">
        <div className="header-wrapper">
          {/*  MOBILE HEADER -->    */}
          <div className="wsmobileheader clearfix">
            <span className="smllogo">
              <img src={Logo} alt="mobile-logo" />
            </span>
            <a id="wsnavtoggle" className="wsanimated-arrow">
              <span></span>
            </a>
          </div>
          {/*  NAVIGATION MENU -->    */}
          <div className="wsmainfull menu clearfix">
            <div className="wsmainwp clearfix">
              {/*    HEADER BLACK LOGO -->    */}
              <div className="desktoplogo">
                <a
                  href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#hero-8"
                  className="logo-black"
                >
                  <img className="light-theme-img" src={Logo} alt="logo" />
                  <img className="dark-theme-img" src={Logo} alt="logo" />
                </a>
              </div>
              {/*  HEADER WHITE LOGO -->    */}
              <div className="desktoplogo">
                <a
                  href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#hero-8"
                  className="logo-white"
                >
                  <img src={Logo} alt="logo" />
                </a>
              </div>
              {/*  MAIN MENU -->    */}
              <nav className="wsmenu clearfix">
                <div className="overlapblackbg"></div>
                <ul className="wsmenu-list nav-theme">
                  {/*  DROPDOWN SUB MENU -->    */}
                  <li aria-haspopup="true">
                    <span className="wsmenu-click">
                      <i className="wsmenu-arrow"></i>
                    </span>
                    <a
                      href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#"
                      className="h-link"
                    >
                      About <span className="wsarrow"></span>
                    </a>
                    <ul className="sub-menu">
                      <li aria-haspopup="true">
                        <a href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#lnk-1">
                          Why Martex?
                        </a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#lnk-2">
                          Best Solutions
                        </a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#lnk-3">
                          How It Works
                        </a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#integrations-1">
                          Integrations
                        </a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#reviews-1">
                          Testimonials
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*  SIMPLE NAVIGATION LINK -->    */}
                  <li className="nl-simple" aria-haspopup="true">
                    <a
                      href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#features-6"
                      className="h-link"
                    >
                      Features
                    </a>
                  </li>
                  {/*  MEGAMENU -->    */}
                  <li aria-haspopup="true" className="mg_link">
                    <span className="wsmenu-click">
                      <i className="wsmenu-arrow"></i>
                    </span>
                    <a
                      href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#"
                      className="h-link"
                    >
                      Pages <span className="wsarrow"></span>
                    </a>
                    <div className="wsmegamenu w-75 clearfix">
                      <div className="container">
                        <div className="row">
                          {/*  MEGAMENU LINKS -->    */}
                          <ul className="col-md-12 col-lg-3 link-list">
                            <li className="fst-li">
                              <a href="https://dsathemes.com/html/martex_1.1/files/about.html">
                                About Us
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/team.html">
                                Our Team
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/careers.html">
                                Careers <span className="sm-info">4</span>
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/career-role.html">
                                Career Details
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/contacts.html">
                                Contact Us
                              </a>
                            </li>
                          </ul>

                          {/*  MEGAMENU LINKS -->    */}
                          <ul className="col-md-12 col-lg-3 link-list">
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/features.html">
                                Core Features
                              </a>
                            </li>
                            <li className="fst-li">
                              <a href="https://dsathemes.com/html/martex_1.1/files/projects.html">
                                Our Projects
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/project-details.html">
                                Project Details
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/reviews.html">
                                Testimonials
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/download.html">
                                Download Page
                              </a>
                            </li>
                          </ul>

                          {/*  MEGAMENU LINKS -->    */}
                          <ul className="col-md-12 col-lg-3 link-list">
                            <li className="fst-li">
                              <a href="https://dsathemes.com/html/martex_1.1/files/pricing-1.html">
                                Pricing Page #1
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/pricing-1.html">
                                Pricing Page #2
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/faqs.html">
                                FAQs Page
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/help-center.html">
                                Help Center
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/404.html">
                                404 Page
                              </a>
                            </li>
                          </ul>

                          {/*  MEGAMENU LINKS -->    */}
                          <ul className="col-md-12 col-lg-3 link-list">
                            <li className="fst-li">
                              <a href="https://dsathemes.com/html/martex_1.1/files/blog-listing.html">
                                Blog Listing
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/single-post.html">
                                Single Blog Post
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/login-2.html">
                                Login Page
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/signup-2.html">
                                Signup Page
                              </a>
                            </li>
                            <li>
                              <a href="https://dsathemes.com/html/martex_1.1/files/reset-password.html">
                                Reset Password
                              </a>
                            </li>
                          </ul>
                        </div>{" "}
                        {/*  End row -->	    */}
                      </div>{" "}
                      {/*  End container -->	    */}
                    </div>{" "}
                    {/*  End wsmegamenu -->	    */}
                  </li>{" "}
                  {/*  END MEGAMENU -->    */}
                  {/*  SIMPLE NAVIGATION LINK -->    */}
                  <li className="nl-simple" aria-haspopup="true">
                    <a
                      href="https://dsathemes.com/html/martex_1.1/files/pricing-1.html"
                      className="h-link"
                    >
                      Pricing
                    </a>
                  </li>
                  {/*  SIMPLE NAVIGATION LINK -->    */}
                  <li className="nl-simple" aria-haspopup="true">
                    <a
                      href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#faqs-3"
                      className="h-link"
                    >
                      FAQs
                    </a>
                  </li>
                  {/*  SIGN IN LINK -->    */}
                  <li
                    className="nl-simple reg-fst-link mobile-last-link"
                    aria-haspopup="true"
                  >
                    <a
                      href="https://dsathemes.com/html/martex_1.1/files/login-2.html"
                      className="h-link"
                    >
                      Sign in
                    </a>
                  </li>
                  {/*  SIGN UP BUTTON -->    */}
                  <li className="nl-simple" aria-haspopup="true">
                    <a
                      href="https://dsathemes.com/html/martex_1.1/files/signup-2.html"
                      className="btn r-04 btn--tra-white hover--theme last-link"
                    >
                      Sign up
                    </a>
                  </li>
                </ul>
              </nav>
              {/*  END MAIN MENU -->    */}
            </div>
          </div>
          {/*  END NAVIGATION MENU -->    */}
        </div>
        {/*  End header-wrapper -->    */}
      </header>
      {/*  END HEADER -->    */}
    </>
  );
};

Header.propTypes = {};

export default Header;
