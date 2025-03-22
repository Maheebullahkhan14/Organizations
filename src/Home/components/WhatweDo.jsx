import React from 'react'
import { whatWedoImg, whatwedoTransparentImg, whatweDoTitleImg , what_we_do_content_strategy_title , what_we_do_persona_branding_title , what_we_do_post_production_title , whatwedoArrow } from '../../assets'

const WhatweDo = () => {
    return (
        <section className='mx-20 my-15'>

            <div className='what-we-do-main-title-cover-wrapper mx-15 mb-10 relative'>
                <img className='ml-10' src={whatweDoTitleImg}></img>
                <img className='absolute left-60 top-0' src={whatwedoArrow} alt="" />
            </div>

            <div className="what-we-do-content-section-cover-wrapper mx-40">
                <div className="flex gap-[70px]">
                    <div className="flex-1">
                        <div className="what-we-do-box group">
                            <img src={whatWedoImg} alt="" className='w-[80%] mx-auto -mb-10  mt-15 move-img transition-transform duration-500 group-hover:-translate-y-18 group-hover:rotate-4' />
                            <img src={whatwedoTransparentImg} className='what-we-do-card-bg w-100 h-[95%]' alt="" />
                            <div className="what-we-do-title-box z-10 relative">
                                <img src={what_we_do_content_strategy_title} className='w-[180px]' alt="" />
                            </div>
                        </div> 
                    </div>
                    <div className="flex-1">
                        <div className="what-we-do-box group">
                        <div className="what-we-do-title-box z-10 relative">
                                <img src={what_we_do_persona_branding_title}  className='w-[180px] absolute -top-20 -left-15' alt="" />
                            </div>
                            <img src={whatWedoImg} alt="" className='w-[80%] mx-auto -mb-10  mt-15 move-img transition-transform duration-500 group-hover:-translate-y-18 group-hover:rotate-4' />
                            <img src={whatwedoTransparentImg} className='what-we-do-card-bg w-100 h-[110%]' alt="" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="what-we-do-box group ">
                            <img src={whatWedoImg} alt="" className='w-[80%] mx-auto -mb-10  mt-15 absoulte transition-transform duration-500 group-hover:-translate-y-18 group-hover:rotate-4' />
                            <img src={whatwedoTransparentImg} className='what-we-do-card-bg w-100 h-[95%]' alt="" />
                            <div className="what-we-do-title-box z-10 relative -ml-5 move-img">
                                <img src={what_we_do_post_production_title} className='w-100' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhatweDo
