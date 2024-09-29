// import React, { useEffect, useState } from "react";
import React from "react";

import Footer from "@/components/common/footer";
//import Loader from "@/components/common/loader";
import Navbar from "@/components/common/navbar";
import { Breadcrumbs } from "@/interface/breadcrumbs";

export interface LayoutWrapperProps extends Breadcrumbs {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  children,
  pageName,
}) => {
  //const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading for 2 seconds
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer); // Cleanup on unmount
  // }, []);

  return (
    <div className="relative">
      {/* {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <Loader />
        </div>
      )} */}
      {/* <div
        className={`
          ${loading ? "hidden" : 
            "sticky top-0 z-50 lg:h-20 flex  border-b-stone-200 border-solid items-center text-sm text-neutral-600 bg-black"
        }`}
      > */}
      <div className="sticky top-0 z-50 lg:h-20 flex  border-b-stone-200 border-solid items-center text-sm text-neutral-600 bg-black">
        <Navbar pageName={pageName} />
      </div>

      {children}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutWrapper;
