import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 hover:bg-blue-100 py-4">
      <button
        className="w-full text-left flex justify-between items-center "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-xl ">{isOpen ? "▾" : "▸"}</span>
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is geo-fencing and how does it work in ConnectShifts?",
      answer:
        "Geo-fencing is a technology that uses GPS or RFID to create virtual boundaries around a specific geographic area. When a device enters or exits this predefined area, it triggers a response, such as sending notifications or recording the event.",
    },
    {
        question: "What is geo-fencing and how does it work in ConnectShifts?",
        answer:
          "Geo-fencing is a technology that uses GPS or RFID to create virtual boundaries around a specific geographic area. When a device enters or exits this predefined area, it triggers a response, such as sending notifications or recording the event.",
    },
    {
        question: "What is geo-fencing and how does it work in ConnectShifts?",
        answer:
          "Geo-fencing is a technology that uses GPS or RFID to create virtual boundaries around a specific geographic area. When a device enters or exits this predefined area, it triggers a response, such as sending notifications or recording the event.",
    },
    {
        question: "What is geo-fencing and how does it work in ConnectShifts?",
        answer:
          "Geo-fencing is a technology that uses GPS or RFID to create virtual boundaries around a specific geographic area. When a device enters or exits this predefined area, it triggers a response, such as sending notifications or recording the event.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">FAQs</h2>
      <p className="text-center text-gray-500 mb-8">
        Have a question? We're here to help.
      </p>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <div className=" text-center border border-blue-200 flex flex-row justify-between  px-3 py-3 shadow-blue-400 shadow-lg  ">
       <div className="flex flex-col text-left"> <p className="text-lg font-medium ">Still have questions?</p>
        <p className="text-gray-500 text-xs">
          Reach out to our support team for personalized assistance and further
          information.
        </p></div>
        <button className=" bg-white  px-3  rounded-xl border ">
          Contact Us →
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
