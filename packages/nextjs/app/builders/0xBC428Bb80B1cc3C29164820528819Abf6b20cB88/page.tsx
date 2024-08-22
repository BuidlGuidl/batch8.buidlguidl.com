import Image from "next/image";
import wavingRalphImage from "../0xBC428Bb80B1cc3C29164820528819Abf6b20cB88/images/simpsonsPhotos/ralph-transparent.png";
import skillStack from "../0xBC428Bb80B1cc3C29164820528819Abf6b20cB88/images/skillStack.svg";
import buidlGuidlLogo from "../0xBC428Bb80B1cc3C29164820528819Abf6b20cB88/images/socialMediaIcons/buidlguidlSmallLogo.png";
import { IM_Fell_English_Sans, ImbueSans, ItalianaSans } from "./utils/font";
import { CopyDiscordHandle, CopyMailId } from "./utils/onclickButtonComponents";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const PersonalPage: React.FC = () => {
  return (
    <main className="h-auto px-9 py-8 ">
      <div className={`${ItalianaSans.className} w-full h-full flex flex-col xl:flex-row`}>
        <div className="h-full w-full xl:w-9/12 flex flex-col gap-10">
          <div className="text-6xl md:text-8xl text-center sm:text-start">
            Benhur <span>P</span> Benny
            <div className="flex justify-center sm:justify-normal">
              <Address address="0xbc428bb80b1cc3c29164820528819abf6b20cb88" />
            </div>
          </div>
          <div
            className={`w-full mb-7 h-full rounded-lg  px-10 pb-24 dark:bg-gray-800 dark:shadow-md bg-gray-300 dark:shadow-gray-900 dark:text-white  text-gray-800 flex flex-col shadow-inner shadow-gray-500 gap-4 relative`}
          >
            <div className={`${ImbueSans.className} text-4xl `}>
              About <span className="text-8xl ">↑</span>
            </div>
            <div className={`${IM_Fell_English_Sans.className} text-2xl xl:pr-24 pb-28 leading-10 `}>
              I am second year engineering student from GECT, Kerala, India. I love to tinker with new stuff and explore
              new bounteries. As of 18/08/24, I am navigating through the rabbit hole of blockchain and table tennis.
              Also looking for some cool hackathons to crack and gain some exp points in real life.
            </div>
            <div className={`flex gap-10 pb-10 items-center justify-center`}>
              <div className={`${ImbueSans.className} text-4xl `}>
                Come Say Hi <span className="text-5xl">→</span>
              </div>
              <div className="flex flex-wrap gap-4 min-w-20 items-center">
                <a
                  className=" px-4 py-2 rounded-xl dark:hover:shadow-inner dark:hover:shadow-black hover:dark:bg-base-200 hover:bg-gray-100 transition-all hover:shadow-md shadow-black "
                  href="https://app.buidlguidl.com/builders/0xBC428Bb80B1cc3C29164820528819Abf6b20cB88"
                  target="_blank"
                >
                  <Image width={8} height={8} unoptimized src={buidlGuidlLogo} alt="buidlguidl" className="w-8 h-8" />
                </a>
                <a
                  className=" px-4 py-2 rounded-xl dark:hover:shadow-inner dark:hover:shadow-black hover:dark:bg-base-200 hover:bg-gray-100 transition-all hover:shadow-md"
                  href="https://x.com/ruhneb0_0"
                  target="_blank"
                >
                  <FaTwitter className="h-8 w-8 fill-blue-400" />
                </a>
                <CopyMailId />
                <CopyDiscordHandle />
                <a
                  className=" px-4 py-2 rounded-xl dark:hover:shadow-inner dark:hover:shadow-black hover:dark:bg-base-200 hover:bg-gray-100 transition-all hover:shadow-md"
                  href="https://www.instagram.com/_benhurbenny._/"
                  target="_blank"
                >
                  <FaInstagram className="h-8 w-8 fill-red-400" />
                </a>
              </div>
            </div>
            <div className="h-20 w-20 absolute bottom-8">
              <Image width={80} height={80} src={wavingRalphImage} alt="" />
            </div>
          </div>
        </div>

        <div className="w-full xl:w-3/12 flex justify-center items-center ">
          <Image src={skillStack} alt="" className="h-[80vh]" width={400} height={400} />
        </div>
      </div>
    </main>
  );
};
export default PersonalPage;
