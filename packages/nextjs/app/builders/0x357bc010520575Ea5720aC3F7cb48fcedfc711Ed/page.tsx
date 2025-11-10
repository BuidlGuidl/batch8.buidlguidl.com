"use client";

import React from "react";
import { NextPage } from "next";
import { BriefcaseIcon, CodeBracketIcon } from "@heroicons/react/20/solid";

const Page: NextPage = () => {
  return (
    <>
      <div className="rating gap-1 mx-auto mt-10">
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" defaultChecked />
      </div>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Hello, This is Selpak!</span>
          </h1>
          <p className="text-center text-lg mt-4">Blockchain Enthusiast</p>
        </div>

        <div className="px-5 py-10 bg-base-300 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">About Me</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center text-lg mb-4">
              I&apos;m new to the blockchain space and have been diving into various resources to build my knowledge.
              I&apos;m excited to continue growing and contributing to this field.
            </p>
          </div>
        </div>

        <div className="flex-grow w-full mt-16">
          <div className="flex justify-center items-center gap-8 flex-col sm:flex-row">
            <a
              className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl"
              href="https://github.com/Selpak99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeBracketIcon className="h-8 w-8 fill-secondary" />
              Github
            </a>
            <a
              className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl"
              href="https://app.buidlguidl.com/builders/0x357bc010520575Ea5720aC3F7cb48fcedfc711Ed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BriefcaseIcon className="h-8 w-8 fill-secondary" />
              Buidl Guidl
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
