import Login from "@/Pages/Auth/Login";
import { Link } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

const FrontNavbar = ({ authUser, pegawaiLogin }) => {
  var hash = window.top.location.hash.substr(1);
  const linkactive = window.location.pathname.split("/")[1];
  console.log("auth user: ", authUser);

  if (authUser) {
    const userLoginName = authUser.nama.split(/ (.*)/);
  }
  // console.log("userLoginName: ", userLoginName);

  const [sidebarClass, setsidebarClass] = useState("sidebar hidden");

  const handleClick = () => {
    if (sidebarClass == "sidebar hidden") {
      setsidebarClass(
        "sidebar block fixed w-full sm:hidden left-0 top-14 bg-slate-900 z-20 min-h-6/12 py-2 border-r-slate-600 text-slate-300/80 text-sm"
      );
    } else {
      setsidebarClass("sidebar hidden");
    }
  };

  useEffect(() => {
    console.log("linkActive: ", hash);
  }, [hash]);
  return (
    <div
      className=" z-50 flex fixed top-0 items-center justify-between w-full h-14 px-4 sm:px-4 md:px-12 text-white
          bg-slate-900 shadow-slate-700"
    >
      <div className={sidebarClass}>
        <a href="/#">
          <div
            className={
              "w-full px-6 py-4 text-center hover:bg-slate-800/70 border-t-2 border-slate-800/70 " +
              (!linkactive ? "bg-slate-800/70 text-white" : "")
            }
          >
            Home
          </div>
        </a>
        <a href="/catalog">
          <div
            className={
              "w-full px-6 py-4 text-center hover:bg-slate-800/70 border-t-2 border-slate-800/70 " +
              (linkactive == "catalog" ||
              linkactive == "productDetail" ||
              linkactive == "order" ||
              linkactive == "payment"
                ? "bg-slate-800/70 text-white"
                : "")
            }
          >
            Products
          </div>
        </a>
        <a href="/about">
          <div
            className={
              "w-full px-6 py-4 text-center hover:bg-slate-800/70 border-t-2 border-slate-800/70 " +
              (linkactive == "about" ? "bg-slate-800/70 text-white" : "")
            }
          >
            About
          </div>
        </a>
        <a href="/contact">
          <div
            className={
              "w-full px-6 py-4 text-center hover:bg-slate-800/70 border-t-2 border-slate-800/70 " +
              (linkactive == "contact" ? "bg-slate-800/70 text-white" : "")
            }
          >
            Contact
          </div>
        </a>
      </div>
      <div className="flex items-center">
        <button onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 mx-2 sm:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <Link href="/">
          <div className="text-lg md:text-xl">
            O<span className="text-sky-400">gb</span>a Mobile
          </div>
        </Link>
      </div>
      <div className="frontNav flex justify-between text-slate-300 text-base">
        <a
          href="/#"
          className={
            "hidden sm:inline-block px-2 md:px-4 py-2 hover:text-slate-100 " +
            (!linkactive ? "active" : "")
          }
        >
          Home
        </a>
        <a
          href="/catalog"
          className={
            "hidden sm:inline-block px-2 md:px-4 py-2 hover:text-slate-100 " +
            (linkactive == "catalog" ||
            linkactive == "productDetail" ||
            linkactive == "order" ||
            linkactive == "payment"
              ? "active"
              : "")
          }
        >
          Products
        </a>
        <a
          href="/about"
          className="hidden sm:inline-block px-2 md:px-4 py-2 hover:text-slate-100"
        >
          About
        </a>
        <a
          href="/contact"
          className="hidden sm:inline-block px-2 md:px-4 py-2 hover:text-slate-100"
        >
          Contact
        </a>
        {/* <a
          href="/cart"
          className="px-2 md:px-4 py-2 pl-4 md:pl-6 lg:pl-10  hover:text-slate-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </a> */}

        <div className="dropdown pl-4 md:pl-6 lg:pl-10 py-2 text-center inline-block">
          <a
            href="#"
            className="px-5 drop-btn py-2 border-slate-200 hover:text-slate-100 rounded-full bg-[url('../img/defaultuser-sm.png')] bg-cover bg-center"
          ></a>
          {!authUser ? (
            <div className="dropdown-content">
              <Link href={route("login")}>Login</Link>
              <Link href={route("register")}>Register</Link>
            </div>
          ) : (
            <div className="dropdown-content">
              {pegawaiLogin ? <Link href="/pegawai">Dashboard</Link> : ""}
              <Link href="#">Setting</Link>
              <Link
                href={route("logout")}
                method="post"
                as="button"
                className="text-red-700 text-left -ml-8 py-2"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
        <span className="px-4 py-2 inline-block">
          {authUser ? "Hello, " + userLoginName[0] : ""}
        </span>
      </div>
    </div>
  );
};

export default FrontNavbar;
