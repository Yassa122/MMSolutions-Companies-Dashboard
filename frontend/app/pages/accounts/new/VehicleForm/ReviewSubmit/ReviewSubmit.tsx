"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  formData: {
    make: string;
    model: string;
    year: string;
    vin: string;
    ownerName: string;
    purchaseDate: string;
    licensePlate: string;
    insuranceProvider: string;
    policyNumber: string;
    registrationExpiry: string;
  };
  handleSubmit: () => void;
  prevStep: () => void;
}

export default function ReviewSubmit({
  formData,
}: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [progress] = useState(100); // Final step progress
  const router = useRouter();

  const onSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        router.push("/pages/dashboard"); // Redirect to the dashboard
      }, 2000); // Redirect after 2 seconds
    }, 1500); // Simulate a delay for form submission
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-bold mb-6 text-gray-800">
        Review Your Vehicle Details
      </h3>

      {/* Progress Bar */}
      <div className="relative pt-1 mb-6">
        <div className="flex mb-2 items-center justify-between">
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
            Step 4 of 4
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Vehicle Details Summary */}
      <div className="space-y-4">
        {Object.entries(formData).map(([key, value]) => (
          <p key={key}>
            <strong className="capitalize">
              {key.replace(/([A-Z])/g, " $1")}:
            </strong>{" "}
            {value}
          </p>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={onSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="loader mr-2"></div>
              Submitting...
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </div>

      {/* Loader Styles */}
      <style jsx>{`
        .loader {
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-top: 2px solid #ffffff;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform scale-105">
            <h2 className="text-2xl font-semibold mb-2 text-green-600">
              Success!
            </h2>
            <p className="text-gray-700">
              Your vehicle has been added successfully.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
