"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import { motion } from "framer-motion";
import TruckImage from "./truck.jpg";
import { FaTruck, FaClock, FaChartLine } from "react-icons/fa";

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-gray-100"
    >
      {/* Navbar */}
      <motion.div className="sticky top-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </motion.div>

      {/* Hero Section */}
      <section className="flex flex-col gap-8 items-center text-center sm:items-start sm:text-left lg:flex-row lg:justify-between mt-16">
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <motion.div
            variants={stagger}
            className="space-y-5 max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-xs sm:text-sm text-indigo-600 font-medium"
            >
              Welcome to MM Solutions
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 font-extrabold mx-auto"
            >
              Leading the Way in{" "}
              <span className="text-indigo-600">Freight Dispatch Services</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-sm md:text-base"
            >
              At <span className="font-bold text-blue-600">MM Solutions</span>,
              we offer{" "}
              <span className="text-red-500">
                top-tier freight dispatch services
              </span>{" "}
              specifically designed for{" "}
              <span className="text-green-600">
                Amazon Freight partner carriers
              </span>
              . In an industry where{" "}
              <span className="text-purple-500">
                time is as valuable as the cargo
              </span>{" "}
              itself, we pride ourselves on ensuring that your freight reaches
              its destination safely, efficiently, and reliably.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
            >
              <a
                href="#services"
                className="block py-2 px-4 text-xs sm:text-base text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Learn More About Our Services
              </a>

              <a
                href="#contact"
                className="block py-2 px-4 text-xs sm:text-base text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
              >
                Partner with Us
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-14">
            <Image
              src={TruckImage}
              className="w-full h-auto object-cover shadow-lg rounded-lg border"
              alt="Freight Dispatch Preview"
            />
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <motion.section
        variants={stagger}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 px-6"
        id="services"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-white p-6 rounded-lg shadow-md text-center"
        >
          <FaTruck className="text-4xl text-indigo-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">On-Time Dispatching</h2>
          <p className="text-gray-600 text-sm md:text-base">
            We prioritize timely dispatches, so your freight arrives when
            it&apos;s expected.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-white p-6 rounded-lg shadow-md text-center"
        >
          <FaClock className="text-4xl text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Amazon Freight Experts</h2>
          <p className="text-gray-600 text-sm md:text-base">
            With our deep knowledge of Amazon&apos;s freight protocols, we
            ensure seamless operations.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-white p-6 rounded-lg shadow-md text-center"
        >
          <FaChartLine className="text-4xl text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Real-Time Tracking</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Stay informed with real-time tracking and updates for all your
            shipments.
          </p>
        </motion.div>
      </motion.section>

      {/* Client Testimonials Section */}
      <motion.section
        variants={stagger}
        className="bg-blue-50 py-12 px-6 text-center w-full"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-gray-800 mb-8"
        >
          What Our Clients Say
        </motion.h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <motion.div
            variants={fadeInUp}
            className="w-full sm:w-80 bg-white shadow-md rounded-lg p-6"
          >
            <p className="text-lg italic text-gray-600">
              &quot;MM Solutions has transformed our freight operations. We
              trust them with every dispatch.&quot;
            </p>
            <h4 className="font-bold mt-4">John Doe</h4>
            <p className="text-sm text-gray-500">Logistics Manager, XYZ Corp</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="w-full sm:w-80 bg-white shadow-md rounded-lg p-6"
          >
            <p className="text-lg italic text-gray-600">
              &quot;Their real-time tracking is a game-changer. We always know
              where our shipments are.&quot;
            </p>
            <h4 className="font-bold mt-4">Jane Smith</h4>
            <p className="text-sm text-gray-500">Operations Head, ABC Ltd</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section
        variants={fadeInUp}
        className="w-full bg-gray-900 py-12 px-6 text-center text-white"
        id="contact"
      >
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-6">
          Have any questions or want to schedule a demo? Reach out to us!
        </p>
        <a
          href="#"
          className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500 transition-colors"
        >
          Contact Us
        </a>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        variants={fadeInUp}
        className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-12"
      >
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-600"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-600"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-600"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </motion.footer>
    </motion.div>
  );
}
