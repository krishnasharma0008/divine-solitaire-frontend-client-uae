import { useEffect } from "react";

import { URLs } from "@/constants";
import { AbotUsScreen } from "@/screens";

const AboutUs = ({
  setPageName,
}: {
  setPageName: (pageUrl: string) => void;
}) => {
  useEffect(() => {
    setPageName(URLs.ABOUT_US);
  }, [setPageName]);

  return <AbotUsScreen />;
};
export default AboutUs;
