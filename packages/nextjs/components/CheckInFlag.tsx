import { useAccount } from "wagmi";
import { useIsCheckedIn } from "~~/hooks/scaffold-eth/useIsCheckedIn";

//This is the isCheckedIn is used as flag and also as the address of the deployed checkin contract

export const CheckInFlag = () => {
  const isCheckedIn = useIsCheckedIn();
  const { isConnected } = useAccount();
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className={`font-bold text-lg ${isCheckedIn ? "" : "hidden"}`}>You have successfully checked in🎉</h3>
          <h3 className={`font-bold text-lg ${isCheckedIn ? "hidden" : ""}`}>You have to yet check in 😌</h3>
          <div className={` ${isCheckedIn ? "" : "hidden"}`}>
            <p className="pt-4">You used the below contract to check in</p>
            <p className="">{isCheckedIn}</p>
          </div>

          <div className={` ${isCheckedIn ? "hidden" : ""}`}>
            <p className="py-4">Visit the github issue for the checkIn challenge</p>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
              <a
                className={`btn mx-4 ${isCheckedIn ? "hidden" : ""}`}
                href="https://github.com/BuidlGuidl/batch8.buidlguidl.com/issues/10"
                target="_blank"
              >
                Onwards to checkIn <span className="text-lg">👩🏽‍✈️</span>
              </a>
              <a
                className={`btn mx-4 ${isCheckedIn ? "" : "hidden"}`}
                //Here the is checked provides the address of the deployed contract!!!
                href={`https://optimistic.etherscan.io/address/${isCheckedIn}`}
                target="_blank"
              >
                See on block explorer <span className="text-lg">🕵️‍♂️</span>
              </a>
            </form>
          </div>
        </div>
      </dialog>
      <button
        className={`${isCheckedIn ? "bg-green-600" : "bg-red-500 mr-3"} ${isConnected ? "" : "hidden"} px-3 py-2 sm:py-1.5 rounded-full shadow-xl font-semibold text-sm `}
        onClick={() => openModal("my_modal_1")}
      >
        <span className="hidden sm:inline-block">{isCheckedIn ? "CheckedIn 🎉" : "CheckIn 🤔"}</span>
        <span className="sm:hidden"> {isCheckedIn ? "🎉" : "🤔"}</span>
      </button>
    </div>
  );
};
