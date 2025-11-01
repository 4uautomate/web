import React from "react";
import PropTypes from "prop-types";

const Integrations = (props) => {
  return (
    <>
      {/*   <!-- INTEGRATIONS-1 			============================================= --> */}
      <section id="integrations-1" className="pt-100 integrations-section">
        <div className="container">
          {/*   <!-- SECTION TITLE --> */}
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-title mb-70">
                {/*   <!-- Title --> */}
                <h2 className="s-50 w-700">
                  Automatiza tus flujos de trabajo con nuestras integraciones
                </h2>

                {/*   <!-- Text --> */}
                <p className="s-21 color--grey">
                  Te ayudamos a encontrar la solución perfecta.
                </p>
              </div>
            </div>
          </div>

          {/*   <!-- INTEGRATIONS-1 WRAPPER --> */}
          <div className="integrations-1-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 rows-2">
              {/*   <!-- TOOL #1 --> */}
              <div className="col">
                <a
                  href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#"
                  className="in_tool it-1 r-12 mb-30 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*   <!-- Icon --> */}
                  <div className="in_tool-logo-wrap">
                    <div className="in_tool-logo ico-60">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/tool-1.png"
                        alt="brand-logo"
                      />
                    </div>
                  </div>

                  {/*   <!-- Text --> */}
                  <div className="in_tool-txt">
                    <h6 className="s-20 w-700">Zapier</h6>
                    <p className="p-sm">Share findings</p>
                  </div>
                </a>
              </div>
              {/*   <!-- END FEATURE BOX #1 --> */}

              {/*   <!-- TOOL #2 --> */}
              <div className="col">
                <a
                  href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#"
                  className="in_tool it-2 r-12 mb-30 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*   <!-- Icon --> */}
                  <div className="in_tool-logo-wrap">
                    <div className="in_tool-logo ico-60">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/tool-2.png"
                        alt="brand-logo"
                      />
                    </div>
                  </div>

                  {/*  <!-- Text --> */}
                  <div className="in_tool-txt">
                    <h6 className="s-20 w-700">Google Analytics</h6>
                    <p className="p-sm">Share findings</p>
                  </div>
                </a>
              </div>
              {/*  <!-- END FEATURE BOX #2 --> */}

              {/*  <!-- TOOL #3 --> */}
              <div className="col">
                <a
                  href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#"
                  className="in_tool it-3 r-12 mb-30 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*  <!-- Icon --> */}
                  <div className="in_tool-logo-wrap">
                    <div className="in_tool-logo ico-60">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/tool-3.png"
                        alt="brand-logo"
                      />
                    </div>
                  </div>

                  {/*  <!-- Text --> */}
                  <div className="in_tool-txt">
                    <h6 className="s-20 w-700">Amplitude</h6>
                    <p className="p-sm">Share findings</p>
                  </div>
                </a>
              </div>
              {/*  <!-- END FEATURE BOX #3 --> */}

              {/*  <!-- TOOL #4 --> */}
              <div className="col">
                <a
                  href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#"
                  className="in_tool it-4 r-12 mb-30 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*  <!-- Icon --> */}
                  <div className="in_tool-logo-wrap">
                    <div className="in_tool-logo ico-60">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/tool-4.png"
                        alt="brand-logo"
                      />
                    </div>
                  </div>

                  {/*  <!-- Text --> */}
                  <div className="in_tool-txt">
                    <h6 className="s-20 w-700">Hubspot</h6>
                    <p className="p-sm">Share findings</p>
                  </div>
                </a>
              </div>
              {/*  <!-- END FEATURE BOX #4 --> */}

              {/*  <!-- TOOL #5 --> */}
              <div className="col">
                <a
                  href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#"
                  className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*  <!-- Icon --> */}
                  <div className="in_tool-logo-wrap">
                    <div className="in_tool-logo ico-60">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/tool-5.png"
                        alt="brand-logo"
                      />
                    </div>
                  </div>

                  {/*  <!-- Text --> */}
                  <div className="in_tool-txt">
                    <h6 className="s-20 w-700">MailChimp</h6>
                    <p className="p-sm">Import data</p>
                  </div>
                </a>
              </div>
              {/*  <!-- END FEATURE BOX #5 --> */}

              {/*  <!-- TOOL #6 --> */}
              <div className="col">
                <a
                  href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#"
                  className="in_tool it-6 r-12 mb-30 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*  <!-- Icon --> */}
                  <div className="in_tool-logo-wrap">
                    <div className="in_tool-logo ico-60">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/tool-6.png"
                        alt="brand-logo"
                      />
                    </div>
                  </div>

                  {/*  <!-- Text --> */}
                  <div className="in_tool-txt">
                    <h6 className="s-20 w-700">Slack</h6>
                    <p className="p-sm">Share findings</p>
                  </div>
                </a>
              </div>
              {/*  <!-- END FEATURE BOX #6 --> */}

              {/*  <!-- TOOL #7 --> */}
              <div className="col">
                <a
                  href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#"
                  className="in_tool it-7 r-12 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*  <!-- Icon --> */}
                  <div className="in_tool-logo-wrap">
                    <div className="in_tool-logo ico-60">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/tool-7.png"
                        alt="brand-logo"
                      />
                    </div>
                  </div>

                  {/*  <!-- Text --> */}
                  <div className="in_tool-txt">
                    <h6 className="s-20 w-700">Dropbox</h6>
                    <p className="p-sm">Import data</p>
                  </div>
                </a>
              </div>
              {/*  <!-- END FEATURE BOX #7 --> */}

              {/*  <!-- TOOL #8 --> */}
              <div className="col">
                <a
                  href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#"
                  className="in_tool it-8 r-12 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*  <!-- Icon --> */}
                  <div className="in_tool-logo-wrap">
                    <div className="in_tool-logo ico-60">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/tool-8.png"
                        alt="brand-logo"
                      />
                    </div>
                  </div>

                  {/*  <!-- Text --> */}
                  <div className="in_tool-txt">
                    <h6 className="s-20 w-700">Trello</h6>
                    <p className="p-sm">Share findings</p>
                  </div>
                </a>
              </div>
              {/*  <!-- END FEATURE BOX #8 --> */}

              {/*  <!-- TOOL #9 --> */}
              <div className="col">
                <a
                  href="https://dsathemes.com/html/martex_1.1/files/demo-8.html#"
                  className="in_tool it-9 r-12 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*  <!-- Icon --> */}
                  <div className="in_tool-logo-wrap">
                    <div className="in_tool-logo ico-60">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/tool-9.png"
                        alt="brand-logo"
                      />
                    </div>
                  </div>

                  {/*  <!-- Text --> */}
                  <div className="in_tool-txt">
                    <h6 className="s-20 w-700">Google Drive</h6>
                    <p className="p-sm">Import data</p>
                  </div>
                </a>
              </div>
              {/*  <!-- END FEATURE BOX #9 --> */}
            </div>
          </div>
          {/*  <!-- END INTEGRATIONS-1 WRAPPER --> */}

          {/*  <!-- MORE BUTTON --> */}
          <div className="row">
            <div className="col">
              <div
                className="more-btn text-center mt-60 wow fadeInUp"
                style={{ visibility: "visible" }}
              >
                <a
                  href="https://dsathemes.com/html/martex_1.1/files/integrations.html"
                  className="btn btn--tra-black hover--theme"
                >
                  Ver todas las integraciones
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*  <!-- End container --> */}
      </section>
      {/*  <!-- END INTEGRATIONS-1 --> */}
    </>
  );
};

Integrations.propTypes = {};

export default Integrations;
