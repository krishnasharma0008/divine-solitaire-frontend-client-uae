import { createContext } from "react";

import StonePrice from "@/interface/stone-price";

type KnowYourDiamondContextType = {
  selectedKyd: StonePrice | null;
  setSelectedKyd: (data: StonePrice | null) => void;
};

const defaultState: KnowYourDiamondContextType = {
  selectedKyd: null,
  setSelectedKyd: () => {
    console.log("");
  },
};

const KnowYourDiamondContext =
  createContext<KnowYourDiamondContextType>(defaultState);

export default KnowYourDiamondContext;
