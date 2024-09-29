//import Image from "next/image";

const HomeScreenSolitaireEveryMoment: React.FC = () => {
  return (
    <>
      <section className="block module-home">
        <div className="featured-products waypoint-active" data-waypoint="once">
          <header>
            <h1 className="raise main-title"> Solitaires for every moment </h1>
            <p className="body-large raise">Add brilliance to each day</p>
          </header>
          <div className="container">
            <div className="row">
              <div className="flex branding-slider">
                <div className="col col-sm-4 classic branding-slider-block">
                  <div className="with-link-primary">
                    <div className="background-container">
                      <div
                        className="image-container image-ready small-img mobile-view-image"
                        style={{
                          backgroundImage: 'url("/UVWXY1abb6jpg.jpg")',
                          minHeight: "230px",
                        }}
                      ></div>
                    </div>
                    <span className="link-primary animate-out">
                      Superior Quality
                    </span>
                  </div>
                </div>
                <div className="col col-sm-4 classic branding-slider-block">
                  <div className="with-link-primary">
                    <div className="background-container">
                      <div
                        className="image-container image-ready small-img mobile-view-image"
                        style={{
                          backgroundImage: 'url("/wxyzA5c076jpg.jpg")',
                          minHeight: "230px",
                        }}
                      ></div>
                    </div>
                    <span className="link-primary animate-out">
                      Transparent Pricing
                    </span>
                  </div>
                </div>
                <div className="col col-sm-4 classic branding-slider-block">
                  <div className="with-link-primary">
                    <div className="background-container">
                      <div
                        className="image-container image-ready small-img mobile-view-image"
                        style={{
                          backgroundImage: 'url("/MNOPQ3e663jpg.jpg")',
                          minHeight: "230px",
                        }}
                      ></div>
                    </div>
                    <span className="link-primary animate-out">
                      Diamond Journey
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block bg-white features-wrap text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-xs-12 features-inner plr-xs-0  overflow-x-auto scrollbar-hidden">
              <ul className="branding-slider">
                <li className="branding-slider-block min-w-[125.56px]">
                  <div className="bg-free_insu"></div>
                  <p>Free Insurance</p>
                </li>
                <li className="branding-slider-block min-w-[125.56px]">
                  <div className="bg-certi"></div>
                  <p>100% Certified</p>
                </li>
                <li className="branding-slider-block min-w-[125.56px]">
                  <div className="bg-lifetime_upgrade"></div>
                  <p>Lifetime Upgrade</p>
                </li>
                <li className="branding-slider-block min-w-[125.56px]">
                  <div className="bg-heart_arrow"></div>
                  <p>Hearts &amp; Arrows</p>
                </li>
                <li className="branding-slider-block min-w-[125.56px]">
                  <div className="bg-lifetime_buyback"></div>
                  <p>Lifetime Buyback</p>
                </li>
                <li className="branding-slider-block min-w-[125.56px]">
                  <div className="bg-conflict_free"></div>
                  <p>Conflict Free Diamonds</p>
                </li>
                <li className="branding-slider-block min-w-[125.56px]">
                  <div className="bg-laser"></div>
                  <p>Laser Inscribed</p>
                </li>
                <li className="branding-slider-block min-w-[125.56px]">
                  <div className="bg-light_perf"></div>
                  <p>Light Performance</p>
                </li>
                <li className="branding-slider-block min-w-[125.56px]">
                  <div className="bg-360_loupe_view"></div>
                  <p>360° Loupe View</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeScreenSolitaireEveryMoment;
