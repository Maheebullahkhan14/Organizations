import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { reel_user_01 } from '../../assets';

const videos = [{
    path: "/reel_01.mp4",
    views: "4.9M + Views"
},
{
    path: "/reel_01.mp4",
    views: "100K + Views"
},
{
    path: "/reel_01.mp4",
    views: "4.6M + Views"
},
{
    path: "/reel_01.mp4",
    views: "60K + Views"
},
{
    path: "/reel_01.mp4",
    views: "650K + Views"
},
{
    path: "/reel_01.mp4",
    views: "3M + Views"
},


];


const VideosScroll = () => {
    return (
        <div className='w-[85%] mx-auto'>
            <div className="relative w-full py-10">
                <div className="reel-cover-wrapper">
                    <Swiper
                        modules={[Navigation, Autoplay, FreeMode]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        spaceBetween={20}
                        slidesPerView={4} // Adjust as needed
                        freeMode={true}
                        speed={2000} // Controls scroll speed
                        className="rounded-xl"
                    >
                        {videos.map((vidData, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="reel-videos-box-cover">
                                    <video
                                        src={`../../../public/slider_reel${(idx % 6) + 1}.mp4`}

                                        autoPlay
                                        className="rounded-2xl w-full object-cover"
                                        muted
                                        loop
                                    />
                                    <div className="reel-footer-box flex relative items-center justify-center flex-row mt-3">
                                        {/* <div className="reel-footer-user-icon">
                                            <img src={reel_user_01} alt="" />
                                        </div> */}
                                        <h6 className='text-center'>{vidData?.views}</h6>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Navigation Buttons */}
                        <div className="swiper-button-prev">
                            {/* <ChevronLeft size={24} /> */}
                        </div>
                        <div className="swiper-button-next">
                            {/* <ChevronRight size={24} /> */}
                        </div>
                    </Swiper>

                </div>
            </div>
        </div>
    );
}

export default VideosScroll;
