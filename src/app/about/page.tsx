'use client';

import { ArrowRight, CheckCircle, MapPin, MessageCircle, Mail, Instagram, } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
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

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Customer Support" }
  ];

  const serviceAreas = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Barrie Area",
      description: "Serving Barrie, Innisfil, Bradford, and surrounding communities with professional mobile detailing services.",
      cities: ["Barrie", "Innisfil", "Bradford", "Angus", "Belle Ewart"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Muskoka Area",
      description: "Extending our premium detailing services to the beautiful Muskoka region and nearby areas.",
      cities: ["Gravenhurst", "Bracebridge", "Huntsville", "Port Carling", "Bala"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Georgian Bay Area",
      description: "Bringing our mobile detailing expertise to the Georgian Bay shoreline communities.",
      cities: ["Midland", "Penetanguishene", "Tiny", "Wasaga Beach", "Collingwood"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Toronto Area",
      description: "Professional automotive care services available throughout the Greater Toronto Area.",
      cities: ["Toronto", "Mississauga", "Brampton", "Markham", "Richmond Hill"]
    }
  ];

  const team = [
    {
      name: "Matt",
      role: "Founder & Lead Detailer",
      image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBdnpX5TkVQk2glCzju5GExv06fpAZOPi8coSY",
      description: "With over 5 years of experience in automotive detailing, Matt founded the company with a passion for perfection and customer satisfaction."
    },
    {
        name: "Lilly",
        role: "Co-Founder",
        image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBdnpX5TkVQk2glCzju5GExv06fpAZOPi8coSY",
        description: "With 1 year of experience in automotive detailing, Lilly founded the company with a passion for perfection and customer satisfaction."
      }
  ];

  const services = [
    {
      title: "Auto Detailing",
      description: "Complete interior and exterior detailing services",
      image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBKFoUSv6tGmnr8f2YWqBMpNDPydLOTsa6lA9h"
    },
    {
      title: "Ceramic Coating",
      description: "Premium protection for your vehicle's paint",
      image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBn9h0pG34lEbFrsUOipKXmYagnAjTIHGVzoPf"
    },
    {
      title: "Monthly Maintenance Detail",
      description: "Deep cleaning and protection of all interior surfaces including leather conditioning, fabric protection, and dashboard restoration, every month.",
      image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXB8gut7rI1vCAOKdVGZPecbrXpkIfHxNaUBS5t"
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
                    item.path === '/about' ? 'text-white' : ''
                  }`}
                >
                  {item.text}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all ${
                    item.path === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              About Barrie&apos;s Mobile Detailing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Your trusted partner in automotive excellence. We bring professional detailing services directly to your doorstep with unmatched quality and convenience.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/contact">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2 relative overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </a>
              <a href="/past-work">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                  View Our Work
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded with a passion for automotive excellence, Barrie&apos;s Mobile Detailing began as a vision to bring professional-grade detailing services directly to our customers&apos; doorsteps.
                </p>
                <p>
                  What started as a one-person operation has grown into Barrie&apos;s premier mobile detailing service, serving hundreds of satisfied customers across the region. Our commitment to quality, convenience, and customer satisfaction has made us the go-to choice for automotive care.
                </p>
                <p>
                  We believe that every vehicle deserves the best care, and we&apos;re proud to provide that service with the highest standards of professionalism and attention to detail.
                </p>
              </div>
            </div>
            <div>
              <div className="relative">
                <Image
                  src="https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBdnpX5TkVQk2glCzju5GExv06fpAZOPi8coSY"
                  alt="Barrie's Mobile Detailing Team"
                  className="w-full h-96 object-cover rounded-2xl"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden rounded-xl mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={250}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Serve Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Where We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-blue-400 mr-4">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.cities.map((city, cityIndex) => (
                    <span
                      key={cityIndex}
                      className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl"
              >
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                    <p className="text-lg text-blue-400 mb-4">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Mobile Service</h3>
              </div>
              <p className="text-gray-400">We come to you! No need to drive anywhere - we bring our professional equipment and expertise to your location.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Premium Products</h3>
              </div>
              <p className="text-gray-400">We use only the highest quality products and equipment to ensure your vehicle receives the best care possible.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Experienced Team</h3>
              </div>
              <p className="text-gray-400">Our team has years of experience in automotive detailing, ensuring professional results every time.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Flexible Scheduling</h3>
              </div>
              <p className="text-gray-400">We work around your schedule to provide convenient service when you need it most.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Satisfaction Guarantee</h3>
              </div>
              <p className="text-gray-400">We stand behind our work with a 100% satisfaction guarantee. If you&apos;re not happy, we&apos;ll make it right.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Eco-Friendly</h3>
              </div>
              <p className="text-gray-400">We use environmentally friendly products and water-saving techniques to protect both your vehicle and the environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of satisfied customers who trust Barrie&apos;s Mobile Detailing for their automotive care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2 relative overflow-hidden">
                  <span className="relative z-10">Book Your Service</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </a>
              <a href="/past-work">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                  View Our Work
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
              <h3 className="text-2xl font-bold gradient-text">
                Barrie&apos;s Mobile Detailing
              </h3>
              <p className="text-gray-400">
                Barrie&apos;s premier mobile detailing services
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/precision.to/" className="glass-card p-2 rounded-full hover:bg-white/10 transition-all">
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
