import { Breadcrumbs } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BreadcrumbArrowRightIcon } from "@/components";
import DiamondEducationSections from "@/components/diamond-education-section";

const DiamondEducationScreen: React.FC = () => (
  <>
    <div className="relative bg-no-repeat bg-center bg-contain lg:h-[240px] overflow-hidden bg-product-empty bg-[#f9f7f8]">
      <Image
        src="/diamond-education.jpg"
        title="Privacy Policy - Top Header"
        alt="Privacy Policy - Top Header"
        height={0}
        width={0}
        sizes="100vw"
        className="w-full h-auto min-h-[100px]"
      />
      <div className="container container-content lg:p-4">
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center">
          <h1 className="font-serif font-normal text-white text-xl sm:text-2xl lg:text-4xl mb-3">
            4C&apos;s
          </h1>
          <Breadcrumbs
            separator={
              <BreadcrumbArrowRightIcon className="h-3 w-3  lg:h-5 lg:w-5 text-gray-500" />
            }
            className="bg-transparent p-1 text-white pt-2"
          >
            <Link href="/" className="flex opacity-60 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 lg:h-5 lg:w-5"
                viewBox="0 0 20 20"
                fill="#94a3b8"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-gray-400 text-xs text-sm">Home</span>
            </Link>
            <a href="#" className="text-[#ffffff] text-xs text-sm">
              4C&apos;s
            </a>
          </Breadcrumbs>
        </div>
      </div>
    </div>
    {/* <div className="lg:my-auto w-full [&>div]:overflow-visible [&>div>nav]:sticky [&>div>nav]:shadow-[0px_15px_50px_-15px_#111] [&>div>nav]:top-[64px] [&>div>nav]:lg:top-[80px] [&>div>nav]:z-10 [&>div>nav]:w-full [&>div>nav]:bg-white [&>div>nav]:py-2">
      <DiamondEducationSections />
    </div> */}
    <div className="lg:my-auto w-full [&>div]:overflow-visible [&>div>nav]:sticky [&>div>nav]:shadow-[0px_15px_10px_-15px_#D3D3D3] [&>div>nav]:top-[64px] [&>div>nav]:lg:top-[80px] [&>div>nav]:z-10 [&>div>nav]:w-full [&>div>nav]:bg-white [&>div>nav]:py-2">
      <DiamondEducationSections />
    </div>
  </>
);

export default DiamondEducationScreen;
