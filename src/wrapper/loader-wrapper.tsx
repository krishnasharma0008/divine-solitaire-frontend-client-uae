import { useCallback, useState } from "react";

import Loader from "@/components/common/loader";
import LoaderContext from "@/context/loader-context";

interface LoaderWrapperProps {
  children: React.ReactNode;
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({ children }) => {
  const [loader, setLoader] = useState<number>(0);

  const showLoader = useCallback(() => {
    setLoader((loaderVal) => loaderVal + 1);
  }, []);

  const hideLoader = useCallback(() => {
    setLoader((loaderVal) => (loaderVal > 0 ? loaderVal - 1 : 0));
  }, []);

  return (
    <LoaderContext.Provider
      value={{
        showLoader,
        hideLoader,
      }}
    >
      {loader > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="p-8 text-black text-center">
            <Loader />
          </div>
        </div>
      )}
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderWrapper;
