import React, { useState } from "react";
import { motion } from "framer-motion";
import { STORES } from "../data/stores";
import { MapPin, Phone, Clock, Navigation, Search } from "lucide-react";

export function StoreLocator() {
  const [selectedCity, setSelectedCity] = useState("All");
  const [activeStore, setActiveStore] = useState(STORES[0]);

  const cities = ["All", "Mumbai", "Bengaluru", "Delhi NCR", "Hyderabad", "Chennai"];

  const filteredStores =
    selectedCity === "All"
      ? STORES
      : STORES.filter((s) => s.city === selectedCity);

  return (
    <section id="stores" className="py-28 md:py-40 px-6 md:px-12 bg-[#FBF9F5] border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-black/10 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C2A684] font-semibold mb-3 block">
              Flagship Showrooms & Experience Centers
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#121212]">
              FIND A DUROFLEX STORE
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#666] font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Visit our architectural sleep lounges for 1-on-1 doctor consultations, touch-and-feel foam density bars, and bespoke bed tailoring.
          </p>
        </div>

        {/* City Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-5 py-2 text-xs uppercase tracking-widest transition-all ${
                selectedCity === city
                  ? "bg-[#121212] text-white font-medium"
                  : "bg-white text-[#555] border border-black/10 hover:border-black/30"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Two-Column Grid: Store Cards (Left) & Simulated Interactive Map Canvas (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* LEFT: Store List (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {filteredStores.map((store) => {
              const isSelected = activeStore.id === store.id;
              return (
                <div
                  key={store.id}
                  onClick={() => setActiveStore(store)}
                  className={`p-6 border transition-all duration-300 cursor-pointer rounded-xs ${
                    isSelected
                      ? "border-[#C2A684] bg-white shadow-xl pl-8"
                      : "border-black/10 bg-white/60 hover:bg-white hover:border-black/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C2A684] font-bold">
                      {store.city} • {store.distance}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] bg-[#121212] text-white px-2 py-0.5 uppercase tracking-wider">
                        Active Selection
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif-luxury text-2xl text-[#121212] font-normal mb-3">
                    {store.name}
                  </h3>

                  <div className="space-y-2 text-xs text-[#555] mb-4">
                    <p className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-[#C2A684] shrink-0 mt-0.5" />
                      <span>{store.address}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <Phone className="w-3.5 h-3.5 text-[#C2A684] shrink-0" />
                      <span>{store.phone}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-[#C2A684] shrink-0" />
                      <span>{store.hours}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-black/5">
                    {store.features.map((f) => (
                      <span key={f} className="text-[10px] bg-[#FBF9F5] px-2 py-1 border border-black/5 text-[#666]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Simulated Interactive Map View (7 Columns) */}
          <div className="lg:col-span-7 bg-[#121110] rounded-xs overflow-hidden relative min-h-[450px] shadow-2xl border border-black/10 flex flex-col justify-between p-8 text-white">
            {/* Background Grid & Map Simulation graphic */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C2A684_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#C2A684]" />
                <span className="font-serif-luxury text-xl text-white">
                  Map View — {activeStore.name}
                </span>
              </div>
              <span className="text-xs font-mono text-[#C2A684]">
                GPS: {activeStore.coordinates.lat.toFixed(4)} N, {activeStore.coordinates.lng.toFixed(4)} E
              </span>
            </div>

            {/* Simulated Map Pins Animation */}
            <div className="relative z-10 my-auto py-12 text-center">
              <div className="inline-flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl max-w-sm mx-auto">
                <div className="w-12 h-12 rounded-full bg-[#C2A684] text-white flex items-center justify-center mb-3 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-serif-luxury text-2xl text-white font-normal mb-1">
                  {activeStore.name}
                </h4>
                <p className="text-xs text-white/70 font-light mb-4">
                  {activeStore.address}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeStore.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 bg-[#C2A684] hover:bg-[#a88a68] text-white text-xs uppercase tracking-widest font-medium transition-colors flex items-center space-x-2"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            <div className="relative z-10 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-white/50">
              <span>Interactive Location Radar</span>
              <span>Duroflex Store Locator v2.6</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
