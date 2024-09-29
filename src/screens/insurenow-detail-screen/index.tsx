import { Breadcrumbs } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

//import getVerifyTrackByUid from "@/api/verify-track";
import { getInsureNowDetail, DownloadFile } from "@/api/insure-now";
import { BreadcrumbArrowRightIcon } from "@/components";
//import InputText from "@/components/common/input-text";
import Download from "@/components/icons/download-icon";
import LoaderContext from "@/context/loader-context";
import InsureNow from "@/interface/insure-now";

const initialState: InsureNow = {
  id: 0,
  requestno: "",
  userid: 0,
  phname: "",
  phemail: "",
  phcontactno: "",
  phaddress: "",
  phcity: "",
  phpincode: "",
  phdob: "",
  phanniv: "",
  phpan: "",
  phpandoc: "",
  uid: "",
  current_price: "",
  invno: "",
  invdate: "",
  invval: "",
  invdoc: "",
  purstore: "",
  polcomp: "",
  polno: "",
  polstart: "",
  polend: "",
  polstatus: "",
  poldoc: "",
  rendat: "",
  remarks: "",
  imgurl: "",
  free_insurance: "",
  add_portfolio: "",
  createdat: "",
};

export default function InsureNow() {
  const { showLoader, hideLoader } = useContext(LoaderContext);

  const [InsureNowList, setInsureNowList] = useState<InsureNow>(initialState);

  const { query } = useRouter();

  const iconClick = async (id: number) => {
    if (id !== undefined) {
      try {
        showLoader();
        const result = await DownloadFile(id);
        const href = window.URL.createObjectURL(new Blob([result.data]));
        const anchorElement = document.createElement("a");
        anchorElement.href = href;
        anchorElement.download = id.toString();
        document.body.appendChild(anchorElement);
        anchorElement.click();
        document.body.removeChild(anchorElement);
        window.URL.revokeObjectURL(href);
        hideLoader();
      } catch (error) {
        hideLoader();
        console.log(error);
      }
    } else {
      alert("Document not available to Download");
    }
    //console.log(filename)
  };

  useEffect(() => {
    if (!query.id) {
      return;
    }

    const fetchData = async () => {
      showLoader();
      try {
        const res = await getInsureNowDetail(query.id as unknown as number);
        setInsureNowList(res.data.data);
        //console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
      hideLoader();
    };

    fetchData();
  }, [query.id, showLoader, hideLoader]);

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

      <div className="flex items-center justify-center gap-8 mt-12">
        <div className=" md:pb-6 md:pt-2 md:px-4 w-full max-w-lg md:px-3">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 mt-4 md:mt-6">
            {/* {InsureNowList.map((InsureNowList, index) => ( */}
            <div key={InsureNowList.id} className="mb-4 px-2">
              <div className="w-full  items-center justify-center">
                <div className="p-4 flex justify-center items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      InsureNowList.imgurl === "" ||
                      InsureNowList.imgurl === null
                        ? "/color_1_D.png"
                        : InsureNowList.imgurl
                    }
                    alt={`${InsureNowList.uid} InsureNow`}
                    width={200}
                    height={60}
                    onError={(event) => {
                      const imgElement = event.target as HTMLImageElement;
                      if (imgElement) {
                        imgElement.src = "/Empty.jpg";
                        //imgElement.src = "/color_1_D.png";
                      }
                    }}
                    className="center md:w-auto w-60 max-h-52 md:max-h-auto md:h-full m-auto"
                  />
                </div>
                <div className="p-4">
                  <div className="grid gap-3">
                    <div className="flex justify-between">
                      <p className="text-left text-gray-700 font-Montserrat">
                        {"Policy Detail"}
                      </p>
                      <p className="text-right bg-red-100 px-4 py-2 rounded border-2 border-red-200 text-red-700 font-montserrat font-normal text-sm">
                        {InsureNowList.polstatus}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-right font-normal text-sm">
                        Policy Number
                      </p>
                      <p className="text-right text-red-700 font-montserrat font-normal text-sm">
                        <Download
                          className="inline-block md:mr-1 hover:cursor-pointer"
                          onClick={() => {
                            if (InsureNowList.id !== undefined) {
                              iconClick(InsureNowList.id);
                            }
                          }}
                        />{" "}
                        Download Policy
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-left text-gold font-montserrat font-medium text-sm">
                        {InsureNowList.polno}
                      </p>
                    </div>
                    <div className="flex justify-between border-t">
                      <span>
                        <p className="text-left text-gray-700 py-4  font-montserrat font-normal text-sm">
                          Policy Holder Name
                        </p>
                        <p className="text-left text-gold font-medium">
                          {InsureNowList.phname}
                        </p>
                      </span>
                    </div>
                    <div className="flex justify-between border-t">
                      <span>
                        <p className="text-left text-gray-700 py-4  font-montserrat font-normal text-sm">
                          Product Uid
                        </p>
                        <p className="text-left text-gold font-medium">
                          {InsureNowList.uid}
                        </p>
                      </span>
                    </div>
                    <div className="flex justify-between border-t">
                      <span>
                        <p className="text-left text-gray-700 py-4  font-montserrat font-normal text-sm">
                          Purchase store Name
                        </p>
                        <p className="text-left text-gold font-medium">
                          {InsureNowList.purstore}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="flex justify-between mt-4">
                <Button
                  onClick={() => router.push("/insurenow")}
                  themeType="dark"
                  className="inline-flex items-center justify-center px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold capitalize text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                >
                  Back
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
