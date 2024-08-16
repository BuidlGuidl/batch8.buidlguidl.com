import React from "react";
import Image from "next/image";
import { NextPage } from "next"; 

const Zeze : NextPage = () => {
  return (
    <>
      <div className="basis-full md:basis-1/2 flex justify-center items-center h-screen">
        <div className="basis-1/2 flex justify-center items-center h-screen">
          <Image src="/myPhoto.jpeg" alt="200px" width={500} height={500} className="rounded-3xl shadow-xl" />
        </div>
        <div className="basis-1/2 h-screen">
          <div className="rounded-xl ">
            <div className="flex justify-center font-bold text-4xl mt-40"> Hi there! It&apos;s 0xzeze!</div>
            <div className="flex justify-center font-serif text-xl my-12">
              I&apos;m a computer science student exploring Web3 development. I&apos;m excited about the possibilities
              of creating decentralized and secure applications. This new technology feels like the future, and I&apos;m
              eager to dive in and learn more.
            </div>
            <div className="pr-5">
              <div className="mockup-browser bg-base-300 border">
                <div className="mockup-browser-toolbar">
                  <div className="input">My links</div>
                </div>
                <div className="bg-base-200 flex items-center justify-between px-12 py-12">
                  <a className="link link-hover" href="https://github.com/0xzeze" target="_blank">
                    Github
                  </a>

                  <a
                    className="link link-hover"
                    href="https://app.buidlguidl.com/builders/0xfb8b972b0D1cF9BB242A40F7AEA8E9a1bF89E0E3"
                    target="_blank"
                  >
                    Buidl Guidl
                  </a>

                  <a
                    className="link link-hover"
                    href="https://element.market/account/0xfb8b972b0D1cF9BB242A40F7AEA8E9a1bF89E0E3"
                    target="_blank"
                  >
                    Element Market
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zeze
