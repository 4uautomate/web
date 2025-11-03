import React from "react";
import PropTypes from "prop-types";

const Testimonials = (props) => {
  return (
    <>
      {/* <!-- TESTIMONIALS-1 			============================================= --> */}
      <section
        id="reviews-1"
        className="pt-100 shape--06 shape--gr-whitesmoke reviews-section"
      >
        <div className="container">
          {/* <!-- SECTION TITLE --> */}
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-title mb-70">
                {/* <!-- Title --> */}
                <h2 className="s-50 w-700">
                  Read what our users have to say about us
                </h2>

                {/* <!-- Text --> */}
                <p className="s-21 color--grey">
                  Ligula risus auctor tempus magna feugiat lacinia.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- TESTIMONIALS CONTENT --> */}
          <div className="row">
            <div className="col">
              <div className="owl-carousel owl-theme reviews-1-wrapper owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-3446px, 0px, 0px)",
                      transition: "1.5s",
                      width: "6893px",
                    }}
                  >
                    <div
                      className="owl-item cloned"
                      style={{ width: "430.76px" }}
                    >
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            An augue cubilia undo laoreet magna suscipit egestas
                            ipsum lectus purus ipsum and primis augue an ultrice
                            ligula egestas suscipit a lectus gestas auctor
                            tempus feugiat impedit
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-5.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Jennifer Harper</h6>
                              <p className="p-sm">App Developer</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "430.76px" }}
                    >
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            An augue cubilia laoreet undo magna ipsum semper
                            suscipit egestas magna ipsum ligula a vitae purus
                            and ipsum primis cubilia magna suscipit
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-6.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Jonathan Barnes</h6>
                              <p className="p-sm">jQuery Programmer</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "430.76px" }}
                    >
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            Augue egestas porta tempus volutpat egestas augue
                            cubilia laoreet a magna suscipit luctus dolor
                            blandit vitae purus neque tempus an aliquet porta
                            gestas rutrum blandit vitae
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-7.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Mike Harris</h6>
                              <p className="p-sm">Graphic Designer</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "430.76px" }}
                    >
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            Augue at vitae purus tempus egestas volutpat augue
                            undo cubilia laoreet magna suscipit luctus dolor
                            blandit at purus tempus feugiat impedit
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-8.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Evelyn Martinez</h6>
                              <p className="p-sm">WordPress Consultant</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "430.76px" }}>
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            Etiam sapien sagittis congue augue a massa varius
                            egestas ultrice varius magna a tempus aliquet undo
                            cursus suscipit
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-1.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Scott Boxer</h6>
                              <p className="p-sm">@scott_boxer</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "430.76px" }}>
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            At sagittis congue augue diam egestas magna an ipsum
                            vitae purus ipsum primis and cubilia laoreet augue
                            egestas a luctus donec ltrice ligula porta augue
                            magna suscipit lectus gestas
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-2.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Joel Peterson</h6>
                              <p className="p-sm">Internet Surfer</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "430.76px" }}>
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            Mauris gestas magnis a sapien etiam sapien congue an
                            augue egestas and ultrice vitae purus diam an
                            integer congue magna ligula egestas magna suscipit
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-3.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Marisol19</h6>
                              <p className="p-sm">@marisol19</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "430.76px" }}>
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            Mauris donec a magnis sapien etiam pretium a congue
                            augue volutpat lectus aenean magna and undo mauris
                            lectus laoreet tempor egestas rutrum
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-4.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Leslie D.</h6>
                              <p className="p-sm">Web Developer</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "430.76px" }}
                    >
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            An augue cubilia undo laoreet magna suscipit egestas
                            ipsum lectus purus ipsum and primis augue an ultrice
                            ligula egestas suscipit a lectus gestas auctor
                            tempus feugiat impedit
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-5.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Jennifer Harper</h6>
                              <p className="p-sm">App Developer</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "430.76px" }}
                    >
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            An augue cubilia laoreet undo magna ipsum semper
                            suscipit egestas magna ipsum ligula a vitae purus
                            and ipsum primis cubilia magna suscipit
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-6.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Jonathan Barnes</h6>
                              <p className="p-sm">jQuery Programmer</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "430.76px" }}
                    >
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            Augue egestas porta tempus volutpat egestas augue
                            cubilia laoreet a magna suscipit luctus dolor
                            blandit vitae purus neque tempus an aliquet porta
                            gestas rutrum blandit vitae
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-7.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Mike Harris</h6>
                              <p className="p-sm">Graphic Designer</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "430.76px" }}>
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            Augue at vitae purus tempus egestas volutpat augue
                            undo cubilia laoreet magna suscipit luctus dolor
                            blandit at purus tempus feugiat impedit
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-8.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Evelyn Martinez</h6>
                              <p className="p-sm">WordPress Consultant</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "430.76px" }}
                    >
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            Etiam sapien sagittis congue augue a massa varius
                            egestas ultrice varius magna a tempus aliquet undo
                            cursus suscipit
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-1.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Scott Boxer</h6>
                              <p className="p-sm">@scott_boxer</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "430.76px" }}
                    >
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            At sagittis congue augue diam egestas magna an ipsum
                            vitae purus ipsum primis and cubilia laoreet augue
                            egestas a luctus donec ltrice ligula porta augue
                            magna suscipit lectus gestas
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-2.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Joel Peterson</h6>
                              <p className="p-sm">Internet Surfer</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "430.76px" }}
                    >
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            Mauris gestas magnis a sapien etiam sapien congue an
                            augue egestas and ultrice vitae purus diam an
                            integer congue magna ligula egestas magna suscipit
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-3.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Marisol19</h6>
                              <p className="p-sm">@marisol19</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "430.76px" }}
                    >
                      <div className="review-1 bg--white-100 block-shadow r-08">
                        {/* <!-- Quote Icon --> */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote"></span>
                        </div>

                        {/* <!-- Text --> */}
                        <div className="review-txt">
                          {/* <!-- Text --> */}
                          <p>
                            Mauris donec a magnis sapien etiam pretium a congue
                            augue volutpat lectus aenean magna and undo mauris
                            lectus laoreet tempor egestas rutrum
                          </p>

                          {/* <!-- Author --> */}
                          <div className="author-data clearfix">
                            {/* <!-- Avatar --> */}
                            <div className="review-avatar">
                              <img
                                src="/src/assets/images/review-author-4.jpg"
                                alt="review-avatar"
                              />
                            </div>

                            {/* <!-- Data --> */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Leslie D.</h6>
                              <p className="p-sm">Web Developer</p>
                            </div>
                          </div>
                          {/* <!-- End Author --> */}
                        </div>
                        {/* <!-- End Text --> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <span aria-label="Next">›</span>
                  </button>
                </div>
                <div className="owl-dots">
                  <button role="button" className="owl-dot">
                    <span></span>
                  </button>
                  <button role="button" className="owl-dot active">
                    <span></span>
                  </button>
                  <button role="button" className="owl-dot">
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END TESTIMONIALS CONTENT --> */}
        </div>
        {/* <!-- End container --> */}
      </section>
      {/* <!-- END TESTIMONIALS-1 --> */}
    </>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
