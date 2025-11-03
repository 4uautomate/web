import React from "react";
import PropTypes from "prop-types";

const Features = () => {
  return (
    <>
      {/* <!-- FEATURES-2 			============================================= --> */}
      <section id="features-2" className="pt-100 features-section division">
        <div className="container">
          {/* <!-- SECTION TITLE --> */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-70">
                {/* <!-- Title --> */}
                <h2 className="s-50 w-700">
                  Automatización práctica, medible y segura
                </h2>

                {/* <!-- Text --> */}
                <p className="s-21 color--grey">
                  Diseñamos, implementamos y operamos automatizaciones con IA,
                  n8n y WhatsApp para PYMEs y empresas en Chile. Levantamos un
                  prototipo en días y lo llevamos a producción con métricas de
                  impacto, trazabilidad y soporte continuo.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- FEATURES-2 WRAPPER --> */}
          <div className="fbox-wrapper text-center">
            <div className="row row-cols-1 row-cols-md-3">
              {/* <!-- FEATURE BOX #1 --> */}
              <div className="col">
                <div
                  className="fbox-2 fb-1 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/* <!-- Image --> */}
                  <div className="fbox-img gr--whitesmoke h-175">
                    <img
                      className="img-fluid light-theme-img"
                      src="/src/assets/images/f_01.png"
                      alt="feature-image"
                    />
                    <img
                      className="img-fluid dark-theme-img"
                      src="/src/assets/images/f_01_dark.png"
                      alt="feature-image"
                    />
                  </div>

                  {/* <!-- Text --> */}
                  <div className="fbox-txt">
                    <h6 className="s-22 w-700">Rápido a valor: </h6>
                    <p>Prototipos en 5–10 días, pilotos en 2–4 semanas.</p>
                  </div>
                </div>
              </div>
              {/* <!-- END FEATURE BOX #1 -->  */}

              {/* <!-- FEATURE BOX #2 --> */}
              <div className="col">
                <div
                  className="fbox-2 fb-2 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/*  <!-- Image --> */}
                  <div className="fbox-img gr--whitesmoke h-175">
                    <img
                      className="img-fluid light-theme-img"
                      src="/src/assets/images/f_05.png"
                      alt="feature-image"
                    />
                    <img
                      className="img-fluid dark-theme-img"
                      src="/src/assets/images/f_05_dark.png"
                      alt="feature-image"
                    />
                  </div>

                  {/*  <!-- Text -->  */}
                  <div className="fbox-txt">
                    <h6 className="s-22 w-700">Enfocado en negocio</h6>
                    <p>
                      Prioridad a métricas (SLA, tiempo, conversión, costos).
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- END FEATURE BOX #2 -->  */}

              {/* <!-- FEATURE BOX #3 --> */}
              <div className="col">
                <div
                  className="fbox-2 fb-3 wow fadeInUp"
                  style={{ visibility: "visible" }}
                >
                  {/* <!-- Image --> */}
                  <div className="fbox-img gr--whitesmoke h-175">
                    <img
                      className="img-fluid light-theme-img"
                      src="/src/assets/images/f_03.png"
                      alt="feature-image"
                    />
                    <img
                      className="img-fluid dark-theme-img"
                      src="/src/assets/images/f_03_dark.png"
                      alt="feature-image"
                    />
                  </div>

                  {/* <!-- Text --> */}
                  <div className="fbox-txt">
                    <h6 className="s-22 w-700">Open Source y flexible</h6>
                    <p>Sin lock-in; integraciones con tu stack actual.</p>
                  </div>
                </div>
              </div>
              {/* <!-- END FEATURE BOX #3 --> */}
            </div>
            {/* <!-- End row --> */}
          </div>
          {/* <!-- END FEATURES-2 WRAPPER --> */}
        </div>
        {/* <!-- End container --> */}
      </section>
      {/* <!-- END FEATURES-2 --> */}
    </>
  );
};

Features.propTypes = {};

export default Features;
