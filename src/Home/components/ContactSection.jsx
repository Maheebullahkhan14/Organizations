import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { contactConnectImg, contactTransparentbg_01, contactScisscor, contactTransparentbg_02, contactTransparentbg_03, contactTransparentbg_04, contactConnectImg01 } from '../../assets'

const ContactSection = () => {

    const [bgImage, setBgImage] = useState(contactTransparentbg_01);
    const [opacity, setOpacity] = useState(1);
    const imgRef = useRef(null);

    let index = 0;

    const images = [
        contactTransparentbg_01,
        contactTransparentbg_02,
        contactTransparentbg_03,
        contactTransparentbg_04,
        null // Last one is no image
    ];

    const handleAnimateBg = () => {


        const interval = setInterval(() => {
            setOpacity(0); // Start fade out

            setTimeout(() => {
                setBgImage(images[index]); // Change background after fade out
                setOpacity(1); // Fade in new image
            }, 10); // Adjust fade-out timing (0.5s)

            index++;

            if (index >= images.length) {
                clearInterval(interval);

                // Fade out completely before removing the background
                setTimeout(() => {
                    setOpacity(0); // Fade out
                    setTimeout(() => setBgImage(null), 500); // Remove bg after fade
                }, 300); // Wait for the last image duration
            }
        }, 350);
    };


    return (
        <div className="contact-outside-main-cover-wrappe relative py-15 ">
            <div className='contact-section-main-cover-wrapper flex items-center mx-25'>
                <div className="contact-section-title-box flex-column justify-items-center text-[140px] items-center text-center mx-[30px]">
                    <span className='flex leading-[120px] text-center text-white'>
                        Con
                    </span>
                    <span className='flex leading-[120px] text-center text-white'>
                        ta
                    </span>
                    <span className='flex leading-[120px] text-center text-white'>ct</span>

                </div>
                <div className="contact-content-section-box-cover ml-[25px] w-[500px] text-[35px] text-white">
                    <p>Your most impactful conversation is just one step away. </p>
                    <button>
                        <Link className='contact-lets-talk-btn' to="">
                            <img className={bgImage == null ? "opacity-100" : "opacity-25"} src={contactConnectImg01} alt="" />
                        </Link>
                    </button>
                </div>
            </div>
            <div className="contact-bg-img-box absolute overflow-hidden top-0 h-full opacity-[.65]"  >
                <img className='w-[100vw] h-full z-0' ref={imgRef} src={bgImage}
                    style={{
                        transition: "opacity 0.5s ease-in-out",
                        opacity: opacity, // Smooth fade effect,
                        display: opacity == 0 ? "none" : ""
                    }}
                ></img>
                <div className="cut-img-box w-[230px] z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={() => handleAnimateBg()}>
                    <img className={bgImage == null ? "hidden" : ""} src={contactScisscor} alt="Scissor" />
                </div>
            </div>
        </div>
    )
}

export default ContactSection
