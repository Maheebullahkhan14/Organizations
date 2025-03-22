import React from "react";

const HeroCard = ({ title, description, btnText, bgImage }) => {
  return (
    <div className="relative group overflow-hidden bg-white rounded-2xl shadow-md text-center p-6">
      {/* Sliding image background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:translate-x-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          transform: "translateX(-100%)",
        }}
      ></div>

      {/* Card content on top */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-orange-500 mb-4">
          <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
