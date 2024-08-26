"use client";

import { BiLogoGmail } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";

export const CopyMailId = () => {
  return (
    <button
      className=" px-4 py-2 rounded-xl dark:hover:shadow-inner dark:hover:shadow-black hover:dark:bg-base-200  hover:bg-gray-100 ransition-all hover:shadow-md "
      onClick={() => {
        navigator.clipboard
          .writeText("benhurbenny007@gmail.com")
          .then(() => {
            alert("mail id copied!");
          })
          .catch(() => console.error);
      }}
    >
      <BiLogoGmail className="h-8 w-8 " />
    </button>
  );
};

export const CopyDiscordHandle = () => {
  return (
    <button
      className=" px-4 py-2 rounded-xl dark:hover:shadow-inner dark:hover:shadow-black hover:dark:bg-base-200 hover:bg-gray-100 transition-all hover:shadow-md"
      onClick={() => {
        navigator.clipboard
          .writeText("benhur_05751")
          .then(() => {
            alert("username copied!");
          })
          .catch(() => console.error);
      }}
    >
      <FaDiscord className="h-8 w-8 fill-blue-500" />
    </button>
  );
};
