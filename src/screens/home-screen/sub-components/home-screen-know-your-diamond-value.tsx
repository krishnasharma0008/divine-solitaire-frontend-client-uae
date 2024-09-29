const HomeScreenYourDiamondValue: React.FC = () => {
  return (
    <>
      <section className="block spi-branding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 solitiare-price waypoint-active">
              <div className="flex-sm align-items-center row-xs">
                <div className="col-sm-6 col-md-6 chart-img  mb-xs-20">
                  <div className="background-container">
                    <a target="_blank" href="/pricing">
                      <img
                        src="/DEFGHd75a6jpg.jpg"
                        title="Know diamond value"
                        alt="Know diamond value"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-5 col-xs-12 col-md-offset-1 text-xs-center">
                  <div className="row-xs">
                    <header className="col-sm-12 text-left text-xs-center">
                      <h3 className="raise main-title">
                        Know Your Diamond Value
                      </h3>
                    </header>
                    <div className="col-sm-12 mt-15 col-xs-12">
                      <p className="raise">
                        Divine Solitaires’ Know The Value (KTV) helps you know
                        exactly how much your solitaire is worth, based on our
                        Nationwide Standard and Transparent Pricing. The added
                        benefit of this feature is that you can compare the
                        current price of our diamond with what price it was
                        years ago, giving you freedom from being completely
                        dependent on your jeweller.
                      </p>
                    </div>
                  </div>

                  <div className="button-container raise text-center">
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a
                      href="/pricing"
                      className=" mt-15 btn home-about__btn icon icon--inline icon--arrow-right-dark"
                    >
                      Check the value now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="branding-banner pb-0 mb-30">
        <div className="banner-slider slick-initialized slick-slider">
          <div aria-live="polite" className="slick-list draggable">
            <div
              className="slick-track"
              role="listbox"
              // style={{ opacity: 1, width: "1203px", left: "0px" }}
            >
              <div
                className="banner-slider-img slick-slide slick-current slick-active"
                data-slick-index="0"
                aria-hidden="false"
                role="option"
                aria-describedby="slick-slide30"
                // style={{ width: "1203px" }}
              >
                {/* <a target="_blank" href="/diamond-education">
                  <img
                    src="/MNOPQ3fbc8jpg.jpg"
                    title="Diamond Education - care"
                    alt="Diamond Education - care"
                  />
                </a> */}
                <a
                  target="_blank"
                  href="/diamond-education"
                  className="hidden md:inline"
                >
                  {/* Original image for larger screens */}
                  <img
                    src="/MNOPQ3fbc8jpg.jpg"
                    title="Diamond Education - care"
                    alt="Diamond Education - care"
                    className="hidden md:block w-full max-w-full mx-auto"
                  />
                </a>

                <a
                  target="_blank"
                  href="/diamond-education"
                  className="md:hidden"
                >
                  {/* Alternate image for smaller screens */}
                  <img
                    src="/half-dia-care.jpg"
                    title="Diamond Education - care"
                    alt="Diamond Education - care"
                    className="w-full max-w-full mx-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeScreenYourDiamondValue;
