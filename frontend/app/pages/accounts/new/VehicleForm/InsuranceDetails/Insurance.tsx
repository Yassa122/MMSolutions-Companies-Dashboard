"use client"
import { useState, useEffect } from "react";

interface Props {
  formData: Partial<{
    insuranceProvider: string;
    policyNumber: string;
    registrationExpiry: string;
  }>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InsuranceDetails({
  formData,
  handleInputChange,
}: Props) {
  const [progress, setProgress] = useState(75); // Progress is at 75%

  useEffect(() => {
    // You can simulate dynamic progress or changes here if needed
    setProgress(75); // Set the progress to 75% initially
  }, []);

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Insurance and Registration</h3>

      <div className="space-y-4">
        <input
          type="text"
          name="insuranceProvider"
          value={formData.insuranceProvider}
          onChange={handleInputChange}
          placeholder="Insurance Provider"
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="policyNumber"
          value={formData.policyNumber}
          onChange={handleInputChange}
          placeholder="Policy Number"
          className="w-full p-3 border rounded"
        />
        <input
          type="date"
          name="registrationExpiry"
          value={formData.registrationExpiry}
          onChange={handleInputChange}
          placeholder="Registration Expiry Date"
          className="w-full p-3 border rounded"
        />
      </div>

      {/* Progress bar */}
      <div className="mt-6">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-right text-sm text-gray-600 mt-2">
          {progress}% completed
        </div>
      </div>
    </div>
  );
}
