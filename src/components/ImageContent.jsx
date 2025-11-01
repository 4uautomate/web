import React from "react";
import PropTypes from "prop-types";

const ImageContent = (props) => {
  return (
    <>
      {/*  <!-- IMAGE CONTENT 			============================================= --> */}
      <section
        id="lnk-3"
        className="bg--white-400 ct-10 content-section division"
      >
        <div className="section-overlay pt-100">
          <div className="container">
            {/*  <!-- SECTION TITLE --> */}
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <div className="section-title mb-70">
                  {/*  <!-- Section ID --> */}
                  <span className="section-id">Engagement Analytics</span>

                  {/*  <!-- Title --> */}
                  <h2 className="s-50 w-700">
                    Track the progress towards objectives with key results
                  </h2>

                  {/*  <!-- Text --> */}
                  <p className="s-21">
                    Ligula risus auctor tempus magna feugiat lacinia.
                  </p>
                </div>
              </div>
            </div>

            {/*  <!-- IMAGE BLOCK --> */}
            <div className="row">
              <div className="col">
                <div
                  className="img-block video-preview wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*  <!-- Play Icon --> */}
                  <a
                    className="video-popup2"
                    href="https://www.youtube.com/watch?v=7e90gBu4pas"
                  >
                    <div className="video-btn video-btn-xl bg--theme">
                      <div className="video-block-wrapper">
                        <span className="flaticon-play-button"></span>
                      </div>
                    </div>
                  </a>

                  {/*  <!-- Preview Image --> */}
                  <img
                    className="img-fluid"
                    src="/src/assets/images/dashboard-06.png"
                    alt="video-preview"
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  <!-- End container --> */}
        </div>
        {/*  <!-- End section overlay --> */}
      </section>
      {/*  <!-- END IMAGE CONTENT --> */}
    </>
  );
};

ImageContent.propTypes = {};

export default ImageContent;
