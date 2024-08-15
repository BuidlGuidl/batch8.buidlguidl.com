import React from "react";
import MemberAddress from "./MemberAddress";
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
      {MembersList?.map((member, i) => {
        return <MemberAddress key={i} address={member.args.builder} />;
      })}
    </div>
  );
};

export default MembersList;
