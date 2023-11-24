import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-[1920px] mx-auto dark:bg-slate-800">
      <ScrollRestoration />
      <div className="min-h-[95vh]">
        <Navbar />
        <div className="max-w-7xl mx-auto p-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
