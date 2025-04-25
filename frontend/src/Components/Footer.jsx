import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="md:mx-10">
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-14 my-10 mt-40 text-sm text-gray-600 ">
        {/* Left Section */}
        <div>
          <img src={assets.logo} alt="Company Logo" className="mb-5 w-40" />
          <p className="w-full md:w2/3 text-gray-600 leading-6">
            DocMeet is a telemedicine app for virtual consultations via video,
            voice, or chat. It offers appointment scheduling, prescription
            management, medical records access, and AI-powered symptom checks.
            Doctors can manage schedules, track patient history, and provide
            remote care with follow-up reminders..
          </p>
        </div>

        {/* Center Section */}
        <div>
          <p className="text-xl font-medium mb-5 text-black">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-700">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/delivery" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-10 text-black">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600  cursor-pointer">
            <li className="hover:underline">📞 +91-00000-00000</li>
            <li className="hover:underline">📧 docmeet@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500  py-5 text-sm">
        <p>© 2025 DocMeet - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
