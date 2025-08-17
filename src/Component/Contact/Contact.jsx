import React, { useEffect } from "react";
import { IoMdStopwatch } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation will fire once
    });
    AOS.refresh(); // <- Important if components load dynamically
  }, []);
  return (
    <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 py-20">
      {/* form */}
      <div data-aos="fade-right">
        <p className="font-semibold text-[#D25D5D]">Contact Us</p>
        <form className="space-y-3">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <fieldset className="fieldset pr-2 pt-2   font-medium">
              <input
                type="text"
                name="requester_name"
                placeholder="User frist Name"
                required
                className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800"
              />
            </fieldset>
            <fieldset className="fieldset pr-2 pt-2  font-medium">
              <input
                type="text"
                name="requester_name"
                placeholder="User Last Name"
                required
                className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset pr-2 pt-2  font-medium">
            <input
              type="text"
              name="requester_name"
              placeholder="Your Email"
              required
              className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800"
            />
          </fieldset>
          <fieldset className="fieldset pr-2 pt-2  font-medium">
            <input
              type="text"
              name="requester_name"
              placeholder="Phone Number"
              required
              className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800"
            />
          </fieldset>
          <fieldset className="fieldset pr-2 pt-2  font-medium">
            <input
              type="text"
              name="requester_name"
              placeholder="Donation Type"
              required
              className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800"
            />
          </fieldset>
          <fieldset className="fieldset pr-2 pt-2  font-medium">
            <textarea
              type="text"
              rows={5}
              name="requester_name"
              placeholder="Donation Type"
              required
              className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800"
            ></textarea>
          </fieldset>
          <button type="button"  onClick={()=>{
            toast.success("Your Info send successfully!")
          }}   className="px-12 py-4 bg-[#D25D5D] text-white rounded transition-colors transform duration-200 hover:bg-[#B9375D] cursor-pointer">
            Continue
          </button>
        </form>
      </div>
      {/* information */}
      <div data-aos="fade-left">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#D25D5D]">
          Your Donation Can Make Someone’s Life Better
        </h2>
        <p className="text-sm text-gray-500 font-medium">
          Your blood donation isn’t just a kind gesture — it’s a lifeline. Every
          drop you give can mean the world to someone fighting for their life.
          You have the power to bring hope, healing, and a second chance. Be the
          reason someone smiles again. Donate blood. Save lives. Every time you
          donate blood, you give more than just a few minutes of your time — you
          give someone a new chance at life. Whether it’s a child battling a
          disease, a mother during childbirth, or an accident victim in urgent
          need, your single act of kindness can be the difference between life
          and death. Blood cannot be manufactured;
        </p>
        <h2 className="text-2xl md:text-3xl py-3 font-bold text-[#403f3f]">
          Opening Hours
        </h2>
        <div className="divider"></div>
        <div className="flex justify-around items-center text-gray-500 ">
          <p>Sunday - Saturday</p>
          <div className="flex gap-1 items-center">
            <span className="text-[#D25D5D]">
              <IoMdStopwatch />{" "}
            </span>
            <p>08.00 AM - 15.00 PM</p>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Contact;
