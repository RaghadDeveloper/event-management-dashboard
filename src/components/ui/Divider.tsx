const Divider = ({ className }: { className?: string }) => {
  if (className === "vertical")
    return <div className="w-[1.5px] h-full bg-primary-500" />;
  else return <div className="w-[90%] h-[1.5px] bg-primary-500" />;
};

export default Divider;
