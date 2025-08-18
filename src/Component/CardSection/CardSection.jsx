import React from "react";
import {
  FaRunning,
  FaHeartbeat,
  FaHandsHelping,
  FaClinicMedical,
} from "react-icons/fa";

const CardSection = () => {
  const cards = [
    {
      icon: <FaRunning className="text-[#D25D5D] w-10 h-10 animate-bounce" />,
      title: "Save Lives",
      description:
        "By donating blood, you directly save lives of patients in critical conditions. Every single donation can help multiple people survive emergencies, surgeries, or chronic illnesses. Your small effort can make a huge difference.",
    },
    {
      icon: <FaHeartbeat className="text-[#D25D5D] w-10 h-10 animate-pulse" />,
      title: "Healthy Donors",
      description:
        "Regular blood donation promotes the creation of new blood cells and maintains healthy circulation. Donors often experience a sense of fulfillment and pride knowing they are actively contributing to saving lives.",
    },
    {
      icon: (
        <FaHandsHelping className="text-[#D25D5D] w-10 h-10 animate-bounce" />
      ),
      title: "Support Patients",
      description:
        "Many patients depend on timely blood donations for survival. By joining our donor community, you help hospitals maintain adequate blood supply, giving hope to those in need and their families during emergencies.",
    },
    {
      icon: (
        <FaClinicMedical className="text-[#D25D5D] w-10 h-10 animate-pulse" />
      ),
      title: "Medical Safety",
      description:
        "All blood donations follow strict medical guidelines to ensure safety for both donors and recipients. Our partnered hospitals and trained staff guarantee a smooth, hygienic, and secure donation process every time.",
    },
  ];
  return (
    <div>
      <section className=" mx-auto my-12 ">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-10 text-[#D25D5D]">
          Why You Should Donate Blood
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-4 gap-6">
          {cards?.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center"
            >
              <div className="mb-4 flex justify-center">{card?.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card?.title}</h3>
              <p className="text-g[#D25D5D] text-sm">{card?.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardSection;
