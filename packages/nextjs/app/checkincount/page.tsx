import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const CheckInCount = () => {
  const { data: checkedIn } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  const result = Number(checkedIn);

  // while useScaffoldReadContract is fetching data from smart contract, checkedIn will equal NaN. Used boolean check to render appropriately in simple way
  return (
    <>
      {Number.isNaN(result) ? (
        <span className="font-bold">Checked in builders count: ...</span>
      ) : (
        <span className="font-bold">Checked in builders count: {result}</span>
      )}
    </>
  );
};

export default CheckInCount;
