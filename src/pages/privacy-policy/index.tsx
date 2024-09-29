import { Breadcrumbs } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

import { BreadcrumbArrowRightIcon } from "@/components";

const OurPolicy = () => {
  return (
    <>
      <div className="relative bg-no-repeat bg-center bg-contain md:h-[240px] overflow-hidden bg-product-empty bg-[#f9f7f8]">
        <Image
          src="/privacy-policy.jpg"
          title="Privacy Policy - Top Header"
          alt="Privacy Policy - Top Header"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto min-h-[100px]"
        />
        <div className="container container-content md:p-4">
          <div className="absolute top-1/2 transform -translate-y-1/2 text-center">
            <h1 className="font-serif font-normal text-white text-xl sm:text-2xl md:text-4xl mb-3">
              Privacy Policy
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
                Privacy Policy
              </a>
            </Breadcrumbs>
          </div>
        </div>
      </div>
      <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto pt-[45px]">
        <div className="flex flex-col justify-between items-center">
          <div className="flex flex-col items-start gap-12">
            <div className="flex flex-col items-end gap-8 px-2">
              <div className="pt-[30px] pb-[70px]">
                <div className="mb-[60px]">
                  <div className="text-center mb-[30px] font-semibold text-xl underline tracking-wider leading-6">
                    <h2 className="font-serif font-normal font-regular">
                      Last updated Jan’18
                    </h2>
                  </div>
                  <div>
                    <p>
                      Thank you for visiting Divine Solitaires. We want you to
                      know that your privacy is important to us. Our customers
                      are at the heart of everything we do, and we strive to
                      ensure your experience with Divine Solitaires is one that
                      you will want to repeat and share with your friends. Part
                      of our commitment to you is to respect and protect the
                      privacy of the personal information you provide to us. The
                      information below is designed to inform you of what
                      information we collect, why we collect such information,
                      and how we use the information we collect. This Privacy
                      Policy is incorporated into our Terms of Service.
                    </p>
                    <p>
                      When you submit your personal information to us, you are
                      giving us your consent to the collection, use, and
                      disclosure of your information as set forth in this
                      Privacy Policy. We are always available to discuss your
                      questions or concerns regarding this Privacy Policy and
                      our privacy practices. If you would like to speak to a
                      customer service representative, please contact us via
                      telephone at +9122 66264800 or email at{" "}
                      <a className="underline mb-2.5">
                        customerservice@divinesolitaires.com.
                      </a>
                    </p>
                    <p>
                      Divine Solitaires will occasionally update this Privacy
                      Policy. When a revision is made we will revise the
                      &quot;last updated&quot; date on this page.
                    </p>
                  </div>
                </div>

                <div className="mb-[60px]">
                  <div className="text-center mb-[30px] font-semibold text-xl underline tracking-wider leading-6">
                    <h3 className="tracking-wider leading-5/4 font-serif font-normal">
                      Collection and Use of Information
                    </h3>
                  </div>
                  <div>
                    <p className="mmb-[30px]">
                      General. In general, you can browse our Website without
                      telling us who you are or revealing any personal
                      information about yourself. At various times, you may
                      decide to provide us with your personal information. You
                      should know that we receive and may store all personal
                      information (whether written or oral) that you provide us
                      through whatever means you provide such information
                      (through our Website, via e-mail, over the telephone,
                      etc.). Personal information means any information that may
                      be used to identify an individual, including, but not
                      limited to, a first and last name, home, billing or other
                      physical address or email address as well as any
                      information associated with the foregoing. In addition to
                      your contact information, we may collect information about
                      your purchases, billing address, shipping address, gender,
                      occupation, birthday, marital status, anniversary,
                      interests, phone number or other contact information, and
                      credit card information. We may combine the information
                      you provide to us over time and we may combine such
                      information with information that is publicly available,
                      collected through data collection devices, and information
                      that we receive from our partners, affiliates and other
                      third parties.
                    </p>
                  </div>
                </div>
                <div className="mb-[60px]">
                  <div className="text-center mb-[30px] font-semibold text-xl underline tracking-wider leading-6">
                    <h3 className="tracking-wider leading-5/4 font-serif font-normal">
                      Use of Your Personal Information
                    </h3>
                  </div>
                  <div>
                    <ul className="pl-6 list-decimal">
                      <li>
                        We may use the information we collect about you to:
                      </li>
                      <li>
                        Facilitate your purchases and provide the services you
                        request,
                      </li>
                      <li>Confirm and track your order,</li>
                      <li>Respond to your inquiries and requests,</li>
                      <li>
                        Compare and review your personal information for errors,
                        omissions and accuracy,
                      </li>
                      <li>Prevent and detect fraud or abuse,</li>
                      <li>
                        Improve our Website, service, product offerings,
                        marketing and promotional efforts, and overall customer
                        experience,
                      </li>
                      <li>Identify your product and service preferences,</li>
                      <li>
                        Understand our customer demographics, preferences,
                        interests, and behavior, and
                      </li>
                      <li>
                        Contact you (via email, postal mail, or telephone)
                        regarding products and services (of Divine Solitaires or
                        our partners) that we believe may be of interest to you.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-[60px]">
                  <div className="text-center mb-[30px] font-semibold text-xl underline tracking-wider leading-6">
                    <h3 className="tracking-wider leading-5/4 font-serif font-normal">
                      Send this Product to a Friend and Refer a Friend
                    </h3>
                  </div>
                  <div>
                    <p>
                      Using a Divine Solitaires form, you can refer a friend to
                      the Divine Solitaires Website or send them product
                      information. You and your friend`&apos;`s names and e-mail
                      addresses are requested to ensure that your friend will
                      know that you have requested that Divine Solitaires send
                      them an email. The information we collect about you and
                      your friend will be used in ways described in this privacy
                      policy.
                    </p>
                    <p>
                      <b>Service Providers:</b>
                    </p>
                    <p>
                      We use trusted third-party service providers to perform
                      certain services on our behalf, including: shipping,
                      payment processing, data storage/management, web hosting,
                      web analytics, fulfillment, assembly, marketing, mailing,
                      emailing, etc. These service providers only receive
                      personal information if such information is needed to
                      perform their function(s), and they are not authorized to
                      use any personal information for any other purpose(s)
                      other than the purpose(s) set forth by Divine Solitaires.
                    </p>
                    <p>
                      <b>Special Events:</b>
                    </p>
                    <p>
                      If you choose to participate in a special event (for
                      example, a promotion, contest, or sweepstakes), Divine
                      Solitaires may share your personal information with those
                      organizations participating in the applicable event.
                      Unless we tell you otherwise in connection with a special
                      event, these third parties do not use your information for
                      any other purpose other than to manage the event. We may
                      authorize trusted partners to send you information about
                      products and services that may be of interest to you.
                    </p>
                    <p>
                      <b>Partners:</b>
                    </p>
                    <p>
                      Divine Solitaires may provide information to carefully
                      selected partners. In such cases, we might share and/or
                      cross-reference information, including personal
                      information about you that will enable such persons or
                      entities to contact you regarding products and services
                      that may be of interest to you, such as financing services
                      for purchasing Divine Solitaires products. Our advertising
                      partners may use the information we provide to them in
                      combination with their existing information to provide you
                      with more relevant advertising.
                    </p>
                    <p>
                      <b>Compliance with Law and Fraud Protection:</b>
                    </p>
                    <p>
                      We may, and you authorize us to use and disclose any
                      information, including personal information: (1) we deem
                      necessary, in our sole discretion, to comply with any
                      applicable law, regulation, legal process, or governmental
                      request; (2) in order to investigate, prevent or take
                      action regarding illegal activities, suspected fraud,
                      situations involving potential threats to the physical
                      safety of any personal or as otherwise required by law;
                      (3) to other companies and organizations for credit fraud
                      protection and risk reduction; and (4) to enforce any
                      agreement we have with you.
                    </p>
                    <p>
                      <b>Business Transfer:</b>
                    </p>
                    <p>
                      Your personal information may be disclosed as part of any
                      merger, sale of company assets or acquisition, as well as
                      in the event of insolvency, bankruptcy or receivership, in
                      which personal information would be transferred as one of
                      the business assets of the Company.
                    </p>
                    <p>
                      <b>Anonymous Information:</b>
                    </p>
                    <p>
                      We may create anonymous records from personal information
                      by excluding information (such as your name) that makes
                      the information personally identifiable to you. We may use
                      these records for internal purposes, such as analyzing
                      usage patterns so that we may enhance our services, and we
                      also reserve the right to use and disclose any information
                      in such records at our discretion.
                    </p>
                    <p>
                      <b>Comments:</b>
                    </p>
                    <p>
                      We value your comments, feedback, testimonials, etc.,
                      which help us improve our website, products, and services.
                      By making such submissions to us, you assign your rights
                      in the submissions to us, as described in the
                      &quot;Submissions&quot; section of our Terms and
                      Conditions page.
                    </p>
                  </div>
                </div>
                <div className="mb-[60px]">
                  <div className="text-center mb-[30px] font-semibold text-xl underline tracking-wider leading-6">
                    <h3 className="tracking-wider leading-5/4 font-serif font-normal">
                      Other Uses of Your Information
                    </h3>
                  </div>
                  <div>
                    <p>
                      <b>IP Address :</b> When you visit our Website, Divine
                      Solitaires collects your IP address to, among other
                      things, help diagnose problems with its server, administer
                      and tune the operation of its Website, analyze trends,
                      track traffic patterns, gather demographic information for
                      aggregate use, and track the date and duration of each
                      session within our Website. Your IP address may also be
                      used in combination with your personal information to
                      prevent fraud or abuse, customize your shopping
                      experience, improve our website, customer service,
                      products, and promotional efforts, and to understand your
                      preferences, patterns and interests.
                    </p>
                    <p>
                      Data Collection Devices, such as Cookies and Web Beacon :
                      In some instances, Divine Solitaires may collect data
                      through cookies, web logs, web beacons (also known as
                      pixel gifs or action tags) and other monitoring
                      technologies to enhance your browsing and shopping
                      experience on our website. &quot;Cookies&quot; are small
                      pieces of information that are stored by your browser on
                      your computer&apos;s hard drive to collect information
                      about your activities on our website. Web beacons are
                      small strings of code placed on a web page or within an
                      email for the purpose of transferring information.
                    </p>
                    <p>
                      We use cookies and web beacons to deliver our ads, improve
                      and measure the usability, track visits from our
                      affiliates and partners, performance and effectiveness of
                      our Website, improve and measure the effectiveness of our
                      marketing programs, learn how customers use our website,
                      estimate our audience size, deliver co-branded services,
                      and to customize your shopping experience. Examples of the
                      type of information that we collect through these
                      collection devices, includes: total visitors to the
                      website, pages viewed, unique visitors, time spent on our
                      Website and on certain web pages, etc.
                    </p>
                    <p>
                      We may authorize third parties to use cookies, web beacons
                      and other monitoring technologies to compile information
                      about the use of the Website or interaction with
                      advertisements that appear on the Website.
                    </p>
                    <p>
                      You are always free to decline cookies if your browser
                      permits; although, by declining the use of cookies you may
                      not be able to use certain features on the Website.
                    </p>
                  </div>
                </div>
                <div className="mb-[60px]">
                  <div className="text-center mb-[30px] font-semibold text-xl underline tracking-wider leading-6">
                    <h3 className="tracking-wider leading-5/4 font-serif font-normal">
                      Children under 13
                    </h3>
                  </div>
                  <div>
                    <p>
                      Divine Solitaires does not knowingly collect personal
                      information from children under the age of 13. If we learn
                      that we have collected personally identifiable information
                      from a child under the age of 13, we will delete that data
                      from our systems. Please visit the FTC&apos;s website at
                      www.ftc.gov for tips on protecting children&apos;s privacy
                      online.
                    </p>
                  </div>
                </div>
                <div className="mb-[60px]">
                  <div className="text-center mb-[30px] font-semibold text-xl underline tracking-wider leading-6">
                    <h3 className="tracking-wider leading-5/4 font-serif font-normal">
                      Links3
                    </h3>
                  </div>
                  <div>
                    <p>
                      Our Website may provide links to other third-party
                      Websites which are outside our control and not covered by
                      this privacy policy. We encourage you to review the
                      privacy policies posted on these (and all) Websites.
                    </p>
                  </div>
                </div>
                <div className="mb-[60px]">
                  <div className="text-center mb-[30px] font-semibold text-xl underline tracking-wider leading-6">
                    <h3 className="tracking-wider leading-5/4 font-serif font-normal">
                      Security
                    </h3>
                  </div>
                  <div>
                    <p>
                      Divine Solitaires is committed to the protection of the
                      personally identifiable information that you share with
                      us. We utilize a combination of physical and electronic
                      security technologies, procedures, and organizational
                      measures to help protect your personally identifiable
                      information from unauthorized access, use or disclosure.
                      When we transfer sensitive personal information (for
                      example, credit card information) over the Internet, we
                      protect it using Secure Sockets
                    </p>
                  </div>
                </div>
                <div className="mb-[60px]">
                  <div className="text-center mb-[30px] font-semibold text-xl underline tracking-wider leading-6">
                    <h3 className="tracking-wider leading-5/4 font-serif font-normal">
                      Layer (SSL) encryption technology
                    </h3>
                  </div>
                  <div>
                    <p>
                      While we strive to safeguard your personal information
                      once we receive it, no transmission of data over the
                      Internet or any other public network can be guaranteed to
                      be 100% secure and, accordingly, we cannot guarantee or
                      warrant the security of any information you disclose or
                      transmit to us.
                    </p>
                  </div>
                </div>
                <div className="mb-[60px]">
                  <div className="text-center mb-[30px] font-semibold text-xl underline tracking-wider leading-6">
                    <h3 className="tracking-wider leading-5/4 font-serif font-normal">
                      Accessing and Updating Your Information
                    </h3>
                  </div>
                  <div>
                    <p>
                      If the personally identifiable information Divine
                      Solitaires has gathered from you changes or you would like
                      to access, correct, or delete such information, we will
                      gladly provide you access to, correct, or delete (to the
                      extent allowed by law) any personal information we have
                      collected about you. To request access to, a correction
                      to, or deletion of , your personal information, please
                      send an email to customerservice@divinesolitaires.com or
                      contact one of our diamond and jewelry consultants at
                      +9122 66264800.
                    </p>
                  </div>
                </div>
                <div className="mb-[60px]">
                  <div className="text-center mb-[30px] font-semibold text-xl underline tracking-wider leading-6">
                    <h3 className="tracking-wider leading-5/4 font-serif font-normal">
                      Information Security &amp; Technical and Organisational
                      Measures
                    </h3>
                  </div>
                  <div>
                    <p>
                      R S Diamonds Private Limited already has a consistent
                      level of data protection and security across various
                      levels. However it is our aim to be fully compliant with
                      the Data Protection laws currently in force nationally and
                      internationally. Our process involves data protection
                      policies and procedures to meet the requirement of various
                      data protection laws.
                    </p>
                    <p>
                      R S Diamonds Private Limited has a specialised team which
                      implements robust information security systems and
                      procedures in place to protect personal information from
                      unauthorised access, alteration, disclosure or destruction
                      and have several layers of security measures to prevent
                      data piracy or theft.
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
