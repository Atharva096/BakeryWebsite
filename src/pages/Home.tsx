// src/pages/Home.tsx
import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Star,
  Heart,
  Cake,
  Cookie,
  Heading as Bread
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      category: "Cakes",
      items: [
        {
          name: "Regular Flavoured Cakes",
          description: "Rich, moist chocolate cake with creamy fudge frosting",
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Chocolate Cakes",
          description: "Light, fluffy vanilla sponge with buttercream frosting",
          image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Special Cakes",
          description: "Classic red velvet with cream cheese frosting",
          image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Pastries",
      items: [
        {
          name: "Flavoured Pastries",
          description: "Buttery, flaky pastries with fruit and cream fillings",
          image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Chocolate Pastries",
          description: "Fresh, crispy French croissants baked daily",
          image: "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Cheese Pastries",
          description: "Classic choux pastry filled with vanilla cream",
          image: "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Breads",
      items: [
        {
          name: "White Bread",
          description: "Traditional sourdough with crispy crust and soft interior",
          image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Brown Bread",
          description: "Healthy whole wheat bread, perfect for daily consumption",
          image: "https://images.pexels.com/photos/2067636/pexels-photo-2067636.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Milk Bread",
          description: "Soft, buttery milk bread, perfect for any meal",
          image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Cookies",
      items: [
        {
          name: "Chocolate Chip Cookies",
          description: "Classic cookies with premium chocolate chips",
          image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Sugar Cookies",
          description: "Traditional sugar cookies with delicate sweetness",
          image: "https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Oatmeal Cookies",
          description: "Hearty oatmeal cookies with raisins and spices",
          image: "https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Khari & Toast",
      items: [
        {
          name: "Khari's",
          description: "Crispy, flaky puff pastry biscuits with rich butter flavor",
          image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Toast's",
          description: "Golden, crispy toast perfect with tea or coffee",
          image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Butter's",
          description: "Healthy whole wheat toast, light and crunchy",
          image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    }
  ];

  const galleryImages = [
  "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=500"
];

  const categoryIcons = {
    "Cakes": Cake,
    "Pastries": Star,
    "Breads": Bread,
    "Cookies": Cookie,
    "Khari & Toast": Star
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section
      id="home"
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://i0.wp.com/www.wifemamafoodie.com/wp-content/uploads/2019/09/Chocolate-Fudge-Cake-with-Berries-2-Vegan-and-refined-sugar-free-with-gluten-free-option.jpg?resize=1170%2C617&ssl=1')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="max-w-8xl lg:max-w-8xl mx-auto px-4 sm:px-8 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        <div className="text-center lg:text-left text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-9xl font-serif font-bold leading-tight mb-4">
            Freshly baked
            <br />
            <span className="text-rose-300">happiness</span>
            <br />
            every day
          </h1>
          <p className="text-lg mb-8 opacity-90 max-w-md mx-auto lg:mx-0">
            Welcome to Aishwarya Bakery, where every bite tells a story of love, tradition, and the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              className="bg-rose-500 bg-opacity-80 hover:bg-opacity-100 text-white px-8 py-3 rounded-none text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 border border-rose-400"
            >
              Explore All Products
            </button>
            <button
              className="bg-amber-900 bg-opacity-80 hover:bg-opacity-100 text-white px-8 py-3 rounded-none text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg border border-amber-700"
            >
              View All Locations
            </button>
          </div>
        </div>
      </div>
    </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-7xl font-bold text-amber-900 mb-6 font-serif">About Aishwarya Bakery</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Baker working"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Our Story of Passion</h3>
              <p className="text-amber-800 text-lg mb-6 leading-relaxed">
                At Aishwarya Bakery, we believe that baking is an art form that brings people together. 
                Located in the heart of Baramati, our bakery has been serving the community with love 
                and dedication, creating memorable moments one delicious bite at a time.
              </p>
              <p className="text-amber-800 text-lg mb-6 leading-relaxed">
                We use only the finest ingredients sourced locally whenever possible, ensuring that 
                every cake, pastry, bread, and cookie that leaves our ovens meets our high standards 
                of quality and freshness.
              </p>
              <p className="text-amber-800 text-lg mb-8 leading-relaxed">
                Our friendly team is committed to providing exceptional service, whether you're 
                ordering a custom birthday cake or picking up your daily bread. We're here to make 
                every occasion special.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-rose-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Heart className="h-8 w-8 text-rose-600" />
                  </div>
                  <p className="text-amber-900 font-semibold">Made with Love</p>
                </div>
                <div className="text-center">
                  <div className="bg-rose-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Star className="h-8 w-8 text-rose-600" />
                  </div>
                  <p className="text-amber-900 font-semibold">Eggless Cakes</p>
                </div>
                <div className="text-center">
                  <div className="bg-rose-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Cake className="h-8 w-8 text-rose-600" />
                  </div>
                  <p className="text-amber-900 font-semibold">Fresh Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - KEPT EXACTLY AS IS */}
      <section id="products" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-7xl font-bold text-amber-900 mb-6 font-serif">Our Delicious Products</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              From artisanal breads to decadent cakes, discover our full range of freshly baked goods
            </p>
          </div>

          {products.map((category, categoryIndex) => {
            const IconComponent = categoryIcons[category.category as keyof typeof categoryIcons];
            
            return (
              <div key={categoryIndex} className="mb-16">
                <div className="flex items-center justify-center mb-8">
                  <IconComponent className="h-8 w-8 text-rose-600 mr-3" />
                  <h3 className="text-3xl font-bold text-amber-900">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((product, productIndex) => (
                    <div key={productIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-amber-900 mb-3">{product.name}</h4>
                        <p className="text-amber-700 leading-relaxed">{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gallery Section - Auto-scrolling */}
<section id="gallery" className="py-20 bg-white overflow-hidden">
  <div className="max-w-8x2 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-7xl font-bold text-amber-900 mb-6 font-serif">Our Gallery</h2>
      <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
      <p className="text-xl text-amber-800 max-w-2xl mx-auto">
        Take a look at some of our best-selling and custom cakes
      </p>
    </div>

    {/* Scrolling Container */}
    <div className="relative">
      <div className="flex overflow-hidden">
        <div className="gallery-track flex">
          {/* Duplicate images to ensure seamless loop */}
          {[
            ...galleryImages,
            ...galleryImages // Duplicate for seamless infinite scroll
          ].map((image, index) => (
            <div
              key={index}
              className="gallery-item flex-shrink-0 mx-2 group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image.trim()} // Trim whitespace from URL
                  alt={`Gallery image ${index + 1}`}
                  className="w-80 h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-rose-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-7xl font-bold text-amber-900 mb-6 font-serif">Visit Us Today</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Come experience the warmth and flavor of Aishwarya Bakery at any of our locations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-rose-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Main Store Address</h4>
                    <p className="text-amber-700">R/1, Pencil Chowk, Aishwarya Bakery, Baramati 413102</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-rose-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Phone</h4>
                    <p className="text-amber-700">+91 9657174007</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-rose-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Email</h4>
                    <p className="text-amber-700">aishwaryabakery3@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-amber-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
    
                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/share/r/1GJA7FuQAh/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-rose-100 p-3 rounded-full hover:bg-rose-200 transition-colors duration-200"
                  >
                    <Facebook className="h-6 w-6 text-rose-600" />
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/reel/DScZodBDFBg/?igsh=d2gwdG1zZWJxM3I1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-rose-100 p-3 rounded-full hover:bg-rose-200 transition-colors duration-200"
                  >
                    <Instagram className="h-6 w-6 text-rose-600" />
                  </a>

                  {/* Twitter (you can add later) */}
                  <a 
                    href="#" 
                    className="bg-rose-100 p-3 rounded-full hover:bg-rose-200 transition-colors duration-200"
                  >
                    <Twitter className="h-6 w-6 text-rose-600" />
                  </a>

                </div>
              </div>
            </div>

            {/* Store Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Store Hours</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-orange-100">
                  <span className="text-amber-900 font-medium">Monday - Sunday</span>
                  <span className="text-amber-700">9:00 AM - 10:00 PM</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-rose-50 rounded-lg">
                <p className="text-amber-800 text-center font-medium">
                  🎂 Custom orders require 24-48 hours advance notice
                </p>
              </div>

              {/* Button to Locations Page */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => navigate('/locations')}
                  className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  See All 8 Locations →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-orange-100 py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-rose-400" />
              <h3 className="text-2xl font-bold font-serif">Aishwarya Bakery and Cake Shop</h3>
            </div>
            <p className="text-orange-200 mb-6">Freshly baked happiness every day</p>
            <div className="border-t border-orange-700 pt-6">
              <p className="text-orange-300">
                Atul Bakery is your one-stop destination for freshly baked delights that combine tradition with innovation. Renowned for its wide range of cakes, bread, cookies, and snacks, Atul Bakery is committed to delivering high-quality products made with love and precision.
                © 2024 Aishwarya Bakery. All rights reserved. | Made with ❤️ in Baramati
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}