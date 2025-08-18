import React from "react";
import Banner from "../../Component/Bannar/Banner";
import { FaArrowUpLong } from "react-icons/fa6";
import Featured from "../../Component/Featured/Featured";
import Contact from "../../Component/Contact/Contact";
import Sidespace from "../../Component/Sidespace/Sidespace";
import BestDonner from "../../Component/BestDonner/BestDonner";
import FAQSection from "../../Component/FAQSection/FAQSection";
import CardSection from "../../Component/CardSection/CardSection";
import ImpactCounters from "../../Component/ImpactCounters/ImpactCounters";
import CTASection from "../../Component/CTASection/CTASection";

const Home = () => {
  return (
    <div className="relative">
      <Banner></Banner>
      <Sidespace>
        <CardSection></CardSection>
        <Featured></Featured>
        <CTASection></CTASection>
        <BestDonner></BestDonner>
        <ImpactCounters></ImpactCounters>
        <Contact></Contact>
        {/* top icon */}
        <section
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed z-20 bottom-5 right-5" // fixed position, layout affect করবে না
        >
          <span className="text-[#D25D5D] hover:bg-[#D25D5D40] transition transform duration-300 p-4 rounded-full cursor-pointer">
            <FaArrowUpLong size={20} />
          </span>
        </section>
      </Sidespace>
    </div>
  );
};

export default Home;
