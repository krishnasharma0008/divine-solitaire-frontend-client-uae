import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import React from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { URLs } from "@/constants";
import { useAuth } from "@/context/auth-context";
import { useCurrency } from "@/context/currency-context";
//import Currency from "@/enum/currency-enum";
//import useCountryCode from "@/hooks/use-country-code";
import { Breadcrumbs } from "@/interface/breadcrumbs";
//import { deleteToken, getToken } from "@/local-storage";
//import { countryCurrencyMap } from "@/util/country-currency-map";

import Button from "./button";
import Dropdown from "./dropdown";
import Sidebar, { SidebarProps } from "./sidebar";
import { ShoppingCartIcon, StoreLocatorIcon, UserIcon } from "../icons";

const Navbar: React.FC<Omit<Breadcrumbs, "breadcrumbs">> = ({ pageName }) => {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const { push } = useRouter();

  const { currency, setCurrency } = useCurrency();

  const handleDropdownChange = (selectedValue: string) => {
    console.log("selected currency", selectedValue);
    setCurrency(selectedValue);
  };

  // const signout = () => {
  //   deleteToken();
  //   setIsLoggedIn(false);
  //   push("/");
  //   // Force a page refresh
  //   window.location.reload();
  // };

  const signout = () => {
    logout(); // Use the context logout method
    push("/"); // Redirect after logout
    window.location.reload(); // Force a page refresh
  };

  const profile = () => {
    //deleteToken();
    push("/profile");
  };

  // useEffect(() => {
  //   if (getToken()) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, []);

  const sidebarProps: Omit<SidebarProps, "pageName"> = {
    items: [
      {
        title: "Know Your Diamond Value",
        url: URLs.KNOW_YOUR_DIAMOND_VALUE,
        icon: "no",
        name: URLs.KNOW_YOUR_DIAMOND_VALUE,
      },
      {
        title: "Verify & Track",
        url: URLs.VERIFY_AND_TRACK_YOUR_DIAMOND,
        icon: "no",
        name: URLs.VERIFY_AND_TRACK_YOUR_DIAMOND,
      },
      {
        title: "Solitaire Price Index",
        url: URLs.SOLITAIRE_PRICE_INDEX,
        icon: "yes",
        name: URLs.SOLITAIRE_PRICE_INDEX,
      },
      {
        title: "My Portfolio",
        url: URLs.CREATE_PORTFOLIO,
        icon: "no",
        name: URLs.CREATE_PORTFOLIO,
      },
      {
        title: "PYDS",
        url: URLs.PYDS,
        icon: "no",
        name: URLs.PYDS,
      },
      {
        title: "Insurance",
        url: URLs.INSURE_NOW,
        icon: "no",
        name: URLs.INSURE_NOW,
      },
      {
        title: "Resale",
        url: URLs.VERIFY_AND_TRACK_YOUR_DIAMOND,
        icon: "yes",
        name: URLs.RESALE,
      },
      {
        title: "My Profile",
        url: URLs.MY_ACCOUNT,
        icon: "no",
        name: URLs.MY_ACCOUNT,
      },
      {
        title: "Contact Us",
        url: URLs.CONTACT_US,
        icon: "yes",
        name: URLs.CONTACT_US,
      },
      {
        title: "Diamond Education",
        url: URLs.DIAMOND_EDUCATION,
        icon: "no",
        name: URLs.DIAMOND_EDUCATION,
      },
      {
        title: "Diamonds",
        url: URLs.DIAMONDS,
        icon: "no",
        name: URLs.DIAMONDS,
      },
      {
        title: "Jewellery",
        url: URLs.JEWELLERY,
        icon: "yes",
        name: URLs.JEWELLERY,
      },
      {
        title: "Blogs",
        url: URLs.BLOGS,
        icon: "no",
        name: URLs.BLOGS,
      },
    ],
    isSidebarOpen: isSidebarOpen,
    setSidebarOpen: setSidebarOpen,
  };

  return (
    <div className="w-full flex justify-between items-center text-white h-[50px] lg:h-[70px] top-0">
      <div className="lg:w-1/3 my-auto py-">
        <div className="w-10">
          <Sidebar {...sidebarProps} pageName={pageName} />
        </div>
      </div>

      {/* Centered logo */}
      <div className="flex-grow flex justify-center items-center w-1/3">
        <Link href="/">
          <div className="flex flex-row justify-center items-center">
            <Image
              src="/logo/new_logo.png"
              alt="Company Logo"
              width={869}
              height={567}
              className="h-auto w-auto max-h-[51px] max-w-[164px] lg:max-h-[74px] lg:max-w-[184px] cursor-pointer py-1"
              layout="intrinsic"
            />
          </div>
        </Link>
      </div>

      <div className="lg:w-1/3 flex justify-end gap-1 items-center">
        <div className="relative sm:w-24 w-20 sm:min-w-[97px] min-w-20 sm:h-10 rounded mr-2">
          <Dropdown
            //options={Object.values(Currency)}
            value={currency} // Correctly bind the selected value
            onChange={handleDropdownChange} // Pass the change handler
            disabled={false}
            //className="w-52"
          />
        </div>
        <div className="hidden relative lg:block lg:flex lg:w-auto w-full">
          <Link href="/store-locator" className="inline-block">
            <Button
              themeType="dark"
              //classes="h-10 text-xs font-light leading-5 max-w-[12rem] tracking-widest hover:bg-white hover:text-black [&:hover>span>svg]:fill-white [&:hover>span>svg>g>path]:stroke-black hover:border-none"
              classes="h-10 text-xs font-light leading-5 max-w-[12rem] tracking-widest hover:bg-white hover:text-black shadow-none whitespace-nowrap"
            >
              STORE LOCATOR
              <span className="inline-block align-middle float-right"></span>
            </Button>
          </Link>
          <Link
            href={"https://shop.divinesolitaires.com"}
            target="_blank"
            className="inline-block ml-2"
          >
            <Button
              themeType="light"
              classes="h-10 basis-40 text-xs font-light leading-5 tracking-widest border-solid border-black hover:text-white hover:bg-black hover:!border-white hover:border-solid whitespace-nowrap"
            >
              <span className="hidden md:inline">SHOP NOW</span>
            </Button>
          </Link>
        </div>
        <Link
          href={"https://shop.divinesolitaires.com"}
          target="_blank"
          className="lg:hidden"
        >
          <ShoppingCartIcon />
        </Link>
        <Link href={"/store-locator"} className="lg:hidden">
          <StoreLocatorIcon />
        </Link>
        {isLoggedIn ? (
          // User is logged in, show dropdown menu
          <Menu>
            <MenuHandler>
              <IconButton
                variant="text"
                className="min-w-[24px] relative cursor-pointer"
              >
                <UserIcon />
              </IconButton>
            </MenuHandler>
            <MenuList>
              <MenuItem className="flex items-center gap-2" onClick={profile}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM10 5C10 5.53043 9.78929 6.03914 9.41421 6.41421C9.03914 6.78929 8.53043 7 8 7C7.46957 7 6.96086 6.78929 6.58579 6.41421C6.21071 6.03914 6 5.53043 6 5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.78929 3.96086 10 4.46957 10 5ZM8 9C7.0426 8.99981 6.10528 9.27449 5.29942 9.7914C4.49356 10.3083 3.85304 11.0457 3.454 11.916C4.01668 12.5706 4.71427 13.0958 5.49894 13.4555C6.28362 13.8152 7.13681 14.0009 8 14C8.86319 14.0009 9.71638 13.8152 10.5011 13.4555C11.2857 13.0958 11.9833 12.5706 12.546 11.916C12.147 11.0457 11.5064 10.3083 10.7006 9.7914C9.89472 9.27449 8.9574 8.99981 8 9Z"
                    fill="#90A4AE"
                  />
                </svg>

                <Typography variant="small" className="font-medium">
                  My Profile
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-2 " onClick={signout}>
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                    fill="#90A4AE"
                  />
                </svg>
                <Typography variant="small" className="font-medium">
                  Sign Out
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          // User is not logged in, show login link
          <Link
            className="min-w-[24px] mr-2 relative cursor-pointer"
            href={"/login"}
          >
            <UserIcon />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
