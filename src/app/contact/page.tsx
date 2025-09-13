'use client';

import { ArrowRight, Clock, Car, MapPin, MessageCircle, Mail, Instagram, Menu, X, Calendar, Phone, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    vehicle: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      id: 'auto-detail',
      name: 'Auto Detailing',
      price: '$150',
      duration: '2-4 hours',
      description: 'Complete interior and exterior detailing'
    },
    {
      id: 'interior-detail',
      name: 'Interior Detailing',
      price: '$100',
      duration: '2-3 hours',
      description: 'Deep cleaning and protection of interior'
    },
    {
      id: 'full-detail',
      name: 'Full In & Out Detail',
      price: '$200',
      duration: '1-2 days',
      description: 'Complete detailing with ceramic coating'
    },
    {
      id: 'ceramic-coating',
      name: 'Ceramic Coating',
      price: '$500',
      duration: '2-3 hours',
      description: 'Premium ceramic coating protection'
    },
    {
      id: 'monthly-maintenance',
      name: 'Monthly Maintenance',
      price: '$100/month',
      duration: '1-1.5 hours',
      description: 'Monthly cleaning and protection'
    },
    {
      id: 'wheel-rim',
      name: 'Wheel & Rim Services',
      price: '$80',
      duration: '1-2 hours',
      description: 'Professional wheel cleaning and protection'
    }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM'
  ];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const selectedServiceDetails = services.filter(service => 
        selectedServices.includes(service.id)
      );

      const message = `
New Service Booking Request:

Customer: ${customerInfo.name}
Phone: ${customerInfo.phone}
Email: ${customerInfo.email}
Address: ${customerInfo.address}
Vehicle: ${customerInfo.vehicle}

Selected Services:
${selectedServiceDetails.map(service => 
  `• ${service.name} - ${service.price} (${service.duration})`
).join('\n')}

Preferred Date: ${selectedDate}
Preferred Time: ${selectedTime}

Additional Notes: ${customerInfo.notes ?? 'None'}

Total Estimated Cost: $${getTotalPrice()}
      `;

      // Send to Twilio API
      console.log('🚀 Sending booking request:', { message, phoneNumber: '+12498775640' });
      
      const response = await fetch('/api/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          phoneNumber: '+12498775640' // Your business phone number
        }),
      });

      console.log('📡 API Response:', { 
        ok: response.ok, 
        status: response.status,
        statusText: response.statusText 
      });

      const responseData = await response.json();
      console.log('📋 Response Data:', responseData);

      if (response.ok) {
        alert('Booking request sent successfully! We will contact you shortly to confirm your appointment.');
        // Reset form
        setSelectedServices([]);
        setSelectedDate('');
        setSelectedTime('');
        setCustomerInfo({
          name: '',
          phone: '',
          email: '',
          address: '',
          vehicle: '',
          notes: ''
        });
      } else {
        throw new Error('Failed to send booking request');
      }
    } catch (error) {
      console.error('Error sending booking request:', error);
      alert('Failed to send booking request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTotalPrice = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        // Extract the first number from the price string
        const priceRegex = /\$?(\d+)/;
        const priceMatch = priceRegex.exec(service.price);
        if (priceMatch) {
          return total + parseInt(priceMatch[1] ?? '0');
        }
      }
      return total;
    }, 0);
  };

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
              Book Your Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Select your services, choose your preferred date and time, and we&apos;ll come to you with professional mobile detailing.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Schedule Your Appointment */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">Schedule Your Appointment</h2>
                
                {/* Services Selection */}
                <div className="mb-8">
                  <label className="block text-lg font-semibold text-white mb-4">
                    <Car className="w-5 h-5 inline mr-2" />
                    Select Services
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          selectedServices.includes(service.id)
                            ? 'border-blue-500 bg-blue-500/20'
                            : 'border-white/20 bg-white/5 hover:border-blue-400 hover:bg-blue-500/10'
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={service.id}
                          checked={selectedServices.includes(service.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedServices(prev => [...prev, service.id]);
                            } else {
                              setSelectedServices(prev => prev.filter(id => id !== service.id));
                            }
                          }}
                          className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500 focus:ring-2 mr-3"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">{service.name}</span>
                            <span className="text-blue-400 font-bold">{service.price}</span>
                          </div>
                          <div className="text-sm text-gray-400">{service.duration}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Selected Services Summary */}
                {selectedServices.length > 0 && (
                  <div className="mb-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-blue-300">Selected Services:</span>
                      <span className="text-lg font-bold text-blue-400">${getTotalPrice()}</span>
                    </div>
                    <div className="text-sm text-gray-300">
                      {selectedServices.map((serviceId) => {
                        const service = services.find(s => s.id === serviceId);
                        return service ? (
                          <span key={serviceId} className="mr-3">
                            {service.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">
                      <Calendar className="w-5 h-5 inline mr-2" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">
                      <Clock className="w-5 h-5 inline mr-2" />
                      Preferred Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      required
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time} className="bg-gray-800">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">Your Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-white mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-white mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-white mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-white mb-2">Vehicle Information *</label>
                    <input
                      type="text"
                      name="vehicle"
                      value={customerInfo.vehicle}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      placeholder="2020 Honda Civic"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-lg font-semibold text-white mb-2">Service Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      placeholder="123 Main St, Barrie, ON L4M 1A1"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-lg font-semibold text-white mb-2">Additional Notes</label>
                    <textarea
                      name="notes"
                      value={customerInfo.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none"
                      placeholder="Any special requests or additional information..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || selectedServices.length === 0}
                  className="group px-12 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Booking Request
                    </>
                  )}
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  We&apos;ll send you a confirmation text message within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Prefer to Call?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              You can also reach us directly for immediate assistance or to discuss your specific needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
                <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Text Us</h3>
                <p className="text-gray-400 mb-4">Quick questions and booking</p>
                <a href="sms:+12498775640" className="text-blue-400 hover:text-blue-300">
                  (249) 877-5640
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-400 mb-4">Speak with our team</p>
                <a href="tel:+12498775640" className="text-blue-400 hover:text-blue-300">
                  (249) 877-5640
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-400 mb-4">Detailed inquiries</p>
                <a href="mailto:info@barriesdetailing.com" className="text-blue-400 hover:text-blue-300">
                  info@barriesdetailing.com
                </a>
              </div>
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
