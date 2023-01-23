import { useEffect, useState } from "react";

const Navbar = ({ childToParent2, childToParent3, childToParent4 }) => {
  const [sidebarClass, setsidebarClass] = useState(
    "sidebar hidden lg:inline-block lg:fixed pt-12 lg:w-2/12 min-h-full py-2 bg-slate-900/70 border-r-slate-600 text-slate-300/80 font-extralight text-sm"
  );
  const [leftContentClass, setleftContentClass] = useState(
    "hidden lg:inline-block"
  );
  const [rightContentClass, setrightContentClass] = useState(
    "min-h-screen w-full lg:w-10/12 p-5 text-slate-400"
  );

  const handleClick = () => {
    if (leftContentClass == "inline-block lg:hidden") {
      setsidebarClass(
        "sidebar hidden lg:inline-block lg:fixed pt-12 lg:w-2/12 min-h-full py-2 bg-slate-900/70 border-r-slate-600 text-slate-300/80 font-extralight text-sm"
      );
      setleftContentClass("hidden lg:inline-block");
      setrightContentClass("min-h-screen w-full lg:w-10/12 p-5 text-slate-400");
    } else {
      setsidebarClass(
        "sidebar inline-block fixed w-5/12 bg-slate-900 z-20 sm:w-4/12 md:w-3/12 min-h-full pt-12 lg:hidden py-2 lg:bg-slate-900/70 border-r-slate-600 text-slate-300/80 font-extralight text-sm"
      );
      setleftContentClass("inline-block lg:hidden");
      setrightContentClass("min-h-screen w-full lg:w-12/12 p-5 text-slate-400");
    }
  };
  // console.log("sidebarClass: ", sidebarClass);
  useEffect(() => {
    childToParent2(sidebarClass);
    childToParent3(leftContentClass);
    childToParent4(rightContentClass);
  }, [sidebarClass]);
  return (
    <div
      className=" z-30 fixed flex items-center w-full h-10 px-6 text-white text-xl
        bg-slate-900 shadow-slate-700"
    >
      <button onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 mx-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      O<span className="text-sky-400">gb</span>a Mobile
    </div>
  );
  function openNav() {
    // document.getElementById("sidebar").classList.add("lg:hidden");
    // console.log("ini a: ", a);
    // document.getElementById("main").style.marginLeft = "250px";
  }
};

export default Navbar;
