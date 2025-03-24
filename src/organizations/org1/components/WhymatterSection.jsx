import { FaHeart } from "react-icons/fa";
import AnimatedLineCurve from "./AnimatedLineCurve";
import org1Config from "../org1.config";


const WhyItMatters = () => {
  return (
    <div className="why-matters-main-cover-wrapper">
      <AnimatedLineCurve />
      <section className="relative py-20 px-4 md:px-20 w-[75%] overflow-hidden mx-auto">

        <div className="text-center mb-16 relative z-10">
          <div className="flex justify-center items-center gap-2 text-orange-500 text-lg font-semibold">
            <FaHeart /> Why It Matters
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 leading-tight">
            Empowering Youth, <br /> Transforming Futures
          </h2>
          <p className="text-center mt-4 text-gray-700 ">Explore the impact we create by championing
            <br /> youth rights and opportunities.</p>
        </div>

        <div className="grid gap-3 md:grid-cols-3 relative z-10">
          {org1Config?.whyMatterItems.map((item, i) => (
            <>
              {i == 0 && (
                <div className="why-matters-banner-cover-box" >
                  <div className="whymatters-card-first-wrapper mb-2"
                    style={{
                      backgroundColor: `${item.bg}`,
                    }}
                  >
                    <p>{item.desc}</p>
                    <h5>{item.title}

                    </h5>
                  </div>
                  <div className="why-matters-banner-cover">
                    <img src={item.img} alt="" />
                  </div>
                </div>
              )}
              {i == 1 && (
                <div
                  key={i}
                  className="h-[100%] relative rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 cursor-pointer"
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
                    <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-white">{item.desc}</p>
                  </div>
                </div>
              )}
              {i == 2 && (
                <div className="why-matters-banner-cover-box">
                  <div className="why-matters-banner-cover">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="whymatters-card-first-wrapper mt-2"
                    style={{
                      backgroundColor: `${item.bg}`,
                    }}
                  >
                    <h5>{item.title}

                    </h5>
                    <p>{item.desc}</p>
                  </div>

                </div>

              )}
            </>
          ))}
        </div>
      </section>

    </div>
  );
};

export default WhyItMatters;
