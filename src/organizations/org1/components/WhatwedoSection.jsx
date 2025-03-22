import { FaHeart, FaCheckCircle } from "react-icons/fa";
import { whatwedoBanner } from "../assets";

const WhatWeDoSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-20 gap-10 bg-gray-50">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-5">
        <div className="flex items-center gap-2 text-orange-500 font-semibold text-lg">
          <FaHeart /> What We Do
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Stand for Youth, Stand for Rights
        </h2>
        <p className="text-gray-600">
          We believe in empowering young individuals by advocating for their
          rights, amplifying their voices, and ensuring they have access to
          opportunities that shape a brighter future.
        </p>
        <div className="grid gap-4 mt-6">
          {[
            "Youth Advocacy",
            "Education & Awareness",
            "Skill Development",
            "Community Engagement",
          ].map((item, index) => (
            <div key={index} className="flex flex-column items-center gap-3">
              <FaCheckCircle className="text-orange-500" />
              <span className="text-gray-700 text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Puzzle Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={whatwedoBanner} // Replace with actual image path
          alt="What We Do Puzzle"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default WhatWeDoSection;
