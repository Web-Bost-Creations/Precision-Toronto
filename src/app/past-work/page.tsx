'use client';

import { ArrowRight, Clock, Shield, Star, Users, Award, CheckCircle, Car, MapPin, MessageCircle, Mail, Instagram, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PastWork() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pastWork = [
    {
      id: 1,
      image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBftBh03Re6rCE2TIUZS0MliYq4dNk7LpOPKta",
      service: "Window Tinting",
      vehicle: "2020 BMW 3 Series",
      description: "Professional ceramic window tinting with 20% all around"
    },
    {
      id: 2,
      image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBKVMRy46tGmnr8f2YWqBMpNDPydLOTsa6lA9h",
      service: "Paint Protection Film",
      vehicle: "2022 Tesla Model 3",
      description: "Full front end PPF installation with ceramic coating"
    },
    {
      id: 3,
      image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXB9PouO7DTer0bNstk4PB3vSCQWpUF6DXOly5M",
      service: "Ceramic Coating",
      vehicle: "2021 Audi A4",
      description: "Premium ceramic coating with 5-year protection"
    },
    {
      id: 4,
      image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBeewMma8cxHnX5dALMOzkyaNl73FqRPIgGErB",
      service: "Interior Detailing",
      vehicle: "2019 Mercedes C-Class",
      description: "Complete interior deep clean and leather conditioning"
    },
    {
      id: 5,
      image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBdEe4VpkVQk2glCzju5GExv06fpAZOPi8coSY",
      service: "Auto Detailing",
      vehicle: "2020 Ford F-150",
      description: "Full interior and exterior detailing package"
    },
    {
      id: 6,
      image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXB8gut7rI1vCAOKdVGZPecbrXpkIfHxNaUBS5t",
      service: "Wheel & Rim Services",
      vehicle: "2021 Lexus IS 350",
      description: "Professional wheel cleaning and ceramic coating"
    },
    {
      id: 7,
      image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBKFoUSv6tGmnr8f2YWqBMpNDPydLOTsa6lA9h",
      service: "Full In & Out Detail",
      vehicle: "2022 Honda Civic",
      description: "Complete detailing with paint correction and protection"
    },
    {
      id: 8,
      image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBn9h0pG34lEbFrsUOipKXmYagnAjTIHGVzoPf",
      service: "Ceramic Coating",
      vehicle: "2020 Porsche 911",
      description: "Premium ceramic coating with paint correction"
    },
    {
      id: 9,
      image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBbsRUCErBnqPsmHehvdjYMx21UD56TNfwtLFk",
      service: "Window Tinting",
      vehicle: "2021 Toyota Camry",
      description: "Professional window tinting with heat rejection film"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Navbar */}
      <nav className={`fixed opacity-95 top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image
                src="https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBaA9NqwtN7I2ByenPltvUchGV8dmLfT6S0iCo"
                alt="Barrie's Mobile Detailing"
                className="w-16 h-12 transform scale-150"
                width={64}
                height={64}
                unoptimized
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { text: 'Home', path: '/' },
                { text: 'About', path: '/about' },
                { text: 'Past Work', path: '/past-work' }
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.path}
                  className={`text-gray-300 hover:text-white transition-colors relative group ${
                    item.path === '/past-work' ? 'text-white' : ''
                  }`}
                >
                  {item.text}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all ${
                    item.path === '/past-work' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href='/contact'>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-medium hover:opacity-90 transition-all flex items-center gap-2 group">
                  BOOK NOW!
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-10 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {[
                { text: 'Home', path: '/' },
                { text: 'About', path: '/about' },
                { text: 'Past Work', path: '/past-work' }
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.path}
                  className="block py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {item.text}
                </a>
              ))}
              <div className="pt-4 space-y-4">
                <a href='/contact'>
                  <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:opacity-90 transition-all">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              Our Past Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              See the quality of our work through our portfolio of completed projects. Each vehicle tells a story of transformation and excellence.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/contact">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2 relative overflow-hidden">
                  <span className="relative z-10">Book Your Service</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </a>
              <a href="/about">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Portfolio Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWork.map((work, index) => (
              <div
                key={work.id}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={work.image}
                    alt={`${work.service} on ${work.vehicle}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={400}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">{work.service}</h3>
                      <p className="text-lg text-blue-300 mb-2">{work.vehicle}</p>
                      <p className="text-sm text-gray-300">{work.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our satisfied customers and experience the difference of professional mobile detailing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2 relative overflow-hidden">
                  <span className="relative z-10">Book Your Service</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </a>
              <a href="/about">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Barrie&apos;s Mobile Detailing
              </h3>
              <p className="text-gray-400">
                Barrie&apos;s premier mobile detailing services
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/precision.to/" className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full hover:bg-white/10 transition-all">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                </a>
              </div>
            </div>

            {/* Main */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Main</h4>
              <ul className="space-y-3">
                {[
                  { text: 'Home', path: '/' },
                  { text: 'Past Work', path: '/past-work' }
                ].map(({ text, path }) => (
                  <li key={text}>
                    <a href={path} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-3">
                {[
                  { text: 'About Us', path: '/about' },
                  { text: 'Contact', path: '/contact' }
                ].map(({ text, path }) => (
                  <li key={text}>
                    <a href={path} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">Barrie, ON</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">(249) 877-5640</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">info@barriesdetailing.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Barrie&apos;s Mobile Detailing. All rights reserved.
              </p>
              <div className="flex gap-1">
                {['Made By Web Boost Creations'].map((item) => (
                  <a
                    key={item}
                    href="https://webboostcreations.com/"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
