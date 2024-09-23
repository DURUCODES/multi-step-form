import React, { useContext, useState } from "react";
import MyContext from "../context/Mycontext";

const Step4 = () => {
  const {
    isYearly,
    setIsYearly,
    selectedOption,
    setSelectedOption,
    page,
    setPage,
  } = useContext(MyContext);
  const handleNext = (e) => {
    e.preventDefault();

    setPage(page + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();

    setPage(page - 1);
  };

  const handleChangeClick = () => {
    setPage(2);
  };
  return (
    <div>
      <div className="container flex flex-col shadow md:shadow-none bg-white  pt-6 px-10 md:p-0 rounded-xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-marine-blue">Finish up</h1>
          <p className="text-sm mt-2 text-second-gray">
            Double-check everything look OK before confirming.
          </p>
        </div>
        {/* Thist */}
        <div className="bg-light-gray rounded-lg p-4">
          <div className="flex justify-between items-center pb-4">
            <div>
              <p className="text-marine-blue font-bold">
                {selectedOption} ({isYearly ? "Yearly" : "Monthly"})
              </p>
              <a
                onClick={handleChangeClick}
                className="underline text-second-gray text-sm cursor-pointer"
              >
                Change
              </a>
            </div>
            <div>
              <span className="text-marine-blue font-bold">
                {isYearly ? "$90/yr" : "$9/mo"}
              </span>
            </div>
          </div>
          <hr className="my-2" />
          <div>
            <div className="flex justify-between py-2 items-center">
              <p className=" text-second-gray text-sm">Online service</p>
              <span className="text-marine-blue font-semibold text-sm">
                {isYearly ? "+$10/yr" : "+$1/mo"}
              </span>
            </div>

            <div className="flex justify-between py-2 items-center">
              <p className=" text-second-gray text-sm">Larger storage</p>
              <span className="text-marine-blue font-semibold text-sm">
                {isYearly ? "+$20/yr" : "+$2/mo"}
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="py-4 flex items-center justify-between">
            <span className=" text-second-gray text-sm">
              Total {isYearly ? "per year" : "per month"}
            </span>
            <h3 className="font-bold text-purple-blue text-xl">
              {" "}
              {isYearly ? "$120/yr" : "$12/mo"}
            </h3>
          </div>
        </div>
      </div>
      {/* button shshxaashxx */}
      <div className="mt-16">
        <div className="md:flex hidden w-full justify-between mt-40 md:mt-0 py-5 md:py-0">
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
            className={`bg-purple-blue text-white w-24 h-10 rounded cursor-pointer ${
              page === 1 ? "ml-auto" : ""
            }`}
          >
            Comfirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
