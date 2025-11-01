import React from "react";
import PropTypes from "prop-types";

const Footer = () => {
  return (
    <>
      {/* <!-- FOOTER-3
			============================================= --> */}
      <footer id="footer-3" className="pt-100 footer ft-3-ntr">
        <div className="container">
          {/* <!-- FOOTER CONTENT --> */}
          <div className="row">
            {/* <!-- FOOTER LOGO --> */}
            <div className="col-xl-3">
              <div className="footer-info">
                <img
                  className="footer-logo"
                  src="/src/assets/images/logo-blue.png"
                  alt="footer-logo"
                />
                <img
                  className="footer-logo-dark"
                  src="/src/assets/images/logo-blue-white.png"
                  alt="footer-logo"
                />
              </div>
            </div>

            {/* <!-- FOOTER LINKS --> */}
            <div className="col-sm-4 col-lg-3 col-xl-2">
              <div className="footer-links fl-1">
                {/* <!-- Title --> */}
                <h6 className="s-17 w-700">Company</h6>

                {/* <!-- Links --> */}
                <ul className="foo-links clearfix">
                  <li>
                    <p>
                      <a href="https://dsathemes.com/html/martex_1.1/files/about.html">
                        About Us
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://dsathemes.com/html/martex_1.1/files/blog-listing.html">
                        Our Blog
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://dsathemes.com/html/martex_1.1/files/testimonials.html">
                        Customers
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#">
                        Community
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- END FOOTER LINKS --> */}

            {/* <!-- FOOTER LINKS --> */}
            <div className="col-sm-4 col-lg-2">
              <div className="footer-links fl-2">
                {/* <!-- Title --> */}
                <h6 className="s-17 w-700">Product</h6>

                {/* <!-- Links --> */}
                <ul className="foo-links clearfix">
                  <li>
                    <p>
                      <a href="https://dsathemes.com/html/martex_1.1/files/features.html">
                        Integration
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://dsathemes.com/html/martex_1.1/files/download.html">
                        Whats New
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://dsathemes.com/html/martex_1.1/files/pricing-1.html">
                        Pricing
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://dsathemes.com/html/martex_1.1/files/help-center.html">
                        Help Center
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- END FOOTER LINKS --> */}

            {/* <!-- FOOTER LINKS --> */}
            <div className="col-sm-4 col-lg-3 col-xl-2">
              <div className="footer-links fl-3">
                {/* <!-- Title --> */}
                <h6 className="s-17 w-700">Legal</h6>

                {/* <!-- Links --> */}
                <ul className="foo-links clearfix">
                  <li>
                    <p>
                      <a href="https://dsathemes.com/html/martex_1.1/files/terms.html">
                        Terms of Use
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://dsathemes.com/html/martex_1.1/files/privacy.html">
                        Privacy Policy
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://dsathemes.com/html/martex_1.1/files/cookies.html">
                        Cookie Policy
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#">
                        Site Map
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- END FOOTER LINKS --> */}

            {/* <!-- FOOTER NEWSLETTER FORM --> */}
            <div className="col-sm-10 col-md-8 col-lg-4 col-xl-3">
              <div className="footer-form">
                {/* <!-- Title --> */}
                <h6 className="s-17 w-700">Follow the Best</h6>

                {/* <!-- Newsletter Form Input --> */}
                <form className="newsletter-form" noValidate="true">
                  <div className="input-group r-06">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      required=""
                      id="s-email"
                      name="EMAIL"
                    />
                    <span className="input-group-btn ico-15">
                      <button type="submit" className="btn color--theme">
                        <span className="flaticon-right-arrow-1"></span>
                      </button>
                    </span>
                  </div>

                  {/* <!-- Newsletter Form Notification --> */}
                  <label
                    htmlFor="s-email"
                    className="form-notification"
                  ></label>
                </form>
              </div>
            </div>
            {/* <!-- END FOOTER NEWSLETTER FORM --> */}
          </div>
          {/* <!-- END FOOTER CONTENT --> */}

          <hr />
          {/* <!-- FOOTER DIVIDER LINE --> */}

          {/* <!-- BOTTOM FOOTER --> */}
          <div className="bottom-footer">
            <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
              {/* <!-- FOOTER COPYRIGHT --> */}
              <div className="col">
                <div className="footer-copyright">
                  <p className="p-sm">
                    © 2025 4uAutomate.
                    <span>Todos los derechos reservados</span>
                  </p>
                </div>
              </div>

              {/* <!-- FOOTER SOCIALS --> */}
              <div className="col">
                <ul className="bottom-footer-socials ico-20 text-end">
                  <li>
                    <a href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#">
                      <span className="flaticon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#">
                      <span className="flaticon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#">
                      <span className="flaticon-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#">
                      <span className="flaticon-youtube"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End row --> */}
          </div>
          {/* <!-- END BOTTOM FOOTER --> */}
        </div>
        {/* <!-- End container --> */}
      </footer>
      {/* <!-- END FOOTER-3 --> */}
    </>
  );
};

export default Footer;
