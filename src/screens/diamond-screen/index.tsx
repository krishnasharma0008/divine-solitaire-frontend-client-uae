import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

import {
  DiamondCaratIcon,
  DiamondColorIcon,
  DiamondCutIcon,
  DiamondClarityIcon,
} from "@/components";
import Carousel from "@/components/common/carousel";
import DiamondSelector from "@/components/common/diamond-selector";

const DiamondScreen: React.FC = () => {
  const iamges = [
    {
      src: "/CDEFG28c6f.jpg",
      alt: "Super Quality",
    },
    {
      src: "/defghe1135.jpg",
      alt: "Transparent Pricing",
    },
    {
      src: "/PQRST952b1.jpg",
      alt: "Diamond Journey",
    },
  ];

  const caratData = [
    {
      src: "/D-0.18.png",
      label: "0.18",
      text: "Focus On Finding A Cut Grade Of (Ex.Ex.Ex)Plus Or Very Good For A Brilliantly Sparkling Diamond",
    },
    {
      src: "/D-0.35.png",
      label: "0.35",
      text: "Make Sure You Analyse All The Aspects Of Cut, Clarity And Colour",
    },
    {
      src: "/D-0.50.png",
      label: "0.50",
      text: "Inclusions Will Be Difficult To See In A 0.50 Carat Diamond, So Lower The Clarity Grade And Focus On Getting The Best Color And Cut Grade.",
    },
    {
      src: "/D-0.75.png",
      label: "0.75",
      text: "Any Visible Inclusions Is Less Noticeable. So Go For A Lower Clarity Grade Like SI1 Or SI2 & A Cut Grade Of Very Good Or Ideal.",
    },
    {
      src: "/D-1.png",
      label: "1",
      text: "For A Solitaire Engagement Ring, Focus On Ideal Cut With Excellent Polish & Symmetry Grades. For Side Stones, Buy Higher Color And Clarity.",
    },
    {
      src: "/D-1.5.png",
      label: "1.5",
      text: "As An Above-Average Purchase Price, Focus On Mid-Range Color And Clarity While Maximizing Cut Grade.",
    },
    {
      src: "/D-2.png",
      label: "2",
      text: "Some SI Inclusions Will Be Visible With The Unaided Eye, So Avoid Anything Less Than VS1 Clarity.",
    },
    {
      src: "/D-3.png",
      label: "3",
      text: "Larger Size Magnifies Natural Inclusions. Choose A Diamond Lower Than VS1. Avoid Any Diamonds With Fluorescence.",
    },
    {
      src: "/D-5.png",
      label: "5",
      text: "The Ultimate In Luxury; Go For The Triple X: Excellent Polish, Excellent Symmetry And Excellent Cut.",
    },
  ];

  const colorData = [
    {
      src: "/color_1_D.png",
      label: "D",
      text: "Colourless; Appears Completely White Under 10 Times Magnification And Pairs Well With Platinum, Palladium, And White Gold.",
    },
    {
      src: "/color_2_E.png",
      label: "E",
      text: "Colourless; Can Only Be Distinguished From D By A Gemologist And Pairs Well With Platinum, Palladium, And White Gold.",
    },
    {
      src: "/color_3_F.png",
      label: "F",
      text: "Colourless; Can Only Be Distinguished From D And E By A Gemologist And Pairs Well With Platinum, Palladium, And White Gold.",
    },
    {
      src: "/color_4_G.png",
      label: "G",
      text: "Near Colourless; Extremely Subtle Hints Of Yellow Noticeable Only In Side-By-Side Comparison And Pairs Well With White Or Yellow Gold.",
    },
    {
      src: "/color_5_H.png",
      label: "H",
      text: "Near Colourless; Subtle Hints Of Yellow Visible In Side-By-Side Comparison And Pairs Well With White Or Yellow Gold.",
    },
    {
      src: "/color_6_I.png",
      label: "I",
      text: "Near Colourless Subtle Hints Of Yellow Noticeable With The Unaided Eye And Pairs Well With White Or Yellow Gold.",
    },
    {
      src: "/color_7_J.png",
      label: "J",
      text: "Near Colourless; Subtle Hints Of Yellow Noticeable With The Unaided Eye And Pairs Well With White Or Yellow Gold.",
    },
    {
      src: "/color_8_K.png",
      label: "K",
      text: "Faint Yellow; Appears Yellow Without Magnification And Pairs Well With Yellow Gold",
    },
  ];

  const clarityData = [
    {
      src: "/clarity-IF-new.png",
      label: "IF",
      text: "No Surface Imperfections Or Inclusions; The Rarest Of All Diamonds.",
    },
    {
      src: "/clarity-VVS1-new.png",
      label: "VVS1",
      text: "No Imperfections Visible To The Unaided Eye.",
    },
    {
      src: "/clarity-VVS2-new.png",
      label: "VVS2",
      text: "No Imperfections Visible To The Unaided Eye.",
    },
    {
      src: "/clarity-VS1-new.png",
      label: "VS1",
      text: "At VSI, You May Be Able To See A Few Tiny Imperfections Upon Close Inspection",
    },
    {
      src: "/clarity-VS2-new.png",
      label: "VS2",
      text: "At VS2, You Might Be Able To See A Few More Tiny Inclusions.",
    },
    {
      src: "/clarity-SI1-new.png",
      label: "SI1",
      text: "Imperfections, Though Small, Are Likely To Be Visible With The Unaided Eye.",
    },
    {
      src: "/clarity-SI2-new.png",
      label: "SI2",
      text: "Imperfections, Though Small, Are Likely To Be Visible With The Unaided Eye.",
    },
  ];

  const TabsList = [
    {
      label: "Cut",
      icon: <DiamondCutIcon />,
      component: (
        <div className="md:p-4">
          <div className="px-4 mb-4 md:mb-8 text-gray-900 text-3xl font-montserrat font-medium tracking-widest">
            Cut
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:p-4">
              <Image
                alt="features2"
                src="/pqrst479d1.jpg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="md:p-4 px-2">
              <p>
                A diamond’s brilliance is primarily determined by its cut. An
                exquisitely cut diamond with perfectly symmetrical and aligned
                facets will reflect light optimally, resulting in unmatched
                brilliance. Immense expertise is needed to create facets with
                perfect symmetry that maximizes light performance and increases
                the signature sparkle of a diamond. All our diamonds are
                (Ex.Ex.Ex.)Plus diamonds.
              </p>
              <div className="my-6 md:my-10">
                <div className="mb-6 text-left text-gray-900 text-lg font-montserrat font-medium tracking-wider">
                  Buying Tip
                </div>
                <p>
                  The cut is especially important for princess, oval and
                  pear-shaped diamonds. With these shapes, an excellent cut will
                  ensure a consistent, stunning sparkle and an even distribution
                  of carat weight.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Carat",
      icon: <DiamondCaratIcon />,
      component: (
        <div className="md:p-4">
          <div className="my-2.5 px-4 text-gray-900 text-3xl font-montserrat font-medium tracking-widest">
            Carat
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            <div className="p-4">
              <div className="w-full">
                <DiamondSelector
                  diamondData={caratData}
                  className="w-auto h-auto"
                />
              </div>
            </div>
            <div className="p-4">
              <p>
                Each carat can be eventually subdivided into “100 points” which
                allows extremely precise measurements to the 100th decimal
                place. It’s worth noticing that certain diamonds are cut
                exclusively with an emphasis on weight. They may look bigger but
                at the cost of brilliance and symmetry. At Divine Solitaires, we
                commend seeking a balance between cut and carat weight to
                guarantee a symmetrical dazzling diamond. Our diamonds weigh
                between 0.10 carat and 2.99 carat.
              </p>
              <div className="my-6 md:my-10">
                <div className="mb-6 text-left text-gray-900 text-lg font-montserrat font-medium tracking-wider">
                  Buying Tip
                </div>
                <p>
                  When buying a diamond, choose a carat weight not just on the
                  basis of size but also cut grade as it strongly affects the
                  quality of your diamond
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Color",
      icon: <DiamondColorIcon />,
      component: (
        <div className="md:p-4">
          <div className="my-2.5 px-4 text-gray-900 text-3xl font-montserrat font-medium tracking-widest">
            Colour
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="p-4">
              <div className="w-full">
                <DiamondSelector
                  diamondData={colorData}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="p-4">
              <p>
                Diamonds exist on a scale of several shades, ranging from
                colourless to light yellow. These subtle differences are then
                graded on a colour scale from D (Colourless) to Z (Light
                Yellow).
                <br />
                <br />
                Our diamonds range from D to K.
              </p>
              <div className="my-6 md:my-10">
                <div className="mb-6 text-left text-gray-900 text-lg font-montserrat font-medium tracking-wider">
                  Buying Tip
                </div>
                <p>
                  If you are planning to set your diamond in a yellow or rose
                  gold jewellery, it is a good bet to use “near colourless”
                  diamonds as the warm colour of the metal makes the yellowness
                  in the diamond a little less noticeable. But if you want the
                  purest white diamond, select one that’s “colourless” and set
                  it in white gold or platinum.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Clarity",
      icon: <DiamondClarityIcon />,
      component: (
        <div className="md:px-4">
          <div className="mt-2.5 mb-4 md:mb-8 px-4 text-gray-900 text-3xl font-montserrat font-medium tracking-widest">
            Clarity
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="p-4">
              <div className="w-full">
                <DiamondSelector
                  diamondData={clarityData}
                  className="w-auto h-auto"
                  containerClass="py-5"
                />
              </div>
            </div>
            <div className="p-4">
              <p>
                As we have already seen, diamonds are formed by tremendous heat
                and pressure deep within the earth. This totally organic process
                eventually means that nearly all diamonds will contain certain
                internal inclusions or surface blemishes. Diamonds that are
                devoid of such characteristics are considered to have a higher
                clarity, which ranges from FL (Flawless) to I (Included). Our
                diamonds range from IF to S12.
              </p>
              <div className="my-6 md:my-10">
                <div className="mb-6 text-left text-gray-900 text-lg font-montserrat font-medium tracking-wider">
                  Buying Tip
                </div>
                <p>
                  If you want to stay assured about your diamond about its
                  stunning brilliance, a clarity grade of VVS2 or higher is
                  recommended for all diamond shapes
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="gap-24">
      <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto">
        <div className="flex flex-col items-center md:px-0 pt-5 [&>div]:px-4 md:px-[70px] md:pt-[72px]">
          <div className="mb-2.5 text-gray-900 text-lg md:text-3xl font-montserrat font-medium tracking-widest">
            Solitaires for every moment
          </div>
          <div className="md:mb-12 text-center text-gray-900 text-sm md:text-lg font-montserrat font-medium tracking-wider">
            Add brilliance to each day
          </div>
        </div>
        <div>
          <div className="hidden md:flex justify-center items-center">
            {iamges.map((item) => (
              <div className="relative mb-6 mr-4" key={item.alt}>
                <Image
                  src={item.src}
                  alt="feature"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-auto h-auto"
                />
                <div className="absolute top-0 left-0 bg-[#161616] bg-opacity-50 w-full h-[42px] flex items-center justify-center">
                  <span className="text-white text-24 font-montserrat font-medium">
                    {item.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="md:hidden">
            <Carousel
              type="slide"
              cardType="ImageCard"
              className="w-full mt-0"
              slidesPerView={1}
              navigation={true}
              items={iamges}
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="w-full flex flex-col items-center md:px-0 [&>div]:px-4 md:px-[70px] md:pt-[72px]">
          <div className="md:mb-2.5 text-gray-900 text-lg md:text-3xl font-montserrat font-medium tracking-widest">
            Buying Tips
          </div>
        </div>
        <div className="lg:my-auto w-full [&>div]:overflow-visible [&>div>nav]:sticky [&>div>nav]:shadow-[0px_15px_10px_-15px_#D3D3D3] [&>div>nav]:top-[64px] [&>div>nav]:lg:top-[80px] [&>div>nav]:z-10 [&>div>nav]:w-full [&>div>nav]:bg-white [&>div>nav]:py-2 px-2">
          <Tabs id="custom-animation" value={TabsList[0].label}>
            <TabsHeader
              className="!bg-white w-full lg:w-9/12 m-auto lg:pt-5 pb-0 pl-0 overflow-x-scroll py-2 lg:py-0 gap-3 lg:gap-4 scrollbar-hide rounded-none"
              indicatorProps={{
                className:
                  "lg:bg-[#f3f4f8] border-[1px] md:border-0 md:border-b-2 border-solid border-black lg:rounded-none bg-111",
              }}
            >
              {TabsList.map(({ label, icon }) => (
                <Tab
                  key={label}
                  value={label}
                  className="[&>div]:flex [&>div]:gap-3 py-2 lg:py-4 font-medium whitespace-nowrap bg-[#eeeeee] "
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {TabsList.map(({ component, label }) => (
                <TabPanel key={label} value={label}>
                  {component}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default DiamondScreen;
