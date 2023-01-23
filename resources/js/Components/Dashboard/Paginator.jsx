import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from '@inertiajs/inertia-react';

const Paginator = ({ meta }) => {
  console.log('paginatorMeta:', meta);
  const metaLinks = meta.links.slice(1, 1 + meta.links.length - 2);
  console.log('metaLinks:', metaLinks);
  const prev = meta.links[0].url;
  const next = meta.links[meta.links.length - 1].url;
  const current = meta.current_page;

  return (
    <div className="flex items-center justify-center sm:justify-between border-t border-slate-500 px-4 py-3 sm:px-6">
      <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div className='xl:flex-1'>
          <p className="hidden sm:inline-block text-sm text-slate-400/80">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div className='xl:flex-1'>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <Link
              href={prev}
              className="relative inline-flex items-center rounded-l-md border border-slate-500 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50/60 hover:text-gray-700 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-slate-500 text-gray-500 hover:bg-gray-50/60 hover:text-gray-700" */}
            {metaLinks ? metaLinks.map((data, i) => {
              console.log('ini data:', metaLinks[i])

              if (data.active != false) {
                return (
                  <Link key={i}
                    href={data.url}
                    aria-current="page"
                    className="relative inline-flex items-center border border-gray-300 bg-[#285050]  px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-50/60 hover:text-gray-700 focus:z-20">
                    {data.label}
                  </Link>
                )
              } else {
                return (
                  <Link key={i}
                    href={data.url}
                    aria-current="page"
                    className="relative inline-flex items-center border border-slate-500  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50/60 hover:text-gray-700 focus:z-20">
                    {data.label}
                  </Link>)
              }


            }) : <tr>Data Kategori Kosong</tr>}

            <Link
              href={next}
              className="relative inline-flex items-center rounded-r-md border border-slate-500 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50/60 hover:text-gray-700 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
        <div className="hidden xl:inline-block flex-1"></div>
      </div>
    </div>
  )
}

export default Paginator