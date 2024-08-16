import React from "react";
import MembersList from "./_components/MembersList";
import fs from "fs/promises";
import path from "path";

// Getting teh buildres dir. data
const getBuildersData = async () => {
  const buildersDirectory = path.join(process.cwd(), "/app/builders");
  const builderFiles = await fs.readdir(buildersDirectory);
  return builderFiles.filter(file => file !== "page.tsx").map(file => file.replace(".tsx", ""));
};

const BuildersPage = async () => {
  const builders = await getBuildersData();
  return (
    <div className=" flex flex-col justify-center items-center md:my-20">
      <p className=" text-[22px] font-medium underline">🏰 The Builders 🏗️ of BuidlGuidl: Batch #8 </p>
      <MembersList builders={builders} />
    </div>
  );
};

export default BuildersPage;
