import Image from "next/image";
//import Link from "next/link";

// import {
//   FooterAppStoreAndroidIcon,
//   FooterAppStoreAppleIcon,
// } from "@/components";
//import Popup from "@/components/common/popup";

import {
  // HomeScreenOurFeatures,
  // HomeScreenShareLove,
  // HomeScreenVerifyTrack,
  // HomeScreenQualityTabNav,
  //HomeScreenInsureNow,
  // HomeScreenSolitairePrice,
  //HomeScreenStoriesDivine,
  HomeScreenSolitaireEveryMoment,
  HomeScreenSolitaireCraftedCharm,
  HomeScreenDiamondStory,
  HomeScreenYourDiamondValue,
  HomeScreenFeatureSection,
  //HomeScreenSolitairePriceIndex,
  // HomeScreenDivineStories,
  HomeScreenSocialWidget,
} from "./sub-components";
//import SolitairePriceIndexScreen from "../spi-screen";

// const Seperator: React.FC = () => <div className="border my-12 md:my-36" />;

const HomepageScreen: React.FC = () => (
  <div className="">
    {/* <Popup /> */}
    {/* <div className="langingPage">
      <Image
        src="/homepage-banner.gif"
        alt="Home Page"
        height={696}
        width={1440}
        className="w-full object-cover h-custom z-10"
        style={{ height: "calc(100vh - 170px)" }}
      />
      <div className="scroll_down w-full">
        <div className="md:text-3xl flex flex-col gap-3 p-3 md:p-5">
          <div>Superior quality solitaires with Hearts and Arrows</div>
          <div>180+ Stores | Across 95+ Cities</div>
        </div>
      </div>
    </div> */}
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
      <HomeScreenSolitaireEveryMoment />
      {/* <Seperator />
       <HomeScreenFeatureSection />
      <Seperator /> */}
      <HomeScreenSolitaireCraftedCharm />
      <HomeScreenDiamondStory />
      <HomeScreenYourDiamondValue />
      <HomeScreenFeatureSection />
      {/* <HomeScreenSolitairePriceIndex /> */}
      {/* <HomeScreenDivineStories /> */}
      <HomeScreenSocialWidget />
      {/* <HomeScreenQualityTabNav />
      <Seperator />

      <HomeScreenVerifyTrack />
      <Seperator /> */}

      {/* <HomeScreenKnowYourDiamond />
      <Seperator /> */}

      {/* <SolitairePriceIndexScreen />
      <Seperator /> */}

      {/* <HomeScreenSolitairePrice /> */}
      {/* <Seperator /> */}
      {/* <HomeScreenInsureNow />
      <Seperator /> */}

      {/* <div className="flex flex-col items-center">
        <div className=" h-px bg-[#C9C9C9] flex items-center my-[140px]"></div>
        <div className="bg-black">
          <div className=" text-center mt-14">
            <span className="text-white text-4xl font-semibold leading-14 tracking-wider uppercase">
              Stories that make us Divine!
            </span>
          </div>
          <div className="mt-[21px] flex items-center">
            <span className=" text-white text-center text-lg font-normal leading-7 tracking-tighter">
              What they loved about us...
            </span>
          </div>
          <div className="my-[72px]"></div>
        </div>
      </div> */}
      {/* <HomeScreenStoriesDivine />*/}

      {/* <div className="w-full px-4 justify-center item-center">
        <div className="flex justify-center items-center pb-2 md:pb-20">
          {" "}
          
          <p className="text-center font-bold text-xl md:text-4xl">
            DOWNLOAD OUR APP
          </p>
        </div>
        <div className="flex justify-center item-center space-x-2 md:space-x-20 ">
          <Link
            href="https://apps.apple.com/in/app/divine-solitaires/id648310495"
            target="_blank"
          >
            <FooterAppStoreAppleIcon className="w-32 md:w-auto" />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.activity.divine_solitaires"
            target="_blank"
          >
            <FooterAppStoreAndroidIcon className="w-32 md:w-auto" />
          </Link>
        </div>
      </div> */}

      {/* <Seperator />
      <HomeScreenOurFeatures />
      <Seperator />
      <HomeScreenShareLove />
      <Seperator /> */}
    </div>
  </div>
);

export default HomepageScreen;
