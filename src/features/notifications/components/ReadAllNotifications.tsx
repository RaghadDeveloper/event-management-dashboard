import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useReadAllNotifications } from "../hooks/useReadAllNotifications";

const ReadAllNotifications = () => {
  const { mutate: markAllAsRead, isPending: markingAllAsRead } =
    useReadAllNotifications();

  return (
    <button
      className="flex items-center place-self-end gap-1 text-primary-500 cursor-pointer hover:underline focus:outline-none disabled:cursor-not-allowed"
      onClick={() => markAllAsRead()}
      disabled={markingAllAsRead}
    >
      <IoCheckmarkDoneOutline size={20} />
      Mark all as read
    </button>
  );
};

export default ReadAllNotifications;
