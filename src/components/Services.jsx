import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  CogIcon,
  GlobeAltIcon,
  CommandLineIcon,
  ChartPieIcon,
  ArrowPathIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    category: "Amazon FBA Consulting",
    items: [
      {
        title: "Product Research & Selection",
        description: "Data-driven product selection using advanced analytics and market research tools.",
        icon: MagnifyingGlassIcon,
        highlights: ["Opportunity analysis", "Competitor research", "Profit margin calculation"]
      },
      {
        title: "Listing Optimization",
        description: "Maximize visibility and conversion with optimized listings and A+ content.",
        icon: ChartBarIcon,
        highlights: ["Keyword optimization", "Conversion rate optimization", "Enhanced brand content"]
      },
      {
        title: "PPC Campaign Management",
        description: "Strategic PPC campaigns that maximize ROI and drive targeted traffic.",
        icon: CogIcon,
        highlights: ["Campaign structure", "Bid optimization", "Performance tracking"]
      },
      {
        title: "International Market Expansion",
        description: "Expert guidance for expanding into new Amazon marketplaces globally.",
        icon: GlobeAltIcon,
        highlights: ["Market analysis", "Localization strategy", "Compliance guidance"]
      }
    ]
  },
  {
    category: "Technical Solutions",
    items: [
      {
        title: "Custom Automation Tools",
        description: "Bespoke automation solutions to streamline your Amazon operations.",
        icon: CommandLineIcon,
        highlights: ["Inventory management", "Price optimization", "Order processing"]
      },
      {
        title: "E-commerce Analytics",
        description: "Advanced analytics dashboards for data-driven decision making.",
        icon: ChartPieIcon,
        highlights: ["Sales analytics", "Performance metrics", "Trend analysis"]
      },
      {
        title: "API Integration",
        description: "Seamless integration of Amazon APIs with your existing systems.",
        icon: ArrowPathIcon,
        highlights: ["Custom API solutions", "Data synchronization", "Automated reporting"]
      },
      {
        title: "Process Optimization",
        description: "Streamline operations with efficient workflows and automation.",
        icon: WrenchScrewdriverIcon,
        highlights: ["Workflow automation", "Cost optimization", "Efficiency analysis"]
      }
    ]
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900">
              Services
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-2 h-1 w-24 bg-primary-600 mx-auto" />
            <motion.p variants={itemVariants} className="mt-4 text-xl text-gray-600">
              Comprehensive solutions for your Amazon FBA success
            </motion.p>
          </div>

          {/* Services Grid */}
          {services.map((serviceCategory, categoryIndex) => (
            <div key={serviceCategory.category} className="space-y-8">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 text-center"
              >
                {serviceCategory.category}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceCategory.items.map((service, index) => (
                  <motion.div
                    key={service.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <div className="h-full p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:border-primary-500 transition-all duration-300">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      <service.icon className="h-8 w-8 text-primary-600 mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-500">
                            <svg
                              className="h-4 w-4 text-primary-500 mr-2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:text-lg"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
