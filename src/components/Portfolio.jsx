import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    category: "Amazon FBA",
    title: "Premium Smartwatch Launch",
    description: "Successfully launched a premium smartwatch brand on Amazon US, achieving top 100 ranking in the category within 3 months.",
    metrics: [
      { label: "Revenue Growth", value: "250%", icon: ArrowTrendingUpIcon },
      { label: "Profit Margin", value: "42%", icon: CurrencyDollarIcon },
      { label: "Market Position", value: "Top 100", icon: ChartBarIcon }
    ],
    tags: ["Product Launch", "PPC Optimization", "Brand Building"],
    image: "/portfolio/smartwatch.jpg" // You'll need to add these images to your public folder
  },
  {
    id: 2,
    category: "Market Expansion",
    title: "European Market Entry",
    description: "Led successful expansion into European marketplaces (UK, DE, FR, IT, ES), establishing multi-market presence.",
    metrics: [
      { label: "New Markets", value: "5+", icon: GlobeAltIcon },
      { label: "Revenue Increase", value: "180%", icon: ArrowTrendingUpIcon },
      { label: "ROI", value: "225%", icon: CurrencyDollarIcon }
    ],
    tags: ["International Expansion", "Market Research", "Localization"],
    image: "/portfolio/europe-expansion.jpg"
  },
  {
    id: 3,
    category: "Automation",
    title: "Inventory Management System",
    description: "Developed custom automation tools for inventory management, reducing stockouts by 85% and improving efficiency.",
    metrics: [
      { label: "Efficiency Gain", value: "75%", icon: ArrowTrendingUpIcon },
      { label: "Cost Reduction", value: "40%", icon: CurrencyDollarIcon },
      { label: "Accuracy", value: "99.9%", icon: ChartBarIcon }
    ],
    tags: ["Automation", "Python", "Data Analytics"],
    image: "/portfolio/automation.jpg"
  },
  {
    id: 4,
    category: "Brand Growth",
    title: "Premium Home Goods Brand",
    description: "Scaled a home goods brand from launch to 7-figure annual revenue through strategic marketing and optimization.",
    metrics: [
      { label: "Annual Revenue", value: "$1M+", icon: CurrencyDollarIcon },
      { label: "Growth Rate", value: "300%", icon: ArrowTrendingUpIcon },
      { label: "Market Share", value: "15%", icon: ChartBarIcon }
    ],
    tags: ["Brand Development", "Scale Strategy", "Marketing"],
    image: "/portfolio/home-goods.jpg"
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
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
    <section id="portfolio" className="py-20 bg-gray-50">
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
              Portfolio
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-2 h-1 w-24 bg-primary-600 mx-auto" />
            <motion.p variants={itemVariants} className="mt-4 text-xl text-gray-600">
              Featured projects and success stories
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-full overflow-hidden rounded-lg bg-white shadow-lg border border-gray-100 hover:border-primary-500 transition-all duration-300 cursor-pointer">
                  <div className="relative h-48 bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/80 to-primary-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary-600 font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative bg-white rounded-lg max-w-2xl w-full p-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={() => setSelectedProject(null)}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-primary-600 font-medium">{selectedProject.category}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                    </div>
                    <div className="h-64 bg-gray-200 rounded-lg" />
                    <p className="text-gray-600">{selectedProject.description}</p>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.metrics.map((metric, index) => (
                        <div key={index} className="text-center">
                          <metric.icon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                          <div className="text-sm text-gray-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
