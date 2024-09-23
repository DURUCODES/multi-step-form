import React, { useContext, useState } from "react";
import MyContext from "../context/Mycontext";
import arcade from "../assets/images/icon-arcade.svg";
import advance from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

const Step2 = () => {
  const { page, setPage } = useContext(MyContext);
  const {
    isYearly,
    setIsYearly,
    setArcade,
    arcadeOpt,
    setArcadeOpt,
    proOpt,
    setProOpt,
    advanceOpt,
    setAdvanceOpt,
    selectedOption,
    setSelectedOption,
  } = useContext(MyContext);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const toggleBilling = () => {
    setIsYearly((prev) => !prev);
  };

  const handleNext = (e) => {
    e.preventDefault();

    setPage(page + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();

    setPage(page - 1);
  };
  return (
    <div className="flex  flex-col">
      <div className="flex flex-col shadow md:shadow-none bg-white   pt-6 px-10 md:p-0 rounded-xl">
        <h1 className="text-3xl font-bold text-marine-blue">
          Select your plan
        </h1>
        <p className="text-sm mt-2 text-second-gray">
          You have the option of monthly or yearly billing
        </p>
        <div className="grid md:grid-flow-col md:gap-4 mt-2">
          <div
            onClick={() => handleOptionClick("Arcade")}
            className="flex cursor-pointer items-center md:items-start  h-20 md:h-52 hover:border-purple-blue md:px-4 px-2 py-4 border-2 md:flex-col md:justify-between my-1  w-full md:w-40 rounded-xl"
          >
            <div className="mx-3 md:mx-0">
              <img src={arcade} alt="Arcade" />
            </div>
            <div className="">
              <p className="font-bold text-marine-blue">Arcade</p>

              {isYearly ? (
                <div>
                  <p className="text-cool-gray">$90/yr</p>
                  <span className="text-purple-blue my-2">2 months free</span>
                </div>
              ) : (
                "$9/mo"
              )}
            </div>
          </div>

          <div
            onClick={() => handleOptionClick("Advanced")}
            className="flex cursor-pointer items-center md:items-start  h-20 md:h-52 hover:border-purple-blue md:px-4 px-2 py-4 border-2 md:flex-col md:justify-between my-1  w-full md:w-40 rounded-xl"
          >
            <div className="mx-3 md:mx-0  md:mb-10">
              <img src={advance} alt="Advanced" />
            </div>
            <div>
              <p className="font-bold text-marine-blue">Advanced</p>
              {isYearly ? (
                <div>
                  <p className="text-cool-gray ">$120/yr</p>
                  <span className="text-purple-blue my-2">2 months free</span>
                </div>
              ) : (
                "$12/mo"
              )}
            </div>
          </div>

          <div
            onClick={() => handleOptionClick("Pro")}
            className="flex cursor-pointer items-center md:items-start   h-20 md:h-52 hover:border-purple-blue md:px-4 px-2 py-4 border-2 md:flex-col md:justify-between my-1  w-full md:w-40 rounded-xl"
          >
            <div className="mx-3 md:mx-0  md:mb-10">
              <img src={pro} alt="Pro" />
            </div>
            <div>
              <p className="font-bold text-marine-blue">Pro</p>
              {isYearly ? (
                <div>
                  <p className="text-cool-gray ">$150/yr</p>
                  <span className="text-purple-blue my-2">2 months free</span>
                </div>
              ) : (
                "$15/mo"
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center rounded mt-5 mb-12 bg-light-gray p-2">
            <div className="gap-2 flex">
              <span>Monthly</span>
              <div>
                <form>
                  <label class="inline-flex items-center  cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={isYearly}
                      onChange={toggleBilling}
                    />
                    <div class="relative w-11 h-6 bg-marine-blue peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
                  </label>
                </form>
              </div>
              <span>Yearly</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" w-full  md:flex hidden justify-between mt-20 bg-white md:mt-0 py-5 md:py-0">
          {page > 1 && (
            <button
              onClick={handleBack}
              className=" text-second-gray font-extrabold   rounded cursor-pointer"
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
        </div>{" "}
      </div>
    </div>
  );
};

export default Step2;
