import { useEffect } from "react";

import { URLs } from "@/constants";
import { ContactUsScreen } from "@/screens";

const ContactUs = ({
  setPageName,
}: {
  setPageName: (pageUrl: string) => void;
}) => {
  useEffect(() => {
    setPageName(URLs.CONTACT_US);
  }, [setPageName]);

  return <ContactUsScreen />;
};

export default ContactUs;
