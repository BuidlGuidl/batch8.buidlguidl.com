import { useEffect, useState } from "react";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const CheckInCount = () => {
  const [feedback, setFeedback] = useState<string>("");
  const [result, setResult] = useState<string>();

  const {
    data: checkedIn,
    isLoading: checkInLoading,
    error: checkInError,
  } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  useEffect(() => {
    if (checkInError) {
      setFeedback("Something went wrong");
      console.error(checkInError);
    } else {
      setResult(checkInLoading ? "..." : String(Number(checkedIn)));
    }
  });

  return (
    <>
      <span className="font-bold">Checked in builders count: {result}</span>
      {feedback && <p>{feedback}</p>}
    </>
  );
};

export default CheckInCount;
