import React, { useContext, useState } from "react";
import MyContext from "../context/Mycontext";
import Step3Monthly from "../componets/Step3Monthly";
import Step3Yearly from "../componets/Step3Yearly";

const Step3 = () => {
  const { isYearly, setIsYearly } = useContext(MyContext);
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
    <div className="">
      <div className="  bg-white py-4 px-10 rounded-xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-marine-blue">Pick add-ons</h1>
          <p className="text-sm mt-2 text-second-gray">
            Add-ons help enchance your gaming experince
          </p>
        </div>
        <div>
          {isYearly ? (
            <div>
              <Step3Yearly />
            </div>
          ) : (
            <Step3Monthly />
          )}
        </div>
      </div>
      <div className="md:flex hidden w-full bg-white justify-between mt-40 md:mt-0 py-5 md:py-0">
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
  );
};

export default Step3;
