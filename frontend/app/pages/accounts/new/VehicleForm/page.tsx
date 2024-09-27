"use client";
import { useState } from "react";
import VehicleInformation from "./VehicleInformation/VehicleInformation";
import OwnershipDetails from "./OwnershipDetails/OwnerShipDetails";
import InsuranceDetails from "./InsuranceDetails/Insurance";
import ReviewSubmit from "./ReviewSubmit/ReviewSubmit";

export default function VehicleForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    vin: "",
    type: "", // Added missing 'type' property
    ownerName: "",
    purchaseDate: "",
    licensePlate: "",
    insuranceProvider: "",
    policyNumber: "",
    registrationExpiry: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Vehicle Data Submitted: ", formData);
    // Submit form data to the server or API
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Add a New Vehicle
        </h2>

        {step === 1 && (
          <VehicleInformation
            formData={formData}
            handleInputChange={handleInputChange}
            currentStep={0}
            totalSteps={0}
          />
        )}
        {step === 2 && (
          <OwnershipDetails
            formData={formData}
            handleInputChange={handleInputChange}
            currentStep={0}
            totalSteps={0}
          />
        )}
        {step === 3 && (
          <InsuranceDetails
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        {step === 4 && (
          <ReviewSubmit
            formData={formData}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Back
            </button>
          )}
          {step < 4 ? (
            <button
              onClick={nextStep}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
