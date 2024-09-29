import { useEffect } from "react";

import { URLs } from "@/constants";
import { JewelleryScreen } from "@/screens";

const JewelleryPage = ({
  setPageName,
}: {
  setPageName: (pageUrl: string) => void;
}) => {
  useEffect(() => {
    setPageName(URLs.JEWELLERY);
  }, [setPageName]);

  return <JewelleryScreen />;
};

export default JewelleryPage;
