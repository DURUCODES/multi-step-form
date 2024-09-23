import thanyouicon from "../assets/images/icon-thank-you.svg";
import React, { useContext, useState } from "react";
import MyContext from "../context/Mycontext";
const ThankYouPage = () => {
  const { name, setName } = useContext(MyContext);
  return (
    <div className="flex items-center shadow md:shadow-none flex-col text-center px-10 pt-6 bg-white rounded-xl py-20">
      <img src={thanyouicon} />
      <h2 className="text-marine-blue font-bold text-3xl py-4"> Thank you!</h2>
      <p className=" text-second-gray">
        Thanks for
        <span className="text-purple-blue font-semibold text-xl"> {name}</span>{" "}
        confirming your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYouPage;
