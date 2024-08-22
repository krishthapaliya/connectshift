import React from "react";
import FAQSection from "./FAQSection";
import Form from "./Form";

const Pricing = () => {
  return (
    <div>
      <div className="px-40">
        <div className="flex flex-col gap-4 text-center items-center">
          <h1 className="text-3xl font-bold">
            Simple, Transparent <span>Pricing for everyone</span>
          </h1>
          <p className="opacity-55">
            Explore flexible pricing options designed to meet the unique needs
            of your <br />
            business, with scalable plans and transparent costs.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex transition-transform duration-500 hover:border-blue-400 hover:scale-105 flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Basic-Tier
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Essential tools for small teams to manage shifts.
              </p>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                $3
                <span className="text-sm font-normal text-gray-600">
                  {" "}
                  per user
                  <br />
                  billed annually
                </span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✔ Employee Scheduling</li>
                <li>✔ Shift Details</li>
                <li>✔ Community Access</li>
                <li>✔ Announcement Feed</li>
                <li>✔ Task Management</li>
                <li>✔ 24/7 Email Support</li>
              </ul>
              <button className="mt-auto bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                Get Started
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex transition-transform duration-500 hover:border-blue-400 hover:scale-105 flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mid-Tier
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Advanced features for growing businesses and teams.
              </p>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                $6
                <span className="text-sm font-normal text-gray-600">
                  {" "}
                  per user
                  <br />
                  billed annually
                </span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✔ All Basic Tier features included+</li>
                <li>✔ Shift Claiming</li>
                <li>✔ Clock-in and Out</li>
                <li>✔ Leave Management</li>
                <li>✔ Payroll Integration</li>
                <li>✔ Geo-fencing</li>
                <li>✔ 24/7 Email Support</li>
              </ul>
              <button className="mt-auto bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
                Get Started
              </button>
            </div>
            <div className="bg-white border transition-transform duration-500 hover:border-blue-400 hover:scale-105 rounded-lg p-6 flex flex-col shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advance Tier
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Comprehensive tools for large organizations and full
                integration.
              </p>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                $8
                <span className="text-sm font-normal text-gray-600">
                  {" "}
                  per user
                  <br />
                  billed annually
                </span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✔ All Mid-tier features included+</li>
                <li>✔ Announcement Feed</li>
                <li>✔ Task Management</li>
                <li>✔ 24/7 Email Support</li>
                <li>✔ Reporting</li>
                <li>✔ Digital Signature</li>
                <li>✔ Geo-fencing</li>
              </ul>
              <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Get Started
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex transition-transform duration-500 hover:border-blue-400 hover:scale-105 flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enterprise plan
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Tailored solutions with dedicated support and customization.
              </p>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                $6
                <span className="text-sm font-normal text-gray-600">
                  {" "}
                  per user
                  <br />
                  billed annually
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Contact us for pricing and features for 100+ Users.
              </p>
              <button className="mt-auto bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition mb-4">
                Get Started
              </button>
              <button className="border border-orange-500 text-orange-500 py-2 px-4 rounded hover:bg-orange-50 transition">
                Contact Sales
              </button>
            </div>
          </div>
          <p className="text-center text-sm text-orange-400 mt-8">
            Enjoy Free 14-day trial, no credit details required.
          </p>
        </div>
      </div>
      <FAQSection />
      <Form />
    </div>
  );
};

export default Pricing;
