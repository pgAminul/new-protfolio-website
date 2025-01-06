import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Error from "../Pages/Error";
import Home from "../Layout/Home";
import RouteAbout from "../Pages/RouteAbout";
import Footer from "../Layout/Footer";
export default function Router() {
  return (
    <BrowserRouter>
      <div className="h-[60px]">
        <Navbar />
      </div>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<RouteAbout />} />
      </Routes>

      <div className="bg-black py-2">
        <Footer />
      </div>
    </BrowserRouter>
  );
}
