import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    question: "Who can donate blood?",
    answer:
      "Any healthy person aged between 18 and 60 years with a weight of 50kg or more can donate blood. However, people with major illnesses or recent surgeries should consult a doctor before donating.",
  },
  {
    question: "How often can someone donate blood?",
    answer:
      "Men can safely donate every 3 months, and women can donate every 4 months. This time allows the body to fully restore the donated blood.",
  },
  {
    question: "Does donating blood harm the body?",
    answer:
      "No, donating blood does not harm the body. In fact, it helps generate new blood cells and keeps the body healthier. After donating, just take some rest and drink water or juice to feel normal again.",
  },
];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="max-w-3xl mx-auto my-12 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-red-600">
        ❓ Frequently Asked Questions
      </h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b py-4 cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            {openIndex === index ? (
              <FaChevronUp  className="text-red-500" />
            ) : (
              <FaChevronDown  className="text-red-500" />
            )}
          </div>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
