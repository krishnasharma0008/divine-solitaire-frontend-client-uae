import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Breadcrumbs } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import {
  MinusIcon,
  PlusIcon,
  BreadcrumbArrowRightIcon,
} from "@/components/icons";

const Faqs = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="relative bg-no-repeat bg-center bg-contain md:h-[240px] overflow-hidden bg-product-empty bg-[#f9f7f8]">
        <Image
          src="/faqs.jpg"
          title="Terms and Condition"
          alt="Terms and Condition"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto min-h-[100px]"
        />
        <div className="container container-content md:p-4">
          <div className="absolute top-1/2 transform -translate-y-1/2 text-center">
            <h1 className="font-serif font-normal text-white text-xl sm:text-2xl md:text-4xl mb-3">
              Faqs
            </h1>
            <Breadcrumbs
              separator={
                <BreadcrumbArrowRightIcon className="h-3 w-3  md:h-5 md:w-5 text-gray-500" />
              }
              className="bg-transparent p-1 text-white pt-2"
            >
              <Link href="/" className="flex opacity-60 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 md:h-5 md:w-5"
                  viewBox="0 0 20 20"
                  fill="#94a3b8"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span className="text-gray-400 text-xs text-sm">Home</span>
              </Link>
              <a href="#" className="text-[#ffffff] text-xs text-sm">
                Faqs
              </a>
            </Breadcrumbs>
          </div>
        </div>
      </div>
      <Accordion open={open === 1} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              1. What is unique about Divine Solitaires diamonds?
              <span>{open === 1 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 py-3">
          Our diamonds are available in ‘Round Brilliant’ and ‘Fancy’ cuts
          Divine Solitaires are defined by their exquisite (Ex.Ex.Ex.)Plus
          Craftsmanship. <br />- The Divine Solitaires ‘Round Brilliant’ cut
          boasts of 57 facets – all cut to reflect perfect symmetry and angles.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              2. What does the Hearts and Arrows pattern in a diamond signify?
              <span>{open === 2 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          A pavilion view (seen from the bottom) of a diamond reveals 8 hearts
          in a circular formation and 8 arrows when viewed from the table (seen
          from the top) is called the Hearts & Arrows pattern of a diamond. A
          diamond is classified as perfect when it is cut with precision and
          superior optical symmetry to reveal the Hearts and Arrows pattern.
          Each Divine Solitaire Diamond boasts of the Hearts and Arrows pattern
          showcasing our expert craftsmanship and guaranteeing only the best to
          you.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              3. What are the different sizes, colours and clarity ranges of
              diamonds available with Divine Solitaires?
              <span>{open === 3 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          Divine Solitaires Diamonds are available in a wide range of sizes –
          from 0.10 to 2.99 carat and above; colours – from D to K and clarity
          ranges – from IF to S12. Please do peruse our catalogue to choose your
          dream Divine Solitaire.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              4. How do I know whether the diamond given to me is the same as
              promised?
              <span>{open === 4 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          We, at Divine Solitaires, pride ourselves on our transparency. We
          inscribe all our Diamonds with a unique ID on its girdle which is
          visible through a magnification loupe for you to ensure that the
          Diamond you get is the Divine Solitaire you choose!
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              5. What does Buyback mean?
              <span>{open === 5 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          Buyback is a feature available for every Divine Solitaires consumer
          who is registered on our website or mobile application. - Only
          products branded as DSD/DSJ are eligible for buyback. - Consumer will
          get 90% of prevailing prices if it comes through original sales
          channel. - If it happens through other sales channel or direct from
          the company, then consumer will get 80% of prevailing prices.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 6} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              6. What does other sales channel mean?
              <span>{open === 6 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          Any other jeweller partner apart from the original source of purchase.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 7} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              7. How can I avail Buyback if I move to another city?
              <span>{open === 7 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          You can still get 90% of prevailing prices by delivering the DSD at
          the nearest divine solitaires partner store, however the amount will
          be paid by the original sales channel (Partner from whom the DSD was
          purchased)
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 8} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              8. Which products are eligible for Buyback?
              <span>{open === 8 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          - Only products branded as DSD/DSJ (Divine Solitaires Diamond/Divine
          Solitaires Jewellery) are eligible for buyback.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 9} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(9)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              9. What if I lose Divine Solitaires or international certificate?
              <span>{open === 9 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          - You can ask for duplicate certificate by contacting Divine
          Solitaires customer care and paying INR 5000 per carat.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 10} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(10)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              10. What is Upgrade?
              <span>{open === 10 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          Upgrade is a feature available for every Divine Solitaires consumer
          who is registered on our website or mobile application. You can
          exchange your current DSD/DSJ to a bigger one on the basis of
          prevailing prices.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 11} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(11)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              11. How do I know if I am eligible for Upgrade?
              <span>{open === 11 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          - The consumer should be registered on Divine Solitaires
          website/application. - The consumer must upgrade by 35% to the
          existing value of his/her DS product or INR 20,000 whichever is
          higher.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 12} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(12)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              12. What is the Upgrade?
              <span>{open === 12 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          The upgrade is a feature available for every Divine Solitaires
          consumer who is registered on our website or mobile application. You
          can exchange your current DSD/DSJ to a bigger one on the basis of
          prevailing prices.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 13} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(13)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              13. How do I know if I am eligible for Upgrade?
              <span>{open === 13 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          The consumer should be registered on Divine Solitaires
          website/application. - The consumer must upgrade by 35% to the
          existing value of his/her DS product or INR 20,000 whichever is
          higher.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 14} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(14)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              14. How do I upgrade my diamond?
              <span>{open === 14 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          You can upgrade your diamond any time at 100% of the prevailing rate.
          The value of the upgraded stone should be 35% or 20,000 more than the
          previous stone, whichever is higher.
          <br />
          You can upgrade your diamond any time at 100% of the prevailing rate.
          The value of the upgraded stone should be 35% or 20,000 more than the
          previous stone, whichever is higher.Any Divine Solitaires affiliated
          jeweller across all our stores will upgrade your diamond as per the
          prevailing prices in the Nationwide Standard and Transparent Price
          List.
          <br />
          The Divine Solitaires lab takes up to 3 working days to check the
          condition of the previous Divine Solitaires diamond and confirm the
          eligibility. The previous DSD has to be returned within 14 days from
          the date of the new invoice.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 15} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(15)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              15. When can I buyback my Divine Solitaires diamond?
              <span>{open === 15 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          You can buyback your Divine Solitaires diamond (DSD) or Divine
          Solitaires jewellery (DSJ) any time after purchasing it. However, if
          it was bought on an offer by Divine Solitaires, then you can avail a
          buyback only after two years from the date of purchase.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 16} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(16)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              16. Can I buyback my diamond in another city?
              <span>{open === 16 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          Yes, you can avail the buyback on a Divine Solitaires diamond or
          Divine Solitaires jewellery across all our partner jewellers’ stores.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 17} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(17)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              17. How do I go about the buyback process?
              <span>{open === 17 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          You are eligible for a buyback at 90% of the prevailing price if you
          visit the same channel (jeweller) from where you made the purchase. If
          you visit another channel (jeweller) that is not the same as
          <br />
          the point of purchase, then you can avail buyback at 80% of the
          prevailing rate. The prices will be as per the prevailing Nationwide
          Standard &amp; Transparent Price List (NSTPL). Only Divine Solitaires-
          affiliated jewellers can buyback your diamond.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 18} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(18)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              18. What documents do I need for buyback?
              <span>{open === 18 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          The DSD/DSJ will have to be in its original condition as sold. If your
          diamond weighs 0.30 carat or above, you will have received a diamond
          certificate from an international third party laboratory.
          <br />
          This document will be needed along with the Divine Solitaires quality
          certificate. The original invoice of the product from the jeweller to
          the customer is also a prerequisite.
          <br />
          If you lose either the Divine Solitaires quality certificate or the
          international diamond certificate, you can contact Divine Solitaires
          customer care and get another certificate for INR 5000 per carat of
          your diamond.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 19} className="px-5 my-[30px] bg-[#f8f9fd]">
        <AccordionHeader
          onClick={() => handleOpen(19)}
          className="p-4 font-body items-center w-full border-b-0"
        >
          <div className="flex flex-col gap-4 justify-between w-full text-black">
            <div className="text-lg font-medium flex justify-between">
              19. Can I buyback my diamond from another jeweller?
              <span>{open === 19 ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="px-4 mt-5 pb-3">
          Yes, you can buyback your Divine Solitaires diamond or jewellery from
          any non-divine Solitaires affiliated jeweller. However, Divine
          Solitaires is not responsible for any discrepancies in the policy’s
          <br />
          <br />
          terms and condition.
        </AccordionBody>
      </Accordion>
    </>
  );
};
export default Faqs;
