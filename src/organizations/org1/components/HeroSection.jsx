import React from "react";
import { PlayCircle } from "lucide-react";
import HeroCard from "./HeroCard";
import org1Config from "../org1.config";
import Header from "../../../components/common/Header"

const HeroSection = () => {
    return (
        <>
            <section className="relative hero-section-main-cover-wrapper bg-cover bg-center bg-no-repeat px-4 md:px-8 lg:px-16 text-white">
                <Header />
                <div className="relative z-10 max-w-7xl mx-auto text-center mt-[100px] pb-[200px]">
                    <h3 className="text-lg md:text-xl font-light mb-2">Become a part of our mission.</h3>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-orange-500">Together</span> we can do so much.
                    </h1>
                    <p className="text-md md:text-lg mb-6">We can create a better future for all.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
                            Donate Now
                        </button>
                        <button className="flex items-center gap-2 text-white border border-white px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition">
                            <PlayCircle className="w-5 h-5" /> Watch video
                        </button>
                    </div>
                </div>
            </section>
            <section className="hero-cards-main-cover-wrapper -mt-[100px]">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto">
                    {org1Config?.HerocardsData.map((card, index) => (
                        <HeroCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            btnText={card.btnText}
                            bgImage={card.bgImage}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default HeroSection;
