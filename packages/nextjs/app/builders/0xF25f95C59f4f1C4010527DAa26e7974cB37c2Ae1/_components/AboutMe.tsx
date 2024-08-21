import React from "react";
import Image from "next/image";
import myPhoto from "../_assets/photo_400x400.jpg";

export const AboutMe = () => {
  return (
    <section className="container mx-auto pt-8">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:flex-shrink-0">
          <Image src={myPhoto} alt="My Photo" className="h-48 w-48 object-cover md:w-48 rounded-full" />
        </div>
        <div className="p-8 pb-0 md:pb-8 space-y-4 max-w-2xl md:ml-8">
          <h2 className="text-3xl font-bold text-center">About Me</h2>
          <p>{`I'm a full-stack engineer 🧑‍💻 and love a good game/puzzle 🧩.`}</p>
          <p>{`My coding expertise spans everything from Front-End dev work (Angular, React, Vue, etc.) to C# to Big Data to Security to DevOps and (most recently) Web 3.`}</p>
          <p>{`Current focus is on ZKsync, but I'm excited to learn anything/everything about the Ethereum ecosystem 🙌!`}</p>
        </div>
      </div>
    </section>
  );
};
