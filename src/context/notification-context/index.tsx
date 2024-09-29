import { createContext } from "react";

type NotificationContextData = {
  notify: (message: string) => void;
  notifyErr: (message: string) => void;
};

const defaultState: NotificationContextData = {
  notify: () => {
    console.log();
  },
  notifyErr: () => {
    console.log();
  },
};

const NotificationContext =
  createContext<NotificationContextData>(defaultState);

export default NotificationContext;
