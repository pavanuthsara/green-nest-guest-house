import React, { useState } from "react";
import {
  Wifi,
  Droplet,
  ChefHat,
  Wind,
  Loader2,
  MapPin,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  Star,
} from "lucide-react";

import InfrontImage from "../assets/green-nest-guest-house-weligama-infront.webp";

export default function GreenNestGuestHouse() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const amenities = [
    {
      icon: Wifi,
      name: "Free Wi-Fi(30GB/month)",
      description: "Good-speed internet",
    },
    { icon: Droplet, name: "Hot Water", description: "24/7 availability" },
    { icon: ChefHat, name: "Private Kitchen", description: "Fully equipped" },
    { icon: Wind, name: "Air Conditioning", description: "Climate control" },
    { icon: MapPin, name: "Patio", description: "Outdoor seating" },
    { icon: Loader2, name: "Washing Machine", description: "Guest use" },
  ];

  const testimonials = [
    {
      name: "Brian",
      country: "USA",
      rating: 5,
      text: "I felt at home here.  Pavan and his Mother were very warm and welcoming.  AC room, washing machine, spotless kitchen/refrigerator.  Many thanks !",
    },
    {
      name: "Alexey",
      country: "Russia",
      rating: 5,
      text: "We have no place to stay in the morning and the host helped us by allowing to stay for 1 night! The host is super friendly, they gave us welcome drink and a evening coffee. The apartment is new and smell fresh, no mold! Bathroom is super clean and new. We love the apartment all right! I recommend this place to a friend.",
    },
    {
      name: "Nikita",
      country: "Russia",
      rating: 5,
      text: "Pavan was very welcoming, and always ready to help. Offered breakfast and gave a ride to the city. Room was comfy",
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      alt: "Guest room with comfortable bed",
    },
    {
      src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
      alt: "Modern bathroom",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      alt: "Private kitchen area",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      alt: "Cozy living space",
    },
    {
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      alt: "Outdoor patio",
    },
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      alt: "Room interior view",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-emerald-600">
                Green Nest Weligama
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-emerald-600 transition"
              >
                Home
              </a>
              <a
                href="#amenities"
                className="text-gray-700 hover:text-emerald-600 transition"
              >
                Amenities
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-emerald-600 transition"
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-emerald-600 transition"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-emerald-600 transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={InfrontImage}
            alt="Green Nest Guest House weligama front view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to Green Nest Guest House
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Your peaceful retreat in the heart of Sri Lanka
            </p>
            <a
              href="#contact"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Experience Authentic Sri Lankan Hospitality
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Nestled in the vibrant coastal town of Negombo, Green Nest Guest
            House offers a tranquil escape with modern comforts. Our beautifully
            appointed room combines traditional Sri Lankan charm with
            contemporary amenities, providing the perfect base for your island
            adventures.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're exploring ancient temples, relaxing on pristine
            beaches, or immersing yourself in local culture, our guest house
            provides a warm, welcoming environment where you can unwind and feel
            at home.
          </p>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <amenity.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {amenity.name}
                    </h3>
                    <p className="text-gray-600">{amenity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Book Your Stay
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Choose your preferred booking platform
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://www.airbnb.co.in/rooms/1359104449767798121"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="text-2xl font-bold text-rose-500 mb-2">
                Airbnb
              </div>
              <p className="text-gray-600">Book on Airbnb</p>
            </a>
            <a
              href="https://www.booking.com/hotel/lk/green-nest-weligama.en-gb.html?aid=356980&label=gog235jc-10CAsohQFCE2dyZWVuLW5lc3Qtd2VsaWdhbWFIM1gDaIUBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuALb-srKBsACAdICJGJjY2ZhMmI2LWIwZmMtNDFhZC1iZTI0LWE1ZjQ5ODQxOTcyNdgCAeACAQ&sid=c9c055d8f8aa6b3aeadb0076ca1fb2cb&dist=0&keep_landing=1&sb_price_type=total&type=total&chal_t=1767030107569&force_referer=https%3A%2F%2Fwww.google.com%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="text-2xl font-bold text-blue-600 mb-2">
                Booking.com
              </div>
              <p className="text-gray-600">Reserve now</p>
            </a>
            <a
              href="https://wa.me/+94714169537"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-800 mb-2">
                WhatsApp
              </div>
              <p className="text-gray-600">Direct booking(Good offers)</p>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <Instagram className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-800 mb-2">
                Instagram
              </div>
              <p className="text-gray-600">DM us</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
                >
                  Send Message
                </button>
                {formStatus && (
                  <p className="text-emerald-600 text-center">{formStatus}</p>
                )}
              </form>
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700">
                    Weligama, Southern Province, Sri Lanka
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700">+94 71 4169 537</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700">
                    greennestweligama@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-96 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.1822725058632!2d80.40835009999999!3d5.9696172999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1151ac674276f%3A0xaa7fce31b807634d!2sGreen%20Nest%20Guest%20House!5e0!3m2!1sen!2slk!4v1767029020696!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Green Nest Guest House Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">Green Nest Guest House</p>
          <p className="text-gray-400 mb-4">
            Your home away from home in Sri Lanka
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © 2026 Green Nest Guest House. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
