import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ children }) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 bg-[url('../img/dashbg.jpg')] bg-cover bg-fixed">
      <div>
        <Link href="/ogbamobile">
          <div className="text-white text-2xl">
            O<span className="text-sky-400">gb</span>a Mobile
          </div>
        </Link>
      </div>

      <div className="w-10/12 sm:max-w-md mt-6 px-6 py-4 bg-white/10 shadow-md overflow-hidden rounded-lg">
        {children}
      </div>
    </div>
  );
}
