import { Breadcrumbs } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

import { BreadcrumbArrowRightIcon } from "@/components";

const TermsCondition = () => {
  return (
    <>
      <div className="relative bg-no-repeat bg-center bg-contain md:h-[240px] overflow-hidden bg-product-empty bg-[#f9f7f8]">
        <Image
          src="/termscondition.jpg"
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
              Terms & Conditions
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
                Terms & Conditions
              </a>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto pt-[45px] pb-[70px]">
        <div className="flex flex-col justify-between items-center">
          <div className="flex flex-col items-start gap-12">
            <div className="flex flex-col items-end gap-8 px-2">
              <ul
                role="list"
                className="marker:text-gray-900 list-disc pl-5 space-y-3 text-gray-900 space-y-5"
              >
                <li className="list-disc text-gray-700 text-base leading-6">
                  The terms &amp; conditions govern any purchase of Divine
                  Solitaires Diamonds and Divine Solitaires Jewellery from
                  Divine Solitaires website by any customer or potential
                  customers.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  The terms and conditions displayed on the website acts as an
                  agreement between the customer and Divine Solitaires. By
                  reading the terms and conditions the customer is deemed to be
                  bound by the same.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Customers must frequently review these terms &amp; conditions
                  from time to time to keep themselves updated.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Loose diamonds purchased by a customer under the Divine
                  Solitaires brand will be accompanied by Quality Guarantee
                  Certificate &amp; International Third Party Analysis Report
                  (eg. GIA, IGI). The Quality Guarantee Certificates are
                  detailed grading report prepared by highly qualified
                  gemologists in Divine Solitaires Laboratory.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  At Divine Solitaires, we make every attempt to ensure that
                  online catalogue is accurate and complete as much so possible,
                  so as to enable the customer to view the beauty and shapes of
                  a particular product.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  At Divine Solitaires we purchase diamonds through the largest
                  and most respected suppliers who adhere to the standards
                  established by Kimberley Process.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  All customers are requested to refer to our Privacy Policy for
                  information on how Divine Solitaires collects, uses and
                  discloses personally identifiable information. Divine
                  Solitaires has taken adequate steps for securing the personal
                  information of the customer maintained by it in compliance
                  with all the statutes, rules and regulations prevailing in
                  India and abroad.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Divine Solitaires logo and all designs, text, graphics,
                  pictures, selection, coordinate, information, data, software
                  all types files are the proprietary property of Divine
                  Solitaires or its licensors and are protected by Trademark,
                  Copyright laws and unfair competition laws.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Divine Solitaires (word mark), Divine Solitaires (Logo mark),
                  Solitaire Price Index are the trademarks of R.S. Diamonds
                  Private Limited and none of them may not be copied, imitated
                  or used in whole or part without the prior written permission
                  of R.S. Diamonds Pvt Ltd.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Divine Solitaires has adopted a Policy of barring and
                  terminating access to users who are misusing the site or
                  infringing our trademarks.{" "}
                  <span className="underline">
                    Any such acts will lead to legal action.
                  </span>
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Divine Solitaires may provide links to web pages and content
                  of third parties as a service to those interested in this
                  information.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Divine Solitaires does not endorse any third party content and
                  does not make any guarantee of its accuracy or completeness.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Divine Solitaires does not have any control on third party
                  websites.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Divine Solitaires will own exclusive rights, including all
                  intellectual property rights and will be entitled to
                  unrestricted use and dissemination of these material for any
                  purpose, commercial or otherwise without acknowledgement or
                  compensation to the customer.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Our site includes a product review feature and includes or may
                  include future discussion forums, user generated contents or
                  other areas in which the customer or third parties crate, post
                  or store any content, message etc on Divine Solitaires
                  website. In such case the customer is using this feature at
                  his own risk.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  The users/customers agree to indemnify and hold harmless
                  Divine Solitaires its independent contractors, service
                  providers, consultants, respective directors, employees agents
                  etc, from and against any claims, damages arising out of any
                  contents posted by the user/customer or otherwise transmitted
                  through our site at any given point of time.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  <span className="text-underline">
                    Except as expressly provided to the contrary in writing by
                    Divine Solitaries this site, the content, products and
                    services (the products &amp; services) are provided on the
                    website are without warranties of any kind or express or
                    implied.
                  </span>
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  In no event shall Divine Solitaires, its directors, members,
                  employees or agents be liable for any direct, special,
                  indirect or consequential damages or any other damages of any
                  kind.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Customer agrees that Divine Solitaires may modify these terms
                  and conditions and any other policy displayed on its site at
                  any point of time and posting the modified terms and
                  conditions or policies will constitute sufficient notice of
                  such modification and{" "}
                  <span className="underline">
                    such modified terms and conditions will prevail.
                  </span>
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  These terms and conditions will be governed by and construed
                  in accordance with the laws of India and all disputes shall be
                  subject to the Courts of Mumbai only.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Notwithstanding any of these terms and conditions Divine
                  Solitaires reserves the right without notice in its sole
                  discretion to block and prevent any customer/ user to access
                  or use this site.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  If any of these terms and conditions are deemed unlawful void
                  for any reason then such provisions will be severed from these
                  terms and conditions and shall not affect the validity and
                  enforceability of any remaining provisions.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  At Divine Solitaires we want to make the customer’s shopping
                  experience easy and comfortable, so we have taken measures to
                  guarantee all orders placed by the customers on this website
                  shall be safe and secure.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  If any customer or any user of this website has any questions/
                  queries/ doubts in general or pertaining to buyback/
                  upgrade/exchange/insurance please contact us our customer care
                  executive as given below:-
                  <p className="mt-10 leading-8">
                    <b className="underline">India</b>
                    <br />
                    <b>Email ID :</b>{" "}
                    <a
                      className="underline"
                      href="mailto:customerservice@divinesolitaires.com"
                    >
                      {" "}
                      customerservice@divinesolitaires.com
                    </a>
                    <br />
                    <b>Ph:</b>022-66264880
                  </p>
                </li>

                <li className="list-disc text-gray-700 text-base leading-6">
                  <span className="underline">
                    When a customer uses any online payment option available on
                    our website to make a purchase through our shopping basket
                  </span>{" "}
                  through our shopping basket, the information provided by the
                  customer is protected by Secure Sockets Layer (SSL) encryption
                  technology. This ensures that your personal information is
                  protected from external parties when transmitted from the
                  customer’s computer.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Divine Solitaires participates in the verified Visa and Master
                  Card Secure Code Programme which helps you to maintain even
                  stringent security with additional password when customer
                  purchases with Visa Card or Master Card from the Divine
                  solitaires website.
                </li>

                <li className="list-disc text-gray-700 text-base leading-6">
                  <span className="underline">Divine Solitaires</span> and it
                  agents accepts no responsibility for the failure of any third
                  parties to fulfil their contractual obligations in relation to
                  any promotional offer.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Only products branded as Divine Solitaires Diamond (DSD)/
                  Divine Solitaires Jewellery (DSJ) are eligible for buyback.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  The DSD/DSJ will be bought back only if it is in its original
                  condition when sold.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  It will take 7 working days to inspect diamonds after the buy
                  back request is received along with all the required documents
                  for DSD/DSJ.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Buyback will be possible at 90% of prevailing price as per the
                  prevailing NSTPL if it is done through original sales channel
                  and at 80% of the prevailing price if it happens from other
                  sales channel.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  <span className="underline">
                    If in any certificate is lost by the customer Divine
                    Solitaires will issue the same after the payment of
                    prescribed fees which may vary depending upon the carat of
                    the diamond.
                  </span>
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  If a customer support approaches other sales channels which
                  includes other Retail Partner then in such case the other
                  Retail Partner should act as a collection window by collecting
                  the DSD/DSJ and send it to the DS Laboratory for testing.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  The original Retail Partner must support the buy back process
                  by paying the applicable amount directly to the customer even
                  though the customer approaches other channels.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Verification of the DSD/DSJ will be done with the Retail
                  Partner from where the diamond was originally bought in order
                  to make the buyback eligible.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Once the verification process is complete then the buyback
                  amount shall be transferred by the original Retail Partner to
                  the bank account of the customer.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  The buyback price will be applicable as per the price list i.e
                  NSTP on the day the Company finally issues eligibility
                  confirmation for the buyback request.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Buy back will not be applicable for promotional DSD/DSJ sold
                  gifted or sold at a discount or converted for a period of 2
                  years from the date of purchase unless it is specifically
                  mentioned that the said DSD/DSJ is eligible for buyback.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Once the entire buy back process is executed between the
                  Retail Partner and RS Diamonds Pvt Ltd the Retail Partner will
                  issue invoice to R S Diamonds Pvt Ltd after deducting 10%
                  buyback charges and margins earned. A credit note will be
                  issued in favour of the Retail Partner as per the current
                  NSTPL after deducting 10% buyback charges and margins earned
                  by the Retail Partner at the time of sales.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Incentives earned by the Retail Partner at the time of sale
                  shall not be affected due to the buy back process.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  In case of any Force Majeure event like all natural
                  calamities, economic slowdown, political disturbances and
                  other events which are not within the reasonable control of
                  R.S. Diamonds Private Limited the Buy Back process for all
                  DSD/DSJ will not operate during such events.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  The Upgradation Policy enables the customer to upgrade
                  DSD/DSJ.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  The registration of the customers on the website of Divine
                  Solitaires is mandatory for availing the benefit of upgrade or
                  buyback.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  DS Laboratory will take 3 days to confirm the eligibility for
                  upgrade or buyback.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  The previous DSD/DSJ product should be returned within 14 days
                  from the date of new invoice.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  The original sales invoice and the Customer Registration Form
                  shall be required to be shared by the Retail Partner to R S
                  Diamonds Private Limited at the time of upgrade or buyback.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  For making online purchase a customer should give confirm
                  order request either on the website or through e-mail sent by
                  mail id registered with Divine Solitaires.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Customer is offered the facility to get any special message
                  inscribed on the Divine Solitaires Diamond or Divine
                  Solitaires Jewellery on payment of a nominal fee.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Every Divine Solitaires Diamonds and Divine Solitaires
                  Jewellery shall have its own Divine Solitaires Laboratory
                  Certificate. The Divine Solitaires Laboratory Certificate must
                  always be kept with Divine Solitaires Diamonds and Divine
                  Solitaires Jewellery.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Divine Solitaires provides one year free insurance for every
                  DSD/DSJ sold to its customers.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Divine Solitaires liability is only limited to paying first
                  year’s insurance premium for its customers. The insurance
                  cover is provided for all DSD/DSJ products by the Insurane
                  Company. Hence all Customer must directly get in touch with
                  the insurance Company in order to avail any claim.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Registration of the customers on the website of Divine
                  Solitaires and filling up the Insurance Documents is mandatory
                  for availing the benefit of insurance on DSD/DSJ products.
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  For further queries pertaining to these certificates please
                  get in touch with us on{" "}
                  <a
                    className="underline"
                    href="mailto:customerservice@divinesolitaires.com"
                  >
                    customerservice@divinesolitaires.com
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TermsCondition;
