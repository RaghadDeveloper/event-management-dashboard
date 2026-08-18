const Loader = ({ overlay }: { overlay?: boolean }) => {
  return (
    <div
      className={`absolute z-20 flex items-center justify-center  ${
        overlay ? "bg-slate-200/20 backdrop-blur-xs inset-0 top-0 " : "top-1/2 left-1/2 -translate-x-1/2 w-translate-y-1/2"
      } `}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
