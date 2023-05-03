import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "../src/pages/Home";
import AtlLabs from "./pages/AtlLabs";
import DigitalPaltfrom from "./pages/DigitalPaltfrom";
import Acheivements from "./pages/Acheivements";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/atllabs" element={<AtlLabs />} />
          <Route path="/digitalPaltfrom" element={<DigitalPaltfrom />} />
          <Route path="/acheivements" element={<Acheivements />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
