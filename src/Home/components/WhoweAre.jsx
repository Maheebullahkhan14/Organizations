import React from 'react'

const WhoweAre = () => {
    return (
        <section className="hero-section who-we-are-main-cover-section text-white py-16 mt-[120px]">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                {/* Tagline */}
                <div className="hero-tag text-lime-400 text-sm uppercase tracking-widest flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-lime-400 rounded-full"></span>
                    <span>Who We Are</span>
                </div>

                {/* Headline */}
                <div className="hero-headline">
                    <h1 className="text-4xl md:text-7xl font-bold leading-tight uppercase">
                        What is a
                        <br />
                        <span className='ml-[100px]'>
                            <span className="text-lime-400">personal brand?</span>?
                        </span>
                    </h1>
                    <h1 className="text-4xl md:text-7xl font-bold leading-tight ml-auto w-fit uppercase">
                        How to  <br />
                        <span className='ml-[100px]'>
                            <span className="text-lime-400">go viral? </span>?
                        </span>
                    </h1>
                </div>

                <div className="what-we-do-content-description-cover-wrapper flex flex-row flex-end justify-between
         items-end">
                    <p className="hero-description text-gray-300 text-lg max-w-3xl">
                        We specialize in personal branding and video editing, helping individuals and businesses build a strong, memorable presence. From crafting unique identities to producing high-quality content, we ensure you stand out. Our approach blends creativity, strategy, and storytelling to turn ideas into compelling visuals. Let’s create something <span className="text-lime-400">impactful together</span>.
                    </p>

                    {/* Call to Action */}
                    <div className="hero-cta">
                        <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-lime-500 transition connect-who-btn">
                            Let's connect
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoweAre
