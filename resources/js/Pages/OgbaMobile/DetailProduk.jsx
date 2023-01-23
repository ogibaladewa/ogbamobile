import Footer from "@/Components/Guest/Footer";
import FrontHeader from "@/Components/Guest/FrontHeader";
import FrontNavbar from "@/Components/Guest/FrontNavbar";
import ProductDetail from "@/Components/Guest/ProductDetail";
import Products from "@/Components/Guest/Products";
import { Link, Head } from "@inertiajs/inertia-react";

export default function DetailProduk(props) {
  console.log("props di detail produk:", props);
  return (
    <>
      <Head title={props.title} />
      <div className='w-full min-h-screen bg-[url("../img/dashbg.jpg")] bg-cover bg-fixed'>
        <FrontNavbar authUser={props.auth.user} />
        <ProductDetail produk={props.produk} />
      </div>
      <Footer />
    </>
  );
}
