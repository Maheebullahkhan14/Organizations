import React, { useRef } from "react";
import { PlayCircle } from "lucide-react";
import HeroCard from "./HeroCard";
import org1Config from "../org1.config";
import Header from "../../../components/common/Header";
import { motion, useInView } from "framer-motion";

const getVariantByIndex = (index) => {
    const commonTransition = {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1], // stagger based on index
    };

    if (index % 3 === 0) {
        return {
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0, transition: commonTransition },
        };
    } else if (index % 3 === 1) {
        return {
            hidden: { opacity: 0, y: 150 },
            visible: { opacity: 1, y: 0, transition: commonTransition },
        };
    } else {
        return {
            hidden: { opacity: 0, x: 150 },
            visible: { opacity: 1, x: 0, transition: commonTransition },
        };
    }
};

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" },
    }),
};

const HeroSection = () => {
    return (
        <>
            <section className="relative hero-section-main-cover-wrapper bg-cover bg-center bg-no-repeat px-4 md:px-8 lg:px-16 text-white">
                <Header />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 max-w-7xl mx-auto text-center mt-[100px] pb-[200px]"
                >
                    <motion.h3
                        custom={0}
                        variants={fadeUpVariant}
                        className="text-lg md:text-xl font-light mb-2"
                    >
                        Become a part of our mission.
                    </motion.h3>
                    <motion.h1
                        custom={1}
                        variants={fadeUpVariant}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        <span className="text-orange-500">Together</span> we can do so much.
                    </motion.h1>
                    <motion.p
                        custom={2}
                        variants={fadeUpVariant}
                        className="text-md md:text-lg mb-6"
                    >
                        We can create a better future for all.
                    </motion.p>
                    <motion.div
                        custom={3}
                        variants={fadeUpVariant}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                            Donate Now
                        </button>
                        <button className="cursor-pointer flex items-center gap-2 text-white border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
                            <PlayCircle className="w-5 h-5" /> Watch video
                        </button>
                    </motion.div>
                </motion.div>
            </section>
            <section className="hero-cards-main-cover-wrapper -mt-[100px]">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-[75%] mx-auto">
                    {org1Config?.HerocardsData.map((card, index) => {
                        const cardRef = useRef(null);
                        const isInView = useInView(cardRef, { once: true, amount: 0.5 });

                        return (
                            <motion.div
                                key={index}
                                ref={cardRef}
                                variants={getVariantByIndex(index)}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className={`hero-card-box text-center relative flex bg-white z-1  ${index == 2 ? "col-span-2" : ""} ` }
                            >
                                <HeroCard
                                    title={card.title}
                                    description={card.description}
                                    btnText={card.btnText}
                                    bgImage={card.bgImage}
                                    index={index}
                                    icon={card.icon}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </section>

        </>
    );
};

export default HeroSection;