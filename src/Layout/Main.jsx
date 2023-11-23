import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <main className="max-w-[1920px] mx-auto">
      <div className="min-h-[95vh]">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
