import Footer from "@/Components/Guest/Footer";
import FrontHeader from "@/Components/Guest/FrontHeader";
import FrontNavbar from "@/Components/Guest/FrontNavbar";
import Products from "@/Components/Guest/Products";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Contact(props) {
  console.log("props:", props);
  // document.getElementsByTagName("html").className = "scroll-smooth";
  return (
    <>
      <Head title={props.title} />
      <div className='w-full min-h-screen bg-[url("../img/dashbg.jpg")] bg-cover bg-fixed'>
        <FrontNavbar
          authUser={props.auth.user}
          pegawaiLogin={props.pegawaiLogin}
        />
        <div
          className="flex items-center justify-around w-full px-6 sm:px-10 md:px-32 pt-32 pb-80 mt-14 text-white text-xl
            bg-slate-900/60 shadow-slate-900/80 shadow-md"
        >
          <div className="xl:w-1/12"></div>
          <div className=" animate-slideBottom text-center w-10/12">
            <h1 className="text-sky-500 text-2xl sm:text-4xl mb-6">
              Contact Us
            </h1>
            <div className="flex flex-col xl:flex-row justify-center xl:justify-around gap-10 text-slate-300 text-sm sm:text-xl">
              <div className="w-full md:w-10/12 xl:w-3/12 mx-auto py-32 rounded-lg border-sky-500 border-t-4 shadow-md shadow-black/50 bg-slate-800/30">
                Instagram
                <a
                  href="https://www.instagram.com/ogi_baladewa/"
                  className="block mx-auto w-10/12 px-2 py-1 mt-2 rounded-full border-sky-700/50 border-2 text-sky-500 hover:bg-sky-500 hover:text-white"
                >
                  ogi_baladewa
                </a>
              </div>
              <div className="w-full md:w-10/12 xl:w-4/12 mx-auto  py-32 rounded-lg border-sky-500 border-t-4 shadow-md shadow-black/50 bg-slate-800/30">
                Email
                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=ogibaladewa@gmail.com"
                  className="block mx-auto w-10/12 px-2 py-1 mt-2 rounded-full border-sky-700/50 border-2 text-sky-500 hover:bg-sky-500 hover:text-white"
                >
                  ogibaladewa@gmail.com
                </a>
              </div>
              <div className="w-full md:w-10/12 xl:w-3/12 mx-auto  py-32 rounded-lg border-sky-500 border-t-4 shadow-md shadow-black/50 bg-slate-800/30">
                LinkedIn
                <a
                  href="https://www.linkedin.com/in/cokorda-ogi-baladewa-b91262218/"
                  className="block mx-auto w-10/12 px-2 py-1 mt-2 rounded-full border-sky-700/50 border-2 text-sky-500 hover:bg-sky-500 hover:text-white"
                >
                  Ogi Baladewa
                </a>
              </div>
            </div>
            <br></br>
            <a
              href="/"
              className="animate-buttonRise px-4 py-2 bg-[#398d83]/60 rounded-md"
            >
              Back to Home
            </a>
          </div>
          <div className="xl:w-1/12"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}
