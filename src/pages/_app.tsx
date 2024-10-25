// eslint-disable-next-line import/order
import Head from "next/head";
import "../globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { URLs, breadcrumbList } from "@/constants";
import { AuthProvider } from "@/context/auth-context";
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

// Google tag script
const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-BPNG07S3PH');
`;

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [pageName, setPageName] = useState<URLs>(URLs.DASHBOARD);

  const { showLoader, hideLoader } = useContext(LoaderContext);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (
      url: string,
      { shallow }: { shallow: boolean }
    ) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
      showLoader();
    };

    const handleRouteComplete = () => {
      console.log("you have finished going to the new page");
      hideLoader();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    // If the component is unmounted, unsubscribe from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router.events, showLoader, hideLoader]);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BPNG07S3PH"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: gtagScript,
          }}
        />
      </Head>
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
        <AuthProvider>
          <CurrencyProvider>
            <VerifyTrackContextWrapper>
              <KnowYourDiamondContextWrapper>
                <App {...props} />
              </KnowYourDiamondContextWrapper>
            </VerifyTrackContextWrapper>
          </CurrencyProvider>
        </AuthProvider>
      </LoaderWrapper>
    </NotificationWrapper>
  </ThemeProvider>
);

export default WrappedApp;
