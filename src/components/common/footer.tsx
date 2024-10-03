import React from "next";
import Link from "next/link";

//import NewsletterButton from "@/components/common/newsletter-button";

import {
  FooterAppStoreAndroidIcon,
  FooterAppStoreAppleIcon,
  FooterFacebookIcon,
  FooterInstagramIcon,
  FooterMailIcon,
  FooterPintrestIcon,
  FooterTwitterIcon,
} from "../icons";
// import Image from "next/image";
// import Link from "next/link";

// import Button from "./button";
// import { ShoppingCartIcon, StoreLocatorIcon, UserIcon } from "../icons";

const Footer: React.FC = () => {
  // const changeHandler = () => {
  //   console.log("Start");
  // };

  // const clickHandler = () => {
  //   alert("working click");
  // };

  const footer_Items = [
    { text: "About Us", link: "about-us" },
    { text: "Frequently Asked Questions", link: "/faqs" },
    { text: "Diamond Education", link: "/diamond-education" },
    { text: "Terms & Conditions", link: "/terms-and-condition" },
    { text: "Privacy Policy", link: "/privacy-policy" },
    { text: "Blog", link: "#" },
  ];
  const footer_menuItems = [
    { text: "Store Locator", link: "/store-locator" },
    { text: "Know The Diamond Value", link: "/pricing" },
    // { text: "Media", link: "#" },
    { text: "Our Policies", link: "/our-policy" },
    { text: "Verify & Track Your Diamond", link: "/track" },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-Chinese-Black-sidebar text-white">
      <div className="w-full lg:max-w-lg py-5 flex flex-col items-center lg:items-start lg:justify-start">
        <div className="flex-start px-5">
          {/* <div className="mb-4">
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
          <div className="pb-[50px]">
            <span className="text-white">
              Sign up to receive infrequent emails about sample sales, special
              deals, and new releases.
            </span>
          </div> */}
          <div className="pb-5">
            <span>STAY IN TOUCH!</span>
          </div>
          <div className="w-full flex space-x-4">
            <Link
              href="https://twitter.com/divinesolitaire?lang=en"
              target="_blank"
            >
              <FooterTwitterIcon />
            </Link>
            <Link
              href="https://www.facebook.com/divinesolitaires/"
              target="_blank"
            >
              <FooterFacebookIcon />
            </Link>
            <Link
              href="https://in.pinterest.com/divinesolitaire/"
              target="_blank"
            >
              <FooterPintrestIcon />
            </Link>
            <Link
              href="https://www.instagram.com/divinesolitaires/"
              target="_blank"
            >
              <FooterInstagramIcon />
            </Link>
            <Link
              href="mailto:mailto:info@divinesolitaires.com"
              target="_blank"
            >
              <FooterMailIcon />
            </Link>
          </div>
          <div className="mt-5 pb-[50px]">
            <span style={{ opacity: 0.78 }}>
              Questions? Please write us at:{" "}
            </span>
            <br />
            <Link
              href="mailto:mailto:customerservice@divinesolitaires.com"
              target="_blank"
            >
              customerservice@divinesolitaires.com
            </Link>
          </div>
          <div className="pb-[50px]">
            <div className="pb-5">PAYMENT MODE</div>
            <div className="w-full flex space-x-4">
              <div
                style={{
                  width: "40px",
                  height: "25px",
                  background: "url(/payment-sprite.png) -10px -100px",
                }}
              ></div>
              <div
                style={{
                  width: "40px",
                  height: "25px",
                  background: "url(/payment-sprite.png) -70px -55px",
                }}
              ></div>
              <div
                style={{
                  width: "40px",
                  height: "25px",
                  background: "url(/payment-sprite.png) -10px -10px",
                }}
              ></div>
              <div
                style={{
                  width: "40px",
                  height: "25px",
                  background: "url(/payment-sprite.png) -91px -10px",
                }}
              ></div>
            </div>
          </div>
          <div>
            <div className="pb-5">DOWNLOAD OUR APP</div>
            <div className="flex space-x-4">
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
          </div>
        </div>
      </div>

      <div className="w-full lg:max-w-lg py-5 px-5 flex flex-col items-center lg:items-start lg:justify-center lg:justify-center">
        <div className="flex-start">
          <div>
            <div className="pb-5">ABOUT DIVINE</div>
            <div className="w-full flex space-x-4">
              <div>
                <nav style={{ listStyleType: "none" }}>
                  {footer_Items.map((item) => (
                    <p key={item.text} className="mb-2">
                      <Link href={item.link}>{item.text}</Link>
                    </p>
                  ))}
                </nav>
              </div>
              <div>
                <nav style={{ listStyleType: "none" }}>
                  {footer_menuItems.map((item) => (
                    <p key={item.text} className="mb-2">
                      <Link href={item.link}>{item.text}</Link>
                    </p>
                  ))}
                </nav>
              </div>
            </div>
            <div className="pt-[50px]">
              <div className="pb-5">CUSTOMER SERVICE</div>
              <div className="w-full flex space-x-4">
                <Link href="/contact-us">Contact Us</Link>
                <Link href="/customer-stories">Customer Stories</Link>
              </div>
            </div>
            <div className="pt-[50px]">
              <div className="w-full flex space-x-4">
                <span>Copyright © 2024 Divine Solitaires</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
