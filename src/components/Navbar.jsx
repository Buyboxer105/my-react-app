import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <motion.a
                  href="#"
                  className="text-2xl font-bold text-primary-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BB
                </motion.a>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Call
                </motion.a>
              </div>
              <div className="flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as="a"
                href="#contact"
                className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Book a Call
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
