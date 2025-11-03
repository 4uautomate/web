import React from "react";
import PropTypes from "prop-types";

const Features6 = (props) => {
  return (
    <>
      {/*  <!-- FEATURES-6 			============================================= --> */}
      <section id="features-6" className="py-100 features-section division">
        <div className="container">
          {/*  <!-- SECTION TITLE --> */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-70">
                {/*  <!-- Title --> */}
                <h2 className="s-50 w-700">
                  Recibe un diagnóstico sin costo en 48 horas
                </h2>

                {/*  <!-- Text --> */}
                <p className="s-21 color--grey"></p>
              </div>
            </div>
          </div>

          {/*  <!-- FEATURES-6 WRAPPER --> */}
          <div className="fbox-wrapper text-center">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              {/*  <!-- FEATURE BOX #1 --> */}
              <div className="col">
                <div
                  className="fbox-6 fb-1 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*  <!-- Icon --> */}
                  <div className="fbox-ico ico-55">
                    <div className="shape-ico color--theme">
                      {/*  <!-- Vector Icon --> */}
                      <span className="flaticon-reorder"></span>

                      {/*  <!-- Shape --> */}
                      <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                          transform="translate(100 100)"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  {/*  <!-- End Icon --> */}

                  {/*  <!-- Text --> */}
                  <div className="fbox-txt">
                    <h6 className="s-20 w-700">
                      Te proponemos 2–3 automatizaciones priorizadas por impacto
                      y factibilidad.
                    </h6>
                    <p></p>
                  </div>
                </div>
              </div>
              {/*  <!-- END FEATURE BOX #1 --> */}

              {/*  <!-- FEATURE BOX #2 --> */}
              <div className="col">
                <div
                  className="fbox-6 fb-2 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*  <!-- Icon --> */}
                  <div className="fbox-ico ico-55">
                    <div className="shape-ico color--theme">
                      {/*  <!-- Vector Icon --> */}
                      <span className="flaticon-project"></span>

                      {/*  <!-- Shape --> */}
                      <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                          transform="translate(100 100)"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  {/*  <!-- End Icon --> */}

                  {/*  <!-- Text --> */}
                  <div className="fbox-txt">
                    <h6 className="s-20 w-700">Agenda una demo</h6>
                    <p></p>
                  </div>
                </div>
              </div>
              {/*  <!-- END FEATURE BOX #2 --> */}

              {/*  <!-- FEATURE BOX #3 --> */}
              <div className="col">
                <div
                  className="fbox-6 fb-3 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*  <!-- Icon --> */}
                  <div className="fbox-ico ico-55">
                    <div className="shape-ico color--theme">
                      {/*  <!-- Vector Icon --> */}
                      <span className="flaticon-graphics"></span>

                      {/*  <!-- Shape --> */}
                      <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                          transform="translate(100 100)"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  {/*  <!-- End Icon --> */}

                  {/*  <!-- Text --> */}
                  <div className="fbox-txt">
                    <h6 className="s-20 w-700">Escríbenos por WhatsApp</h6>
                    <p></p>
                  </div>
                </div>
              </div>
              {/*  <!-- END FEATURE BOX #3 --> */}
            </div>
            {/*  <!-- End row --> */}
          </div>
          {/*  <!-- END FEATURES-6 WRAPPER --> */}
        </div>
        {/*  <!-- End container --> */}
      </section>
      {/*  <!-- END FEATURES-6 --> */}
    </>
  );
};

Features6.propTypes = {};

export default Features6;
