import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useClearAllNotifications } from "../hooks/useClearAllNotifications";

const ClearAllNotifications = () => {
  const { mutate: clearAll, isPending: clearingAll } =
    useClearAllNotifications();

  return (
    <button
      className="flex items-center place-self-end gap-1 text-primary-500 cursor-pointer hover:underline focus:outline-none disabled:cursor-not-allowed"
      onClick={() => clearAll()}
      disabled={clearingAll}
    >
      <IoCheckmarkDoneOutline size={20} />
      Clear all notifications
    </button>
  );
};

export default ClearAllNotifications;
