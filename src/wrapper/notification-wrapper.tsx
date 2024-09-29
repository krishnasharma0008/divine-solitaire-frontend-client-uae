import { ToastContainer, ToastOptions, toast } from "react-toastify";

import NotificationContext from "@/context/notification-context";

interface NotificationContextWrapperProps {
  children: React.ReactNode;
}

const notifyOptions: ToastOptions = {
  position: "bottom-center",
  theme: "light",
  draggable: false,
  hideProgressBar: true,
  style: {
    textAlign: "center",
  },
};

const NotificationContextWrapper: React.FC<NotificationContextWrapperProps> = ({
  children,
}) => {
  const notify = (message: string) =>
    toast(message, {
      ...notifyOptions,
      type: "success",
    });

  const notifyErr = (message: string) =>
    toast(message, {
      ...notifyOptions,
      type: "error",
    });

  return (
    <NotificationContext.Provider
      value={{
        notify,
        notifyErr,
      }}
    >
      {children}
      <ToastContainer />
    </NotificationContext.Provider>
  );
};

export default NotificationContextWrapper;
