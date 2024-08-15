import React from "react";
import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";

const MemberAddress = ({ address }: { address: any }) => {
  return (
    <div>
      <Link href={`/builders/${address}`}>
        <div className="bg-primary-content text-secondary px-3 py-2 rounded-[10px] my-3 shadow-xl">
          <Address address={address} />
        </div>
      </Link>
    </div>
  );
};

export default MemberAddress;
