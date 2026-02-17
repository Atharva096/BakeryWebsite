// src/pages/Products.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Cake, Star, Cookie, Croissant, Heart } from 'lucide-react';

export default function Products() {
  const navigate = useNavigate();

  const products = [
    {
      category: "Flavoured Cakes",
      items: [
        {
          name: "Vanilla Delight",
          description: "Light, fluffy vanilla sponge with buttercream frosting",
          image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Strawberry Bliss",
          description: "Fresh strawberry cake with whipped cream",
          image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Pineapple Paradise",
          description: "Tropical pineapple cake with cream cheese",
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Chocolate Cakes",
      items: [
        {
          name: "Dark Chocolate Truffle",
          description: "Rich, moist chocolate cake with fudge frosting",
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Chocolate Lava",
          description: "Decadent chocolate cake with molten center",
          image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Belgian Chocolate",
          description: "Premium Belgian chocolate cake with ganache",
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
          name: "Gulab Jamun",
          description: "Soft, spongy milk solids soaked in sugar syrup",
          image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Rasgulla",
          description: "Bengali sweet made from chhena and sugar syrup",
          image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Kaju Katli",
          description: "Premium cashew fudge with silver leaf",
          image: "https://images.pexels.com/photos/1267355/pexels-photo-1267355.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Breads",
      items: [
        {
          name: "White Bread",
          description: "Traditional sourdough with crispy crust",
          image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Brown Bread",
          description: "Healthy whole wheat bread for daily consumption",
          image: "https://images.pexels.com/photos/2067636/pexels-photo-2067636.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Milk Bread",
          description: "Soft, buttery milk bread perfect for any meal",
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
          name: "Khari Biscuits",
          description: "Crispy, flaky puff pastry biscuits with butter flavor",
          image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Toast Rusk",
          description: "Golden, crispy toast perfect with tea or coffee",
          image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Butter Khari",
          description: "Rich buttery khari with flaky layers",
          image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Rusk",
      items: [
        {
          name: "Suji Rusk",
          description: "Crispy semolina rusk perfect for morning tea",
          image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Milk Rusk",
          description: "Soft milk rusk with sweet flavor",
          image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Whole Wheat Rusk",
          description: "Healthy whole wheat rusk, light and crunchy",
          image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Muffins and Fruit Cakes",
      items: [
        {
          name: "Blueberry Muffins",
          description: "Fresh blueberry muffins with crumb topping",
          image: "https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Chocolate Muffins",
          description: "Rich chocolate muffins with chocolate chips",
          image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Fruit Cake",
          description: "Traditional fruit cake with dried fruits and nuts",
          image: "https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    }
  ];

  const handleCategoryClick = (categoryName: string) => {
    const slug = categoryName.toLowerCase().replace(/\s+/g, '-');
    console.log('Navigating to:', `/products/${slug}`); // Debug log
    navigate(`/products/${slug}`);
  };

  const getCategoryIcon = (categoryName: string) => {
    switch(categoryName) {
      case "Flavoured Cakes":
      case "Chocolate Cakes":
      case "Muffins and Fruit Cakes":
        return <Cake className="h-8 w-8 text-rose-600 mx-auto" />;
      case "Pastries":
      case "Sweets":
        return <Star className="h-8 w-8 text-rose-600 mx-auto" />;
      case "Breads":
        return <Croissant className="h-8 w-8 text-rose-600 mx-auto" />;
      case "Cookies":
        return <Cookie className="h-8 w-8 text-rose-600 mx-auto" />;
      case "Khari":
      case "Rusk":
        return <Heart className="h-8 w-8 text-rose-600 mx-auto" />;
      default:
        return <Cake className="h-8 w-8 text-rose-600 mx-auto" />;
    }
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header with back button */}
      <div className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center font-serif">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-amber-900 hover:text-amber-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
          <h1 className="text-3xl font-bold text-amber-900 ml-6">All Products</h1>
        </div>
      </div>

      {/* Category Grid Section */}
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
            {products.map((category, index) => (
              <div 
                key={index} 
                onClick={() => handleCategoryClick(category.category)}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.items[0].image}
                    alt={category.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all"></div>
                </div>
                <div className="p-6 text-center">
                  <div className="mb-3">
                    {getCategoryIcon(category.category)}
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">{category.category}</h3>
                  <p className="text-rose-600 font-semibold">{category.items.length} Varieties</p>
                  <p className="text-sm text-gray-500 mt-2">Click to view details →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-orange-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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