import { useState } from "react";
import { ToastContainer } from "react-toastify";

import KnowYourDiamondContext from "@/context/know-your-diamond-context";
import StonePrice from "@/interface/stone-price";

interface KnowYourDimaondWrapperProps {
  children: React.ReactNode;
}

const KnowYourDiamondContextWrapper: React.FC<KnowYourDimaondWrapperProps> = ({
  children,
}) => {
  const [selectedKyd, setSelectedKyd] = useState<StonePrice | null>(null);

  return (
    <KnowYourDiamondContext.Provider
      value={{
        selectedKyd,
        setSelectedKyd,
      }}
    >
      {children}
      <ToastContainer />
    </KnowYourDiamondContext.Provider>
  );
};

export default KnowYourDiamondContextWrapper;
