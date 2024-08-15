"use client";

import React from "react";
import MembersList from "./_components/MembersList";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const BuildersPage = () => {
  const { data: checkedInnBuilders, isLoading: loading } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });
  return (
    <div className=" flex flex-col justify-center items-center md:my-20">
      <p className=" text-[22px] font-medium underline">🏰 The Builders 🏗️ of BuidlGuidl: Batch #8 </p>
      <div className=" flex items-center gap-x-2 md:mb-8 mb-5 ">
        <p className=" text-lg font-normal text-[25px]">Builders : </p>
        <p className=" text-lg font-bold text-[24px]">
          {loading ? (
            <div className=" animate-spin text-lg">
              <AiOutlineLoading3Quarters />
            </div>
          ) : (
            checkedInnBuilders?.toString()
          )}
        </p>
      </div>

      <MembersList />
    </div>
  );
};

export default BuildersPage;
