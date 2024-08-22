import React from 'react';

const Form = () => {
  return (
    <div className="bg-[#F0F7FF] px-10 py-16 flex justify-center items-start space-x-8">
      <div className="w-1/2">
        <h2 className="text-4xl font-semibold text-[#00A1FF] mb-4">Get in Touch <span className="text-black">with Us!</span></h2>
        <p className="text-lg mb-8">
          For inquiries, support, or more information about ConnectShifts, please fill out the form below. Our team will get back to you as soon as possible.
        </p>
        <div className="flex space-x-4 mb-8">
          <div className="bg-black text-white py-2 px-4 flex items-center space-x-2 rounded-md">
            <span className="material-icons">email</span>
            <span>sales@connectshifts.com</span>
          </div>
          <div className="bg-black text-white py-2 px-4 flex items-center space-x-2 rounded-md">
            <span className="material-icons">phone</span>
            <span>(704) 555-0127</span>
          </div>
        </div>
        <hr className="border-gray-300 mb-8" />
        <p className="text-gray-500 mb-4">Over 22+ software businesses growing with Connect Shift</p>
        <div className="flex flex-wrap gap-4">
          {/* Replace these with actual logos as needed */}
          <span className="text-2xl font-bold opacity-50">* Logoipsum</span>
          <span className="text-2xl font-bold opacity-50">* Logoipsum</span>
          <span className="text-2xl font-bold opacity-50">* Logoipsum</span>
          <span className="text-2xl font-bold opacity-50">* Logoipsum</span>
          <span className="text-2xl font-bold opacity-50">* Logoipsum</span>
          <span className="text-2xl font-bold opacity-50">* Logoipsum</span>
          <span className="text-2xl font-bold opacity-50">* Logoipsum</span>
          
        </div>
      </div>

      <div className="w-1/2 bg-blue- p-8 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="fullName">Full Name*</label>
            <input type="text" id="fullName" className="w-full border border-gray-300 rounded-md p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email*</label>
            <input type="email" id="email" className="w-full border border-gray-300 rounded-md p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
            <input type="text" id="address" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="description">Description*</label>
            <textarea id="description" className="w-full border border-gray-300 rounded-md p-2" rows="4" required></textarea>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="privacyPolicy" className="mr-2" required />
            <label htmlFor="privacyPolicy" className="text-sm">I have read and accept the Privacy & Policy.</label>
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
