'use client';

import { ArrowRight, Instagram, Menu, X, Clock, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link
import Image from 'next/image'; // Import Image
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

// Services data with pricing
const SERVICES = [
  {
    id: 1,
    title: "Auto Detailing",
    description: "Complete interior and exterior detailing to restore your vehicle's showroom shine. Includes wash, wax, interior cleaning, and protection.",
    image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBKFoUSv6tGmnr8f2YWqBMpNDPydLOTsa6lA9h",
    price: "Starting at $150",
    features: ["Interior & Exterior", "Paint Protection", "Lifetime Warranty"],
    duration: "2-4 hours"
  },
  {
    id: 2,
    title: "Interior Detailing",
    description: "Deep cleaning and protection of all interior surfaces including leather conditioning, fabric protection, and dashboard restoration.",
    image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBeewMma8cxHnX5dALMOzkyaNl73FqRPIgGErB",
    price: "Starting at $100",
    features: ["Leather Conditioning", "Fabric Protection", "Odor Elimination"],
    duration: "2-3 hours"
  },
  {
    id: 3,
    title: "Full In & Out Detail",
    description: "Premium ceramic coating that provides long-lasting protection with incredible gloss and hydrophobic properties for your vehicle's paint.",
    image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBn9h0pG34lEbFrsUOipKXmYagnAjTIHGVzoPf",
    price: "Starting at $200",
    features: ["5-Year Protection", "UV Resistance", "Easy Maintenance"],
    duration: "1-2 days"
  },
  {
    id: 4,
    title: "Ceramic Coating",
    description: "Premium ceramic coating that provides long-lasting protection with incredible gloss and hydrophobic properties for your vehicle's paint.",
    image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBn9h0pG34lEbFrsUOipKXmYagnAjTIHGVzoPf",
    price: "Starting at $500",
    features: ["5-Year Protection", "UV Resistance", "Easy Maintenance"],
    duration: "2-3 hours"
  },
  {
    id: 5,
    title: "Monthly Maintenance Detail",
    description: "Deep cleaning and protection of all interior surfaces including leather conditioning, fabric protection, and dashboard restoration, every month.",
    image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBeewMma8cxHnX5dALMOzkyaNl73FqRPIgGErB",
    price: "Starting at $100/month",
    features: ["Monthly Cleaning", "Odor Elimination", "Protection"],
    duration: "1-1 1/2 hour"
  },
  {
    id: 6,
    title: "Wheel & Rim Services",
    description: "Professional wheel cleaning, polishing, and protection services to keep your rims looking brand new and protected from brake dust.",
    image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXB8gut7rI1vCAOKdVGZPecbrXpkIfHxNaUBS5t",
    price: "Starting at $80",
    features: ["Deep Cleaning", "Polishing", "Protection Coating"],
    duration: "1-2 hours"
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
                src="https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBq5eGX9YsNxfujw0v69PZOBH1Sc7DQnRGkaFE"
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
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all group-hover:w-full" />
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
              className="md:hidden relative z-10 p-2 glass-card rounded-lg"
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
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <iframe
          src="https://www.youtube.com/embed/kbDM5oTUNPY?autoplay=1&mute=1&loop=1&playlist=kbDM5oTUNPY&controls=0&enablejsapi=1&rel=0&showinfo=0&preload=1"
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="eager"
          style={{
            border: 'none',
            width: '100vw',
            height: '56.25vw', /* maintain 16:9 aspect ratio */
            minHeight: '100%',
            minWidth: '177.77vh', /* 100 * 16/9 */
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10" />

        <div className="relative z-20 container mx-auto flex flex-col items-center justify-center text-center">
          <div className='transform scale-150'>
          <div className=''>
          <Image
            src="https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXB3F0CZMvIHrRV3bcKLXWzfQod89hGa6vAY4qU"
            alt="Barrie's Mobile Detailing"
            className=" transfor scale-150"
            width={192}
            height={48}
            unoptimized
          />
          </div>
          </div>
          <strong>
          <p className="text-xl  md:text-4xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Specializing in mobile detailing services with industry-leading quality and precision.
          </p>
          </strong>
          <div className="flex gap-4 justify-center">
            <a href='/about'>
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2 relative overflow-hidden">
                <span className="relative z-10">About Us</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </a>
            <a href='/contact'>
              <button className="px-8 py-4 glass-card rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                Book Now!
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Services Showcase Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in gradient-text">
            Our Services
          </h2>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="group glass-card rounded-2xl overflow-hidden fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Image */}
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={400}
                    height={250}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {service.duration}
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 gradient-text">{service.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded-md text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a href={`/services/${service.title.replace(/\s+/g, '-').toLowerCase()}`}>
                    <button className="w-full group/btn px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-white hover:opacity-90 transition-all flex items-center justify-center gap-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-400 mb-6 text-lg">
              Ready to transform your vehicle? Choose from our premium services above.
            </p>
            <a href="/contact">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2 mx-auto">
                <span>Book Your Service</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in gradient-text">
            Our Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[
              {
                image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBftBh03Re6rCE2TIUZS0MliYq4dNk7LpOPKta",
                alt: "Window Tinting"
              },
              {
                image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBKVMRy46tGmnr8f2YWqBMpNDPydLOTsa6lA9h",
                alt: "Paint Protection Film"
              },
              {
                image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXB9PouO7DTer0bNstk4PB3vSCQWpUF6DXOly5M",
                alt: "Ceramic Coating"
              },
              {
                image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBeewMma8cxHnX5dALMOzkyaNl73FqRPIgGErB",
                alt: "Interior Detailing"
              },
              {
                image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBdEe4VpkVQk2glCzju5GExv06fpAZOPi8coSY",
                alt: "Exterior Detailing"
              },
              {
                image: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXB8gut7rI1vCAOKdVGZPecbrXpkIfHxNaUBS5t",
                alt: "Wheel & Rim Services"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={500}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in gradient-text">
            Our Google Reviews
          </h2>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="glass-card p-8 rounded-2xl fade-in text-black bg-white">
              <div className="flex items-start gap-4 mb-6">
                
                <div>
                  <h3 className="gradient-text font-semibold text-lg">Shams Haroon</h3>
                  <div className="flex items-center">
                    {/* Star Icons */}
                    {[...Array(5).keys()].map((index: number) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.207-6 5.848 1.415 8.25L12 18.897l-7.415 3.91L6.332 15.21l-6-5.848 8.332-1.207z" />
                      </svg>
                    ))}
                    <span className='pl-3 text-gray-500'>5 months ago</span>
                  </div>
                </div>
              </div>
              <p className="italic">
                &apos;Got my tints done from this business. 30% in the front and 20% in the back and the results came out amazing. Would definitely come back if I needed to get tints done on a new car.&apos;
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl fade-in text-black bg-white">
              <div className="flex items-start gap-4 mb-6">
                
                <div>
                  <h3 className="gradient-text font-semibold text-lg">Des Laferrara</h3>
                  <div className="flex items-center">
                    {/* Star Icons */}
                    {[...Array(5).keys()].map((index: number) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.207-6 5.848 1.415 8.25L12 18.897l-7.415 3.91L6.332 15.21l-6-5.848 8.332-1.207z" />
                      </svg>
                    ))}
                    <span className='pl-3 text-gray-500'>5 months ago</span>
                  </div>
                </div>
              </div>
              <p className=" italic">
                &apos;Your car is always in great hands with Precision. consistently delivers top notch results, and your car will look and feel brand new. Professional, detailed, and always making sure you&apos;re completely satisfied. never been disappointed! highly, highly recommend.&apos;
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl fade-in text-black bg-white">
              <div className="flex items-start gap-4 mb-6">
                
                <div>
                  <h3 className="gradient-text font-semibold text-lg">Sayf Kamran</h3>
                  <div className="flex items-center">
                    {/* Star Icons */}
                    {[...Array(5).keys()].map((index: number) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.207-6 5.848 1.415 8.25L12 18.897l-7.415 3.91L6.332 15.21l-6-5.848 8.332-1.207z" />
                      </svg>
                    ))}
                    <span className='pl-3 text-gray-500'>7 months ago</span>
                  </div>
                </div>
              </div>
              <p className=" italic">
                &apos;Went to Precision for a much needed detailing, and the job was done incredibly by far the best service I have received well priced and extremely reliable.&apos;
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl fade-in text-black bg-white">
              <div className="flex items-start gap-4 mb-6">
                
                <div>
                  <h3 className="gradient-text font-semibold text-lg">Yusuf Ali</h3>
                  <div className="flex items-center">
                    {/* Star Icons */}
                    {[...Array(5).keys()].map((index: number) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.207-6 5.848 1.415 8.25L12 18.897l-7.415 3.91L6.332 15.21l-6-5.848 8.332-1.207z" />
                      </svg>
                    ))}
                    <span className='pl-3 text-gray-500'>2 years ago</span>
                  </div>
                </div>
              </div>
              <p className=" italic">
                &apos;Absolutely spectacular service. Amazing attention to detail. This gentleman had my car looking like I had just purchased it out the showroom. Definitely will be returning, and definitely recommend this service to anyone who is looking to get their vehicle detailed to perfection with a good price tag. Thank you precision auto care!&apos;
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl fade-in text-black bg-white">
              <div className="flex items-start gap-4 mb-6">
                
                <div>
                  <h3 className="gradient-text font-semibold text-lg">Angie F</h3>
                  <div className="flex items-center">
                    {/* Star Icons */}
                    {[...Array(5).keys()].map((index: number) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.207-6 5.848 1.415 8.25L12 18.897l-7.415 3.91L6.332 15.21l-6-5.848 8.332-1.207z" />
                      </svg>
                    ))}
                    <span className='pl-3 text-gray-500'>9 months ago</span>
                  </div>
                </div>
              </div>
              <p className=" italic">
                &apos;My car looked brand new after Haris took care of it. Unprecedented attention to detail. Best car detailing ever!&apos;
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl fade-in text-black bg-white" style={{ animationDelay: "200ms" }} >
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <h3 className="gradient-text font-semibold text-lg">Maaz Shaikh</h3>
                  <div className="flex items-center">
                    {/* Star Icons */}
                    {[...Array(5).keys()].map((index: number) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.207-6 5.848 1.415 8.25L12 18.897l-7.415 3.91L6.332 15.21l-6-5.848 8.332-1.207z" />
                      </svg>
                    ))}
                    <span className='pl-3 text-gray-500'>1 year ago</span>
                  </div>
                </div>
              </div>
              <p className=" italic">
                &apos;Such a clean and professional job at an affordable rate. Definitely talented and efficient with the time, had my car spotless in an hour. He goes above and beyond to really take care of your car as his own.&apos;
              </p>
            </div>
          </div>

          {/* Add the "See our Google reviews" button here */}
          <div className="text-center">
            <a href="https://maps.app.goo.gl/FT3DaJsFWaCguoky9" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg hover:opacity-90 transition-all">
                Share your experience
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in gradient-text">
              Ready to see change in your vehicle?
            </h2>
            <p className="text-xl text-gray-300 mb-8 fade-in">
              Join hundreds of satisfied customers who trust us with their vehicles. Experience the difference of professional detailing and protection services.
            </p>
            <a href='/contact'>
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg opacity-50 hover:opacity-90 transition-all relative overflow-hidden">
              <span className="relative z-10">Book now!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            </a>
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