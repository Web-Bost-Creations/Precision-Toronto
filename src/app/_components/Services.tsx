'use client'

import { Shield, Star, Award } from 'lucide-react'

const services = [
  {
    title: 'Entry Detail',
    description: 'Essential care for your vehicle',
    icon: Shield,
    price: '$199',
    features: ['Exterior Wash', 'Interior Vacuum', 'Wheel Cleaning']
  },
  {
    title: 'Maintenance Detail',
    description: 'Comprehensive care package',
    icon: Star,
    price: '$399',
    features: ['Full Detail', 'Paint Protection', 'Interior Deep Clean']
  },
  {
    title: 'Full Detail',
    description: 'Ultimate luxury treatment',
    icon: Award,
    price: '$699',
    features: ['Paint Correction', 'Ceramic Coating', 'Interior Restoration']
  }
]

const ServiceGrid = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="border border-gray-800 rounded-lg p-8 hover:border-white transition-colors">
              <service.icon className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <p className="text-3xl font-bold mb-6">{service.price}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceGrid