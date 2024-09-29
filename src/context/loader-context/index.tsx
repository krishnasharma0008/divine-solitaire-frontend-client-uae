import { createContext } from "react";

type LoaderContext = {
  showLoader: () => void;
  hideLoader: () => void;
};

const defaultState: LoaderContext = {
  showLoader: () => {
    console.log();
  },
  hideLoader: () => {
    console.log();
  },
};

const LoaderContext = createContext<LoaderContext>(defaultState);

export default LoaderContext;
