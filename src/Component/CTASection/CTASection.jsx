import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo action: log email
    console.log("Submitted email:", email);
    setEmail("");
    toast.success("Thank you for subscribing!");
  };
  return (
    <div>
      <section className="bg-[#D25D5D] text-white py-20 px-6 sm:px-12 rounded-xl my-12 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Ready to Make a Difference?
        </h2>

        {/* Motivation / description */}
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Join our blood donation community today and help save lives. Every
          donation counts! Stay updated with upcoming drives and tips by
          subscribing below.
        </p>

        {/* Email subscription form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-full text-black w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-white transition"
          />
          <button
            type="submit"
            className="bg-white text-[#D25D5D] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>

        {/* CTA Button */}
        <div className="mt-10">
          <Link to={"/funding"} className="bg-white text-[#D25D5D] px-10 py-3 rounded-full font-bold hover:bg-gray-200 transition transform hover:scale-105">
            Donate Now ❤️
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
