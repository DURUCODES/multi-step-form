import React, { useState } from "react";

const Step3Yearly = () => {
  const [checkedStates, setCheckedStates] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const handleCheckboxChange = (key) => {
    setCheckedStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div>
      <div
        className={`flex justify-between border cursor-pointer mb-4 md:mb-6 ${
          checkedStates.onlineService
            ? "border-purple-blue"
            : "hover:border-purple-blue"
        } px-4 h-20 rounded-xl items-center`}
        onClick={() => handleCheckboxChange("onlineService")}
      >
        <div className="flex items-center">
          <div className="mr-3 md:mr-4">
            <input
              type="checkbox"
              checked={checkedStates.onlineService}
              onChange={() => handleCheckboxChange("onlineService")}
              className={`h-6 w-4 ${
                checkedStates.onlineService ? "bg-purple-blue" : ""
              }`}
            />
          </div>
          <div>
            <p className="text-marine-blue font-bold">Online service</p>
            <span className="text-second-gray text-sm">
              Access to multiplayer games
            </span>
          </div>
        </div>
        <div>
          <p className="text-purple-blue text-sm">+$10/yr</p>
        </div>
      </div>

      <div
        className={`flex justify-between border cursor-pointer mb-4 md:mb-6 ${
          checkedStates.largerStorage
            ? "border-purple-blue"
            : "hover:border-purple-blue"
        } px-4 h-20 rounded-xl items-center`}
        onClick={() => handleCheckboxChange("largerStorage")}
      >
        <div className="flex items-center">
          <div className="mr-3 md:mr-4">
            <input
              type="checkbox"
              checked={checkedStates.largerStorage}
              onChange={() => handleCheckboxChange("largerStorage")}
              className={`h-6 w-4 ${
                checkedStates.largerStorage ? "bg-purple-blue" : ""
              }`}
            />
          </div>
          <div>
            <p className="text-marine-blue font-bold">Larger storage</p>
            <span className="text-second-gray text-sm">
              Extra 1TB of cloud save
            </span>
          </div>
        </div>
        <div>
          <p className="text-purple-blue text-sm">+$20/yr</p>
        </div>
      </div>

      <div
        className={`flex justify-between border cursor-pointer mb-4 md:mb-6 ${
          checkedStates.customizableProfile
            ? "border-purple-blue"
            : "hover:border-purple-blue"
        } px-4 h-20 rounded-xl items-center`}
        onClick={() => handleCheckboxChange("customizableProfile")}
      >
        <div className="flex items-center">
          <div className="mr-3 md:mr-4">
            <input
              type="checkbox"
              checked={checkedStates.customizableProfile}
              onChange={() => handleCheckboxChange("customizableProfile")}
              className={`h-6 w-4 ${
                checkedStates.customizableProfile ? "bg-purple-blue" : ""
              }`}
            />
          </div>
          <div>
            <p className="text-marine-blue font-bold">Customizable profile</p>
            <span className="text-second-gray text-sm">
              Custom theme on your profile
            </span>
          </div>
        </div>
        <div>
          <p className="text-purple-blue text-sm">+$20/yr</p>
        </div>
      </div>
    </div>
  );
};

export default Step3Yearly;
