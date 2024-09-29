import dayjs from "dayjs";
import utcPlugin from "dayjs/plugin/utc";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useReducer } from "react";

import { createAppointment } from "@/api/store-locator";
import { InputText, Button } from "@/components";
import AppointmentDialog from "@/components/common/appointment-dialog";
import TextArea from "@/components/common/input-text-area";
import TimePicker from "@/components/common/time-picker";
import { MapPinLineIcon, PhoneIcon } from "@/components/icons";
import { AppointmentForm } from "@/interface";

dayjs.extend(utcPlugin);

export interface StoreViewProps {
  codeno: string;
  name: string;
  address: string;
  contact_no: string;
  latitude: string;
  longitude: string;
  store_image1: string;
  country: string;
  state: string;
  city: string;
  onClick?: () => void;
}

interface AppointmentFormAction {
  type: string;
  payload?: string | AppointmentForm | File;
}

const initialState: AppointmentForm = {
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

const StoreView: React.FC<StoreViewProps> = ({
  codeno,
  name,
  address,
  contact_no,
  latitude,
  longitude,
  store_image1,
  country,
  state,
  city,
  onClick,
}) => {
  const [sstate, dispatch] = useReducer(AppointmentFormReducer, initialState);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const DateFormat = "YYYY-MM-DD HH:mm:ss";
  /** Dialog box for appointment */
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  let fromLocation = null;

  const onClickDirection = async (latitude: string, longitude: string) => {
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
          payload: sstate,
        });
        return;
      }
      dispatch({
        type: fieldname,
        payload: (e.target as HTMLInputElement).value,
      });
    };
  };

  const convertTo12HourFormat = (time24: string) => {
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
  };
  const onChangeHandlertextareaCreator = (fieldname: string) => {
    return (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (fieldname === "aptdate") {
        dispatch({
          type: fieldname,
          payload: new Date(
            dayjs.utc(e.target.value).format(DateFormat)
          ).toISOString(),
        });
      } else {
        dispatch({
          type: fieldname,
          payload: e.target.value,
        });
      }
    };
  };

  const handleSubmit = () => {
    const validationErrors: { [key: string]: string } = {};

    if (!sstate.name) {
      validationErrors.name = "Name is required";
    }

    if (!sstate.email) {
      validationErrors.email = "Email is required";
    } else if (!/.+@.+\..+/.test(sstate.email)) {
      validationErrors.email = "Invalid email";
    }

    if (!sstate.contactno) {
      validationErrors.contactno = "Mobile number is required";
    }
    if (!sstate.aptdate) {
      validationErrors.aptdate = "Date is required";
    }

    if (!sstate.message) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload: AppointmentForm = {
      ...sstate,
      aptdate: new Date(sstate.aptdate || Date.now()).toISOString(),
      apttimefrom: convertTo12HourFormat(sstate.apttimefrom),
      apttimeto: convertTo12HourFormat(sstate.apttimeto),
      store_name: name,
      store_contactno: contact_no,
      store_address: address,
      store_country: country,
      store_state: state,
      store_city: city,
    };

    createAppointment(payload)
      .then(() => {
        console.log("It is successfully created");
      })
      .catch((err) => console.log("Error", err));
    //Close the dialog box

    handleOpen();
  };

  return (
    <>
      <div className="lg:flex">
        {/* Display for larger screens */}
        <div className="hidden lg:block">
          <div className="flex py-6 px-4 flex-col justify-center items-center gap-2.5 self-stretch rounded-md border border-gray-300 bg-white pt-5">
            <div className="w-full flex items-start gap-4 self-stretch">
              <div className="w-1/2 flex flex-col justify-between items-center self-stretch">
                {/* <Link href={`/store-detail/${codeno}`}> */}
                <Image
                  src={
                    store_image1 === "" ? "/logo/new_logo.png" : store_image1
                  }
                  alt={`${name} Store`}
                  width={869} // Provide appropriate width
                  height={567} // Provide appropriate height
                  sizes="100vw"
                  className="w-auto h-auto hover:pointer bg-black p-2"
                  onClick={onClick}
                />
                {/* </Link> */}
                <Button
                  onClick={() => onClickDirection(latitude, longitude)}
                  themeType="dark"
                  className="inline-flex items-center justify-center px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold capitalize text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                >
                  Directions
                </Button>
              </div>
              <div className="w-1/2 flex flex-col justify-center items-center gap-4 flex-1">
                <div className="flex flex-col justify-center items-start gap-3 self-stretch">
                  <Link href={`/store-detail/${codeno}`}>
                    <p className="text-black font-montserrat text-14 font-semibold leading-160 uppercase">
                      {name}
                    </p>
                  </Link>
                  <div className="flex flex-col justify-center items-start gap-3 self-stretch">
                    {/* Address */}
                    <div className="flex items-start gap-4 self-stretch">
                      <MapPinLineIcon />
                      <p className="flex-1 text-black leading-trim text-cap font-montserrat text-16 font-normal leading-160 capitalize">
                        {address}
                      </p>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center gap-4 self-stretch">
                      <PhoneIcon />
                      <p className="text-black font-montserrat text-16 font-normal leading-160 capitalize">
                        {contact_no}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Book an Appointment Button */}
                <Button
                  onClick={handleOpen}
                  themeType="light"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-white border border-black rounded-md font-semibold capitalize text-black hover:bg-Chinese-Black-sidebar hover:text-white active:bg-Chinese-Black-sidebar active:text-white focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200"
                >
                  Book an Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* display for small screen like mobile */}
        {/* Display for smaller screens */}
        <div className="lg:hidden">
          <div className="flex py-6 px-2 flex-col justify-center items-center gap-2.5 self-stretch rounded-md border border-gray-300 bg-white pt-5">
            <div className="flex items-start gap-4 self-stretch">
              {/* first column */}
              <div className="flex flex-col justify-between items-center self-stretch">
                <Link href={`/store-detail/${codeno}`}>
                  {/* <Link href="#" onClick={onClick}> */}
                  {/* <Image
                    src={store_image1 === "" ? "/menulogo.png" : store_image1}
                    alt={`${name} Store`}
                    height={134}
                    width={134}
                    className="max-w-full h-auto"
                    //onClick={onClick}
                  /> */}
                  <Image
                    src={
                      store_image1 === "" ? "/logo/new_logo.png" : store_image1
                    }
                    alt={`${name} Store`}
                    width={869} // Provide appropriate width
                    height={567} // Provide appropriate height
                    sizes="100vw"
                    className="w-auto h-auto hover:pointer bg-black p-2"
                    onClick={onClick}
                  />
                </Link>
              </div>
              {/* Second column */}
              <div className="flex flex-col justify-center items-start flex-1">
                <Link href={`/store-detail/${codeno}`}>
                  <p className="text-black font-montserrat font-semibold leading-160 uppercase">
                    {name}
                  </p>
                </Link>
                {/* Address */}
                <div className="flex items-start gap-4 self-stretch">
                  <p className="flex-1 text-black leading-trim text-cap font-montserrat font-normal leading-160 capitalize">
                    {address}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Button
                onClick={() => onClickDirection(latitude, longitude)}
                themeType="dark"
                className="inline-flex items-center justify-center px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold capitalize text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition"
              >
                Directions
              </Button>
            </div>
            <div className="w-full">
              {/* Book an Appointment Button */}
              <Button
                onClick={handleOpen}
                themeType="light"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-white border border-black rounded-md font-semibold capitalize text-black hover:bg-Chinese-Black-sidebar hover:text-white active:bg-Chinese-Black-sidebar active:text-white focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200"
              >
                Book an Appointment
              </Button>
            </div>
            <div className="w-full flex gap-2 self-stretch">
              <PhoneIcon className="inline-block" />
              <p className="text-black font-montserrat capitalize">
                {contact_no}
              </p>
            </div>
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
        {/* Place your form content here */}
        {/* For example, InputText, TimePicker, TextArea components */}
        <div className="flex flex-wrap w-full h-full overflow-y-auto overflow-x-hidden">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <InputText
              type="text"
              value={sstate.name}
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
              value={sstate.email}
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
              value={sstate.contactno}
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
              value={sstate.aptdate}
              onChange={onChangeHandlerCreator("aptdate")}
              className={`w-full ${errors.aptdate ? "border-red-500" : ""}`}
              errorText={errors.aptdate}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 px-3 md:mb-0 mb-3">
            <TimePicker
              value={sstate.apttimefrom}
              onChange={onChangeHandlerCreator("apttimefrom")}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-3">
            <TimePicker
              value={sstate.apttimeto}
              onChange={onChangeHandlerCreator("apttimeto")}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full px-3">
          <TextArea
            value={sstate.message}
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

export default StoreView;
