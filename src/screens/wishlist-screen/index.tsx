import { Breadcrumbs } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { deleteWishList, getWishList } from "@/api";
import {
  BreadcrumbArrowRightIcon,
  Button,
  PortfolioStoreFront,
} from "@/components";
import WishListDiv from "@/components/common/wishlist";
import LoaderContext from "@/context/loader-context";
import WishList from "@/interface/wishlist";
import { getToken, setRedirectionRoute } from "@/local-storage";

const WishListScreen: React.FC = () => {
  const { showLoader, hideLoader } = useContext(LoaderContext);

  const [WishList, setWishList] = useState<Array<WishList>>([]);

  const { push } = useRouter();

  const getlistdata = async () => {
    showLoader();
    try {
      const res = await getWishList();
      setWishList(res.data.data || []);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
    hideLoader();
  };

  const handleRemoveClick = async (id: number) => {
    try {
      const response = await deleteWishList(id);
      if (response.data.sucess) {
        await getlistdata();
      }
    } catch (error) {
      console.error("Error deleting wishlist:", error);
    }
  };

  useEffect(() => {
    if (!getToken()) {
      setRedirectionRoute("/wishlist");
      push("/login");
    }

    getlistdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [push]);

  return (
    <>
      <div className="relative bg-no-repeat bg-center bg-contain md:h-[240px] overflow-hidden bg-product-empty bg-[#f9f7f8]">
        <Image
          src="/portfolia-breadcrum.png"
          title="Wishlist"
          alt="Wishlist"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto min-h-[100px]"
        />
        <div className="container container-content md:p-4">
          <div className="absolute top-1/2 transform -translate-y-1/2 text-center">
            <h1 className="font-serif font-normal text-white text-xl sm:text-2xl md:text-4xl mb-3">
              Wishlist
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
                Wishlist
              </a>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      {WishList?.length === 0 ? (
        <div className="p-4">
          {/* First nested div with centered image */}
          <div className="mt-4 p-2 flex flex-col items-center justify-center">
            <Image
              src="/portfolio-empty.jpg"
              alt="Wishlist"
              height={360}
              width={570}
            />
          </div>

          {/* Second nested div with text */}
          <div className="mt-4 p-4 flex items-center justify-center">
            <p className="text-black text-base font-normal leading-5">
              Create your own wishlist by adding all loose solitaires &
              jewellery purchased from us. This provides a single view of all
              your assets.
            </p>
          </div>

          {/* Third nested div with button */}
          <div className="mt-4 p-2 flex justify-center">
            <button
              className="text-white px-10 py-2 rounded-0 bg-gray-900"
              onClick={() => router.push("/track")}
            >
              Add Wishlist
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="lg:rounded-md md:pb-6 md:pt-2 md:px-4 w-full md:px-3">
            <div className="bg-Chinese-Black-sidebar text-white py-6 md:py-6 sm:p-0">
              <div className="container mx-auto flex flex-row justify-between items-center text-center">
                <div className="md:mb-0 md:mr-12 space-y-1.5">
                  <p className="font-medium text-xs md:text-base lg:text-xl sm:text-xs font-mono">
                    Total Qty
                  </p>
                  <p className="font-semibold text-xs md:text-base lg:text-xl sm:text-xs font-mono">
                    {WishList.length}
                  </p>
                </div>
                <div className="md:mb-0 md:mr-12 space-y-1.5">
                  <p className="font-medium text-xs md:text-base lg:text-xl sm:text-xs font-mono">
                    Current Price
                  </p>
                  <p className="font-semibold text-xs md:text-base lg:text-xl sm:text-xs font-mono">
                    {WishList.reduce(
                      (total, item) => total + parseFloat(item.current_price),
                      0
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4 md:mt-6">
              {WishList.map((WishList, index) => (
                <div key={WishList.id} className="mb-4">
                  <WishListDiv
                    product_type={WishList.product_type}
                    carat={WishList.carat}
                    uid={WishList.uid}
                    jewelcat={WishList.jewelcat}
                    design_no={WishList.design_no}
                    purchase_price={WishList.purchase_price}
                    current_price={WishList.current_price}
                    imgurl={WishList.imgurl}
                    onRemoveClick={() => handleRemoveClick(WishList.id)}
                    onUpgradeClick={() => router.push("/store-locator")}
                  />
                  {index % 2 === 1 && <div className="md:hidden w-full h-0" />}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center p-6">
            <div className="max-w-lg flex space-x-3">
              <Button
                onClick={() => router.push("/store-locator")}
                themeType="light"
                className="w-50 flex items-center justify-center px-2 md:px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold capitalize text-white text-sm md:text-base lg:text-lg hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition whitespace-nowrap"
              >
                <PortfolioStoreFront className="inline-block md:mr-3" />
                Find Nearest Stores
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default WishListScreen;
