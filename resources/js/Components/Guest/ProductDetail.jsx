import ProductCard from "./ProductCard";
import ProductCardDetail from "./ProductCardDetail";

const ProductDetail = (props) => {
  //   console.log("ini props di product detail: ", props.selectedProduct);
  return (
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
          {props.produk ? (
            props.produk.map((data, i) => {
              let minHarga = data[i].harga;
              data.map((data, j) => {
                if (minHarga > data.harga) {
                  minHarga = data.harga;
                }
                // console.log("data j: ", data);
              });
              return (
                <ProductCardDetail
                  key={i}
                  dataProduk={data}
                  minHarga={minHarga}
                />
              );
            })
          ) : (
            <span>Data {dataName} kosong</span>
          )}
        </div>
        <div className="xl:w-1/12"></div>
      </div>
    </div>
  );
};

export default ProductDetail;
