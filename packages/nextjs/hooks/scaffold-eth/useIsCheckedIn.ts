import { useScaffoldReadContract } from "./useScaffoldReadContract";
import { useAccount } from "wagmi";

export const useIsCheckedIn = () => {
  const { address } = useAccount();
  const { data } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address],
  });
  if (data == "0x0000000000000000000000000000000000000000") {
    return false;
  }
  return data;
};
