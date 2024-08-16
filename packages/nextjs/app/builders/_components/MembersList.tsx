"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory, useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const MembersList = ({ builders }: { builders: string[] }) => {
  // Getting the list of builders who have completed their check-in.
  const { data: checkedInnBuilders, isLoading: loading } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  // Getting the list of builders' address list who have completed their check-in.
  const { data: MembersList } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    blockData: true,
    fromBlock: 123753708n - 123506774n,
    transactionData: true,
    receiptData: true,
  });
  console.log("list", MembersList);

  return (
    <>
      <div className="flex items-center gap-x-2 md:mb-8 mb-5">
        <p className="text-lg font-normal text-[25px]">Builders :</p>
        <p className="text-lg font-bold text-[24px]">
          {loading ? (
            <div className="animate-spin text-lg">
              <AiOutlineLoading3Quarters />
            </div>
          ) : (
            checkedInnBuilders?.toString()
          )}
        </p>
      </div>

      <div className="flex justify-center flex-row flex-wrap gap-x-5 md:mx-[200px]">
        {!MembersList && (
          <div className="animate-spin text-lg">
            <AiOutlineLoading3Quarters />
          </div>
        )}

        {MembersList?.map((member, i) => {
          const address = member?.args?.builder;
          const isFileSystemAddress = address ? builders.includes(address) : false;
          return (
            <Link
              className={`${!isFileSystemAddress && "opacity-40 shadow-none pointer-events-none"}`}
              key={i}
              href={isFileSystemAddress ? `/builders/${address}` : "#"}
              passHref={!isFileSystemAddress}
            >
              <div
                className={`bg-primary-content text-secondary px-3 py-2 rounded-[10px] my-3 shadow-xl `}
                style={{
                  pointerEvents: isFileSystemAddress ? "auto" : "none",
                }}
              >
                <Address address={address} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MembersList;
