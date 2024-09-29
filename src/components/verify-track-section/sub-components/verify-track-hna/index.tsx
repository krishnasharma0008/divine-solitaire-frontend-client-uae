import Image from "next/image";
import { useContext } from "react";

import { BorderBar } from "@/components";

import { VerifyTrackContext } from "../../../../context/verify-track-context";

const VerifyHeartArrow: React.FC = () => {
  const { productDetails } = useContext(VerifyTrackContext);

  if (!productDetails) return null;

  return (
    <div className="w-full text-center px-4">
      <div className="flex border border-solid border-gray-400 align-center justify-center p-5 gap-x-16">
        <div>
          <Image
            src="/circle-heart.png"
            alt="Heart"
            height={100}
            width={100}
            className="m-auto h-24 w-24 mb-6"
          />
          <span className="font-montserrat not-italic font-normal text-base leading-5 text-gray-900">
            8 HEARTS
          </span>
        </div>
        <div>
          <Image
            src="/circle.png"
            alt="Arrow"
            height={100}
            width={100}
            className="m-auto h-24 w-24 mb-6"
          />
          <span className="font-montserrat not-italic font-normal text-base leading-5 text-gray-900">
            8 ARROWS
          </span>
        </div>
      </div>
      <div className="text-left font-montserrat not-italic font-medium text-xl leading-6 text-gray-900 mt-7">
        Hearts & Arrows
      </div>

      <BorderBar className="border-y border-[#DCDCDC]" />
      <div className="font-montserrat text-left not-italic font-normal text-base text-gray-900 mt-7">
        The brilliance of a diamond is determined by its cut. With exquisite and
        precise cuts, diamonds at Divine Solitaires are crafted with grace and
        utmost care. The most exclusive and perfect diamond cut in the world
        shows a hearts and arrows pattern within. The magnificent craftsmanship
        at Divine Solitaires guarantees all the diamonds to be (Ex. Ex. Ex.)
        Plus® quality which stands for excellent cut, excellent polish and
        excellent symmetry.
      </div>
    </div>
  );
};

export default VerifyHeartArrow;
