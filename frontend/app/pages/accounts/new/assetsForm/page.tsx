"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Use Next.js Router for redirection
import Fleet from "@/app/Fleet.png"
import Image from "next/image";
export default function AssetsForm() {
  const [selectedAssets, setSelectedAssets] = useState("");
  const router = useRouter();

  const handleSelection = (value: string) => {
    setSelectedAssets(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedAssets) {
      router.push("/pages/accounts/new/RoleSelectionPage"); // Redirect to the next page (team page)
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2 p-10 bg-gray-100 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <h2 className="text-3xl font-bold mb-4 text-black">
            How many assets do you have in your Fleet?
          </h2>
          <p className="text-gray-600 mb-6">
            This will help us tailor the service to give you the best possible
            experience.
          </p>

          {/* Assets Selection */}
          <div className="grid grid-cols-2 gap-4">
            {["< 15", "15 - 99", "100 - 499", "500 - 999", "1000 +"].map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  className={`border border-gray-300 p-3 rounded-lg focus:outline-none ${
                    selectedAssets === option
                      ? "bg-blue-100 border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleSelection(option)}
                >
                  {option}
                </button>
              )
            )}
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold ${
              selectedAssets
                ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!selectedAssets}
          >
            Continue
          </button>
        </form>
      </div>

      {/* Right Section: Placeholder for Visual */}
      <div className="hidden md:flex md:w-1/2 bg-green-50 flex-col justify-center items-center p-10">
        {/* Add any relevant image or visual here */}
        <Image src={Fleet} alt="Fleet"  />
      </div>
    </div>
  );
}
