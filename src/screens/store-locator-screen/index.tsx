//import { useRouter } from "next/router";
import router from "next/router";
import { useContext, useEffect, useState } from "react";

import { getStoreLocatorList, getStoreSearchList } from "@/api/store-locator";
import { ListViewIcon, MapPinLineIcon, MapViewIcon } from "@/components";
import SearchBox from "@/components/common/search-box";
import LoaderContext from "@/context/loader-context";
import { StoreLocator } from "@/interface";

import StoreLocatorMaps from "./sub-component/store-locator-maps";
import StoreView from "./sub-component/view-detail";

const tabs = [
  {
    title: "List View",
    titleicon: <ListViewIcon />,
    component: "list", // Use a placeholder for now
  },
  {
    title: "Map View",
    titleicon: <MapViewIcon />,
    component: <div>Map View Content</div>, // Replace with actual content
  },
];

const StoreLocatorScreen: React.FC = () => {
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const [storeList, setStoreList] = useState<Array<StoreLocator>>([]);

  const [search, setSearch] = useState<string>("");

  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const onClickHandler = (idx: number) => () => setSelectedTab(idx);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    //getlistdata();
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error(error.message);
        }
      );
      getlistdata(userLocation?.latitude, userLocation?.longitude);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const SearchClick = async () => {
    //console.log("click check");
    //getlistdata(undefined, undefined, search, "search");
    if (search !== "") {
      try {
        showLoader();
        const res = await getStoreSearchList(search);
        setStoreList(res.data.data || []);
        hideLoader();
      } catch (error) {
        hideLoader();
        console.log(error);
      }
    } else {
      setStoreList([]);
    }
  };

  const getlistdata = async (
    latitude?: number,
    longitude?: number
    //search?: string,
    //type?: string
  ) => {
    try {
      showLoader();
      const res = await getStoreLocatorList(latitude, longitude);
      setStoreList(res.data.data || []);
      //console.log(res.data.data);
      hideLoader();
    } catch (error) {
      hideLoader();
      console.log(error);
    }
  };

  useEffect(() => {
    getUserLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (codeno: string) => {
    router.push(`/store-detail/${codeno}`);
  };

  return (
    <div className="flex flex-col items-center px-2 md:px-8 lg:px-16 xl:px-32 containerStyle">
      <div className="px-5 py-5">
        <div className="mt-5 text-gray-900 font-montserrat text-3xl font-normal leading-normal">
          Store Locator
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-2 md:flex-row">
        <div className="w-full md:w-1/2">
          <SearchBox
            placeholder="Search......"
            type="text"
            value={search}
            onChange={changeHandler}
            onSearchClick={SearchClick}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-end md:space-x-2 space-y-2 md:space-y-0">
          <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:justify-end md:space-x-2">
            <button
              className="w-full inline-flex items-center justify-center px-4 py-2 text-black bg-white border border-gray-900 rounded-md font-semibold md:whitespace-nowrap"
              onClick={getUserLocation}
            >
              Use My Location <MapPinLineIcon className="bg-transparent" />
            </button>
            <button
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition md:whitespace-nowrap"
              onClick={() => getlistdata()}
            >
              View All Stores
            </button>
          </div>
        </div>
      </div>
      {/* {storeList !== null ? ( */}
      {Object.keys(storeList).length !== 0 ? (
        <div className="lg:rounded-md bg-white lg:shadow-lg md:pb-6 md:pt-2 md:px-4 w-full md:px-3">
          <div className="hidden flex flex-col md:flex-row justify-around md:space-x-4 md:space-y-0 mt-4 md:mt-6">
            {tabs.map((tab, idx) => (
              <button
                key={tab.title}
                className={`${
                  selectedTab === idx
                    ? "bg-white text-black border-b-2 border-black font-bold"
                    : "bg-white text-black border-b-2 border-transparent font-normal"
                } w-full md:w-auto px-4 py-2 flex items-center space-x-2 hover:text-black transition-all duration-100 focus:outline-none`}
                onClick={onClickHandler(idx)}
              >
                {tab.titleicon}
                <span>{tab.title}</span>
              </button>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center mt-4 md:mt-6 md:flex-row md:justify-center md:space-x-4 md:overflow-x-auto pt-3">
            {selectedTab === 0 && (
              <div className="flex flex-col md:flex-row justify-between items-center self-stretch">
                {/* First column */}
                <div className="flex flex-col justify-between items-center self-stretch md:w-1/2 px-2">
                  <StoreLocatorMaps storesList={storeList} />
                </div>
                {/* Second column */}
                <div className="flex flex-col w-full items-start md:p-2 rounded-lg md:w-1/2 pt-5 px-2 md:px-8 max-h-[500px] overflow-y-auto overflow-x-hidden">
                  {storeList.map((store) => (
                    <div key={store.id} className="mb-4">
                      <StoreView
                        codeno={store.codeno}
                        name={store.name}
                        address={store.address}
                        contact_no={store.contact_no}
                        latitude={store.latitude}
                        longitude={store.longitude}
                        store_image1={store.store_image1}
                        country={store.country}
                        state={store.state}
                        city={store.city}
                        onClick={() => handleClick(store.codeno)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedTab === 1 && <StoreLocatorMaps storesList={storeList} />}
          </div>
        </div>
      ) : (
        <div className="text-gray-900 justify-center text-center item-center lg:rounded-md bg-white lg:shadow-lg md:pb-6 md:pt-2 md:px-4 w-full md:px-3">
          <span className="p-10">
            <p className="text-center font-bold text-2xl p-5">
              Oops! we couldn&apos;t find what you were looking for
            </p>
            <p className="text-xl p-5">
              You can try using city name or jeweller name
            </p>
          </span>
        </div>
      )}
    </div>
  );
};
export default StoreLocatorScreen;
