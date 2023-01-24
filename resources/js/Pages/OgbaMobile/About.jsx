import Footer from "@/Components/Guest/Footer";
import FrontHeader from "@/Components/Guest/FrontHeader";
import FrontNavbar from "@/Components/Guest/FrontNavbar";
import Products from "@/Components/Guest/Products";
import { Link, Head } from "@inertiajs/inertia-react";

export default function About(props) {
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
          className="flex items-center justify-around w-full px-32 pt-32 pb-80 mt-14 text-white text-xl
            bg-slate-900/60 shadow-slate-900/80 shadow-md"
        >
          <div className="xl:w-1/12"></div>
          <div className=" animate-slideBottom text-center w-10/12">
            <h1 className="text-sky-500 text-2xl sm:text-4xl mb-6">About Us</h1>
            <p className="text-slate-300 text-sm sm:text-xl">
              Ogbamobile is a virtual company created only for owner learning in
              developing websites, all smartphone products on Ogbamobile do not
              belong to Ogbamobile but belong to well-known companies such as
              Huawei, Ogbamobile does not take a penny from this website, and no
              real transactions occur here.
            </p>
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
