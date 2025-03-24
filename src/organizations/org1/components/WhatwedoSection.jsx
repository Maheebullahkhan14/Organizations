import { FaHeart, FaCheckCircle } from "react-icons/fa";
import { whatwedoBanner } from "../assets";

const WhatWeDoSection = () => {
  return (
    <section className="flex mx-auto flex-col md:flex-row items-center justify-between py-16 px-8 md:px-40 gap-10 bg-gray-50">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-5">
        <div
          className="flex items-center gap-2 text-orange-500 font-semibold text-lg"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <FaHeart /> What We Do
        </div>
        <h2
          className="text-2xl md:text-4xl font-semibold text-gray-900"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Stand for Youth, Stand for Rights
        </h2>
        <p
          className="text-gray-600 text-[15px]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
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
            <div
              key={index}
              className="flex flex-column items-center gap-3"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={500 + index * 100}
            >
              <FaCheckCircle className="text-orange-500" />
              <span className="text-gray-800 text-[17px]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Puzzle Image */}
      <div
        className="w-full md:w-1/2 flex justify-center"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <img
          src={whatwedoBanner}
          alt="What We Do Puzzle"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};


export default WhatWeDoSection;
