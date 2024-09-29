import { Breadcrumbs } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

import { BreadcrumbArrowRightIcon } from "@/components";

const OurPolicy = () => {
  return (
    <>
      <div className="relative bg-no-repeat bg-center bg-contain md:h-[240px] overflow-hidden bg-product-empty bg-[#f9f7f8]">
        <Image
          src="/ourpolicy.jpg"
          title="Our Policy - Top Header"
          alt="Our Policy - Top Header"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto min-h-[100px]"
        />
        <div className="container container-content md:p-4">
          <div className="absolute top-1/2 transform -translate-y-1/2 text-center">
            <h1 className="font-serif font-normal text-white text-xl sm:text-2xl md:text-4xl mb-3">
              Our Policy
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
                Our Policy
              </a>
            </Breadcrumbs>
          </div>
        </div>
      </div>
      <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto pt-[45px]">
        <div className="flex flex-col justify-between items-center">
          <div className="flex flex-col items-start gap-12">
            <div className="flex flex-col items-end gap-8 px-2">
              <div className="pt-[30px] pb-[70px] pb-xs-20">
                <div className="policy-content mb-[60px] mb-xs-3">
                  <div className="pageHeadingStyle text-center mb-8 mb-xs-20">
                    <h2 className="tracking-wider text-3xl leading-5 font-serif font-normal font-regular">
                      Disclaimer Policy
                    </h2>
                  </div>
                  <div className="space-y-2">
                    <p>
                      The information contained in this website is for general
                      information purposes only. The information is provided by
                      divinesolitaires.com and while we endeavour to keep the
                      information up to date and correct, we make no
                      representations or warranties of any kind, express or
                      implied, about the completeness, accuracy, reliability,
                      suitability or availability with respect to the website or
                      the information, products, services, or related graphics
                      contained on the website for any purpose. Any reliance you
                      place on such information is therefore strictly at your
                      own risk. Through this website you are able to link to
                      other websites which are not under the control of
                      divinesolitaires.com. We have no control over the nature,
                      content and availability of those sites. The inclusion of
                      any links does not necessarily imply a recommendation or
                      endorse the views expressed within them.
                    </p>
                    <p>
                      Every effort is made to keep the website up and running
                      smoothly. However, divinesolitaires.com takes no
                      responsibility for, and will not be liable for, the
                      website being temporarily unavailable due to technical
                      issues beyond our control.
                    </p>
                  </div>
                </div>

                <div className="policy-content mb-[60px] mb-xs-3">
                  <div className="pageHeadingStyle text-center mb-[30px] mb-xs-20">
                    <h3 className="tracking-wider text-3xl leading-5 font-serif font-normal font-regular">
                      Ethical Sourcing
                    </h3>
                  </div>
                  <div>
                    <p className="mb-2.5">
                      <b>The Divine Solitaires Conflict-Free Diamond Policy</b>
                    </p>
                    <p className="mb-[30px]">
                      Divine Solitaires, along with the global diamond industry,
                      has a zero-tolerance policy toward conflict diamonds.
                      Through measures such as the Kimberley Process, which
                      tracks diamonds from mine to market, the industry in
                      partnership with the governments, and non-governmental
                      organizations, policies diamond exports to prevent the
                      trade of illegal diamonds. At Divine Solitaires, we only
                      purchase diamonds through the largest and most respected
                      suppliers who, like us, proudly adhere to and enforce the
                      standards established by the Kimberley Process. All Divine
                      Solitaires diamonds are warranted to be conflict free. If
                      one of our suppliers was ever found to be in violation of
                      that process, we would immediately serve that
                      relationship. We will continue to support and promote any
                      process that works to uphold legitimacy in the diamond
                      trade. Diamonds are mined throughout the world, including
                      major mines in Australia, Africa, Russia and Canada.
                      Diamonds are a major source of good in many African
                      nations, employing and providing healthcare to thousands.
                      For more information on this issue, please visit
                      DiamondFacts.org.
                    </p>
                    <p className="mb-2.5">
                      <b>About the Kimberley Process</b>
                    </p>
                    <p className="mb-[30px]">
                      Divine Solitaires supports the Kimberley process, which is
                      an International process to track and certify diamonds.
                    </p>
                    <p className="mb-2.5">
                      <b>Concerning Zimbabwe Diamonds</b>
                    </p>
                    <p className="mb-[30px]">
                      Divine Solitaires is committed to ensuring that the
                      highest ethical standards are observed when sourcing our
                      diamonds and jewelry. Because of the reported human rights
                      abuses in Zimbabwe’s Marange diamond district, Divine
                      Solitaires will not purchase or offer diamonds from that
                      area. As a responsible member of the diamond and jewellery
                      industry, we are working with our suppliers to ensure our
                      consumers receive only the finest goods procured from
                      ethical sources.
                    </p>
                    <p className="mb-2.5">
                      <b>
                        The Divine Solitaires Position on Responsible Mining
                      </b>
                    </p>
                    <p className="mb-[30px]">
                      Across our business, Divine Solitaires observes the
                      highest ethical standards. We insist our business partners
                      do the same. This extends to our gold sourcing. The issue
                      of responsible mining is an important one and deserves our
                      attention.
                    </p>
                    <p className="mb-2.5">
                      <b>
                        As a signatory of The Golden Rules, and as a first step,
                        we will:
                      </b>
                    </p>
                    <ul className="policy-text">
                      <li>
                        Work to ensure that our gold and metals come from
                        suppliers that meet the highest human rights, social,
                        and environmental criteria.
                      </li>
                      <li>
                        Engage suppliers to influence the sourcing of gold
                        products.
                      </li>
                      <li>
                        Research mining, refinement, and manufacturing practices
                        of gold that moves through the supply chain.
                      </li>
                      <li>
                        Give preference to suppliers that source gold from mines
                        that observe high standards of environmental
                        stewardship.
                      </li>
                      <li>
                        In concert with our suppliers, commit to increased gold
                        sourcing from recycled and secondary sources.
                      </li>
                      <li>
                        Measure and establish benchmarks with a goal of
                        continuous improvement.
                      </li>
                    </ul>
                    <p>
                      Divine Solitaires views its policy on responsible mining
                      as an evolving standard. It commits to continuously review
                      our position with the goal of expanding it over time to
                      have the broadest possible impact.
                    </p>
                  </div>
                </div>
                <div className="policy-content mb-[60px] mb-xs-3">
                  <div className="pageHeadingStyle text-center mb-[30px] mb-xs-20">
                    <h3 className="tracking-wider text-3xl leading-5 font-serif font-normal font-regular">
                      Upgrade
                    </h3>
                  </div>
                  <div>
                    <p className="mb-2.5">
                      Any loose diamond purchased from Divine Solitaires can be
                      upgraded to a larger diamond. You will get 100% value for
                      your current diamond at the prevailing price list; you
                      only need to pay the difference against bigger diamond.
                    </p>
                    <p className="mb-2.5">
                      The consumer must upgrade by 35% to the existing value of
                      his/her DS product or INR 20,000 whichever is higher. The
                      diamond that is being upgraded must be in original
                      condition and accompanied by the original laboratory
                      grading document.
                    </p>
                  </div>
                </div>
                <div className="policy-content">
                  <div className="pageHeadingStyle text-center mb-[30px] mb-xs-20">
                    <h3 className="tracking-wider text-3xl leading-5 font-serif font-normal font-regular">
                      100 % Quality Guaranteed
                    </h3>
                  </div>
                  <div>
                    <p className="mb-2.5">
                      Divine Solitaires Guarantees that every Divine Solitaires
                      is Treatment Free Natural Diamonds coming from Legitimate
                      Sources.
                    </p>
                    <p>
                      Divine Solitaires goes beyond analyzing and guarantees
                      absolute perfection on all the 123 parameters. Only the
                      diamonds that score nothing less than perfect on each of
                      these 123 parameters are passed as Divine Solitaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurPolicy;
