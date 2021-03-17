import React from "react";
import { BsCreditCard } from "react-icons/bs";
import { BiBook } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";

export const links = [
  {
    url: "/",
    text: "Products",
    subLinks: {
      title: "Products",
      linkList: [
        {
          text: "Payments",
          icon: <BsCreditCard />,
          url: "/",
        },
        {
          text: "Terminal",
          icon: <BsCreditCard />,
          url: "/",
        },
        {
          text: "Connect",
          icon: <BsCreditCard />,
          url: "/",
        },
      ],
    },
  },
  {
    url: "/",
    text: "Developers",
    subLinks: {
      title: "Developers",
      linkList: [
        {
          text: "Plugins",
          icon: <BiBook />,
          url: "/",
        },
        {
          text: "Libraries",
          icon: <BiBook />,
          url: "/",
        },
        {
          text: "Help",
          icon: <BiBook />,
          url: "/",
        },
        {
          text: "Billing",
          icon: <BiBook />,
          url: "/",
        },
      ],
    },
  },
  {
    url: "/",
    text: "Company",
    subLinks: {
      title: "Company",
      linkList: [
        {
          text: "About",
          icon: <HiOutlineBriefcase />,
          url: "/",
        },
        {
          text: "Customers",
          icon: <HiOutlineBriefcase />,
          url: "/",
        },
      ],
    },
  },
];
