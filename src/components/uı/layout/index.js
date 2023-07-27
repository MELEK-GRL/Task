import Header from "../header";
import Footer from "../footer";
import Routers from "../../../routes/Routers";

export default function Layout() {
  return (
    <div className="flex  max-h-[4000px] min-h-[720px] w-full flex-col ">
      <div className="flex justify-between items-center flex-col h-full gap-6 sm:px-4 px-2 ">
        <div className="flex w-full flex-col">
          <Header />
          <Routers />
        </div>
        <Footer />
      </div>
    </div>
  );
}
