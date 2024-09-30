import Image from "next/image";

import //HomeScreenSolitaireEveryMoment,
// HomeScreenSolitaireCraftedCharm,
// HomeScreenDiamondStory,
// HomeScreenYourDiamondValue,
// HomeScreenFeatureSection,
// HomeScreenSocialWidget,
"./sub-components";

const HomepageScreen: React.FC = () => (
  <div className="">
    <div className="hidden lg:flex lg:flex-col lg:justify-between lg:relative lg:h-screen">
      <div
        className="relative w-full"
        style={{ height: "calc(100vh - 100px)", marginTop: "-30px" }}
      >
        <div
          className="absolute top-0 left-0 w-full"
          style={{ height: "calc(100% - 50px)" }}
        >
          <Image
            src="/homepage-banner.gif"
            alt="Home Page"
            height={696}
            width={1440}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-16 left-0 w-full bg-black text-white text-center md:text-3xl flex flex-col gap-3 p-3 md:p-5">
        <div>Superior quality solitaires with Hearts and Arrows</div>
        <div>180+ Stores | Across 95+ Cities</div>
      </div>
    </div>

    <div className="lg:hidden">
      <div className="relative">
        <Image
          src="/homepage-banner.gif"
          alt="Home Page"
          height={696}
          width={1440}
          className="w-full h-auto"
        />
        <div className="bg-black text-white text-center md:text-3xl flex flex-col gap-3 pb-3 md:pb-5">
          <div>Superior quality solitaires with Hearts and Arrows</div>
          <div>180+ Stores | Across 95+ Cities</div>
        </div>
      </div>
    </div>

    {/* <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto"> */}
    <div className="m-auto">
      {/* <HomeScreenSolitaireEveryMoment /> */}
      {/* <HomeScreenSolitaireCraftedCharm />
      <HomeScreenDiamondStory />
      <HomeScreenYourDiamondValue />
      <HomeScreenFeatureSection />
      <HomeScreenSocialWidget /> */}
    </div>
  </div>
);

export default HomepageScreen;
