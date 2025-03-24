
import org1Config from "../org1.config";
import { FaHeart, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const HowYouCanHelp = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white md:w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className=" text-cen flex justify-center items-center gap-2 text-orange-500 font-semibold text-lg">
          <FaHeart /> How You Can Help
        </div>
        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mt-4">
          Be the Change You <br className="hidden md:block" /> Want to See
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {org1Config?.helpItems.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-xl group hover:scale-105 transition-all duration-500 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-200 mb-4">{item.desc}</p>
              <div className="how-can-help-btn">
                <button>
                  <Link>
                    {item.cta}
                  </Link>
                </button>
              </div>
       
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowYouCanHelp;
