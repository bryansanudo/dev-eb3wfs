import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/components/home/Home";
import Companies from "@/components/companies/Companies";
import Employees from "@/components/employees/Employees";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />

          <Route path="companies" element={<Companies />} />
          <Route path="employees" element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
