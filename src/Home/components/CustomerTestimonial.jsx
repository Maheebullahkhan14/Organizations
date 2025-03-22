import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Star } from 'lucide-react';
import { testimonialStarShape , testmonialScribbedShape , testimonialQuoteIcon , testimonialuserIcon} from '../../assets';


const testimonials = [
  {
    name: 'Alex Carter',
    role: 'Business Coach',
    image: testimonialuserIcon,
    rating: 5,
    text: 'The transformation was incredible! Their videos took my brand to the next level, increasing engagement like never before.',
  },
  {
    name: 'Sophia Reynolds',
    role: "Editor, 'WOMAN' Magazine",
    image: testimonialuserIcon,
    rating: 5,
    text: 'From raw content to a polished masterpiece, they handled everything seamlessly. Highly recommended!',
  },
  {
    name: 'Michael Brown',
    role: 'Content Creator',
    image: testimonialuserIcon,
    rating: 5,
    text: 'I never had such professional content before. A total game-changer!'
  },
  {
    name: 'Michael Brown',
    role: 'Content Creator',
    image: testimonialuserIcon,
    rating: 5,
    text: 'I never had such professional content before. A total game-changer!'
  },
  {
    name: 'Michael Brown',
    role: 'Content Creator',
    image: testimonialuserIcon,
    rating: 5,
    text: 'I never had such professional content before. A total game-changer!'
  }
];

const CustomerStory = () => {
  return (
    <div className="relative w-full  mx-auto py-32 text-white rounded-xl text-center">
      {/* Decorative Shapes */}
      <img src={testimonialStarShape} alt="Shape 1" className="absolute top-20 left-[120px] w-[150px] animate-[rotate360_3s_linear_infinite]" />
      {/* <img src={shape2} alt="Shape 2" className="absolute top-5 right-5 w-12" /> */}
      <img src={testmonialScribbedShape} alt="Shape 3" className="absolute top-20 right-[120px] transform -translate-x-1/2 w-[150px]" />

      {/* Section Title */}
      <div className="customer-title-main-cover-wrapper w-[450px] mx-auto">
        <p className="text-lg text-green-400 flex items-center justify-center gap-2">
          <span className="text-green-400">▶</span> Customer Story
        </p>
        <h2 className="text-3xl my-2">From Vision to Viral – How Our Videos Transformed Brands</h2>
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.8 },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="mt-10"
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-6 rounded-[20px] border border-lime-600 text-left min-h-[250px] flex flex-col justify-between">
                
              <div className="testimonial-content-header-box flex flex-row justify-between">
                <div className="flex items-center gap-3">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                    <div className="flex items-center gap-1 text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                        ))}
                        <span className="ml-1 text-white">{testimonial.rating}.0</span>
                    </div>
                    </div>
                </div>
                <img className='w-25' src={testimonialQuoteIcon}></img>
              </div>
              <p className="text-sm">{testimonial.text}</p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerStory;
