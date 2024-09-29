//import Image from "next/image";

const HomeScreenSolitaireCraftedCharm: React.FC = () => {
  return (
    <>
      <section className="block module-home">
        <div className="featured-products waypoint-active" data-waypoint="once">
          <header>
            <h1 className="raise main-title"> Solitaires crafted to charm </h1>
            <p className="body-large raise">
              Solitaire jewellery crafted with precision and care
            </p>
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
                          backgroundImage: 'url("/rstuv7e1a1jpg.jpg")',
                          minHeight: "230px",
                        }}
                      ></div>
                    </div>
                    <span className="link-primary animate-out">
                      OUR CRAFTSMANSHIP
                    </span>
                  </div>
                </div>
                <div className="col col-sm-4 classic branding-slider-block">
                  <div className="with-link-primary">
                    <div className="background-container">
                      <div
                        className="image-container image-ready small-img mobile-view-image"
                        style={{
                          backgroundImage: 'url("/pqrst96feejpg.jpg")',
                          minHeight: "230px",
                        }}
                      ></div>
                    </div>
                    <span className="link-primary animate-out">
                      JEWELLERY USP&apos;S
                    </span>
                  </div>
                </div>
                <div className="col col-sm-4 classic branding-slider-block">
                  <div className="with-link-primary">
                    <div className="background-container">
                      <div
                        className="image-container image-ready small-img mobile-view-image"
                        style={{
                          backgroundImage: 'url("/stuvw9ae2fjpg.jpg")',
                          minHeight: "230px",
                        }}
                      ></div>
                    </div>
                    <span className="link-primary animate-out">
                      COLLECTIONS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="block module-home bg-[#f3f4f2]">
        <div className="featured-products waypoint-active" data-waypoint="once">
          <header>
            <h1 className="raise main-title"> Solitaires crafted to charm </h1>
            <p className="body-large raise">
              Solitaire jewellery crafted with precision and care
            </p>
          </header>
        </div>
        <div className="flex px-6 overflow-x-auto scrollbar-hidden">
          <div
            className="mx-2 image-zoom"
            style={{
              backgroundImage: 'url("/rstuv7e1a1jpg.jpg")',
              minWidth: "324px",
              minHeight: "230px",
              maxWidth: "427px",
              maxHeight: "342px",
            }}
          ></div>
          <div
            className="mx-2 image-zoom"
            style={{
              backgroundImage: 'url("/pqrst96feejpg.jpg")',
              minWidth: "324px",
              minHeight: "230px",
              maxWidth: "427px",
              maxHeight: "342px",
            }}
          ></div>
          <div
            className="mx-2 image-zoom"
            style={{
              backgroundImage: 'url("/stuvw9ae2fjpg.jpg")',
              minWidth: "324px",
              minHeight: "230px",
              maxWidth: "427px",
              maxHeight: "342px",
            }}
          ></div>
        </div>
        <div className="flex px-6 overflow-x-auto scrollbar-hidden">
          <div
            className="item-center"
            style={{
              minWidth: "324px",
              maxWidth: "427px",
            }}
          >
            <span className="w-full link-primary animate-out text-center">
              OUR CRAFTSMANSHIP
            </span>
          </div>
          <div
            className="item-center"
            style={{
              minWidth: "324px",
              maxWidth: "427px",
            }}
          >
            <span className="w-full link-primary animate-out text-center ">
              JEWELLERY USP&apos;S
            </span>
          </div>
          <div
            className="item-center"
            style={{
              minWidth: "324px",
              maxWidth: "427px",
            }}
          >
            <span className="w-full link-primary animate-out text-center">
              COLLECTIONS
            </span>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default HomeScreenSolitaireCraftedCharm;
