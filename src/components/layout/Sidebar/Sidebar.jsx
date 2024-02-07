const PAGES = ["1", "2", "3", "4"];

export default function Sidebar({ activePage, handlePageClick }) {
  return (
    <aside className="sidebar flex justify-center items-start">
      <div className="flex items-center gap-4 mt-6">
        {PAGES.map((page, index) => {
          return (
            <button
              type="button"
              key={`${index}-${page}`}
              className={`border rounded-full w-10 h-10 font-primary_bold ${
                activePage === page
                  ? "text-black bg-light_blue border-light_blue"
                  : "text-white"
              } `}
              id={page}
              onClick={handlePageClick}
            >
              {page}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
