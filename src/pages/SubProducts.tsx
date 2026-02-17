// src/pages/SubProducts.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Rupee } from 'lucide-react';

export default function SubProducts() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  // Complete products data
  const products = [
    {
      category: "Flavoured Cakes",
      items: [
        {
          name: "Vanilla Delight",
          description: "Light, fluffy vanilla sponge with buttercream frosting. Perfect for birthdays and celebrations.",
          image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 450,
          weight: "1 kg"
        },
        {
          name: "Strawberry Bliss",
          description: "Fresh strawberry cake with whipped cream and fruit topping. A fruity delight!",
          image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 500,
          weight: "1 kg"
        },
        {
          name: "Pineapple Paradise",
          description: "Tropical pineapple cake with cream cheese frosting. Refreshing and delicious.",
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 480,
          weight: "1 kg"
        },
        {
          name: "Butterscotch Dream",
          description: "Rich butterscotch cake with caramel drizzle and crunchy nuts.",
          image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 470,
          weight: "1 kg"
        }
      ]
    },
    {
      category: "Chocolate Cakes",
      items: [
        {
          name: "Dark Chocolate Truffle",
          description: "Rich, moist chocolate cake with creamy fudge frosting. A chocolate lover's dream.",
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 550,
          weight: "1 kg"
        },
        {
          name: "Chocolate Lava",
          description: "Decadent chocolate cake with molten center. Served warm with ice cream.",
          image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 600,
          weight: "1 kg"
        },
        {
          name: "Belgian Chocolate",
          description: "Premium Belgian chocolate cake with ganache. Imported chocolate used.",
          image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 650,
          weight: "1 kg"
        },
        {
          name: "Black Forest",
          description: "Classic German cake with chocolate, cherries, and whipped cream.",
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 580,
          weight: "1 kg"
        }
      ]
    },
    {
      category: "Pastries",
      items: [
        {
          name: "Flavoured Pastries",
          description: "Buttery, flaky pastries with fruit and cream fillings. Available in multiple flavors.",
          image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 80,
          weight: "100g"
        },
        {
          name: "Chocolate Pastries",
          description: "Fresh, crispy French croissants baked daily with chocolate filling.",
          image: "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 90,
          weight: "100g"
        },
        {
          name: "Cheese Pastries",
          description: "Classic choux pastry filled with vanilla cream and cheese topping.",
          image: "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 85,
          weight: "100g"
        },
        {
          name: "Fruit Pastries",
          description: "Fresh seasonal fruits on a bed of custard and whipped cream.",
          image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 95,
          weight: "100g"
        }
      ]
    },
    {
      category: "Sweets",
      items: [
        {
          name: "Gulab Jamun",
          description: "Soft, spongy milk solids soaked in aromatic sugar syrup. Served warm.",
          image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 120,
          weight: "500g"
        },
        {
          name: "Rasgulla",
          description: "Bengali sweet made from chhena and soaked in light sugar syrup.",
          image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 140,
          weight: "500g"
        },
        {
          name: "Kaju Katli",
          description: "Premium cashew fudge with silver leaf. Perfect for gifting.",
          image: "https://images.pexels.com/photos/1267355/pexels-photo-1267355.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 400,
          weight: "500g"
        },
        {
          name: "Laddu",
          description: "Traditional Indian sweet made from gram flour and ghee.",
          image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 180,
          weight: "500g"
        }
      ]
    },
    {
      category: "Breads",
      items: [
        {
          name: "White Bread",
          description: "Traditional sourdough with crispy crust and soft interior. Freshly baked daily.",
          image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 40,
          weight: "400g"
        },
        {
          name: "Brown Bread",
          description: "Healthy whole wheat bread, perfect for daily consumption and sandwiches.",
          image: "https://images.pexels.com/photos/2067636/pexels-photo-2067636.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 50,
          weight: "400g"
        },
        {
          name: "Milk Bread",
          description: "Soft, buttery milk bread, perfect for any meal. Kids love it!",
          image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 55,
          weight: "400g"
        },
        {
          name: "Multigrain Bread",
          description: "Nutritious bread with multiple grains and seeds for healthy living.",
          image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 60,
          weight: "400g"
        }
      ]
    },
    {
      category: "Cookies",
      items: [
        {
          name: "Chocolate Chip Cookies",
          description: "Classic cookies with premium chocolate chips. Crunchy outside, soft inside.",
          image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 120,
          weight: "250g"
        },
        {
          name: "Sugar Cookies",
          description: "Traditional sugar cookies with delicate sweetness. Perfect with tea.",
          image: "https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 100,
          weight: "250g"
        },
        {
          name: "Oatmeal Cookies",
          description: "Hearty oatmeal cookies with raisins and spices. Healthy and tasty.",
          image: "https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 110,
          weight: "250g"
        },
        {
          name: "Butter Cookies",
          description: "Melt-in-mouth butter cookies with rich, creamy flavor.",
          image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 130,
          weight: "250g"
        }
      ]
    },
    {
      category: "Khari",
      items: [
        {
          name: "Khari Biscuits",
          description: "Crispy, flaky puff pastry biscuits with rich butter flavor. Tea-time favorite.",
          image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 60,
          weight: "200g"
        },
        {
          name: "Toast Rusk",
          description: "Golden, crispy toast perfect with tea or coffee. Long-lasting freshness.",
          image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 50,
          weight: "200g"
        },
        {
          name: "Butter Khari",
          description: "Rich buttery khari with flaky layers. Made with pure ghee.",
          image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 70,
          weight: "200g"
        },
        {
          name: "Salted Khari",
          description: "Savory khari biscuits with a hint of salt. Perfect evening snack.",
          image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 60,
          weight: "200g"
        }
      ]
    },
    {
      category: "Rusk",
      items: [
        {
          name: "Suji Rusk",
          description: "Crispy semolina rusk perfect for morning tea. Traditional recipe.",
          image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 50,
          weight: "250g"
        },
        {
          name: "Milk Rusk",
          description: "Soft milk rusk with sweet flavor. Kids' favorite breakfast item.",
          image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 55,
          weight: "250g"
        },
        {
          name: "Whole Wheat Rusk",
          description: "Healthy whole wheat rusk, light and crunchy. Good for digestion.",
          image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 60,
          weight: "250g"
        },
        {
          name: "Pav Rusk",
          description: "Crispy pav rusk made from fresh bread. Perfect with chai.",
          image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 45,
          weight: "250g"
        }
      ]
    },
    {
      category: "Muffins and Fruit Cakes",
      items: [
        {
          name: "Blueberry Muffins",
          description: "Fresh blueberry muffins with crumb topping. Baked fresh every morning.",
          image: "https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 60,
          weight: "80g each"
        },
        {
          name: "Chocolate Muffins",
          description: "Rich chocolate muffins with chocolate chips. Double chocolate delight.",
          image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 65,
          weight: "80g each"
        },
        {
          name: "Fruit Cake",
          description: "Traditional fruit cake with dried fruits and nuts. Perfect for celebrations.",
          image: "https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 450,
          weight: "500g"
        },
        {
          name: "Vanilla Muffins",
          description: "Classic vanilla muffins with soft texture. Great for breakfast.",
          image: "https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 55,
          weight: "80g each"
        }
      ]
    }
  ];

  // Find the selected category
  const selectedCategory = products.find(p => 
    p.category.toLowerCase().replace(/\s+/g, '-') === category
  );

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 font-serif">Category not found</h2>
          <p className="text-gray-600 mb-6">The category you're looking for doesn't exist.</p>
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
    <div className="min-h-screen bg-orange-50">
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
                    <Rupee className="h-4 w-4" />
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
                  <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-orange-100 py-12 mt-12">
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