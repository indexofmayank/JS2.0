import React from "react";
import MyCarousel from "../components/Carousels";
import AboutUs from "../components/AboutUs"; 
import AtlLabs from "./AtlLabs";
import DigitalPaltfrom from "./DigitalPaltfrom";
import Footer from "../components/Footer";
import Acheivements from "./Acheivements";

function Home() {
    return (
       <div>
         <MyCarousel />
            <AboutUs />
         <AtlLabs />
         <DigitalPaltfrom />
         <Acheivements />
         <Footer />
       </div>
    );
}

export default Home;

