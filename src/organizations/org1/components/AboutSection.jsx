import { FaHeart, FaPhoneAlt, FaHandsHelping } from "react-icons/fa";
import { aboutBanner } from "../assets";
import commonTitle from "./commonTitle";
import { BsChevronDoubleRight } from "react-icons/bs";


const AboutUs = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-20 gap-10 bg-white">
            {/* Left Banner */}
            <div
                className="about-left-banner-img"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-delay="200"
            >
                <img src={aboutBanner} alt="About Banner" />
            </div>


            <div className="w-full md:w-1/2 space-y-5">
                <div data-aos="fade-up">
                    <commonTitle title="About Us" />
                </div>

                <h2 data-aos="fade-up" data-aos-delay="100" className="text-2xl md:text-2xl font-bold text-gray-900 leading-tight">
                    Championing Youth, Securing Rights, Creating Impact.
                </h2>

                <p data-aos="fade-up" data-aos-delay="200" className="text-gray-600 text-[14px]">
                    At All Youth Rights Organization, We empower youth, protect their rights, and amplify their voices for a better future.
                </p>

                <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-3 mt-4">
                    <FaHandsHelping className="text-orange-500 text-xl" />
                    <div>
                        <h4 className="text-gray-800 font-semibold">Start Helping Team</h4>
                        <p className="text-gray-500 text-sm">There are many variations of solve</p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row items-center gap-5 mt-6">
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 flex items-center gap-2 text-[14px]">
                        <span className="btn-icon">
                            <BsChevronDoubleRight />
                        </span>
                        Know More
                    </button>
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-orange-500 phone-icon" />
                        <h6 className="flex flex-col">
                            <span className="text-[12px] text-gray-400">Call Anytime</span>
                            <span className="text-gray-700 text-lg text-[14px]">+91 300-415-1686</span>
                        </h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
