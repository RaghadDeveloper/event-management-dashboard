import { FaStar } from "react-icons/fa";
import type { Review } from "../types";
import { formatDate } from "../../../utils/helpers";

const ReviewCard = ({ review }: { review: Review }) => {
  const { user, rating, comment, created_at } = review;
  return (
    <div className="flex flex-col gap-2 px-3 border-b border-tertiary pb-4 last:border-none last:pb-0">
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 justify-between items-end">
          <h6 className="text-lg font-semibold">{user.name}</h6>
          <span className="text-sm text-neutral-500">
            {formatDate(created_at.split("T")[0])}
          </span>
        </div>
        <div className="flex gap-1 text-lg items-center">
          {Array.from({ length: rating }, (_, index) => (
            <FaStar key={index} className="text-yellow-400" />
          ))}
        </div>
      </div>

      <p className="px-3">{comment}</p>
    </div>
  );
};

export default ReviewCard;
