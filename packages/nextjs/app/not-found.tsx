import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className=" text-center">
      <div className="  h-[500px] md:w-auto my-[100px]">
        <Image alt=" 404image" src={"/404.svg"} height={300} width={300} className=" overflow-hidden h-full w-full" />
        <p className=" text-sm font-light">
          Go back to the{" "}
          <Link href={"/"}>
            {" "}
            <span className=" font-normal underline text-primary-content text-base">Home Page</span>{" "}
          </Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default NotFound;
