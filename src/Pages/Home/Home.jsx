import React from "react";
import Banner from "../../Component/Bannar/Banner";
import { FaArrowUpLong } from "react-icons/fa6";
import Featured from "../../Component/Featured/Featured";
import Contact from "../../Component/Contact/Contact";

const Home = () => {
  return (
    <div className="relative">
      <Banner></Banner>
      <div className="md:max-w-7xl mx-auto">
        <Featured></Featured>
        <Contact></Contact>
        {/* top icon */}
        <section onClick={()=>window.scrollTo({
            top:0,
            behavior:"smooth"
        })} className="sticky z-20 bottom-20 -left-2 text-black ">
         <span className="text-[#D25D5D90]"> <FaArrowUpLong size={20} /></span>
        </section>
      </div>
    </div>
  );
};

export default Home;
