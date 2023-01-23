import Footer from "@/Components/Guest/Footer";
import FrontHeader from "@/Components/Guest/FrontHeader";
import FrontNavbar from "@/Components/Guest/FrontNavbar";
import Products from "@/Components/Guest/Products";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Catalog(props) {
  console.log("props:", props);
  // document.getElementsByTagName("html").className = "scroll-smooth";
  return (
    <>
      <Head title={props.title} />
      <div className='w-full min-h-screen bg-[url("../img/dashbg.jpg")] bg-cover bg-fixed'>
        <FrontNavbar authUser={props.auth.user} />
        <Products produk={props.produk} />
        <Footer />
      </div>
    </>
  );
}
