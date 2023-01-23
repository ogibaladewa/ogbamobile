import { Link } from "@inertiajs/inertia-react";
import ProductCard from "./ProductCard";

const Products = (props) => {
  console.log("ini props di products: ", props.produk);
  const linkactive = window.location.pathname.split("/")[1];

  return (
    <div
      className="w-full min-h-screen pb-10 px-6 text-white text-xl
              bg-slate-300 shadow-slate-900/80"
    >
      <div className="w-full pt-20 text-center" id="products">
        <h1 className="text-sky-500 text-4xl mb-6">
          Our Products
          {/* {linkactive != "catalog" ? " Latest " : " "} */}
        </h1>
      </div>
      <div className="flex items-center justify-around ">
        <div className="xl:w-1/12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 lg:gap-x-10 xl:gap-x-20 justify-between w-10/12 text-left ">
          {props.produk ? (
            props.produk.map((data, i) => {
              let minHarga = data[0].harga;

              // console.log("xxxxxxxxxxxxxxxxx", minHarga);
              data.map((data, j) => {
                if (minHarga > data.harga) {
                  minHarga = data.harga;
                }
              });
              return (
                <ProductCard key={i} dataProduk={data} minHarga={minHarga} />
              );
            })
          ) : (
            <span>Data {dataName} kosong</span>
          )}
        </div>
        <div className="xl:w-1/12"></div>
      </div>
      <div className="w-full flex justify-center">
        {linkactive != "catalog" ? (
          <Link
            href="/catalog"
            className="inline-block mx-auto mt-10 py-4 px-4 bg-[#398d83]/100 hover:bg-[#398d83]/80 rounded-md text-base sm:text-md"
          >
            View All Products
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Products;
