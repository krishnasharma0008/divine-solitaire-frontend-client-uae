import { Breadcrumbs } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

//import getVerifyTrackByUid from "@/api/verify-track";
import { getInsureNowList } from "@/api/insure-now";
import { BreadcrumbArrowRightIcon, Button } from "@/components";
//import InputText from "@/components/common/input-text";
//import InsureNowForm from "@/components/common/insure-now";
import LoaderContext from "@/context/loader-context";
import InsureNow from "@/interface/insure-now";

export default function InsureNow() {
  // const [uid] = useState<string>("");

  // const router = useRouter();

  // const onClickHandler = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   getVerifyTrackByUid(uid)
  //     .then((res) => {
  //       if (res.data.data) {
  //         router.push(`/track/jewellery/${uid}`);
  //       }
  //     })
  //     .catch((err) => console.log("ERRRR", err));
  // };

  const { showLoader, hideLoader } = useContext(LoaderContext);

  const [InsureNowList, setInsureNowList] = useState<Array<InsureNow>>([]);

  const { push } = useRouter();

  const getlistdata = async () => {
    showLoader();
    try {
      const res = await getInsureNowList();
      setInsureNowList(res.data.data || []);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
    hideLoader();
  };

  useEffect(() => {
    // if (!getToken()) {
    //   setRedirectionRoute("/wishlist");
    //   push("/login");
    // }

    getlistdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [push]);

  return (
    <>
      <div className="relative bg-no-repeat bg-center bg-contain md:h-[240px] overflow-hidden bg-product-empty bg-[#f9f7f8]">
        <Image
          src="/insurenow-breadcrum.jpg"
          title="Insurance"
          alt="Insurance"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto min-h-[100px]"
        />
        <div className="container container-content md:p-4">
          <div className="absolute top-1/2 transform -translate-y-1/2 text-center">
            <h1 className="font-serif font-normal text-white text-xl sm:text-2xl md:text-4xl mb-3">
              Insurance
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
                Insurance
              </a>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <div>
        <div className="px-5 pt-10">
          <span className="text-gray-900 text-4xl font-semibold leading-14 tracking-wider uppercase">
            Insure NOW
          </span>
        </div>
        <div className="px-5 my-8 flex items-center">
          <span className="text-gray-700 text-center text-lg font-normal leading-7 tracking-tighter">
            Each of our solitaires carries a 1-year insurance from a reputed
            insurance company to offer our customers complete peace of mind.
          </span>
        </div>

        <div className="lg:rounded-md md:pb-6 md:pt-2 md:px-4 w-full md:px-3">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4 md:mt-6">
            {InsureNowList.map((InsureNowList, index) => (
              <div key={InsureNowList.id} className="mb-4 px-2">
                {/* <InsureNowForm
                  uid={InsureNowList.uid}
                  polno={InsureNowList.polno}
                  polstatus={InsureNowList.polstatus}
                  phname={InsureNowList.phname}
                  purstore={InsureNowList.purstore}
                  imgurl={InsureNowList.imgurl}
                  onDownloadClick={() => iconClick(InsureNowList.invdoc)}
                /> */}
                <div className="w-full border rounded-md items-center justify-center">
                  <div className="p-4 flex justify-center items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        InsureNowList.imgurl === "" ||
                        InsureNowList.imgurl === null
                          ? "/color_1_D.png"
                          : InsureNowList.imgurl
                      }
                      alt={`${InsureNowList.uid}`}
                      width={200}
                      height={60}
                      onError={(event) => {
                        const imgElement = event.target as HTMLImageElement;
                        if (imgElement) {
                          console.log("Error Image");
                          imgElement.src = "/Empty.jpg";
                          //imgElement.src = "/color_1_D.png";
                        }
                      }}
                      className="center md:w-auto w-60 max-h-52 md:max-h-auto md:h-full m-auto"
                    />
                  </div>
                  <div className="p-4 bg-lime-50">
                    <div className="grid gap-3">
                      <div className="flex justify-between">
                        <p className="text-left text-gray-700 font-Montserrat text-xl font-semibold leading-6">
                          {"Uid"} - {InsureNowList.uid}
                        </p>
                      </div>

                      <div className="flex justify-between">
                        <p className="text-right text-gray-700 font-montserrat font-normal text-sm">
                          {InsureNowList.polno}
                        </p>
                        <p className="text-right text-red-700 font-montserrat font-normal text-sm">
                          {InsureNowList.polstatus}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-lime-50">
                    <Button
                      onClick={() =>
                        router.push(`/insurenow-detail/${InsureNowList.id}`)
                      }
                      themeType="dark"
                      className="inline-flex items-center justify-center px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold capitalize text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                    >
                      See Policy Details
                    </Button>
                  </div>
                </div>
                {index % 2 === 1 && <div className="md:hidden w-full h-0" />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="max-w-lg flex space-x-3">
          <Button
            onClick={() => router.push("/track")}
            themeType="light"
            className="w-50 flex items-center justify-center px-2 md:px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold capitalize text-white text-sm md:text-base lg:text-lg hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition whitespace-nowrap"
          >
            Apply For Insurance
          </Button>
        </div>
      </div>
    </>
  );
}
