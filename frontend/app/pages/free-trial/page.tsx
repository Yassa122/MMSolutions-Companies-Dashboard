"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import Image from "next/image";
import google from "@/app/google.svg"

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isHuman: false,
  });
  const router = useRouter(); // Initialize useRouter

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission logic
    console.log("Form Data:", formData);

    // After successful form submission, navigate to another page
    router.push("/pages/accounts/new"); // Navigate to /dashboard
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">
          Start your 14-day free trial of MM Solutions
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name and Last Name */}
          <div className="flex space-x-4">
            <div className="relative w-1/2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                required
              />
            </div>
            <div className="relative w-1/2">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Work Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Create a Password"
              value={formData.password}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
              required
            />
          </div>

          {/* reCAPTCHA checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isHuman"
              checked={formData.isHuman}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
            <label htmlFor="isHuman" className="text-gray-700">
              I &apos m not a robot
            </label>
          </div>

          {/* Start Free Trial button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Start Free Trial
          </button>

          {/* OR */}
          <div className="text-center text-gray-500 my-2">or</div>

          {/* Signup with Google */}
          <button
            type="button"
            className="w-full border border-gray-300 py-3 rounded-lg flex justify-center items-center space-x-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200"
          >
            <Image
              src={google}
              alt="Google Icon"
              className="w-5 h-5"
            />
            <span>Signup with Google</span>
          </button>
        </form>

        {/* Already have an account */}
        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
