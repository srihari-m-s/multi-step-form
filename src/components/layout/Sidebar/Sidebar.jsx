const PAGES = [
  { page: "1", label: "your info" },
  { page: "2", label: "select plan" },
  { page: "3", label: "add-ons" },
  { page: "4", label: "summary" },
];

export default function Sidebar({ activePage, handlePageClick }) {
  return (
    <aside className="sidebar flex justify-center items-start rounded-xl">
      <div className="flex items-center gap-4 mt-6 lg:flex-col lg:items-start lg:w-full lg:ps-8 lg:gap-8">
        {PAGES.map(({ page, label }, index) => {
          return (
            <button
              type="button"
              className="flex items-center gap-4"
              key={`${index}-${page}`}
              onClick={() => handlePageClick(page)}
              id={page}
            >
              <span
                className={`border rounded-full w-10 h-10 font-primary_bold grid place-items-center ${
                  activePage === page
                    ? "text-black bg-light_blue border-light_blue"
                    : "text-white"
                } `}
              >
                {page}
              </span>

              <div className="grid uppercase  text-left">
                <p className="text-pastel_blue text-sm">STEP {page}</p>
                <p className="text-white font-primary_bold">{label}</p>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
