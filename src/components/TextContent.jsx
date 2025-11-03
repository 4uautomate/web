import React from "react";
import PropTypes from "prop-types";

const TextContent = () => {
  return (
    <>
      {/*  <!-- TEXT CONTENT 			============================================= --> */}
      <section id="lnk-2" className="pt-100 ct-02 content-section division">
        <div className="container">
          {/*  <!-- SECTION CONTENT (ROW) --> */}
          <div className="row d-flex align-items-center">
            {/*  <!-- IMAGE BLOCK --> */}
            <div className="col-md-6">
              <div
                className="img-block left-column wow fadeInRight"
                style={{ visibility: "visible" }}
              >
                <img
                  className="img-fluid"
                  src="/src/assets/images/img-07.png"
                  alt="content-image"
                />
              </div>
            </div>

            {/*  <!-- TEXT BLOCK --> */}
            <div className="col-md-6">
              <div
                className="txt-block right-column wow fadeInLeft"
                style={{ visibility: "visible" }}
              >
                {/*  <!-- Section ID --> */}
                <span className="section-id">Cómo trabajamos (proceso)</span>

                {/*  <!-- Title --> */}
                <h2 className="s-46 w-700">
                  De prototipo a producción en semanas
                </h2>

                {/*  <!-- Text --> */}
                <p>
                  Entregamos documentación, acceso a repos y paneles de
                  métricas.
                </p>

                {/*  <!-- Small Title --> */}
                <h5 className="s-24 w-700">Pasos</h5>

                {/*  <!-- CONTENT BOX #1 --> */}
                <div className="cbox-1 ico-15">
                  <div className="ico-wrap color--theme">
                    <div className="cbox-1-ico">
                      <span className="flaticon-check"></span>
                    </div>
                  </div>

                  <div className="cbox-1-txt">
                    <p>
                      Descubrimiento (1–2 días): Objetivos, KPIs y sistemas.
                    </p>
                  </div>
                </div>

                {/*  <!-- CONTENT BOX #2 --> */}
                <div className="cbox-1 ico-15">
                  <div className="ico-wrap color--theme">
                    <div className="cbox-1-ico">
                      <span className="flaticon-check"></span>
                    </div>
                  </div>

                  <div className="cbox-1-txt">
                    <p>
                      Prototipo (5–10 días): Flujo funcional con datos reales.
                    </p>
                  </div>
                </div>

                {/*  <!-- CONTENT BOX #3 --> */}
                <div className="cbox-1 ico-15">
                  <div className="ico-wrap color--theme">
                    <div className="cbox-1-ico">
                      <span className="flaticon-check"></span>
                    </div>
                  </div>

                  <div className="cbox-1-txt">
                    <p className="mb-0">
                      Piloto (2–4 semanas): Ajustes, métricas, hardening.
                    </p>
                  </div>
                </div>

                {/*  <!-- CONTENT BOX #4 --> */}
                <div className="cbox-1 ico-15">
                  <div className="ico-wrap color--theme">
                    <div className="cbox-1-ico">
                      <span className="flaticon-check"></span>
                    </div>
                  </div>

                  <div className="cbox-1-txt">
                    <p className="mb-0">
                      Producción y soporte: Monitoreo, SLA y mejoras continuas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  <!-- END TEXT BLOCK --> */}
          </div>
          {/*  <!-- END SECTION CONTENT (ROW) --> */}
        </div>
        {/*  <!-- End container --> */}
      </section>
      {/*  <!-- END TEXT CONTENT --> */}
    </>
  );
};

TextContent.propTypes = {};
export default TextContent;
