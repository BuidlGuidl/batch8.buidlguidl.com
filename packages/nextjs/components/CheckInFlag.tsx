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
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box">
          <h3 className={`font-bold text-xl ${isCheckedIn ? "" : "hidden"}`}>You have successfully checked in🎉</h3>
          <h3 className={`font-bold text-xl ${isCheckedIn ? "hidden" : ""}`}>You have to yet check in 😌</h3>
          <div className={` ${isCheckedIn ? "" : "hidden"}`}>
            <p className="pt-4 mb-1">You used the below contract to check in</p>
            <p className="m-0 font-semibold">{isCheckedIn}</p>
          </div>

          <div className={` ${isCheckedIn ? "hidden" : ""}`}>
            <p className="text-lg">Visit the github issue for the checkIn challenge</p>
          </div>

          <div className="modal-action mt-10">
            <form method="dialog" className="w-full flex justify-between">
              <button className="btn dark:bg-slate-500 dark:text-slate-800 dark:hover:text-slate-900 hover:text-slate-600 dark:hover:bg-slate-400 transition-all border-none text-slate-400">
                Close
              </button>
              <a
                className={`btn  ${isCheckedIn ? "hidden" : ""}`}
                href="https://github.com/BuidlGuidl/batch8.buidlguidl.com/issues/10"
                target="_blank"
              >
                Onwards to checkIn <span className="text-lg">👩🏽‍✈️</span>
              </a>
              <a
                className={`btn ${isCheckedIn ? "" : "hidden"}`}
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
        className={`btn btn-sm border-none ${isCheckedIn ? "dark:bg-emerald-600 bg-emerald-400 dark:hover:bg-emerald-700 hover:bg-emerald-500" : "bg-red-500 dark:hover:bg-red-600"} ${isConnected ? "" : "hidden"} sm:py-1.5 rounded-full shadow-xl font-semibold text-sm transition-all`}
        onClick={() => openModal("my_modal_1")}
      >
        <span className="hidden sm:inline-block">{isCheckedIn ? "CheckedIn 🎉" : "CheckIn 🤔"}</span>
        <span className="sm:hidden"> {isCheckedIn ? "🎉" : "🤔"}</span>
      </button>
    </div>
  );
};
