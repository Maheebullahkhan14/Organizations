import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import org1Config from "../org1.config";
import { FaHeart } from "react-icons/fa";

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white px-4 py-10 md:py-20">
            <div className="text-center mb-12">
                <div className=" text-cen flex justify-center items-center gap-2 text-orange-500 font-semibold text-lg">
                    <FaHeart /> How You Can Help
                </div>
                <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mt-4">
                Real stories of transformation,<br /> impact, and empowerment.
                </h2>
            </div>
            <div className="max-w-5xl mx-auto gap-10 items-center justify-center flex rounded-xl">
                <Swiper
                    direction="vertical"
                    slidesPerView={3}
                    spaceBetween={20}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="w-60 h-[400px] rounded-xl"
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                >
                    {org1Config?.testimonialData.map((t, idx) => (
                        <SwiperSlide key={idx}>
                            <img
                                src={t.image}
                                alt={t.name}
                                className={`w-full h-32 object-cover rounded-xl border-4 transition-all duration-300 ${activeIndex === idx
                                    ? "border-orange-500 scale-105"
                                    : "border-transparent opacity-60"
                                    }`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>


                <div className="bg-orange-50 min-h-[300px] rounded-3xl p-8 shadow-lg transition-all duration-500 w-[500px]">
                    <h4 className="text-orange-500 text-sm font-semibold mb-2">
                        ❤️ Success Stories
                    </h4>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                        {org1Config?.testimonialData[activeIndex]?.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                        {org1Config?.testimonialData[activeIndex]?.desc}
                    </p>
                    <div className="flex items-center mb-2">
                        {Array(org1Config?.testimonialData[activeIndex]?.rating)
                            .fill()
                            .map((_, i) => (
                                <span key={i} className="text-yellow-400 text-xl">
                                    ★
                                </span>
                            ))}
                    </div>
                    <p className="text-gray-800 font-semibold">
                        {org1Config?.testimonialData[activeIndex]?.name}
                    </p>
                    <div className="w-20 h-1 bg-orange-500 mt-3 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
