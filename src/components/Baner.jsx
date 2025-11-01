import React from "react";
import PropTypes from "prop-types";

const Baner = (props) => {
  return (
    <>
      {/* <!-- BANNER-13
			============================================= --> */}
      <section id="banner-13" className="pt-100 banner-section">
        <div className="container">
          {/* <!-- BANNER-13 WRAPPER --> */}
          <div className="banner-13-wrapper bg--01 bg--scroll r-16 block-shadow">
            <div className="banner-overlay">
              <div className="row d-flex align-items-center">
                {/* <!-- BANNER-5 TEXT --> */}
                <div className="col-md-7">
                  <div className="banner-13-txt color--white">
                    {/* <!-- Title --> */}
                    <h2 className="s-46 w-700">
                      Getting started with Martex today!
                    </h2>

                    {/* <!-- Text --> */}
                    <p className="p-lg">
                      Congue laoreet turpis neque auctor turpis vitae dolor a
                      luctus placerat and magna ligula cursus
                    </p>

                    {/* <!-- Button --> */}
                    <a
                      href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#hero-8"
                      className="btn r-04 btn--theme hover--tra-white"
                    >
                      Get srarted - it's free
                    </a>
                  </div>
                </div>
                {/* <!-- END BANNER-13 TEXT --> */}

                {/* <!-- BANNER-13 IMAGE --> */}
                <div className="col-md-5">
                  <div className="banner-13-img text-center">
                    <img
                      className="img-fluid"
                      src="/src/assets/images/img-04.png"
                      alt="banner-image"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- End row --> */}
            </div>
            {/* <!-- End banner overlay --> */}
          </div>
          {/* <!-- END BANNER-13 WRAPPER --> */}
        </div>
        {/* <!-- End container --> */}
      </section>
      {/* <!-- END BANNER-13 --> */}
    </>
  );
};

Baner.propTypes = {};

export default Baner;
