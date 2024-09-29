import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react"; // Import useState

// import { Button } from "@/components/common";

import { PopUpCancelIcon, PopUpTelephoneIcon } from "../icons";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true); // State to manage popup visibility

  const router = useRouter();

  const storeClick = () => {
    setShowPopup(false);
    router.push("/store-locator");
  };

  const ShopClick = () => {
    setShowPopup(false);
    router.push("https://shop.divinesolitaires.com");
  };

  const closePopup = () => {
    setShowPopup(false); // Function to close the popup
  };

  useEffect(() => {
    // Set a timer to close the popup after 15 seconds
    const timer = setTimeout(() => {
      closePopup();
    }, 15000); // 15 seconds in milliseconds

    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!showPopup) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100]">
      <div className="mx-auto transform transition-transform ease-out duration-500">
        <div className="rounded-[15px] relative">
          {" "}
          {/* Add "relative" class here */}
          {/*  */}
          <Card
            variant="gradient"
            className="w-full max-w-[20rem] p-8 bg-popup rounded-[15px]"
          >
            <PopUpCancelIcon
              className="absolute top-2 right-2 cursor-pointer text-white bg-gray-500 rounded-full mb-3"
              onClick={closePopup}
            />
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-3 mt-5 rounded-none text-center"
            >
              <Typography
                variant="small"
                color="white"
                className="font-DM-serif-display text-[20px] italic font-normal leading-7 tracking-normal text-left"
              >
                Find a Store Near You
              </Typography>
            </CardHeader>
            <CardBody className="p-0 flex flex-col items-center justify-center">
              <Button
                className="w-full bg-white text-gray700 text-[14px] border-[#C2C2C2] rounded-[5px]"
                onClick={storeClick}
              >
                STORE LOCATOR
              </Button>
              <ul className="flex flex-col items-center gap-4 text-white">
                <li className="flex items-center gap-4 mt-4 mb-4">
                  <Typography className="font-dm-serif-display text-[14px] italic font-normal leading-[19px] tracking-normal items-center">
                    or
                  </Typography>
                </li>
                <li className="flex items-center gap-4 mb-4">
                  <Typography className="font-dm-serif-display text-[20px] italic font-normal leading-[27px] tracking-normal items-center">
                    Shop Online
                  </Typography>
                </li>
              </ul>
              <Button
                className="w-full bg-transparent border border-[#C2C2C2] border-[1px]  rounded-[5px]"
                onClick={ShopClick}
              >
                Shop Now
              </Button>
            </CardBody>
            <CardFooter className="mt-12 p-0">
              <Typography
                variant="small"
                color="white"
                className="font-dm-serif-display text-[10px] italic font-normal leading-[14px] tracking-normal text-center"
              >
                For More Information Call On
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="font-Montserrat text-[13px] font-medium leading-[16px] tracking-normal text-center"
              >
                <PopUpTelephoneIcon className="inline-block" /> +91 9769888666
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Popup;
