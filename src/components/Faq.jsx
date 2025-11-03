import React from "react";
import PropTypes from "prop-types";

const Faq = () => {
  return (
    <>
      {/* <!-- FAQs-3 			============================================= --> */}
      <section id="faqs-3" className="pt-100 faqs-section">
        <div className="container">
          {/* <!-- SECTION TITLE --> */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-70">
                {/* <!-- Title --> */}
                <h2 className="s-50 w-700">Preguntas frecuentes</h2>

                {/* <!-- Text --> */}
                <p className="s-21 color--grey">
                  Ligula risus auctor tempus magna feugiat lacinia.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- FAQs-3 QUESTIONS --> */}
          <div className="faqs-3-questions">
            <div className="row">
              {/* <!-- QUESTIONS HOLDER --> */}
              <div className="col-lg-6">
                <div className="questions-holder">
                  {/* <!-- QUESTION #1 --> */}
                  <div
                    className="question mb-35 wow fadeInUp"
                    style={{ visibility: "visible" }}
                  >
                    {/* <!-- Question --> */}
                    <h5 className="s-22 w-700">
                      <span>1.</span> ¿Cuánto tarda una implementación?
                    </h5>

                    {/* <!-- Answer --> */}
                    <p className="color--grey">
                      Prototipo en 5–10 días, piloto en 2–4 semanas, según
                      complejidad.
                    </p>
                  </div>

                  {/* <!-- QUESTION #2 --> */}
                  <div
                    className="question mb-35 wow fadeInUp"
                    style={{ visibility: "visible" }}
                  >
                    {/* <!-- Question --> */}
                    <h5 className="s-22 w-700">
                      <span>2.</span> ¿Qué ROI puedo esperar?
                    </h5>

                    {/* <!-- Answer --> */}
                    <p className="color--grey">
                      Dependiendo del proceso, hemos visto -30% a -60% en
                      tiempos y +10% a +30% en conversiones. Definimos KPIs al
                      inicio.
                    </p>
                  </div>

                  {/* <!-- QUESTION #3 --> */}
                  <div
                    className="question mb-35 wow fadeInUp"
                    style={{ visibility: "visible" }}
                  >
                    {/* <!-- Question --> */}
                    <h5 className="s-22 w-700">
                      <span>3.</span> ¿Necesito equipo técnico interno?
                    </h5>

                    {/* <!-- Answer --> */}

                    <p>
                      No es obligatorio. Trabajamos con tu equipo y dejamos todo
                      documentado.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- END QUESTIONS HOLDER --> */}

              {/* <!-- QUESTIONS WRAPPER --> */}
              <div className="col-lg-6">
                <div className="questions-holder">
                  {/* <!-- QUESTION #4 --> */}
                  <div
                    className="question mb-35 wow fadeInUp"
                    style={{ visibility: "visible" }}
                  >
                    {/* <!-- Question --> */}
                    <h5 className="s-22 w-700">
                      <span>4.</span> ¿Pueden integrar con mi ERP/CRM?
                    </h5>

                    {/* <!-- Answer --> */}
                    <p className="color--grey">
                      Sí. Trabajamos con APIs estándar y conectores (n8n,
                      Webhooks, REST, GraphQL).
                    </p>
                  </div>

                  {/* <!-- QUESTION #5 --> */}
                  <div
                    className="question mb-35 wow fadeInUp"
                    style={{ visibility: "visible" }}
                  >
                    {/* <!-- Question --> */}
                    <h5 className="s-22 w-700">
                      <span>5.</span> ¿Cómo aseguran calidad y seguridad?
                    </h5>

                    {/* <!-- Answer --> */}
                    <p className="color--grey">
                      Entornos separados, logs, roles, backups y guardrails para
                      IA; cumplimiento de buenas prácticas y principios de
                      privacidad.
                    </p>
                  </div>

                  {/* <!-- QUESTION #6 --> */}
                  <div
                    className="question mb-35 wow fadeInUp"
                    style={{ visibility: "visible" }}
                  >
                    {/* <!-- Question --> */}
                    <h5 className="s-22 w-700">
                      <span>6.</span> Si no tengo infraestructura, puedo
                      hacerlo?
                    </h5>

                    {/* <!-- Answer --> */}
                    <p className="color--grey">
                      Sí. Trabajamos con AWS, Azure, GCP y otros.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- END QUESTIONS HOLDER --> */}
            </div>
            {/* <!-- End row --> */}
          </div>
          {/* <!-- END FAQs-3 QUESTIONS --> */}

          {/* <!-- MORE QUESTIONS LINK --> */}
          <div className="row">
            <div className="col">
              <div className="more-questions mt-40">
                <div className="more-questions-txt bg--white-400 r-100">
                  <p className="p-lg">
                    Tienes más consultas?
                    <a href="contacto.html" className="color--theme">
                      Escribenos
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End container --> */}
      </section>
      {/* <!-- END FAQs-3 --> */}
    </>
  );
};

export default Faq;
