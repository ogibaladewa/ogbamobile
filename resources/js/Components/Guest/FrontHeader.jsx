import { Link } from "@inertiajs/inertia-react";

const FrontHeader = () => {
  return (
    <>
      {/* coba git */}

      <div
        className="flex items-center justify-around w-full min-h-[500px] px-6 mt-14 text-white text-xl
            bg-slate-900/60 shadow-slate-900/80 shadow-md"
      >
        <div className="xl:w-1/12"></div>
        <div className=" animate-slideRight text-left w-5/12">
          <h1 className="text-sky-500 text-2xl sm:text-4xl mb-6">
            Bring The World Into Your Hands
          </h1>
          <p className="text-slate-300 text-sm sm:text-xl">
            Let's join OgbaMobile to get the best feeling of holding the world
            in your hands. Let's choose the one that's best for you!
          </p>
          <br></br>
          <a
            href="/#products"
            className="animate-buttonRise px-4 py-2 bg-[#398d83]/60 rounded-md"
          >
            Get Started
          </a>
        </div>
        <div className="lg:mr-12 w-40 sm:w-64 h-[450px]">
          <div
            className=" animate-slideLeft w-full h-[450px] phoneheader bg-[url('../img/phoneheader.png')] bg-contain bg-no-repeat bg-center"
            alt="phone"
          />
        </div>
        <div className="xl:w-1/12"></div>
      </div>
      <div className="relative w-full bg-slate-900/20 bg-bottom bg-cover hue-rotate-[350deg] opacity-90 pb-2">
        <div className="flex flex-wrap justify-center gap-4 pt-12 pb-3 w-full bg-slate-200/0 text-center font-semibold border-sky-500/80 border-b-0 shadow-lg shadow-black/20 group text-md sm:text-lg">
          <div className="w-4/12 md:w-2/12 py-8 rounded-lg border-slate-500/40 border-2 text-slate-400/90 hover:border-slate-300 hover:text-slate-100  hover:bg-slate-500 bg-cover bg-blend-overlay drop-shadow-lg hover:bg-blend-normal bg-slate-900/20">
            <p className="">Outstanding</p>
          </div>
          <div className="w-4/12 md:w-2/12 py-8 rounded-lg border-slate-500/40 border-2 text-slate-400/90 hover:border-slate-300 hover:text-slate-100  hover:bg-[#398d83] bg-cover bg-blend-overlay drop-shadow-lg hover:bg-blend-normal bg-slate-900/20">
            <p className="">Gorgeous</p>
          </div>
          <div className="w-4/12 md:w-2/12 py-8 rounded-lg border-slate-500/40 border-2 text-slate-400/90 hover:border-slate-300 hover:text-slate-100  hover:bg-sky-500 bg-cover bg-blend-overlay drop-shadow-lg hover:bg-blend-normal bg-slate-900/20">
            <p className="">Brilliant</p>
          </div>
          <div className="w-4/12 md:w-2/12 py-8 rounded-lg border-slate-500/40 border-2 text-slate-400/90 hover:border-slate-300 hover:text-slate-100  hover:bg-slate-900 bg-cover bg-blend-overlay drop-shadow-lg hover:bg-blend-normal bg-slate-900/20">
            <p className="">Awesome</p>
          </div>
          <div className="absolute -top-5 py-2 w-2/12 text-slate-300 rounded-md bg-sky-500 mx-auto z-20">
            <h1 className="animate-bounce">Scroll</h1>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-wrap w-full bg-[#398d83]/20 text-center text-xl font-semibold border-slate-900 border-b-2 group">
        <div className="w-2/4 md:w-1/4 py-16 text-sky-500 bg-[url('https://source.unsplash.com/400x200?outstanding-smartphone')] bg-neutral-900 bg-cover bg-blend-overlay drop-shadow-lg hover:bg-blend-normal">
          <p className="">Outstanding</p>
        </div>
        <div className="w-2/4 md:w-1/4 py-16 text-slate-300 bg-[url('https://source.unsplash.com/400x200?gorgeous-smartphone')] bg-slate-900 bg-cover bg-blend-overlay drop-shadow-lg hover:bg-blend-normal">
          Gorgeous
        </div>
        <div className="w-2/4 md:w-1/4 py-16 text-slate-300 md:text-sky-500 bg-[url('https://source.unsplash.com/400x200?brilliant-smartphone')] bg-neutral-900 bg-cover bg-blend-overlay drop-shadow-lg hover:bg-blend-normal">
          Brilliant
        </div>
        <div className="w-2/4 md:w-1/4 py-16 text-sky-500 md:text-slate-300  bg-[url('https://source.unsplash.com/400x200?awesome-smartphone')] bg-slate-900 bg-cover bg-blend-overlay drop-shadow-lg hover:bg-blend-normal">
          Awesome
        </div>
        <div className="absolute left-0 right-0">
          <h1>Scroll</h1>
        </div>
      </div> */}
    </>
  );
};

export default FrontHeader;
