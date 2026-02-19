// src/pages/SubProducts.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, IndianRupee } from 'lucide-react';

export default function SubProducts() {
  const { categorySlug } = useParams(); // Make sure this matches your route
  const navigate = useNavigate();

  console.log('Current categorySlug:', categorySlug); // Debug log

  const products = [
    {
      category: "Flavoured Cakes",
      slug: "flavoured-cakes",
      items: [
        {
          name: "White Forest",
          description: "Light, fluffy vanilla sponge with buttercream frosting",
          image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 300,
          weight: "1/2 kg"
        },
        {
          name: "paan pista",
          description: "Fresh strawberry cake with whipped cream",
          image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 300,
          weight: "1/2 kg"
        },
        {
          name: "Kulfi Faluda",
          description: "Tropical pineapple cake with cream cheese",
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 300,
          weight: "1/2 kg"
        },
        {
          name: "Vanilla Delight",
          description: "Light, fluffy vanilla sponge with buttercream frosting",
          image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 600,
          weight: "1 kg"
        },
        {
          name: "Strawberry Bliss",
          description: "Fresh strawberry cake with whipped cream",
          image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 600,
          weight: "1 kg"
        },
        {
          name: "Pineapple Paradise",
          description: "Tropical pineapple cake with cream cheese",
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 600,
          weight: "1 kg"
        }
      ]
    },
    {
      category: "Chocolate Cakes",
      slug: "chocolate-cakes",
      items: [
        {
          name: "Chocolate Crunch",
          description: "Rich, moist chocolate cake with fudge frosting",
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 330,
          weight: "1/2 kg"
        },
        {
          name: "Black Dark Chocochips",
          description: "Decadent chocolate cake with molten center",
          image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 330,
          weight: "1/2 kg"
        },
        {
          name: "Chocolate white Chocochips",
          description: "Rich, moist chocolate cake with fudge frosting",
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 660,
          weight: "1 kg"
        },
        {
          name: "Black Forest",
          description: "Decadent chocolate cake with molten center",
          image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 660,
          weight: "1 kg"
        }
      ]
    },
    {
      category: "Pastries",
      slug: "pastries",
      items: [
        {
          name: "Butterscotch Pastry",
          description: "Buttery, flaky pastries with fruit and cream fillings",
          image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 50,
        },
        {
          name: "Rasmalai Pastry",
          description: "Fresh, crispy French croissants baked daily",
          image: "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 50,
        },
        {
          name: "Red Velvet Pastry",
          description: "Classic choux pastry filled with vanilla cream",
          image: "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 70,
        },
        {
          name: "Trufle Chocolate Pastry",
          description: "Buttery, flaky pastries with fruit and cream fillings",
          image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 80,
        },
        {
          name: "Blueberry Cheese Pastry",
          description: "Fresh, crispy French croissants baked daily",
          image: "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 80,
        },
        {
          name: "Chocolate Cheese Pastry",
          description: "Fresh, crispy French croissants baked daily",
          image: "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 80,
        },
        {
          name: "Pineapple Cheese Pastry",
          description: "Classic choux pastry filled with vanilla cream",
          image: "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 80,
        }
      ]
    },
    {
      category: "Breads",
      slug: "breads",
      items: [
        {
          name: "White Bread",
          description: "Traditional sourdough with crispy crust",
          image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 40,
          weight: "400g"
        },
        {
          name: "Brown Bread",
          description: "Healthy whole wheat bread",
          image: "https://images.pexels.com/photos/2067636/pexels-photo-2067636.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 50,
          weight: "400g"
        }
      ]
    },
    {
      category: "Cookies",
      slug: "cookies",
      items: [
        {
          name: "Chocolate Chip Cookies",
          description: "Classic cookies with premium chocolate chips",
          image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 120,
          weight: "250g"
        },
        {
          name: "Sugar Cookies",
          description: "Traditional sugar cookies with delicate sweetness",
          image: "https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 100,
          weight: "250g"
        }
      ]
    }
  ];

  // Find the selected category using slug
  const selectedCategory = products.find(p => p.slug === categorySlug);

  console.log('Selected Category:', selectedCategory); // Debug log

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Category not found</h2>
          <p className="text-gray-600 mb-6">Looking for: {categorySlug}</p>
          <button 
            onClick={() => navigate('/products')}
            className="bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 pb-20">
      {/* Header with back button */}
      <div className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center font-serif">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center text-amber-900 hover:text-amber-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Categories
          </button>
          <h1 className="text-2xl font-bold text-amber-900 ml-4 border-l-2 border-rose-400 pl-4">
            {selectedCategory.category}
          </h1>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-amber-900 mb-4 font-serif">
              {selectedCategory.category}
            </h2>
            <div className="w-32 h-1.5 bg-rose-400 mx-auto mb-4"></div>
            <p className="text-xl text-amber-800">
              {selectedCategory.items.length} Delicious Varieties Available
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedCategory.items.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                <div className="absolute top-4 right-4 bg-amber-900 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-1">
                    <IndianRupee className="h-4 w-4" />  {/* ✅ Fixed */}
                    {item.price}
                </div>
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-semibold text-amber-900">
                    {item.weight}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3 font-serif">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}