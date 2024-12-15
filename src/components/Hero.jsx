import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-10 animate-gradient-x"></div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            <span className="block">Hi, I'm Bouabdallah Bouzidi</span>
            <span className="block mt-2 text-primary-600">
              <Typewriter
                options={{
                  strings: ['Amazon FBA Expert', 'E-commerce Consultant', 'Automation Specialist'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Transforming e-commerce dreams into bestselling realities with data-driven strategies
            and automation magic.
          </p>

          <div className="mt-8 flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:text-lg"
            >
              Book a Consultation
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:text-lg"
            >
              View Portfolio
            </motion.a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: 'Years Experience', value: '4+' },
              { label: 'Markets', value: 'UK & US' },
              { label: 'Success Rate', value: '95%' },
              { label: 'Happy Clients', value: '50+' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col items-center"
              >
                <dt className="text-2xl md:text-4xl font-bold text-primary-600">{stat.value}</dt>
                <dd className="mt-2 text-sm md:text-base text-gray-600">{stat.label}</dd>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
