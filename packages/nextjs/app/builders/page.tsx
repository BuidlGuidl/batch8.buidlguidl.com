"use client";

import React from "react";
import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const BuildersPage = () => {
  const address = "0x4a9A95B6fe3b9416f0c78A8735Aa075c75AF46a4";

  const { data: checkedInnBuilders } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });
  return (
    <div className=" flex flex-col justify-center items-center md:my-20">
      <p className=" text-[22px] font-medium underline">🏰 The Builders 🏗️ of BuidlGuidl: Batch #8 </p>
      <div className=" flex items-center gap-x-2 md:mb-8 mb-5 ">
        <p className=" text-lg font-normal text-[25px]">Builders : </p>
        <p className=" text-lg font-bold text-[24px]">{checkedInnBuilders?.toString()}</p>
      </div>

      <div className=" flex justify-center flex-row flex-wrap gap-x-5 md:mx-[200px]">
        <Link href={`/builders/${address}`}>
          <div className="bg-primary-content text-secondary px-3 py-2 rounded-[10px] my-3">
            <Address address={address} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BuildersPage;
