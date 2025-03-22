import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'In which locations do you handle production and post-production?',
      answer: 'We handle full production across Southern part of  India, including filming and content creation. For global clients, we provide high-quality post-production services.'
    },
    {
      question: 'What type of content do you create for personal branding',
      answer: 'We create high-quality short-form and long-form content, including talking head videos, cinematic reels, and engaging storytelling formats tailored for social media growth.'
    },
    {
      question: 'Do you offer video editing as a standalone service?',
      answer: 'Yes, we provide professional video editing services separately, including high-retention short-form content, podcast edits, and cinematic post-production.'
    },
    {
      question: 'How long does it take to see results from personal branding?',
      answer: 'Results vary based on consistency and strategy, but most clients start seeing engagement growth within 30 to 90 days.'
    },
    {
      question: 'What platforms do you focus on for personal branding?',
      answer: 'We specialize in content for Instagram, YouTube, LinkedIn, and other major social media platforms, ensuring maximum visibility and reach.'
    },
    {
      question: 'What makes your personal branding strategy different?',
      answer: 'We combine strategic storytelling, high-quality production, and data-driven content optimization to help clients go viral and build long-term brand authority'
    },
  
  ];

  const midIndex = Math.ceil(faqItems.length / 2);
  const leftItems = faqItems.slice(0, midIndex);
  const rightItems = faqItems.slice(midIndex);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white p-4">
      <h2 className="mb-5 text-center text-4xl font-bold faq-header-title">
        <span className=" text-black px-4 py-1 ">Frequently Ask Questions</span>
      </h2>
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[leftItems, rightItems].map((columnItems, columnIndex) => (
          <div key={columnIndex}>
            {columnItems.map((item, index) => (
              <div key={index} className={`mb-4 border ${activeIndex === `${columnIndex}-${index}` ? 'border-lime-400' : 'border-gray-700'} rounded-[15px]`}> 
                <button
                  className="w-full text-left px-5 py-5 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(`${columnIndex}-${index}`)}
                >
                  <span className="font-semibold">{item.question}</span>
                  <span>{activeIndex === `${columnIndex}-${index}` ? '-' : '+'}</span>
                </button>
                <AnimatePresence>
                  {activeIndex === `${columnIndex}-${index}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-4 text-gray-300 overflow-hidden"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
