import dayjs from "dayjs";
import utcPlugin from "dayjs/plugin/utc";
//import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useReducer, useState } from "react";

import { createAppointment, getStoreDetail } from "@/api/store-locator";
import { InputText, Button, CalendarIcon } from "@/components";
import AppointmentDialog from "@/components/common/appointment-dialog";
import Carousel from "@/components/common/carousel";
import TextArea from "@/components/common/input-text-area";
import TimePicker from "@/components/common/time-picker";
import LoaderContext from "@/context/loader-context";
import { AppointmentForm, StoreLocator } from "@/interface";

import StoreLocatorMaps from "../store-locator-screen/sub-component/store-locator-maps";
dayjs.extend(utcPlugin);

const initialState: StoreLocator = {
  code: "",
  name: "",
  address: "",
  contact_no: "",
  latitude: "",
  longitude: "",
  store_image1: "",
  id: "",
  email: "",
  country: "",
  state: "",
  city: "",
  store_description: "",
  store_images: [],
};

interface AppointmentFormAction {
  type: string;
  payload?: string | AppointmentForm | File;
}

const initialStateForm: AppointmentForm = {
  name: "",
  email: "",
  contactno: "",
  aptdate: "",
  apttimefrom: "10:00",
  apttimeto: "06:00",
  message: "",
  store_name: "",
  store_contactno: "",
  store_address: "",
  store_country: "",
  store_state: "",
  store_city: "",
};

const AppointmentFormReducer = (
  state: AppointmentForm,
  action: AppointmentFormAction
) => {
  if (action.type === "ALL") {
    return {
      ...state,
      ...(action.payload as unknown as AppointmentForm),
    };
  }

  return { ...state, [action.type]: action.payload };
};
const StoreDetailScreen: React.FC = () => {
  const [state, dispatch] = useReducer(
    AppointmentFormReducer,
    initialStateForm
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { query } = useRouter();

  const { showLoader, hideLoader } = useContext(LoaderContext);
  const [storeList, setStoreList] = useState<StoreLocator>(initialState);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  let fromLocation = null;

  const getStoreDetails = async () => {
    showLoader();
    try {
      getStoreDetail(query.codeno as string).then((res) => {
        console.log("Data received", res.data.data);
        if (!res.data.data) {
          return;
        }
        setStoreList(res.data.data);
      });
    } catch (err) {
      console.log(err);
    }
    hideLoader();
  };

  useEffect(() => {
    if (!query.codeno) {
      return;
    }
    getStoreDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.codeno]);

  const onClickDirection = async (latitude: string, longitude: string) => {
    //const mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    // Open the map in a new tab or window
    //window.open(mapUrl, "_blank");

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          fromLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          // Call function to open Google Maps with directions

          const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${fromLocation.latitude},${fromLocation.longitude}&destination=${latitude},${longitude}`;
          window.open(googleMapsUrl, "_blank");
        },
        function (error) {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const onChangeHandlerCreator = (
    fieldname: string,
    type?: "integer" | "text"
  ) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      if (type === "integer" && isNaN(parseInt(e.target.value))) {
        dispatch({
          type: "ALL",
          payload: state,
        });
        return;
      }
      dispatch({
        type: fieldname,
        payload: (e.target as HTMLInputElement).value,
      });
    };
  };

  const onChangeHandlertextareaCreator = (fieldname: string) => {
    return (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch({
        type: fieldname,
        payload: (e.target as HTMLTextAreaElement).value,
      });
    };
  };

  function convertTo12HourFormat(time24: string) {
    const [hours, minutes] = time24.split(":");
    let period = "AM";

    if (parseInt(hours) >= 12) {
      period = "PM";
    }

    let hours12 = parseInt(hours) % 12;
    if (hours12 === 0) {
      hours12 = 12;
    }

    const time12 = `${hours12}:${minutes} ${period}`;
    return time12;
  }

  const handleSubmit = () => {
    const validationErrors: { [key: string]: string } = {};

    if (!state.name) {
      validationErrors.name = "Name is required";
    }

    if (!state.email) {
      validationErrors.email = "Email is required";
    } else if (!/.+@.+\..+/.test(state.email)) {
      validationErrors.email = "Invalid email";
    }

    if (!state.contactno) {
      validationErrors.contactno = "Mobile number is required";
    }
    if (!state.aptdate) {
      validationErrors.aptdate = "Date is required";
    }

    if (!state.message) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload: AppointmentForm = {
      ...state,
      aptdate: new Date(state.aptdate || Date.now()).toISOString(),
      apttimefrom: convertTo12HourFormat(state.apttimefrom),
      apttimeto: convertTo12HourFormat(state.apttimeto),
      store_name: storeList.name,
      store_contactno: storeList.contact_no,
      store_address: storeList.address,
      store_country: storeList.country,
      store_state: storeList.state,
      store_city: storeList.city,
    };

    console.log(payload);
    createAppointment(payload)
      .then(() => {
        console.log("It is successfully created");
      })
      .catch((err) => console.log("Error", err));
    // Close the dialog box
    handleOpen();
  };

  const rawImages = Array.isArray(storeList.store_images)
    ? storeList.store_images
    : storeList.store_images
    ? [storeList.store_images]
    : [];

  const images: { src: string; alt: string }[] = (
    rawImages.length > 0 ? rawImages : ["/logo/new_logo.png"]
  ).map((img, index) => ({
    src: img,
    alt: `Store Image ${index + 1}`,
  }));

  return (
    <>
      <div className="py-12">
        <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto">
          <div className="w-full flex flex-col md:flex-row justify-between items-center self-stretch">
            {/* First column */}
            <div className="w-full flex flex-col items-center gap-2 p-4 rounded-lg md:w-1/2 ">
              {/* <Image
                src={storeList.store_image1}
                alt={`${storeList.name} Store`}
                height={502}
                width={670}
                sizes="100vw"
                className="w-full max-w-2xl h-auto p-2 border "
                onError={(e) => {
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.src = "/logo/new_logo.png"; // Replace with your placeholder image URL
                  imgElement.className =
                    "w-1/2 h-1/2 hover:pointer bg-black p-2";
                }}
                //onClick={handleClick}
              /> */}
              <div className="w-[500px]">
                <Carousel
                  type="slide"
                  cardType="ImageCard"
                  className="w-[400px] h-auto hover:pointer -mt-4"
                  slidesPerView={1}
                  navigation={true}
                  items={images}
                />
              </div>
            </div>
            {/* Second column */}
            <div className="w-full flex flex-col justify-between items-center self-stretch md:w-1/2 px-2 p-4">
              <div className="flex flex-col justify-center items-start gap-3 self-stretch">
                <p className="text-4xl font-serif font-normal mt-0 mb-5">
                  {storeList.name}
                </p>
                <p className="mb-5">{storeList.store_description}</p>
                <div className="flex flex-col justify-center items-start gap-3 self-stretch">
                  {/* Address */}
                  <div className="flex items-start gap-4 self-stretch">
                    <b className="text-base float-left mr-1.25 w-28">
                      Address :
                    </b>
                    <p className="flex-1 text-black leading-trim text-cap font-montserrat text-16 font-normal leading-160 capitalize">
                      {storeList.address}
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-4 self-stretch">
                    <b className="text-base float-left mr-1.25 w-28">
                      Call Now :
                    </b>
                    <p className="text-black font-montserrat text-16 font-normal leading-160 capitalize">
                      {storeList.contact_no}
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-center md:space-x-10 space-y-2 md:space-y-0">
                  <Button
                    onClick={() =>
                      onClickDirection(storeList.latitude, storeList.longitude)
                    }
                    themeType="dark"
                    cornerType="sharp"
                    className="inline-flex items-center justify-center px-4 py-2 bg-Chinese-Black-sidebar border border-transparent font-semibold capitalize text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                  >
                    Directions
                  </Button>
                  <Button
                    onClick={handleOpen}
                    themeType="light"
                    cornerType="sharp"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-white border border-black font-semibold capitalize text-black hover:bg-Chinese-Black-sidebar hover:text-white active:bg-Chinese-Black-sidebar active:text-white focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200"
                  >
                    <CalendarIcon className="inline-block ml-3 mr-3" />
                    Book an Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-8">
            <StoreLocatorMaps storesList={[storeList]} />
          </div>
        </div>
      </div>
      {/* Dialog Section */}
      <AppointmentDialog
        open={open}
        onClose={handleOpen}
        onSubmit={handleSubmit}
        title="Book an appointment"
        submitText="Submit"
        cancelText="Cancel"
      >
        <div className="flex flex-wrap w-full h-full overflow-y-auto overflow-x-hidden">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <InputText
              type="text"
              value={state.name}
              onChange={onChangeHandlerCreator("name")}
              label=""
              className={`w-full  ${errors.name ? "border-red-500" : ""} `}
              placeholder="Name * "
              errorText={errors.name}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <InputText
              type="text"
              value={state.email}
              label=""
              onChange={onChangeHandlerCreator("email")}
              className={`w-full ${errors.email ? "border-red-500" : ""}`}
              placeholder="E-Mail * "
              errorText={errors.email}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <InputText
              type="text"
              value={state.contactno}
              label=""
              onChange={onChangeHandlerCreator("contactno")}
              className={`w-full ${errors.contactno ? "border-red-500" : ""}`}
              placeholder="Mobile No. *"
              errorText={errors.contactno}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <InputText
              label=""
              type="date"
              value={state.aptdate}
              onChange={onChangeHandlerCreator("aptdate")}
              className={`w-full ${errors.aptdate ? "border-red-500" : ""}`}
              errorText={errors.aptdate}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 px-3 md:mb-0 mb-3">
            <TimePicker
              value={state.apttimefrom}
              onChange={onChangeHandlerCreator("apttimefrom")}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-3">
            <TimePicker
              value={state.apttimeto}
              onChange={onChangeHandlerCreator("apttimeto")}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full px-3">
          <TextArea
            value={state.message}
            onChange={onChangeHandlertextareaCreator("message")}
            className={`w-full ${errors.message ? "border-red-500" : ""}`}
            errorText={errors.message}
            placeholder="Message*"
            containerClass="w-full"
            rows={1}
          />
        </div>
      </AppointmentDialog>
    </>
  );
};

export default StoreDetailScreen;
