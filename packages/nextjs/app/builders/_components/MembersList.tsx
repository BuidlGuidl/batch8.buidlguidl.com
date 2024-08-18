"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiShareBoxLine } from "react-icons/ri";
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

  // Filtering the list to count the number of builders with a profile page.
  const profileBuildersCount = MembersList?.filter(member => {
    const address = member?.args?.builder;
    return address && builders.includes(address);
  }).length;

  return (
    <>
      <div className=" flex justify-center items-center md:gap-x-10 relative">
        <div className="flex items-center gap-x-2 md:mb-8 mb-5">
          <p className="text-lg font-normal text-[25px] underline">Buildes :</p>
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
        <div className="flex items-center gap-x-2 md:mb-8 mb-5">
          <p className="text-lg font-normal text-[25px] underline">Buildes pages created:</p>
          <p className="text-lg font-bold text-[24px]">
            {loading ? (
              <div className="animate-spin text-lg">
                <AiOutlineLoading3Quarters />
              </div>
            ) : (
              profileBuildersCount?.toString()
            )}
          </p>
        </div>
      </div>
      <div className=" absolute top-[400px]">
        {!MembersList && (
          <div className="animate-spin text-lg">
            <AiOutlineLoading3Quarters />
          </div>
        )}
      </div>
      <div className="md:mx-[200px] overflow-x-auto w-full flex justify-center items-center">
        <table className="w-full sm:w-[80%] lg:w-[50%] border border-black dark:border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="px-8 py-2 sm:px-10 sm:py-3 text-center dark:text-white font-semibold border-l border-black dark:border-gray-300 rounded-tl-lg">
                Addresses
              </th>
              <th className="px-8 py-2 sm:px-10 sm:py-3 text-center dark:text-white font-semibold border-r border-black dark:border-gray-300 rounded-tr-lg">
                Profile Links
              </th>
            </tr>
          </thead>

          <tbody>
            {MembersList?.map((member, i) => {
              const address = member?.args?.builder;
              const isFileSystemAddress = address ? builders.includes(address) : false;
              return (
                <tr
                  key={i}
                  className={
                    i % 2 === 0
                      ? "bg-primary border border-black dark:border-gray-300"
                      : "bg-[#323f61] border border-black dark:border-gray-300 py-3"
                  }
                >
                  <td className="px-8 py-2 sm:px-10 sm:py-4 text-center align-middle">
                    <div className="flex justify-center items-center py-1 sm:py-2 text-black rounded-lg">
                      <div className="bg-white px-3 py-2 rounded-lg">
                        <Address address={address} />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-2 sm:px-10 sm:py-4 text-center align-middle">
                    {isFileSystemAddress ? (
                      <Link
                        href={`/builders/${address}`}
                        className="text-blue-500 underline flex justify-center items-center font-semibold"
                      >
                        View Profile
                        <div>
                          <RiShareBoxLine className="text-lg text-gray-400 opacity-45" />
                        </div>
                      </Link>
                    ) : (
                      <span className="text-red-500 font-semibold">No Profile Page</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MembersList;
