"use client";

import { useState } from "react";

interface Props {
  formData: {
    make: string;
    model: string;
    year: string;
    vin: string;
    type: string; // Add type to form data
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  currentStep: number;
  totalSteps: number;
}

export default function VehicleInformation({
  formData,
  handleInputChange,
  currentStep,
  totalSteps,
}: Props) {
  const [isValidYear, setIsValidYear] = useState(true);
  const [isValidVin, setIsValidVin] = useState(true);

  // Known truck manufacturers
  const truckMakes = [
    "Volvo",
    "Mercedes",
    "Scania",
    "Mack",
    "Freightliner",
    "Kenworth",
    "Peterbilt",
    "DAF",
    "Iveco",
  ];

  // Known vehicle types
  const vehicleTypes = [
    "Truck",
    "SUV",
    "Van",
    "Pickup",
    "Tractor",
    "Semi-Trailer",
    "Bus",
  ];

  // Basic validation for year and VIN
  const validateYear = (year: string) => {
    const yearValue = parseInt(year, 10);
    const currentYear = new Date().getFullYear();
    if (yearValue < 1900 || yearValue > currentYear) {
      setIsValidYear(false);
    } else {
      setIsValidYear(true);
    }
  };

  const validateVin = (vin: string) => {
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/; // Basic validation for VIN
    if (!vinRegex.test(vin)) {
      setIsValidVin(false);
    } else {
      setIsValidVin(true);
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);
    validateYear(e.target.value);
  };

  const handleVinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);
    validateVin(e.target.value);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      {/* Progress Bar */}
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-300 ease-in-out"
          ></div>
        </div>
      </div>

      {/* Form Heading */}
      <h3 className="text-lg font-bold mb-4 text-gray-800">
        Vehicle Information
      </h3>

      <div className="space-y-4">
        {/* Truck Make (Dropdown) */}
        <div>
          <select
            name="make"
            value={formData.make}
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
          >
            <option value="">Select Truck Make</option>
            {truckMakes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

        {/* Truck Model (Input) */}
        <div>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleInputChange}
            placeholder="Model"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
          />
        </div>

        {/* Vehicle Type (Dropdown) */}
        <div>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
          >
            <option value="">Select Vehicle Type</option>
            {vehicleTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Year (Input) */}
        <div>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleYearChange}
            placeholder="Year"
            className={`w-full p-3 border rounded focus:outline-none transition duration-150 ${
              isValidYear
                ? "focus:ring-2 focus:ring-blue-400"
                : "border-red-500"
            }`}
          />
          {!isValidYear && (
            <p className="text-red-500 text-sm mt-1">
              Please enter a valid year.
            </p>
          )}
        </div>

        {/* VIN (Input) */}
        <div>
          <input
            type="text"
            name="vin"
            value={formData.vin}
            onChange={handleVinChange}
            placeholder="VIN"
            className={`w-full p-3 border rounded focus:outline-none transition duration-150 ${
              isValidVin ? "focus:ring-2 focus:ring-blue-400" : "border-red-500"
            }`}
          />
          {!isValidVin && (
            <p className="text-red-500 text-sm mt-1">
              Please enter a valid VIN.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
