import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Main;
