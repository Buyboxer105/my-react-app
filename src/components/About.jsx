import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900"
            >
              About Me
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="mt-2 h-1 w-24 bg-primary-600 mx-auto"
            />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-90">
                  <div className="absolute inset-0 bg-gray-900 mix-blend-multiply"></div>
                </div>
                <div className="relative p-8 text-white space-y-4">
                  <h3 className="text-2xl font-bold">Quick Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <svg className="h-5 w-5 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>4+ years Amazon FBA experience</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="h-5 w-5 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Bilingual (English & French)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="h-5 w-5 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Aviation Industry Expert</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="h-5 w-5 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Programming & Automation Expert</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600">
                Hey there! I'm absolutely passionate about Amazon FBA and e-commerce success. Just like a pilot needs to master both technical skills and quick decision-making, I bring the same precision and expertise to Amazon selling.
              </p>
              <p className="text-lg text-gray-600">
                Over the past 4 years, I've navigated the complex landscapes of both UK and US Amazon marketplaces. My unique background in aviation has taught me the importance of systems, precision, and safety - principles I apply to every e-commerce strategy I develop.
              </p>
              <p className="text-lg text-gray-600">
                What sets me apart? I combine data-driven analysis with custom automation tools to uncover hidden opportunities in the Amazon marketplace. Think of it as having a high-tech radar for product opportunities!
              </p>
              <div className="pt-6">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                >
                  Let's Talk Strategy
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
