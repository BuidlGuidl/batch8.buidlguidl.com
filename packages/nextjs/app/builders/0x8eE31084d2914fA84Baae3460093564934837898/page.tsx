/* eslint-disable */
/* prettier-ignore */
import Image from "next/image";
import { NextPage } from "next";
import {
  AcademicCapIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Address } from "~~/components/scaffold-eth";

const Page: NextPage = () => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto shadow-2xl flex flex-col sm:flex-row my-10 animate-gradient-x">
        {/* image column */}
        <div className="w-full sm:w-1/2 bg-secondary">
          <div className="flex justify-center items-center h-full">
            <div className="w-80 h-80 overflow-hidden rounded-full shadow-lg">
              <Image
                src="/builders/avatars/pena.jpeg"
                alt="Cleaner Avatar"
                className="object-cover w-full h-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        {/* content column */}
        <div className="w-full sm:w-1/2 bg-gradient-to-r from-secondary to-base-100 dark:from-secondary dark:to-base-300 flex flex-col justify-center p-8">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-semibold">
              <span className="bg-clip-text text-black dark:text-white bg-gradient-to-r from-base-400 to-base-100 via-base-150 dark:from-secondary dark:via-secondary dark:to-secondary">
                PenaMaster
              </span>
              <span className="space-y-1">
                <Address address="0x8eE31084d2914fA84Baae3460093564934837898" />
              </span>
            </h1>
            <div className="flex gap-3">
              <a href="https://github.com/penaMaster" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub"
                  className="h-8 w-8"
                />
              </a>
              <a
                href="https://app.buidlguidl.com/builders/0x8eE31084d2914fA84Baae3460093564934837898"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BuidlGuidlLogo className="h-8 w-8" />
              </a>
              <a href="https://t.me/penamasterr" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                  alt="Telegram"
                  className="h-8 w-8"
                />
              </a>
            </div>
          </div>
          <div className="mt-4">
            <p className="flex items-start gap-3 text-gray-900 dark:text-gray-200">
              <RocketLaunchIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 hover:scale-125 transition-transform duration-300" />
              <span>Web3 Enthusiast</span>
            </p>
            <p className="flex items-start gap-3 text-gray-900 dark:text-gray-200">
              <CodeBracketIcon className="h-8 w-8 text-green-500 dark:text-green-400 hover:scale-125 transition-transform duration-300" />
              <span>Full-stack + Smart Contract Developer</span>
            </p>
            <p className="flex items-start gap-3 text-gray-900 dark:text-gray-200">
              <AcademicCapIcon className="h-8 w-8 text-purple-500 dark:text-purple-400 hover:scale-125 transition-transform duration-300" />
              <span>Learning Solidity</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
