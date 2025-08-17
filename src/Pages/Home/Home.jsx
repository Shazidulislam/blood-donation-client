import React from "react";
import Banner from "../../Component/Bannar/Banner";
import { FaArrowUpLong } from "react-icons/fa6";
import Featured from "../../Component/Featured/Featured";
import Contact from "../../Component/Contact/Contact";
import Sidespace from "../../Component/Sidespace/Sidespace";

const Home = () => {
  return (
    <div className="relative">
      <Banner></Banner>
      <Sidespace>
        <Featured></Featured>
        <Contact></Contact>
        {/* top icon */}
        <section onClick={()=>window.scrollTo({
            top:0,
            behavior:"smooth"
        })} className="sticky z-20 bottom-20 -left-2 text-black ">
         <span className="text-[#D25D5D] hover:bg-[#D25D5D40] transition transform duration-300 p-4 rounded-full"> <FaArrowUpLong size={20} /></span>
        </section>
      </Sidespace>
    </div>
  );
};

export default Home;
