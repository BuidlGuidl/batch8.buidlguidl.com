import React from "react";
import Image from "next/image";
import { NextPage } from "next";

const umutArray: NextPage = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center text-pink-300">
          <div className="max-w-md">
            <div className="avatar">
              <div className="rounded-full mx-auto my-10">
                <Image src="/univornlast.png" alt="unicorn" height={250} width={250} />
              </div>
            </div>
            <h1 className="text-5xl font-bold">I am Umutarray</h1>
            <p className="py-6 text-xl">
              I am blockhain enthusiast second-year computer science student and i have been in crypto since 2020.
            </p>

            <p className="py-6 text-xl">you are always welcome to reach out to me via my social accounts.</p>

            <a className="link link-primary" href="https://x.com/umutarray" target="_blank">
              <button className="btn bg-pink-300 mx-2">Twitter</button>
            </a>
            <a className="link link-primary" href="https://github.com/umutarray" target="_blank">
              <button className="btn bg-pink-300 mx-2">Github</button>
            </a>
            <a
              className="link link-primary"
              href="https://app.buidlguidl.com/builders/0x3566ce434c0d8B80934354c806f8651e1cC91EDD"
              target="_blank"
            >
              <button className="btn bg-pink-300 mx-2">BuidlGuidl</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default umutArray;
