export default function Search({ setSearch, searchPressed }) {
  return (
    <form>
    <div className=" shadow-md p-2 flex items-center justify-center">
      <div className="relative  flex w-full flex-wrap items-stretch">
        <input
        onChange={(e)=>setSearch(e.target.value)}
          type="search"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon3"
        />

        <button
        className="relative bg-gray-700 text-white z-[2] rounded-r border-2 border-primary px-6 py-2 text-sm font-medium  text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 hover:text-gray-700 hover:font-bold focus:outline-none focus:ring-0"
          type="button"
          id="button-addon3"
          data-te-ripple-init
        >
          Search
        </button>
      </div>
    </div>
  </form>
  );
}
