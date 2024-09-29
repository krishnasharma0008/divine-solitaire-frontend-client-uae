import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  //ListItemPrefix,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/common";
import { URLs } from "@/constants";

//import { MenuIcon, SvgIconProps, XMarkIcon } from "../icons/";
import {
  MenuFacebookIcon,
  MenuInstagramIcon,
  MenuTwitterIcon,
  // MenuChatIcon,
  // MenuTelephoneIcon,
  // MenuMailIcon,
  MenuIcon,
  SvgIconProps,
  XMarkIcon,
} from "../icons/";

interface SidebarItem {
  title: string;
  url?: string;
  icon: string | React.FC<SvgIconProps>;
  onClick?: () => void;
  name: URLs;
}

export interface SidebarProps {
  items: Array<SidebarItem>;
  pageName: URLs;
  isSidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ items, pageName }) => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Button
        onClick={openDrawer}
        themeType="dark"
        cornerType="noborder"
        className="border-none shadow-none w-5"
      >
        <MenuIcon />
      </Button>
      {/* <Link href="#" onClick={openDrawer} className="w-full px-3 py-2 ">
        <MenuIcon />
      </Link> */}
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4 bg-black">
          {/* <div className="w-full flex items-center justify-center"> */}
          <div className="w-full flex items-center justify-center relative h-20 overflow-hidden">
            <Link href="/">
              <Image
                src="/logo/new_logo.png"
                alt="Divine Logo"
                // width="102"
                // height="64"
                fill
                className="object-contain"
              />
              {/* <Image
                src="/menulogo.png"
                alt="Divine Logo"
                width="102"
                height="64"
              /> */}
            </Link>
          </div>
          <IconButton variant="text" color="white" onClick={closeDrawer}>
            <XMarkIcon className="h-5 w-5" />
          </IconButton>
        </div>
        <List
          className="max-h-[calc(100vh_-_99px)] scrolling hide-scrollbar"
          style={{ overflowY: "scroll" }}
        >
          {/* {items.map(({ title, icon: Icon, url, name }) => { */}
          {items.map(({ title, icon: Icon, url, name }) => {
            return (
              <Link
                href={url || "#"}
                key={url + title}
                onClick={closeDrawer}
                className={`${
                  Icon === "yes" ? "border-b-2 border-slate-400" : ""
                }`}
              >
                <ListItem
                  className={`font-body hover:bg-black hover:text-white focus:bg-black focus:text-white ${
                    pageName === name ? "" : ""
                  }`}
                >
                  {/* {Icon && <Icon />}</ListItemPrefix> */}
                  {title}
                </ListItem>
              </Link>
            );
          })}
          <ListItem className="justify-between font-bold">
            Follow Us
            <ListItemPrefix className="flex justify-evenly item-right gap-3">
              <div>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/divinesolitaires/"
                >
                  <MenuFacebookIcon className="w-8 h-8" />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/divinesolitaires/"
                >
                  <MenuInstagramIcon className="w-8 h-8" />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  href="https://twitter.com/divinesolitaire?lang=en"
                >
                  <MenuTwitterIcon className="w-8 h-8" />
                </Link>
              </div>
            </ListItemPrefix>
          </ListItem>
          {/*           
          <ListItem className="justify-between font-bold">
            Contact Us
            <ListItemPrefix className="flex justify-evenly item-right gap-3">
              <div>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/divinesolitaires/"
                >
                  <MenuChatIcon className="w-8 h-8" />
                </Link>
              </div>
              <div>
                <Link target="_blank" href="tel:+91 9769888666">
                  <MenuTelephoneIcon className="w-8 h-8" />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  href="mailto:customerservice@divinesolitaires.com"
                >
                  <MenuMailIcon className="w-8 h-8" />
                </Link>
              </div>
            </ListItemPrefix>
          </ListItem> */}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Sidebar;
