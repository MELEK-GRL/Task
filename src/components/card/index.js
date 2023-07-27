export default function index({ fetchedData, search }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 z-0 xl:grid-cols-6 gap-2 border sm:gap-4 shadow-lg px-4 py-4 scrollBarSmall">
      {fetchedData.data &&
        fetchedData.data.rest[0].operation
          .slice("[]")
          .filter((item) => item.name.toLowerCase().includes(search))
          .map((x, i) => (
            <div
              key={i}
              className="bg-gray-400 text-white rounded-md p-2 text-sm w-full z-10"
            >
              <div className="w-full h-full group relative flex items-center justify-center shadow-sm">
                <div className=" truncate whitespace-nowrap overflow-hidden w-full h-full flex items-center justify-center text-sm text-white ">
                  {x.name}
                </div>
               
                <span className="absolute  bottom-0 flex scale-0 z-40 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  ✨ {x.documentation}
                </span>
              </div>
            </div>
          ))}
    </div>
  );
}
