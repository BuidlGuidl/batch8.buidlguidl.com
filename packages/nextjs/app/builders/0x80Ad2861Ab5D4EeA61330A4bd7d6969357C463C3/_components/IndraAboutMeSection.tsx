import React from "react";
import Image from "next/image";
import indraPhoto from "../_assets/indra_photo_600.jpg";

const IndraAboutMeSection: React.FC = () => {
  return (
    <section className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:flex-shrink-0">
          <Image src={indraPhoto} alt="Indra" className="h-48 w-48 object-cover md:w-48 rounded-full" />
        </div>
        <div className="p-8 space-y-4">
          <h2 className="text-3xl font-bold text-center">About Me</h2>
          <p>{`I'm a front-end engineer 🧑‍💻 with full-stack prowess 💪, loving the craft of building useful and delightful products.`}</p>
          <p>{`My expertise spans React ecosystem across the stack, with a keen interest in Web3 technologies.`}</p>
          <p>{`I'm excited about the Ethereum ecosystem and exploring the transformative potential of blockchain technology.`}</p>
        </div>
      </div>
    </section>
  );
};

export default IndraAboutMeSection;
