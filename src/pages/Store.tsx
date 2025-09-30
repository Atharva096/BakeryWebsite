// src/pages/Locations.tsx
import React from 'react';
import { MapPin, Phone, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const storeLocations = [
  {
    name: "Main Store - City Center",
    address: "123 Main Street, City Center, Baramati 413102",
    phone: "+91 98765 43210",
    hours: "7:00 AM - 9:00 PM",
    features: ["Custom Cakes", "Full Menu", "Parking Available"],
    lat: 18.8483,
    lng: 75.2903
  },
  {
    name: "Station Road Branch",
    address: "456 Station Road, Near Railway Station, Baramati 413102",
    phone: "+91 98765 43211",
    hours: "6:30 AM - 8:30 PM",
    features: ["Express Service", "Fresh Breads", "Tea & Coffee"],
    lat: 18.8475,
    lng: 75.2910
  },
  {
    name: "College Road Outlet",
    address: "789 College Road, Near Vidya Pratishthan, Baramati 413102",
    phone: "+91 98765 43212",
    hours: "7:00 AM - 8:00 PM",
    features: ["Student Specials", "Quick Bites", "Study Corner"],
    lat: 18.8460,
    lng: 75.2925
  },
  {
    name: "Market Yard Store",
    address: "321 Market Yard, Wholesale Market, Baramati 413102",
    phone: "+91 98765 43213",
    hours: "6:00 AM - 7:00 PM",
    features: ["Bulk Orders", "Fresh Daily", "Early Opening"],
    lat: 18.8490,
    lng: 75.2895
  },
  {
    name: "Bhigwan Road Branch",
    address: "654 Bhigwan Road, Near Bus Stand, Baramati 413102",
    phone: "+91 98765 43214",
    hours: "7:00 AM - 8:00 PM",
    features: ["Travel Snacks", "Fresh Khari", "Quick Service"],
    lat: 18.8455,
    lng: 75.2930
  },
  {
    name: "Morgaon Highway Outlet",
    address: "987 Morgaon Highway, Highway Junction, Baramati 413102",
    phone: "+91 98765 43215",
    hours: "6:30 AM - 9:00 PM",
    features: ["Highway Stop", "24/7 Vending", "Traveler Friendly"],
    lat: 18.8500,
    lng: 75.2880
  },
  {
    name: "Residential Area Store",
    address: "147 Shivaji Nagar, Residential Complex, Baramati 413102",
    phone: "+91 98765 43216",
    hours: "7:30 AM - 8:00 PM",
    features: ["Home Delivery", "Family Packs", "Neighborhood Favorite"],
    lat: 18.8470,
    lng: 75.2905
  },
  {
    name: "Industrial Area Branch",
    address: "258 MIDC Area, Industrial Zone, Baramati 413102",
    phone: "+91 98765 43217",
    hours: "6:00 AM - 6:00 PM",
    features: ["Office Catering", "Bulk Snacks", "Corporate Orders"],
    lat: 18.8485,
    lng: 75.2875
  }
];

const getStaticMapUrl = (lat: number, lng: number, apiKey: string) => {
  const size = "300x150";
  const zoom = 15;
  const marker = `markers=color:red%7C${lat},${lng}`;
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${size}&maptype=roadmap&${marker}&key=${apiKey}`;
};

export default function Locations() {
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header with back button */}
      <div className="bg-orange shadow-sm py-4">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-amber-900 hover:text-amber-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-amber-900 ml-6 font-serif">Locations</h1>
        </div>
      </div>

      <section id="locations" className="py-20">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-amber-900 mb-6">Our Store Locations</h1>
            <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Visit any of our 8 convenient locations across Baramati for fresh baked goods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storeLocations.map((store, index) => (
              <div
                key={index}
                className="bg-white-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-rose-600 mr-2" />
                  <h3 className="text-lg font-bold text-amber-900">{store.name}</h3>
                </div>

                <div className="space-y-3 mb-4">
                  <p className="text-amber-700 text-sm leading-relaxed">{store.address}</p>

                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-rose-600 mr-2" aria-hidden="true" />
                    <a
                      href={`tel:${store.phone.replace(/\s/g, '')}`}
                      className="text-amber-800 text-sm font-medium hover:text-rose-700"
                    >
                      {store.phone}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div className="h-4 w-4 bg-rose-600 rounded-full mr-2 flex items-center justify-center">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-amber-800 text-sm font-medium">{store.hours}</p>
                  </div>
                </div>

                {apiKey && (
                  <div className="mb-4">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        src={getStaticMapUrl(store.lat, store.lng, apiKey)}
                        alt={`Map of ${store.name}`}
                        className="w-full h-24 object-cover rounded-lg border border-orange-200 hover:brightness-90 transition"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </a>
                  </div>
                )}

                <div className="border-t border-orange-200 pt-3">
                  <p className="text-xs text-amber-600 font-semibold mb-2">
                    Special Features:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {store.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-rose-100 text-rose-700 text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
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