"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Role from "@/app/role.jpg";
import Image from "next/image";
export default function RoleSelectionPage() {
  const [selectedRole, setSelectedRole] = useState(""); // Store the selected role
  const router = useRouter();

  const roles = [
    "Driver",
    "Dispatcher",
    "Manager",
    "Mechanic",
    "Administrator",
  ]; // Example roles

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedRole) {
      console.log(`Selected Role: ${selectedRole}`);
      router.push("/pages/accounts/new/VehicleForm"); // Redirect to the next page (adjust as necessary)
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2 p-10 bg-gray-100 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <h2 className="text-3xl font-bold mb-4 text-black">
            What is your role?
          </h2>
          <p className="text-gray-600 mb-6">
            Selecting your role helps us to personalize your experience.
          </p>

          {/* Role Selection Buttons */}
          <div className="grid grid-cols-2 gap-4">
            {roles.map((role) => (
              <button
                key={role}
                type="button"
                className={`border border-gray-300 p-3 rounded-lg focus:outline-none ${
                  selectedRole === role ? "bg-blue-100 border-blue-500" : ""
                }`}
                onClick={() => handleRoleSelection(role)}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold ${
              selectedRole
                ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!selectedRole}
          >
            Create Account
          </button>
        </form>
      </div>

      {/* Right Section: Visuals */}
      <div className="hidden md:flex md:w-1/2 bg-blue-50 flex-col justify-center items-center p-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Choose Your Role</h2>
          <p className="text-gray-600 mt-4">
            Tailor your experience based on your role in the fleet.
          </p>
          {/* You can replace this with an actual image related to roles */}
          <Image src={Role} alt="Role Selection" />
        </div>
      </div>
    </div>
  );
}
