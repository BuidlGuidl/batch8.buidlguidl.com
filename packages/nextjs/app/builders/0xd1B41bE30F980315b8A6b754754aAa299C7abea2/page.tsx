import Image from "next/image";
import { GitHubIcon, LinkedInIcon, TwitterIcon, YouTubeIcon } from "./profileLinks";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const profileUrl = "https://pbs.twimg.com/media/Ey8oK6gXMAUKrEX.jpg";

const RolandTheFrank: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="w-96 px-6 py-6  text-center bg-gray-800 rounded-lg lg:mt-0 xl:px-10">
        <div className="space-y-4 xl:space-y-6 pt-8">
          <Image className="mx-auto rounded-full h-36 w-36" src={profileUrl} alt="author avatar" />
          <div className="space-y-2">
            <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
              <h3 className="text-amber-50">
                <a href="https://en.wikipedia.org/wiki/Roland">Roland The Frank</a>
              </h3>
              <p className="text-indigo-300">Software Engineer</p>
              <div className="flex justify-center mt-5 space-x-5">
                <a
                  href="https://twitter.com/til_wehavefaces"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400"
                >
                  <span className="sr-only">Twitter</span>
                  {TwitterIcon}
                </a>
                <a
                  href="https://github.com/RafaelCaso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400"
                >
                  <span className="sr-only">GitHub</span>
                  {GitHubIcon}
                </a>
                <a
                  href="https://www.linkedin.com/in/adrian-caso-507943227/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400"
                >
                  <span className="sr-only">Linkedin</span>
                  {LinkedInIcon}
                </a>
                <a
                  href="https://www.youtube.com/@DevArcStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400"
                >
                  <span className="sr-only">YouTube</span>
                  {YouTubeIcon}
                </a>
              </div>
              <div className="pt-2">
                <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
              </div>
              <p className="text-amber-50">Have spare SepETH? Send it my way!</p>
              <div className="bg-gray-400">
                <Address address="0xd1B41bE30F980315b8A6b754754aAa299C7abea2" />
              </div>
              <div>
                <p className="text-amber-50">Not a designer!</p>
                <a className="text-indigo-300" href="https://tailwindflex.com/@krishna/profile-card">
                  Profile Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolandTheFrank;
