//import { url } from "inspector"

enum URLs {
  INSURE_NOW = "/insurenow",
  RESALE = "/resale",
  BLOGS = "/",
  ABOUT_US = "/about-us",
  CONTACT_US = "/contact-us",
  CREATE_PORTFOLIO = "/portfolio",
  WISHLIST = "/wishlist",
  DASHBOARD = "/",
  DASHBOARD_CLICKED = "/#",
  DIAMOND_EDUCATION = "/diamond-education",
  DIAMONDS = "/diamond",
  JEWELLERY = "/jewellery",
  KNOW_YOUR_DIAMOND_VALUE = "/pricing",
  MY_ACCOUNT = "/profile",
  PYDS = "/pyds",
  SOLITAIRE_PRICE_INDEX = "/spi",
  VERIFY_AND_TRACK_YOUR_DIAMOND = "/track",
}

interface BreadCrumb {
  text: string;
  url: URLs;
}

interface Page {
  BLOGS: BreadCrumb;
  CONTACT_US: BreadCrumb;
  ABOUT_US: BreadCrumb;
  CREATE_PORTFOLIO: BreadCrumb;
  WISHLIST: BreadCrumb;
  DASHBOARD: BreadCrumb;
  DIAMOND_EDUCATION: BreadCrumb;
  DIAMONDS: BreadCrumb;
  INSURE_NOW: BreadCrumb;
  JEWELLERY: BreadCrumb;
  KNOW_YOUR_DIAMOND_VALUE: BreadCrumb;
  MY_ACCOUNT: BreadCrumb;
  PYDS: BreadCrumb;
  RESALE: BreadCrumb;
  SOLITAIRE_PRICE_INDEX: BreadCrumb;
  VERIFY_AND_TRACK_YOUR_DIAMOND: BreadCrumb;
}

const PAGES: Page = {
  BLOGS: { text: "Blogs", url: URLs.DASHBOARD },
  CONTACT_US: { text: "Contact Us", url: URLs.DASHBOARD },
  ABOUT_US: { text: "About Us", url: URLs.DASHBOARD },
  CREATE_PORTFOLIO: { text: "Create Portfolio", url: URLs.DASHBOARD },
  WISHLIST: { text: "Wishlist", url: URLs.DASHBOARD },
  DASHBOARD: { text: "Home", url: URLs.DASHBOARD },
  DIAMOND_EDUCATION: { text: "Diamond Education", url: URLs.DIAMOND_EDUCATION },
  DIAMONDS: { text: "Diamonds", url: URLs.DASHBOARD },
  INSURE_NOW: { text: "Insure Now", url: URLs.DASHBOARD },
  JEWELLERY: { text: "Jewellery", url: URLs.DASHBOARD },
  KNOW_YOUR_DIAMOND_VALUE: {
    text: "Know Your Diamond Value",
    url: URLs.DASHBOARD,
  },
  MY_ACCOUNT: { text: "My Account", url: URLs.DASHBOARD },
  PYDS: { text: "PYDS", url: URLs.DASHBOARD },
  RESALE: { text: "Resale", url: URLs.DASHBOARD },
  SOLITAIRE_PRICE_INDEX: { text: "Solitaire Price Index", url: URLs.DASHBOARD },
  VERIFY_AND_TRACK_YOUR_DIAMOND: {
    text: "Verify & Track Your Diamond",
    url: URLs.DASHBOARD,
  },
};

const breadcrumbList: {
  [key in URLs]: Array<BreadCrumb>;
} = {
  [URLs.BLOGS]: [PAGES.DASHBOARD, PAGES.BLOGS],
  [URLs.ABOUT_US]: [PAGES.DASHBOARD, PAGES.ABOUT_US],
  [URLs.CONTACT_US]: [PAGES.DASHBOARD, PAGES.CONTACT_US],
  [URLs.CREATE_PORTFOLIO]: [PAGES.DASHBOARD, PAGES.CREATE_PORTFOLIO],
  [URLs.WISHLIST]: [PAGES.DASHBOARD, PAGES.WISHLIST],
  [URLs.DASHBOARD_CLICKED]: [PAGES.DASHBOARD],
  [URLs.DASHBOARD]: [PAGES.DASHBOARD],
  [URLs.DIAMOND_EDUCATION]: [PAGES.DASHBOARD, PAGES.DIAMOND_EDUCATION],
  [URLs.DIAMONDS]: [PAGES.DASHBOARD, PAGES.DIAMONDS],
  [URLs.JEWELLERY]: [PAGES.DASHBOARD, PAGES.JEWELLERY],
  [URLs.KNOW_YOUR_DIAMOND_VALUE]: [
    PAGES.DASHBOARD,
    PAGES.KNOW_YOUR_DIAMOND_VALUE,
  ],
  [URLs.MY_ACCOUNT]: [PAGES.DASHBOARD, PAGES.MY_ACCOUNT],
  [URLs.PYDS]: [PAGES.PYDS],
  [URLs.SOLITAIRE_PRICE_INDEX]: [PAGES.DASHBOARD, PAGES.SOLITAIRE_PRICE_INDEX],
  [URLs.VERIFY_AND_TRACK_YOUR_DIAMOND]: [
    PAGES.DASHBOARD,
    PAGES.VERIFY_AND_TRACK_YOUR_DIAMOND,
  ],
  [URLs.INSURE_NOW]: [PAGES.DASHBOARD, PAGES.INSURE_NOW],
  [URLs.RESALE]: [PAGES.DASHBOARD, PAGES.RESALE],
};

export default breadcrumbList;
export { PAGES, URLs };
export { type Page, type BreadCrumb };
