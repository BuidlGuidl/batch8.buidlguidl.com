import { useScaffoldReadContract } from "./useScaffoldReadContract";
import { useAccount } from "wagmi";

//Checks whether they are a member of batch 8!
export const useCheckIsMember = () => {
  const { address } = useAccount();
  const { data } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address],
  });

  return data;
};
