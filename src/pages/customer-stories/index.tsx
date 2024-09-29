import { Breadcrumbs } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

import { BreadcrumbArrowRightIcon } from "@/components";

const CustomerStories = () => {
  return (
    <>
      <div className="relative bg-no-repeat bg-center bg-contain md:h-[240px] overflow-hidden bg-product-empty bg-[#f9f7f8]">
        <Image
          src="/customer-stories.jpg"
          title="Customer Stories - Top Header"
          alt="Customer Stories - Top Header"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto min-h-[100px]"
        />
        <div className="container container-content md:p-4">
          <div className="absolute top-1/2 transform -translate-y-1/2 text-center">
            <h1 className="font-serif font-normal text-white text-xl sm:text-2xl md:text-4xl mb-3">
              Customer Stories
            </h1>
            <Breadcrumbs
              separator={
                <BreadcrumbArrowRightIcon className="h-3 w-3  md:h-5 md:w-5 text-white" />
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
                Customer Stories
              </a>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto">
          <div className="w-full flex flex-col md:flex-row justify-between items-center self-stretch">
            {/* First column */}
            <div className="flex flex-col items-start gap-2 p-4 rounded-lg md:w-1/2 md:items-stretch">
              <Image
                src="/customer-stories-ring.jpg"
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-auto max-w-full object-cover max-h-[390px]"
                //onClick={handleClick}
              />
            </div>
            {/* Second column */}
            <div className="flex flex-col justify-between items-center self-stretch md:w-1/2 px-2 p-4">
              <Card className="mt-6">
                <CardBody>
                  <Typography className="mb-2 text-xl leading-7 font-bold text-gray-700">
                    Exciting Birthday Surprise!
                  </Typography>
                  <Typography className="text-[#777]">
                    This diamond ring has been the best birthday gift my husband
                    has given me. I was so surprised that he managed it without
                    letting me know anything at all. I loved the design so much
                    and the diamond is brilliant. He even knew that I had been
                    wanting something like this for a while. I told him how much
                    I loved the ring. This birthday turned out to be such a
                    lovely one.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2 font-thin text-lg"
                  >
                    Yuvika Bhatia
                  </Typography>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center self-stretch">
            {/* Second column */}
            <div className="flex flex-col justify-between items-center self-stretch md:w-1/2 px-2 p-4">
              <Card className="mt-6">
                <CardBody>
                  <Typography className="mb-2 text-xl leading-7 font-bold text-gray-700">
                    My Own Earring Design
                  </Typography>
                  <Typography className="text-[#777]">
                    Creating solitaire jewellery for myself online has been
                    something I have always wanted to try. With Divine
                    Solitaires, I have been able to customise my own pair of
                    diamond earrings. I chose a beautiful diamond as per my
                    preference and budget. It was a convenient and easy
                    three-step process that helped me make this lovely pair of
                    earrings. This is special not only because it’s my first
                    solitaire jewellery but also because I made it myself.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2 font-thin text-lg"
                  >
                    Deepa Rao
                  </Typography>
                </CardFooter>
              </Card>
            </div>
            {/* First column */}
            <div className="flex flex-col items-start gap-2 p-4 rounded-lg md:w-1/2 md:items-stretch">
              <Image
                src="/customer-stories-earing.jpg"
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-auto max-w-full object-cover max-h-[390px]"
                //onClick={handleClick}
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center self-stretch">
            {/* First column */}
            <div className="flex flex-col items-start gap-2 p-4 rounded-lg md:w-1/2 md:items-stretch">
              <Image
                src="/customer-stories-pendent.jpg"
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-auto max-w-full object-cover max-h-[390px]"
                //onClick={handleClick}
              />
            </div>
            {/* Second column */}
            <div className="flex flex-col justify-between items-center self-stretch md:w-1/2 px-2 p-4">
              <Card className="mt-6">
                <CardBody>
                  <Typography className="mb-2 text-xl leading-7 font-bold text-gray-700">
                    Beautiful Pendant
                  </Typography>
                  <Typography className="text-[#777]">
                    My aunt visited us after a long time and got me this really
                    beautiful diamond pendant. I loved the design so much that I
                    wear this pendant all the time. It is so adorable and
                    matches well with all my outfits. I can’t help admiring the
                    shine of the diamond. The sparkle is commendable even though
                    the diamond is not very large. It is surely one of the best
                    gifts I have received.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2 font-thin text-lg"
                  >
                    Sanaya Gupta
                  </Typography>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center self-stretch">
            {/* Second column */}
            <div className="flex flex-col justify-between items-center self-stretch md:w-1/2 px-2 p-4">
              <Card className="mt-6">
                <CardBody>
                  <Typography className="mb-2 text-xl leading-7 font-bold text-gray-700">
                    Great Experience
                  </Typography>
                  <Typography className="text-[#777]">
                    I always thought that men just wear gold and platinum rings
                    until I happened to browse through Divine Solitaires’ online
                    store. I spent some time looking at the various solitaire
                    ring designs before I finally thought of getting one. I did
                    a little reading on diamond quality and pricing after which
                    I designed a ring for myself online. When I finally got it,
                    I was really pleased at the look and the quality.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2 font-thin text-lg"
                  >
                    Manish D&apos;souza
                  </Typography>
                </CardFooter>
              </Card>
            </div>
            {/* First column */}
            <div className="flex flex-col items-start gap-2 p-4 rounded-lg md:w-1/2 md:items-stretch">
              <Image
                src="/customer-stories-sring.jpg"
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-auto max-w-full object-cover max-h-[390px]"
                //onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomerStories;
