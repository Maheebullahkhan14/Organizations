import { FaHeart, FaPhoneAlt, FaHandsHelping } from "react-icons/fa";
import { aboutBanner } from "../assets";
import commonTitle from "./commonTitle";

const AboutUs = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-20 gap-10 bg-white">
            {/* Left Banner */}
            <div className="about-left-banner-img ">
                <img src={aboutBanner}></img>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 space-y-5">
                <commonTitle title="About Us"/>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Championing Youth, Securing Rights, Creating Impact.
                </h2>
                <p className="text-gray-600">
                    At All Youth Rights Organization, We empower youth, protect their
                    rights, and amplify their voices for a better future.
                </p>
                <div className="flex items-center gap-3 mt-4">
                    <FaHandsHelping className="text-orange-500 text-xl" />
                    <div>
                        <h4 className="text-gray-800 font-semibold">Start Helping Team</h4>
                        <p className="text-gray-500 text-sm">
                            There are many variations of solve
                        </p>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row items-center gap-5 mt-6">
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 flex items-center gap-2 text-lg">
                        Know More
                    </button>
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-orange-500" />
                        <span className="text-gray-700 text-lg">+91 300-415-1686</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
