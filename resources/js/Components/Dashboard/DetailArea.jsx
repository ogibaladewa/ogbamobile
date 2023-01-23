const DetailArea = ({ submit, children, dataName, pageFor }) => {
  return (
    <>
      <div className="mx-auto relative w-full sm:w-3/4 py-6 px-6 sm:px-10 text-center border-slate-700 rounded-md shadow-md bg-[#316956]/30 text-slate-300">
        <h1 className="text-xl font-semibold border-b-2 border-[#3d8383] p-2 mb-4">
          {pageFor} Data {dataName}
        </h1>
        <div className="w-full flex-row lg:flex gap-10">{children}</div>
      </div>
    </>
  );
};

export default DetailArea;
