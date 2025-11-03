import React from "react";
import PropTypes from "prop-types";

const Hero = () => {
  return (
    <>
      {/*<!-- HERO-8 			============================================= -->	    */}
      <section id="hero-8" className="bg--fixed hero-section ">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/*<!-- HERO TEXT --> 	*/}
            <div className="col-md-6 col-lg-7">
              <div className="hero-8-txt color--white wow fadeInRight">
                {/*<!-- Title --> */}
                <h2 className="s-54 w-700">
                  Automatizamos tus procesos con IA, n8n y WhatsApp
                </h2>
                {/*<!-- Text -->      */}
                <p className="p-lg color--coal">
                  Prototipos en días. Producción con métricas y trazabilidad.
                  Reducimos tiempos y errores mientras aumentas conversiones.
                </p>
                {/*<!-- HERO DIGITS -->	 */}
                <div className="hero-digits clearfix">
                  {/*<!-- DIGIT BLOCK #1 -->	 */}
                  <div id="hd-1-1">
                    <div className="hero-digits-block">
                      {/*<!-- Digit --> */}
                      <div className="block-digit">
                        <h2 className="s-46 statistic-number">
                          48<span>h</span>
                        </h2>
                      </div>

                      {/*<!-- Text --> */}
                      <div className="block-txt">
                        <p className="p-sm 1color--coal">
                          Recibe un diagnostico
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*<!-- END DIGIT BLOCK #1 -->	 */}
                  {/*<!-- DIGIT BLOCK #2 -->	 */}
                  <div id="hd-1-2">
                    <div className="hero-digits-block">
                      {/*<!-- Digit --> */}
                      <div className="block-digit">
                        <h2 className="s-46 statistic-number">
                          5–10<span>dias</span>
                        </h2>
                      </div>

                      {/*<!-- Text --> */}
                      <div className="block-txt">
                        <p className="p-sm 1color--coal">Prototipo</p>
                      </div>
                    </div>
                  </div>
                  {/*	<!-- END DIGIT BLOCK #2 -->	 */}
                </div>
                {/*<!-- END HERO DIGITS -->	 */}
              </div>
            </div>
            {/*<!-- END HERO TEXT -->	 */}
            {/*<!-- HERO REQUEST FORM --> 	*/}
            <div className="col-md-6 col-lg-5">
              <div id="hero-8-form" className="r-10 wow fadeInLeft">
                {/*<!-- Title --> */}
                <h4 className="s-26 w-700">
                  Dejeanos tus datos para contactarte
                </h4>

                {/*<!-- Text --> */}
                <p className="p-md">
                  En breve nos pondremos en contacto contigo...
                </p>

                {/*<!-- Form -->    */}
                <form
                  name="requestForm"
                  className="row request-form"
                  noValidate="novalidate"
                >
                  {/*<!-- Form Input -->       */}
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="name"
                      className="form-control name"
                      placeholder="Ingresa tu nombre*"
                      autoComplete="off"
                      required=""
                    />
                  </div>

                  {/*<!-- Form Input -->       */}
                  <div className="col-md-12">
                    <input
                      type="email"
                      name="email"
                      className="form-control email"
                      placeholder="Ingresa tu correo Email*"
                      autoComplete="off"
                      required=""
                    />
                  </div>

                  {/*<!-- Form Button -->       */}
                  <div className="col-md-12 form-btn">
                    <button
                      type="submit"
                      className="btn btn--theme hover--theme submit"
                    >
                      Enviar
                    </button>
                  </div>

                  {/*<!-- Form Message -->       */}
                  <div className="col-md-12 request-form-msg text-center">
                    <span className="loading"></span>
                  </div>
                </form>
              </div>
              {/*<!-- END FORM --> 	*/}
            </div>
            {/*<!-- END HERO REQUEST FORM -->        */}
          </div>
          {/* <!-- End row --> 	 */}
        </div>
        {/*<!-- End container -->  	*/}
        {/*<!-- WAVE SHAPE BOTTOM -->	 */}
        <div className="wave-shape-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 165">
            <path
              fillOpacity="1"
              d="M0,160L120,154.7C240,149,480,139,720,128C960,117,1200,107,1320,101.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      {/*<!-- END HERO-8 --> 	*/}
    </>
  );
};

Hero.propTypes = {};
export default Hero;
