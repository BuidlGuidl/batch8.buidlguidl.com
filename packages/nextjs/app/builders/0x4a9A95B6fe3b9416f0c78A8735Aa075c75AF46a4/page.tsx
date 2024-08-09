import React from "react";
import Image from "next/image";
//Icons
import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

const RohanPersonalPage = () => {
  return (
    <div className=" flex justify-center items-center">
      <div>
        <div className=" pt-24 lg:pt-[100px]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-x-[50px] md:mx-[550px]">
            <div className=" w-full">
              <h1 className=" text-[40px] font-bold md:my-[1rem]">Hey! I&apos;m Rohan👋🏼</h1>
              <p className=" text-[14px] md:text-lg p-1 font-semibold w-full text-justify mb-[6px]">
                I started as a front-end developer, and I&apos;ve grown into someone who simply enjoys building
                regardless of the tech stack or language. I enjoy solving complex problems and am eager to dive deeper
                into the Web3 world.
              </p>
              <div className=" flex items-center gap-x-2 -my-3">
                <p>Address :</p>{" "}
                <p className="px-[5px] py-[1px] font-bold rounded-[8px] bg-[#ffff] text-black text-[14px]">
                  0x4a9A95B6fe3b9416f0c78A8735Aa075c75AF46a4
                </p>
              </div>
              <p className=" md:text-lg p-1 text-[17px] w-full text-justify mt-1 mb-3">
                My{" "}
                <a href="https://rohan06.vercel.app/">
                  {" "}
                  <span className=" underline font-bold  hover:text-accent  text-[17px]">Portfolio</span>
                </a>
              </p>

              <div className=" flex items-center justify-center lg:justify-start gap-5 text-[20px] lg:text-[23px] my-1 ">
                <a
                  href={"https://github.com/rohan-ahire06"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-accent duration-300 ease-in-out text-[1.8rem]"
                >
                  <FaGithub />
                </a>
                <a
                  href={"https://github.com/rohan-ahire06"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-accent duration-300 ease-in-out text-[1.8rem]"
                >
                  <RiTwitterXFill />
                </a>
                <a
                  href="mailto:rohanahire006@gmail.com"
                  className=" hover:text-accent duration-300 ease-in-out text-[1.8rem]"
                >
                  <SiGmail />
                </a>
              </div>
            </div>

            <div className=" relative rounded-full overflow-hidden h-auto w-[270px] md:mb-20">
              <Image
                src={"/builders/avatars/0x4a9A95B6fe3b9416f0c78A8735Aa075c75AF46a4.jpg"}
                width={500}
                height={500}
                alt={"mtpic"}
                className=" h-full w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RohanPersonalPage;
