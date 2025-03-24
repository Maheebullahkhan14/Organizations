import React from "react";

const HeroCard = ({ title, description, btnText, bgImage, index , icon}) => {
  return (
    <div className={`hero-card-box text-center relative flex bg-white z-1 }` }>
      <div className="relative z-10 flex flex-col items-center p-4 hero-card-content">
        <div className="text-orange-500 mb-4">
          <img src={icon} width="40px" height="40px" alt={title}></img>
        </div>
        <h3 className="text-[18px] font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-[14px] mb-4 min-h-[80px]">{description}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium">
          {btnText}
        </button>
      </div>

      {index == 2 && (
        <div className="banner-card-img">
          <img src={bgImage} alt="" />
        </div>
      )}

    </div>
  );
};

export default HeroCard;
