import { useAccount } from "wagmi";
import { useIsCheckedIn } from "~~/hooks/scaffold-eth/useIsCheckedIn";

export const CheckInFlag = () => {
  const isCheckedIn = useIsCheckedIn();
  const { isConnected } = useAccount();
  return (
    <button
      className={`${isCheckedIn ? "bg-green-600" : "bg-red-500 mr-3"} ${isConnected ? "" : "hidden"} px-3 py-2 sm:py-1.5 rounded-full shadow-xl font-semibold text-sm `}
      onClick={() =>
        isCheckedIn
          ? alert(`You have checkedIn using the contract shown below ${isCheckedIn}`)
          : window.open("https://github.com/BuidlGuidl/batch8.buidlguidl.com/issues/10", "_blank")
      }
    >
      <span className="hidden sm:inline-block">{isCheckedIn ? "CheckedIn 🎉" : "CheckIn 🤔"}</span>
      <span className="sm:hidden"> {isCheckedIn ? "🎉" : "🤔"}</span>
    </button>
  );
};
