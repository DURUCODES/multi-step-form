import React, { useContext, useState } from "react";
import bgdesktop from "../assets/images/bg-sidebar-desktop.svg";
import bgMobile from "../assets/images/bg-sidebar-mobile.svg";
import Step1 from "../pages/Step1";
import Step2 from "../pages/Step2";
import MyContext from "../context/Mycontext";
import Step3 from "../pages/Step3";
import Step4 from "../pages/Step4";
import ThankYouPage from "../pages/ThankYouPage";
const HomeComponets = () => {
  const { page, setPage } = useContext(MyContext);

  const handleNext = (e) => {
    e.preventDefault();

    setPage(page + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();

    setPage(page - 1);
  };
  return (
    <div className="flex flex-col w-full md:p-4   items-center md:flex-row">
      <div className="relative w-full md:w-96 ">
        <img src={bgdesktop} className="hidden md:block w-full" />
        <img src={bgMobile} className="block md:hidden w-full" />
        <div className="absolute top-2 left-16 md:top-10 md:left-0 px-5 flex md:flex-col">
          {[1, 2, 3, 4].map((step) => (
            <div className="flex items-center mb-2" key={step}>
              <div
                className={`m-3 w-8 h-8 rounded-2xl font-bold py-1 border text-center ${
                  page === step ? "bg-light-blue text-black" : "text-white"
                }`}
              >
                <span>{step}</span>
              </div>
              <div className="md:block hidden">
                <span className="text-gray-400 uppercase text-xs">
                  step {step}
                </span>
                <h3 className="uppercase text-white font-bold">
                  {step === 1 && "YOUR INFO"}
                  {step === 2 && "SELECT PLAN"}
                  {step === 3 && "ADD-ONS"}
                  {step === 4 && "SUMMARY"}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex px-0  flex-col md:w-full md:px-10 top-28 absolute md:static md:bg-white  rounded-xl">
        {page == 1 ? (
          <Step1 />
        ) : page == 2 ? (
          <Step2 />
        ) : page == 3 ? (
          <Step3 />
        ) : page == 4 ? (
          <Step4 />
        ) : page == 5 ? (
          <ThankYouPage />
        ) : (
          ""
        )}
      </div>
      {page < 5 && (
        <div className="flex md:hidden w-full absolute bottom-0 justify-between mt-20 bg-white md:mt-0 py-5 md:py-0">
          {page > 1 && (
            <button
              onClick={handleBack}
              className="text-second-gray font-extrabold rounded cursor-pointer"
            >
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
        </div>
      )}
    </div>
  );
};

export default HomeComponets;
