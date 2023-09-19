import HomeNavbar from "@/components/home/HomeNavbar";
import { Routes, Route } from "react-router-dom";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
const Home = () => {
  return (
    <>
      <h1>EB-3 WORKFORCE SOLUTIONS</h1>
      <HomeNavbar />

      <Routes>
        <Route path="/home/about" element={<About />} />
        <Route path="/home/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default Home;
