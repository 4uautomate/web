import React from "react";
import PropTypes from "prop-types";

const Features12 = (props) => {
  return (
    <>
      {/*  <!-- FEATURES-12 			============================================= --> */}
      <section
        id="features-12"
        className="shape--bg shape--white-500 pt-100 features-section division"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            {/*  <!-- TEXT BLOCK --> */}
            <div className="col-md-5">
              <div
                className="txt-block left-column wow fadeInRight"
                style={{ visibility: "visible" }}
              >
                {/*  <!-- Section ID --> */}
                <span className="section-id">Servicios destacados</span>

                {/*  <!-- Title --> */}
                <h2 className="s-46 w-700">¿Cómo podemos ayudarte?</h2>

                {/*  <!-- Text --> */}
                <p>En 4uAutomate, nos encargamos de tu automatización.</p>

                {/*  <!-- List --> */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p>Recibe un diagnóstico sin costo en 48 horas</p>
                  </li>

                  <li className="list-item">
                    <p className="mb-0">
                      Te proponemos 2–3 automatizaciones priorizadas por impacto
                      y factibilidad.
                    </p>
                  </li>

                  <li className="list-item">
                    <p className="mb-0">Agenda una demo</p>
                  </li>
                </ul>
              </div>
            </div>
            {/*  <!-- END TEXT BLOCK --> */}

            {/*  <!-- FEATURES-12 WRAPPER --> */}
            <div className="col-md-7">
              <div
                className="fbox-12-wrapper wow fadeInLeft"
                style={{ visibility: "visible" }}
              >
                <div className="row">
                  <div className="col-md-6">
                    {/*  <!-- FEATURE BOX #1 -->  */}
                    <div
                      id="fb-12-1"
                      className="fbox-12 bg--white-100 block-shadow r-12 mb-30"
                    >
                      {/*  <!-- Icon --> */}
                      <div className="fbox-ico ico-50">
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
                        <h5 className="s-19 w-700">
                          Automatización de WhatsApp
                        </h5>
                        <p>
                          Captación, calificación y soporte en WhatsApp con
                          flujos n8n, bots inteligentes y conexión a tu CRM.
                        </p>
                      </div>
                    </div>

                    {/*  <!-- FEATURE BOX #2 --> */}
                    <div
                      id="fb-12-2"
                      className="fbox-12 bg--white-100 block-shadow r-12"
                    >
                      {/*  <!-- Icon --> */}
                      <div className="fbox-ico ico-50">
                        <div className="shape-ico color--theme">
                          {/*  <!-- Vector Icon --> */}
                          <span className="flaticon-idea"></span>

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
                        <h5 className="s-19 w-700">
                          Flujos n8n y RPA para Back-Office
                        </h5>
                        <p>
                          Orquestación de procesos (ventas, operaciones,
                          logística) reduciendo tareas manuales y errores.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    {/*  <!-- FEATURE BOX #3 --> */}
                    <div
                      id="fb-12-3"
                      className="fbox-12 bg--white-100 block-shadow r-12 mb-30"
                    >
                      {/*  <!-- Icon --> */}
                      <div className="fbox-ico ico-50">
                        <div className="shape-ico color--theme">
                          {/*  <!-- Vector Icon --> */}
                          <span className="flaticon-graphic"></span>

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
                        <h5 className="s-19 w-700">
                          Agentes con IA para Soporte y Ventas
                        </h5>
                        <p>
                          Agentes que responden, clasifican y derivan usando tu
                          base de conocimiento y reglas de negocio.
                        </p>
                      </div>
                    </div>

                    {/*  <!-- FEATURE BOX #4 --> */}
                    <div
                      id="fb-12-4"
                      className="fbox-12 bg--white-100 block-shadow r-12"
                    >
                      {/*  <!-- Icon --> */}
                      <div className="fbox-ico ico-50">
                        <div className="shape-ico color--theme">
                          {/*  <!-- Vector Icon --> */}
                          <span className="flaticon-search-engine-1"></span>

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
                        <h5 className="s-19 w-700">Integraciones</h5>
                        <p>
                          Integraciones con sistemas de terceros (APIs, CRM,
                          ERP, etc.)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  <!-- End row --> */}
            </div>
            {/*  <!-- END FEATURES-12 WRAPPER --> */}
          </div>
          {/*  <!-- End row --> */}
        </div>
        {/*  <!-- End container --> */}
      </section>
      {/*  <!-- END FEATURES-12 --> */}
    </>
  );
};

Features12.propTypes = {};

export default Features12;
