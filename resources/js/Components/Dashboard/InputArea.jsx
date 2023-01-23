const InputArea = ({ submit, children, dataName, pageFor }) => {
  // console.log('content:', content)
  // console.log('meta:', meta)
  // console.log("data submit :", submit);
  return (
    <>
      {/* <div className="bg-slate-900/70 min-h-screen rounded-lg px-2 sm:px-4 py-4 flex justify-center"> */}
      <div className="mx-auto relative w-full sm:w-3/4 py-6 px-6 sm:px-10 text-center border-slate-700 rounded-md shadow-md bg-[#316956]/30 text-slate-300">
        <h1 className="text-xl font-semibold border-b-2 border-[#3d8383] p-2 mb-4">
          {pageFor} Data {dataName}
        </h1>
        <form onSubmit={submit} className="w-full">
          {children}
          {/* <div className="w-full flex flex-col mb-4 sm:flex-row items-start sm:justify-around">
            <label htmlFor="nama_kategori">Nama Kategori :</label>
            <input
              type="text"
              className="w-full sm:w-7/12 h-8 rounded-md border-b-2 border-[#285050] bg-slate-200/30 focus:ring-2 focus:ring-[#3e8f8a]"
            ></input>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default InputArea;
