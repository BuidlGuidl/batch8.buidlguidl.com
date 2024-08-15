import React from "react";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const MembersList = () => {
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
    <div className=" flex justify-center flex-row flex-wrap gap-x-5 md:mx-[200px]">
      {!MembersList && (
        <div className=" animate-spin text-lg">
          <AiOutlineLoading3Quarters />
        </div>
      )}
      {MembersList?.map((member, i) => {
        return (
          <Link key={i} href={`/builders/${member?.args?.builder}`}>
            <div className="bg-primary-content text-secondary px-3 py-2 rounded-[10px] my-3 shadow-xl">
              <Address address={member?.args?.builder} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MembersList;
