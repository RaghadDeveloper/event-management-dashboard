import type { Category } from "../types";
// import { CiEdit, CiPower } from "react-icons/ci";

const CategoryCard = ({ category }: { category: Category }) => {
  const { icon, name } = category;

  return (
    <div className="group relative flex flex-col items-center justify-center gap-2 p-6 bg-bg-main rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 transform duration-300 ">
      <img
        src={`assets/icons/${icon}.svg`}
        alt={name}
        className=" w-18 h-18 p-4 bg-bg-secondary/60 rounded-full"
      />
      <p className="text-lg ">{name}</p>

      {/* <div className="flex gap-2 mt-4 absolute top-2 inset-e-5 text-2xl text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
        <CiEdit className="cursor-pointer" />
        <CiPower className="cursor-pointer" />
      </div> */}
    </div>
  );
};

export default CategoryCard;
