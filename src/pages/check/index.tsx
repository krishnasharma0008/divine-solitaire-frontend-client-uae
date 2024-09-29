//import Image from "next/image";
import React, { useState } from "react";

import {
  FooterFacebookIcon,
  FooterInstagramIcon,
  FooterMailIcon,
  FooterPintrestIcon,
  FooterTwitterIcon,
  Group100Icon,
  Group99Icon,
  GrowthDownIcon,
  GrowthUpIcon,
  HeartIcon8,
  HnAGoldenIcon,
  InfoIcon,
  InsuranceIcon,
  InsuranceSafetyIcon,
  ListViewIcon,
  LogoIcon,
  MapPinLineIcon,
  MapViewIcon,
  MenuFacebookIcon,
  MenuIcon,
  MenuInstagramIcon,
  MenuTwitterIcon,
  MinusIcon,
  OurAddressIcon,
  PYDSIcon,
  ParametersCertifiedIcon,
  PhoneIcon,
  PlusIcon,
  PortfolioStoreFront,
  PriceRequest,
  QualityGuranteeCertificate,
  QuestionIcon,
  ResaleIcon,
  SafetyIcon,
  SearchIcon,
  SecondarySaleIcon,
  ShareFatIcon,
  ShoppingCartIcon,
  SignOutIcon,
  SpecialProductsIcon,
  StoreLocatorIcon,
  TalkToUsIcon,
  TermsConditionIcon,
  TransparentPricingIcon,
  TrashIcon,
  UserIcon,
  VectorIcon,
  WorkingHourIcon,
  WriteToUsIcon,
  XIcon,
  XMarkIcon,
  XxxPlusIcon,
  ZeroFluoroscenceIcon,
} from "@/components";
import Carousel, { CarouselProps } from "@/components/common/carousel";
// import MobileNumberInput from "@/components/common/mobile-number-input";
import CHKTimePicker from "@/components/common/ck-time-picker";
import DiamondSelector from "@/components/common/diamond-selector";
import NewsletterButton from "@/components/common/newsletter-button";
// import { CountryCode } from "@/interface/country-code";

const Sample: React.FC = () => {
  const [slideCount] = useState(2);
  const [currentSlide] = useState(0);

  console.log("slideCount : " + slideCount);
  console.log("currentSlide : " + currentSlide);

  const changeHandler = () => {
    console.log("Start");
  };

  const clickHandler = () => {
    alert("working click");
  };

  const carouselProps: CarouselProps = {
    type: "slide",
    title: "Solitaires crafted to charm",
    description: "Solitaire jewellery crafted with precision and care",
    className: "lg:grid-cols-3",
    slidesPerView: 2.5,
    spaceBetween: 50,
    cardType: "ImageWithTextCard",
    items: [
      {
        name: "Desk and Office",
        description: "Work from home accessories",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
        alt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        url: "#",
      },
      {
        name: "Self-Improvement",
        description: "Journals and note-taking",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
        alt: "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        url: "#",
      },
      {
        name: "Collection",
        description: "Journals and note-taking",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        alt: "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        url: "#",
      },
      {
        name: "Collection",
        description: "Journals and note-taking",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
        alt: "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        url: "#",
      },
      {
        name: "Collection",
        description: "Journals and note-taking",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
        alt: "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        url: "#",
      },
    ],
  };
  const making_iamges = [
    {
      src: "/Rectangle 135.png",
      alt: "Our Craftsmanship",
      //text: "Our Craftsmanship",
    },
    {
      src: "/Rectangle 136.png",
      alt: "Jewellery USP&apos;s",
    },
    {
      src: "/Rectangle 137.png",
      alt: "Collections",
    },
  ];

  const handleTimeChange = (newTime: Date) => {
    // Do something with the newTime value
    console.log(newTime);
  };
  //const [activeColor, setActiveColor] = useState("D");

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

  // const handleStepClick = (stepNumber: number) => {
  //   setActiveStep(stepNumber);
  // };

  return (
    <>
      <div>
        <CHKTimePicker selectedTime={new Date()} onChange={handleTimeChange} />
        <div className="flex gap-x-4 ">
          {/* <MobileNumberInput
            value={mobileNum}
            countryCode={countryCode || { value: "+91", label: "+91" }}
            onChange={mobileNumberChangeHandler}
          /> */}
          <MenuFacebookIcon />
          <MenuInstagramIcon />
          <MenuTwitterIcon />{" "}
        </div>

        <div className="mt-6 flex max-w-md gap-x-4">
          <NewsletterButton
            className=""
            id="email"
            name="email"
            placeholder="EMAIL ADDRESS"
            onChange={changeHandler}
            type="text"
            label="Submit"
            onClick={clickHandler}
          />
        </div>
        <Carousel {...carouselProps} />

        <Carousel
          type="slide"
          cardType="ImageCard"
          className="border w-auto"
          slidesPerView={1}
          navigation={true}
          items={making_iamges}
        />
      </div>
      <div>
        <DiamondSelector diamondData={colorData} />
      </div>
      <div className="w-full space-x-2">
        <FooterFacebookIcon />
        <FooterInstagramIcon />
        <FooterMailIcon />
        <FooterPintrestIcon />
        <FooterTwitterIcon />
        <Group100Icon />
        <Group99Icon />
        <GrowthDownIcon />
        <GrowthUpIcon />
        <HeartIcon8 />
        <HnAGoldenIcon />
        <InfoIcon />
        <InsuranceIcon />
        <InsuranceSafetyIcon />
        <ListViewIcon />
        <LogoIcon />
        <MapPinLineIcon />
        <MapViewIcon />
        <MenuIcon />
        <MinusIcon />
        <OurAddressIcon />
        <ParametersCertifiedIcon />
        <PhoneIcon />
        <PlusIcon />
        <PriceRequest />
        <PYDSIcon />
        <PortfolioStoreFront />
        <QualityGuranteeCertificate />
        <QuestionIcon />
        <ResaleIcon />
        <SafetyIcon />
        <SecondarySaleIcon />
        <SearchIcon />
        <ShareFatIcon />
        <ShoppingCartIcon />
        <SignOutIcon />
        <SpecialProductsIcon />
        <StoreLocatorIcon />
        <TalkToUsIcon />
        <TermsConditionIcon />
        <TransparentPricingIcon />
        <TrashIcon />
        <UserIcon />
        <VectorIcon />
        <WorkingHourIcon />
        <WriteToUsIcon />
        <XIcon />
        <XMarkIcon />
        <XxxPlusIcon />
        <ZeroFluoroscenceIcon />
      </div>
      {/* <div className="p-4 space-y-2 text-gray-300">
        <div className="flex max-w-xs w-full bg-gray-300 h-px"></div>
        <div
          className="flex max-w-xs w-full justify-between items-center"
          style={{ marginTop: "-7px" }}
        >
          {[1, 2, 3, 4, 5].map((stepNumber) => (
            <span
              key={stepNumber}
              className={`flex flex-col items-center ${
                activeStep === stepNumber ? "cursor-pointer font-bold" : ""
              }`}
              onClick={() => setActiveStep(stepNumber)}
            >
              <span
                className={`w-3 h-3 text-black bg-gray-300 rounded-full ${
                  activeStep === stepNumber ? "bg-gray-900" : ""
                }`}
              ></span>
              <span
                className={`text-xs mt-1 ${
                  activeStep === stepNumber ? "text-black" : ""
                }`}
              >
                {stepNumber}
              </span>
            </span>
          ))}
        </div>
      </div> */}
      {/* <div className="p-4 space-y-2 text-gray-300">
        <div className="flex justify-center">
          <Image
            src={
              Color.find((colorInfo) => colorInfo.label === activeColor)?.src ||
              ""
            }
            alt={`Color ${activeColor}`}
            height={100}
            width={100}
            className="w-auto h-auto"
          />
        </div>
        <div className="flex max-w-xs w-full bg-gray-300 h-px"></div>

        <div
          className="flex max-w-xs w-full justify-between items-center"
          style={{ marginTop: "-7px" }}
        >
          {Color.map((colorInfo) => (
            <span
              key={colorInfo.label}
              className={`flex flex-col items-center ${
                activeColor === colorInfo.label
                  ? "cursor-pointer font-bold"
                  : ""
              }`}
              onClick={() => setActiveColor(colorInfo.label)}
            >
              <span
                className={`w-3 h-3 text-black bg-gray-300 rounded-full ${
                  activeColor === colorInfo.label ? "bg-gray-900" : ""
                }`}
              />
              <span
                className={`text-xs mt-1 ${
                  activeColor === colorInfo.label ? "text-black" : ""
                }`}
              >
                {colorInfo.label}
              </span>
            </span>
          ))}
        </div>

        <div className="bg-[#f3f4f8] text-black">
          {Color.find((colorInfo) => colorInfo.label === activeColor)?.text}
        </div>
      </div> */}
    </>
  );
};

export default Sample;
