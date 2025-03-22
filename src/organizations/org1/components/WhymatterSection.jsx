import { FaHeart } from "react-icons/fa";
import AnimatedLineCurve from "./AnimatedLineCurve";
import org1Config from "../org1.config";


const WhyItMatters = () => {
  return (
    <section className="relative py-20 px-4 md:px-20 bg-white overflow-hidden">
      <AnimatedLineCurve /> {/* Or use <AnimatedLineImage /> */}

      <div className="text-center mb-16 relative z-10">
        <div className="flex justify-center items-center gap-2 text-orange-500 text-lg font-semibold">
          <FaHeart /> Why It Matters
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
          Empowering Youth, <br /> Transforming Futures
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3 relative z-10">
        {org1Config?.whyMatterItems.map((item, i) => (
          <div
            key={i}
            className="relative rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${item.bg}, transparent)`,
              }}
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-black">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyItMatters;
