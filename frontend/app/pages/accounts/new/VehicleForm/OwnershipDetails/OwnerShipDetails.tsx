"use client";
import { useState, useEffect } from "react";

interface Props {
  formData: {
    ownerName: string;
    purchaseDate: string;
    licensePlate: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentStep: number;
  totalSteps: number;
}

export default function OwnershipDetails({
  formData,
  handleInputChange,
  currentStep,
  totalSteps,
}: Props) {
  const [isValidLicensePlate, setIsValidLicensePlate] = useState(true);
  const [progress, setProgress] = useState(0);

  // Calculate progress as percentage
  useEffect(() => {
    setProgress((currentStep / totalSteps) * 100);
  }, [currentStep, totalSteps]);

  // Basic validation for License Plate (example validation)
  const validateLicensePlate = (licensePlate: string) => {
    const licensePlateRegex = /^[A-Z0-9]{1,7}$/; // Basic validation for license plate
    if (!licensePlateRegex.test(licensePlate)) {
      setIsValidLicensePlate(false);
    } else {
      setIsValidLicensePlate(true);
    }
  };

  const handleLicensePlateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);
    validateLicensePlate(e.target.value);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      {/* Progress Bar */}
      <div className="relative pt-1 mb-6">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Form Heading */}
      <h3 className="text-lg font-bold mb-4 text-gray-800">
        Ownership Details
      </h3>

      <div className="space-y-4">
        {/* Owner Name */}
        <div>
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleInputChange}
            placeholder="Owner Name"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
          />
        </div>

        {/* Purchase Date */}
        <div>
          <input
            type="date"
            name="purchaseDate"
            value={formData.purchaseDate}
            onChange={handleInputChange}
            placeholder="Purchase Date"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
          />
        </div>

        {/* License Plate */}
        <div>
          <input
            type="text"
            name="licensePlate"
            value={formData.licensePlate}
            onChange={handleLicensePlateChange}
            placeholder="License Plate"
            className={`w-full p-3 border rounded focus:outline-none transition duration-150 ${
              isValidLicensePlate
                ? "focus:ring-2 focus:ring-blue-400"
                : "border-red-500"
            }`}
          />
          {!isValidLicensePlate && (
            <p className="text-red-500 text-sm mt-1">
              Please enter a valid license plate (e.g., 1 to 7 alphanumeric
              characters).
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
