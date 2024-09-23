import React, { useContext, useState } from "react";
import MyContext from "../context/Mycontext";
const Step1 = () => {
  const { page, setPage, name, setName, email, setEmail, phone, setPhone } =
    useContext(MyContext);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const handleNext = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setPhoneError("");

    let hasError = false;

    if (!name) {
      setNameError("Please fill in your name.");
      hasError = true;
    }
    if (!email) {
      setEmailError("Please fill in your email.");
      hasError = true;
    }
    if (!phone) {
      setPhoneError("Please fill in your phone number.");
      hasError = true;
    }

    if (!hasError) {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex  flex-col ">
      <div className="flex flex-col shadow md:shadow-none bg-white pb-10 pt-6 md:pt-6 px-10 md:p-0 rounded-xl">
        <h1 className="text-3xl font-bold text-marine-blue">Personal Info</h1>
        <p className="text-sm mt-2 text-second-gray">
          Please provide your name , email address, and phone number{" "}
        </p>
        <form className="flex flex-col md:py-10">
          <div className="flex justify-between">
            <label className="text-marine-blue font-semibold text-xs mb-2">
              name
            </label>
            <label className="text-red-600 font-semibold text-xs mb-2">
              {nameError}
            </label>
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="eg. Stephen King"
            type="text"
            required
            className="w-full h-11 border rounded-md px-4 mb-8 focus:outline-none focus:border-purple-blue"
          />

          <div className="flex justify-between">
            <label className="text-marine-blue font-semibold text-xs mb-2">
              Email Address
            </label>
            <label className="text-red-600  font-semibold text-xs mb-2">
              {emailError}
            </label>
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="eg. stephenKing@lorem.com"
            type="email"
            required
            className="w-full h-11 border rounded-md px-4 mb-8 focus:outline-none focus:border-purple-blue"
          />

          <div className="flex justify-between">
            <label className="text-marine-blue font-semibold text-xs mb-2">
              Phone Number
            </label>
            <label className="text-red-600  font-semibold text-xs mb-2">
              {phoneError}
            </label>
          </div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="eg. +123456789"
            type="tel"
            required
            className="w-full h-11 border rounded-md px-4 focus:outline-none focus:border-purple-blue"
          />
        </form>{" "}
      </div>
      <div className="md:flex hidden w-full justify-between    md:mt-0 py-5 md:py-0">
        {page > 1 && (
          <button className=" text-marine-blue font-extrabold   rounded cursor-pointer">
            Go Back
          </button>
        )}

        <button
          onClick={handleNext}
          className={`bg-blue-900 text-white w-24 h-10 rounded cursor-pointer ${
            page === 1 ? "ml-auto" : ""
          }`}
        >
          Next
        </button>
      </div>{" "}
    </div>
  );
};

export default Step1;
