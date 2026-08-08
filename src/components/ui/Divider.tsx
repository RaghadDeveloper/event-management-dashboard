const Divider = ({ className }: { className?: string }) => {
  if (className === "vertical")
    return <div className="w-px h-full bg-primary-400" />;
  else return <div className="w-[90%] h-px bg-primary-400" />;
};

export default Divider;
