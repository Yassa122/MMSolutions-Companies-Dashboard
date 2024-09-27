"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logistics from "../../../log2.jpg";
import { useRouter } from "next/navigation";
export default function CompanyForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    phoneNumber: "",
    companySize: "",
  });
const router = useRouter();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Check if all inputs are filled
    const isValid =
      formData.companyName !== "" &&
      formData.phoneNumber !== "" &&
      formData.companySize !== "";
    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    if (isFormValid) {
      console.log(formData); // Handle form submission
      }
            router.push("/pages/accounts/new/assetsForm"); // Redirect to the next page (assetsForm page)

  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2 p-10 bg-gray-100 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Tell us about your team
          </h2>
          <p className="text-gray-600 mb-6">
            This will help us tailor our service to give you the best possible
            experience.
          </p>

          {/* Company Name */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Company or organization name{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your company name"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Phone number <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-2">
              <select className="border border-gray-300 p-3 rounded">
                <option value="EG">🇪🇬 +20</option>
                <option value="US">🇺🇸 +1</option>
                {/* Add more country codes here */}
              </select>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="flex-1 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          {/* Company Size */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              What is your company size? <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className={`border border-gray-300 p-3 rounded-lg focus:outline-none ${
                  formData.companySize === "Just Me"
                    ? "bg-blue-100 border-blue-500"
                    : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, companySize: "Just Me" })
                }
              >
                Just Me
              </button>
              <button
                type="button"
                className={`border border-gray-300 p-3 rounded-lg focus:outline-none ${
                  formData.companySize === "2-10"
                    ? "bg-blue-100 border-blue-500"
                    : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, companySize: "2-10" })
                }
              >
                2 - 10
              </button>
              <button
                type="button"
                className={`border border-gray-300 p-3 rounded-lg focus:outline-none ${
                  formData.companySize === "11-50"
                    ? "bg-blue-100 border-blue-500"
                    : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, companySize: "11-50" })
                }
              >
                11 - 50
              </button>
              <button
                type="button"
                className={`border border-gray-300 p-3 rounded-lg focus:outline-none ${
                  formData.companySize === "51-100"
                    ? "bg-blue-100 border-blue-500"
                    : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, companySize: "51-100" })
                }
              >
                51 - 100
              </button>
              <button
                type="button"
                className={`border border-gray-300 p-3 rounded-lg focus:outline-none ${
                  formData.companySize === "101-500"
                    ? "bg-blue-100 border-blue-500"
                    : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, companySize: "101-500" })
                }
              >
                101 - 500
              </button>
              <button
                type="button"
                className={`border border-gray-300 p-3 rounded-lg focus:outline-none ${
                  formData.companySize === "500+"
                    ? "bg-blue-100 border-blue-500"
                    : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, companySize: "500+" })
                }
              >
                500 +
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold ${
              isFormValid
                ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Continue
          </button>
        </form>
      </div>

      {/* Right Section: Single Image */}
      <div className="hidden md:flex md:w-1/2 bg-green-50 flex-col justify-center items-center p-10">
        <Image
          src={Logistics} // Replace with your actual image path
          alt="Team Illustration"
          width={800}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
