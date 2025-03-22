
import org1Config from "../org1.config";
import commonTitle from "./commonTitle";

const HowYouCanHelp = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white md:w-6xl mx-auto">
      <div className="text-center mb-12">
        <commonTitle title="How You Can Help" />
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
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
              <div className="backdrop-blur-md bg-white/20 rounded-xl p-3 w-fit text-sm font-semibold border border-white/30 shadow-lg hover:bg-white/30 transition">
                {item.cta}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowYouCanHelp;
