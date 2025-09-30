// src/pages/Products.tsx
import React from 'react';
import {
  Cake,
  Star,
  Heading as Bread,
  Cookie,
  Heart,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const navigate = useNavigate();

  // Define products data
  const products = [
    {
      category: "Flavoured Cakes",
      items: [
        {
          name: "Flavoured Cakes",
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
      category: "Chocolate Cakes",
      items: [
        {
          name: "Flavoured Cakes",
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
      category: "Sweets",
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
      category: "Khari",
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
    },
    {
      category: "Rusk",
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
    },
    {
      category: "Muffins and Fruit Cakes",
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

  // Create category cards
  const categoryCards = products.map((category) => ({
    name: category.category,
    count: category.items.length,
    image: category.items[0].image,
    slug: category.category.toLowerCase().replace(/\s+/g, '-')
  }));

  const categoryIcons = {
    "Falvoured Cakes": Cake,
    "Pastries": Star,
    "Breads": Bread,
    "Cookies": Cookie,
    "Khari": Star
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header with back button */}
      <div className="bg-white shadow-sm py-4">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center font-serif">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-amber-900 hover:text-amber-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-amber-900 ml-6">All Products</h1>
        </div>
      </div>

      {/* Category Grid Section - ONLY THIS SECTION */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-6 font-serif">Our Product Categories</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Explore our delicious range of baked goods by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryCards.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                </div>
                <div className="p-4 text-center">
                  <div className="mb-2">
                    {category.name === "Cakes" && <Cake className="h-8 w-8 text-rose-600 mx-auto" />}
                    {category.name === "Pastries" && <Star className="h-8 w-8 text-rose-600 mx-auto" />}
                    {category.name === "Breads" && <Bread className="h-8 w-8 text-rose-600 mx-auto" />}
                    {category.name === "Cookies" && <Cookie className="h-8 w-8 text-rose-600 mx-auto" />}
                    {category.name === "Khari & Toast" && <Star className="h-8 w-8 text-rose-600 mx-auto" />}
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-1">{category.name}</h3>
                  <p className="text-rose-600 font-medium">{category.count} Types</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-orange-100 py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <h3 className="text-2xl font-bold font-serif">Aishwarya Bakery and Cake Shop</h3>
            </div>
            <p className="text-orange-200 mb-6">Freshly baked happiness every day</p>
            <div className="border-t border-orange-700 pt-6">
              <p className="text-orange-300">
                © 2024 Aishwarya Bakery. All rights reserved. | Made with ❤️ in Baramati
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}