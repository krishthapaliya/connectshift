import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../../assets/image/Img.png";
import Clockin from "../../assets/icons/Clockin.png";
import notification from "../../assets/image/Notification.png"
import Takeabreak from "../../assets/icons/Takeabreak.png";
import Resume from "../../assets/icons/Resume.png";
import Clockout from "../../assets/icons/Clockout.png";
import seamless from "../../assets/image/Seamless.png";
import jobdetails from '../../assets/image/Jobdetails.png'
import userlist from '../../assets/image/Userlist.png'
import skyler from '../../assets/image/Skyler.png'
import allyourneed from '../../assets/image/Allyourneed.png'
import timesheet from '../../assets/image/Timesheet.png'
import Form from "./Form";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-l from-blue-100 to-white to-pink-100">
        <div className=" ">
          <h1 className="text-center font-bold text-6xl pt-28">
            Connecting Shifts,
            <br /> Connecting People.
          </h1>
        </div>
        <div>
          <p className="text-center text-lg mt-10 opacity-70">
            ConnectShift is your all-in-one solution, making workforce
            management <br />
            seamless and effortlessly connecting teams with ease across all
            industries
          </p>
        </div>
        <div className="flex gap-[30px] items-center justify-center mt-10">
          <Link to="/Startfree">
            <button className="bg-[#00A1FF] text-white rounded-lg px-4 py-2  ">
              Get Started for Free
            </button>
          </Link>
          <Link to="/Signin">
            <button
              className="
          px-4 py-2"
            >
              Sign in now
            </button>
          </Link>
        </div>
        <div>
          <p className="text-center opacity-60 mt-5">
            Enjoy free 14 Days trial. No credit card required.
          </p>
        </div>
        <div className="flex justify-center px-20">
          <img src={heroimg} alt="logo" className="" />
        </div>
      </div>
      ;
      <div>
        <div>
          <h1 className="text-center text-lg font-lg pt-10">
            Over 22+ software businesses growing with Connect Shift
          </h1>
        </div>
        <div className="justify-center ">
          <ul className="flex flex-row justify-center gap-24 text-2xl font-bold opacity-25 pt-9">
            <li>* Logoipsum</li>
            <li>* Logoipsum</li>
            <li>* Logoipsum</li>
            <li>* Logoipsum</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-row justify-center gap-24 text-2xl font-bold opacity-25 pt-10 mb-10">
            <li>* Logoipsum</li>
            <li>* Logoipsum</li>
            <li>* Logoipsum</li>
            <li>* Logoipsum</li>
            <li>* Logoipsum</li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-col gap-5 ">
        <div className="flex items-center justify-center">
          <p className="rounded-xl w-fit flex items-center border-black border justify-center px-2 py-1">
            🟢 How it Works?
          </p>
        </div>
        <div>
          <h1 className="text-center font-bold text-2xl">
            Your Day ,Perfectly Tracked
          </h1>
        </div>
        <div>
          <p className="text-center opacity-70">
            With ConnectShift, your entire workday is effortlessly tracked from
            start to finish. Whether you're <br />
            clocking in, taking a break, or clocking out, we've got every moment
            covered so you can focus on what really matters.
          </p>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="px-24 flex justify-center gap-44 items-`center text-center py-10 ">
          <div className="flex flex-col items-center gap-3">
            <img src={Clockin} alt="clockin" />
            <p className="text-xl font-bold">Clock-in</p>
            <p>
              Effortless clock-ins with
              <br /> geo-fencing security
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={Takeabreak} alt="Takeabreak" />
            <p className="text-xl font-bold">Take a break</p>
            <p>
              Effortless clock-ins with
              <br /> geo-fencing security
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={Resume} alt="Resume" />
            <p className="text-xl font-bold">Resume</p>
            <p>
              Effortless clock-ins with
              <br /> geo-fencing security
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={Clockout} alt="Clockout" />
            <p className="text-xl font-bold">Clock-Out</p>
            <p>
              Effortless clock-ins with
              <br /> geo-fencing security
            </p>
          </div>
        </div>
      </div>
      <div className="px-40">
        <div className="flex flex-col gap-7 mt-16">
          <div className="flex items-center justify-center">
            <p className="rounded-xl w-fit flex items-center border-black border justify-center px-2 py-1">
              🟢 Key features
            </p>
          </div>
          <div>
            <h1 className="text-center font-bold text-2xl">
              Focused Features, Zero Clutter
            </h1>
          </div>
          <div>
            <p className="text-center opacity-70">
              Enjoy real-time updates, easy shift management, and accurate time
              tracking—
              <br />
              all designed to keep your workflow smooth and clutter-free.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-8">
        <div className="w-[384px] h-[320px] bg-slate-50 px-3  flex flex-col gap-2 pl-8 rounded-lg border border-1">
            <h1 className="text-xl font-bold pt-9">
              Seamless <span className="text-blue-400">Xero</span> Integration
            </h1>
            <p>
              Simplify your accounting process with seamless Xero sync for
              accurate and efficient records.
            </p>
            <img src={seamless} alt="seamless" />
          </div>
          <div className="w-[790px] h-[320px]  bg-[#FDEBD0] relative px-10  rounded-lg overflow-hidden border border-1">
            <div className="w-[309px]">
              
              <h1 className="text-xl font-bold pt-6 mb-10">
                Available on Multiple <br />
                Platforms
              </h1>
              <p>
                ConnectShift is available on all major platforms—desktop,
                mobile, and tablet—so you can stay connected and productive
                whether you're at your desk or on the go.
              </p>
              <button className="bg-white mt-16 px-4 py-1 rounded-md">Explore now →</button>
              <img src={jobdetails} alt="jobdetails" className="absolute top-[73px] left-[376px] rounded-lg "/>
              <img src={userlist} alt="userlist" className="absolute top-[40px] left-[466px] rounded-xl w-[320.38px] h-[360px] "/>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4 ">
        <div className="w-[384px] h-[320px] bg-slate-50 px-3  flex flex-col gap-2 pl-8 rounded-lg border border-1">
           
            <img src={skyler}  className="pt-8" alt="seamless" />
            <h1 className="text-sm font-bold text-blue-400">
              Reach maximum
            </h1>
            <p className="text-xs  opacity-50 mt-2">
            Builds connections, invites conversations, and helps users support each other and share insights.
            </p>
          </div>
          <div className="w-[384px] h-[320px] bg-slate-50 px-3  flex flex-col gap-2 pl-8 rounded-lg border border-1 relative">
            <h1 className="text-xl font-bold pt-9">
              All Your Needs,  <span className="text-blue-400">One Place.</span> 
            </h1>
            <ul  className=" opacity-50 pt-4">
              <li>✔ Easy Job Posting</li>
              <li>✔ Timesheet Management</li>
              <li>✔ Multi-Platform Availability</li>
              <li>✔ Community Engagement</li>
            </ul>
            <button className="bg-white rounded-md mt-16 px-2 w-32 h-8 border border-2">Learn more →</button>
            <img src={allyourneed} alt="seamless" className="absolute right-0 h-48 bottom-0" />
          </div>
          <div className="w-[384px] h-[320px] bg-slate-50 px-3  flex flex-col gap-2 pl-8 rounded-lg border border-1">
            <h1 className="text-xl font-bold pt-9">
              Seamless <span className="text-blue-400">Xero</span> Integration
            </h1>
            <p>
              Simplify your accounting process with seamless Xero sync for
              accurate and efficient records.
            </p>
            <img src={seamless} alt="seamless" />
          </div>
        </div>
      </div>
     <div className="py-8 mt-10">
     <div className="flex  justify-center flex-col gap-6 ">
      <div className="flex items-center justify-center">
            <p className="rounded-xl w-fit flex items-center border-black border justify-center px-2 py-1">
              🟢 Why Choose Connectshift?
            </p>
          </div>
          
          <div>
            <h1 className="text-center font-bold text-2xl">
              A solution loaded with everythng<br/> you truly need
            </h1>
        
      </div>
          </div>
          <div className="flex justify-between flex-row  px-40 mt-10 ">
              <div className="w-[598px]h-[526px] flex flex-col gap-7 mt-9">
                <h1 className="text-3xl font-bold">Plan shifts effortlessly and <br/>minimize scheduling conflicts.</h1>
                <p className="text-lg">Streamline shift scheduling with tools that simplify planning,<br/>reduce conflicts, and ensure optimal coverage</p>
                <ul className="text- "><li className="py-6 bg-green-100 rounded-lg"> <span className="font-bold ">✔ Simplified Scheduling.</span> Create and manage shifts effortlessly, aligning <br/> schedules with business needs and employee availability.</li>
                <li className="py-5"><span className="font-bold">✔ Employee Empowerment.</span> Empower your team with self-service <br/>scheduling. Employees can view, request, and swap shifts easily, <br/>boosting satisfaction.</li>
                <li className="py-5"><span className="font-bold">✔ Seamless Integration.</span> Integrate shift planning with payroll,<br/> attendance, and communication tools for a seamless experience.</li>
                </ul>
              </div>
              <div className="h-[546px] w-[591px] bg-gradient-to-r from-purple-600 to-slate-100 overflow-hidden rounded-xl"> <div className="relative  ">
              <img src={timesheet} alt="timesheet" className="absolute top-[180px] left-[60px] h-[450px]"/>
              <img src={timesheet} alt="timesheet" className="absolute top-[80px] left-[208px] h-[470px] w-[385px]"/>
               
                
              </div></div>
             
          </div>
          <div>
          <div className="flex justify-between flex-row  px-40 mt-24 ">
          <div className="h-[546px] w-[591px] bg-gradient-to-tr from-green-100 to-blue-100 overflow-hidden rounded-xl"> <div className="relative  ">
              <img src={timesheet} alt="timesheet" className="absolute top-[145px] left-[-58px] h-[450px]"/>
              <img src={notification} alt="timesheet" className="absolute top-[84px] left-[60px] h-[470px] w-[450px]"/>
               
                
              </div></div>
              <div className="w-[598px]h-[526px] flex flex-col gap-7 mt-9">
                <h1 className="text-3xl font-bold">Timely Updates for Seamless <br/>Coordination.</h1>
                <p className="text-lg">Receive immediate notifications and manage changes <br/>effortlessly to keep your team aligned and informed.</p>
                <ul className="text- "><li className="py-6 bg-green-100 rounded-lg"> <span className="font-bold ">✔ Instant Notifications.</span>  Stay updated with real-time alerts for shifts, <br/>updates, and announcements, ensuring clear coordination.</li>
                <li className="py-5"><span className="font-bold">✔ Streamlined Communication.</span>   ConnectShift helps you share critical <br/> information quickly, ensuring your team is always in the loop.</li>
                <li className="py-5"><span className="font-bold">✔ Seamless Integration.</span> Integrate shift planning with payroll,<br/> attendance, and communication tools for a seamless experience.</li>
                </ul>
              </div>
             
             
          </div>
          </div>
     </div>
     <div>
      <div className="px-40">
        <div className="flex flex-col gap-4 text-center items-center">
          <h1 className="text-3xl font-bold">Simple, Transparent <span>Pricing for everyone</span></h1>
          <p className="opacity-55">Explore flexible pricing options designed to meet the unique needs of your <br/>business, with scalable plans and transparent costs.</p>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Basic-Tier</h3>
          <p className="text-sm text-gray-600 mb-4">Essential tools for small teams to manage shifts.</p>
          <div className="text-3xl font-bold text-gray-900 mb-4">$3<span className="text-sm font-normal text-gray-600"> per user<br />billed annually</span></div>
          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li>✔ Employee Scheduling</li>
            <li>✔ Shift Details</li>
            <li>✔ Community Access</li>
            <li>✔ Announcement Feed</li>
            <li>✔ Task Management</li>
            <li>✔ 24/7 Email Support</li>
          </ul>
          <button className="mt-auto bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">Get Started</button>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Mid-Tier</h3>
          <p className="text-sm text-gray-600 mb-4">Advanced features for growing businesses and teams.</p>
          <div className="text-3xl font-bold text-gray-900 mb-4">$6<span className="text-sm font-normal text-gray-600"> per user<br />billed annually</span></div>
          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li>✔ All Basic Tier features included+</li>
            <li>✔ Shift Claiming</li>
            <li>✔ Clock-in and Out</li>
            <li>✔ Leave Management</li>
            <li>✔ Payroll Integration</li>
            <li>✔ Geo-fencing</li>
            <li>✔ 24/7 Email Support</li>
          </ul>
          <button className="mt-auto bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">Get Started</button>
        </div>
        <div className="bg-white border border-blue-500 rounded-lg p-6 flex flex-col shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Advance Tier</h3>
          <p className="text-sm text-gray-600 mb-4">Comprehensive tools for large organizations and full integration.</p>
          <div className="text-3xl font-bold text-gray-900 mb-4">$8<span className="text-sm font-normal text-gray-600"> per user<br />billed annually</span></div>
          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li>✔ All Mid-tier features included+</li>
            <li>✔ Announcement Feed</li>
            <li>✔ Task Management</li>
            <li>✔ 24/7 Email Support</li>
            <li>✔ Reporting</li>
            <li>✔ Digital Signature</li>
            <li>✔ Geo-fencing</li>
          </ul>
          <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Get Started</button>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise plan</h3>
          <p className="text-sm text-gray-600 mb-4">Tailored solutions with dedicated support and customization.</p>
          <div className="text-3xl font-bold text-gray-900 mb-4">$6<span className="text-sm font-normal text-gray-600"> per user<br />billed annually</span></div>
          <p className="text-sm text-gray-600 mb-6">Contact us for pricing and features for 100+ Users.</p>
          <button className="mt-auto bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition mb-4">Get Started</button>
          <button className="border border-orange-500 text-orange-500 py-2 px-4 rounded hover:bg-orange-50 transition">Contact Sales</button>
        </div>
      </div>
      <p className="text-center text-sm text-orange-400 mt-8">Enjoy Free 14-day trial, no credit details required.</p>
    </div>
      </div>
     </div>
    
     <Form/>
     
    </div>
  );
};

export default Home;
