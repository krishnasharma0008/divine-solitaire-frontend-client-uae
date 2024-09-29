import Image from "next/image";

//import getSolitairePriceIndex from "@/api/spi";

const HomeScreenSolitairePriceIndex: React.FC = () => {
  return (
    <>
      <section className="block spi-branding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 solitiare-price waypoint-active">
              <div className="flex-sm align-items-center row-xs">
                <div className="col-sm-6 col-md-6 col-xs-12 mb-xs-20 col-md-offset-1 chart-img order-2">
                  <a target="_blank" href="/spi">
                    <Image
                      src="/api/get-spi-image"
                      alt="spiimage"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-5 col-xs-12 order-1">
                  <div className="row-xs">
                    <header className="col-xs-12 col-sm-12 text-left text-xs-center">
                      <h3 className="raise main-title">
                        Solitaire Price Index
                      </h3>
                      <p className="body-large raise">
                        An index introduced on 1st April 2006 which tracks
                        trends in diamond prices.
                      </p>
                    </header>
                    <div className="col-sm-12 mt-15 col-xs-12 text-xs-center">
                      <p className="raise">
                        Solitaires Price Index is purely based on the Divine
                        Solitaires “Nationwide Standard and Transparent Price
                        List”.
                      </p>
                      <p className="raise">
                        Divine Solitaires publishes the Divine Solitaire Price
                        Index on the 1st of every month.
                      </p>
                    </div>

                    <div className="button-container raise col-sm-12 col-xs-12 text-center">
                      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                      <a
                        className=" mt-15 btn home-about__btn icon icon--inline icon--arrow-right-dark"
                        href="/pricing"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeScreenSolitairePriceIndex;
