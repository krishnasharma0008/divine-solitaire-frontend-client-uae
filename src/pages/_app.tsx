// eslint-disable-next-line import/order
//import Head from "next/head";
import "../globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { URLs, breadcrumbList } from "@/constants";
import { CurrencyProvider } from "@/context/currency-context";
import LoaderContext from "@/context/loader-context";
import VerifyTrackContextWrapper from "@/context/verify-track-context";
import {
  KnowYourDiamondContextWrapper,
  LayoutWrapper,
  NotificationWrapper,
} from "@/wrapper";
import LoaderWrapper from "@/wrapper/loader-wrapper";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css/bundle";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [pageName, setPageName] = useState<URLs>(URLs.DASHBOARD);
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setPageName(url as URLs); // Update pageName based on the route
      showLoader();
    };

    const handleRouteComplete = () => {
      hideLoader();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router.events, showLoader, hideLoader]);

  return (
    <>
      {/* <Head></Head> */}
      <div className="text-sm">
        <LayoutWrapper
          breadcrumbs={breadcrumbList[pageName]}
          pageName={pageName}
        >
          <Component {...pageProps} setPageName={setPageName} />
        </LayoutWrapper>
      </div>
    </>
  );
};

const WrappedApp: React.FC<AppProps> = (props) => (
  <ThemeProvider>
    <NotificationWrapper>
      <LoaderWrapper>
        <CurrencyProvider>
          <VerifyTrackContextWrapper>
            <KnowYourDiamondContextWrapper>
              <App {...props} />
            </KnowYourDiamondContextWrapper>
          </VerifyTrackContextWrapper>
        </CurrencyProvider>
      </LoaderWrapper>
    </NotificationWrapper>
  </ThemeProvider>
);

export default WrappedApp;
