import Footer from "@/Components/Guest/Footer";
import FrontHeader from "@/Components/Guest/FrontHeader";
import FrontNavbar from "@/Components/Guest/FrontNavbar";
import OrderDetail from "@/Components/Guest/OrderDetail";
import PaymentDetail from "@/Components/Guest/PaymentDetail";
import ProductDetail from "@/Components/Guest/ProductDetail";
import Products from "@/Components/Guest/Products";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Payment(props) {
  console.log("props di detail produk:", props);
  return (
    <>
      <Head title={props.title} />
      <div className='w-full min-h-screen bg-[url("../img/dashbg.jpg")] bg-cover bg-fixed'>
        <FrontNavbar authUser={props.auth.user} />
        <div
          className="w-full min-h-screen pb-10 px-6 text-white text-xl
              bg-slate-300 shadow-slate-900/80"
        >
          <div className="w-full pt-20 text-center" id="products">
            {/* <h1 className="text-sky-500 text-4xl mb-6">Our Products</h1> */}
          </div>
          <div className="flex items-center justify-around ">
            <div className="xl:w-1/12"></div>
            <div className="w-full lg:w-10/12 xl:w-8/12 text-left ">
              <PaymentDetail current_transaksi={props.current_transaksi} />
            </div>
            <div className="xl:w-1/12"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
