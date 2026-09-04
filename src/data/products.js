export const PRODUCTS = [
  // MATTRESSES
  {
    id: "duropedic-wave-plus",
    name: "Duropedic Wave Plus",
    category: "mattresses",
    subcategory: "Orthopaedic",
    tagline: "Doctor Recommended 5-Zone Spinal Alignment",
    description: "Engineered in collaboration with leading orthopaedic specialists. Features 5-zone contour support, high-density memory foam, and breathable cool-gel technology to eliminate pressure points.",
    price: 34999,
    originalPrice: 42999,
    rating: 4.9,
    reviewsCount: 384,
    badge: "Bestseller",
    firmness: "Medium Firm (7/10)",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1540518614846-7ede433c5163?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "5-Zone Ergonomic Spinal Alignment",
      "Zero Partner Motion Disturbance",
      "Cool-Gel Thermoregulation Layer",
      "Triple Shield Anti-Bacterial Fabric"
    ],
    sizes: ["Single (72x36)", "Double (72x48)", "Queen (78x60)", "King (78x72)", "Custom Architecture"]
  },
  {
    id: "balance-latex-luxury",
    name: "Balance Natural Latex",
    category: "mattresses",
    subcategory: "Luxury Latex",
    tagline: "100% Organic Dunlop Latex & Pocket Springs",
    description: "An eco-luxury mattress combining certified organic Sri Lankan latex with individually encased pocket coils for resilient contouring and effortless movement.",
    price: 52999,
    originalPrice: 61999,
    rating: 5.0,
    reviewsCount: 142,
    badge: "Eco-Luxury",
    firmness: "Medium Plush (5.5/10)",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "100% Natural Organic Dunlop Latex",
      "Hypoallergenic Organic Cotton Cover",
      "7-Zone Encased Pocket Springs",
      "10 Years Manufacturer Warranty"
    ],
    sizes: ["Queen (78x60)", "King (78x72)", "Custom Architecture"]
  },
  {
    id: "energise-pocket-spring",
    name: "Energise Active Spring",
    category: "mattresses",
    subcategory: "Pocket Spring",
    tagline: "Responsive Bounce & Adaptive Spinal Relief",
    description: "Designed for active lifestyles. High-resilience responsive memory foam combined with heavy-gauge pocket springs for optimum energy revival overnight.",
    price: 28499,
    originalPrice: 34999,
    rating: 4.8,
    reviewsCount: 219,
    badge: "Active Sleep",
    firmness: "Medium (6/10)",
    image: "https://images.unsplash.com/photo-1582582621959-48d273528920?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582582621959-48d273528920?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "Active-Zone Edge Support System",
      "Airflow Mesh Ventilation",
      "Pressure-Relieving Memory Foam",
      "Motion Isolation Coil Core"
    ],
    sizes: ["Double (72x48)", "Queen (78x60)", "King (78x72)"]
  },

  // BEDS
  {
    id: "haven-upholstered-bed",
    name: "The Haven Velvet Bedstead",
    category: "beds",
    subcategory: "Upholstered",
    tagline: "Architectural Fluted Headboard in Warm Taupe",
    description: "Handcrafted solid teak frame clad in stain-resistant Italian velvet with channel tufting. Built-in hydraulic under-bed storage for effortless space optimization.",
    price: 68999,
    originalPrice: 84999,
    rating: 4.9,
    reviewsCount: 88,
    badge: "Architectural",
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c5163?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c5163?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "Handcrafted Kiln-Dried Solid Teak Frame",
      "Hydraulic Easy-Lift Storage System",
      "Premium Italian Stain-Shield Velvet",
      "Noise-Free Slatted Support Base"
    ],
    sizes: ["Queen Bed", "King Bed"]
  },
  {
    id: "oslo-minimalist-wood-bed",
    name: "Oslo Solid Walnut Bed",
    category: "beds",
    subcategory: "Wooden",
    tagline: "Scandinavian Minimalism with Floating Platform",
    description: "Crafted from solid American Walnut with soft rounded edges and an integrated floating platform aesthetic. Celebrates natural wood grain and quiet luxury.",
    price: 74999,
    originalPrice: 89999,
    rating: 5.0,
    reviewsCount: 64,
    badge: "Design Award '25",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "100% Solid American Walnut",
      "Integrated Floating Platform",
      "Zero V.O.C. Matte Natural Oil Finish",
      "Reinforced Center Rail System"
    ],
    sizes: ["Queen Bed", "King Bed"]
  },

  // SOFAS & FURNITURE
  {
    id: "aura-boucle-sofa",
    name: "Aura Curved Bouclé Sofa",
    category: "furniture",
    subcategory: "Sofas",
    tagline: "Sculptural Silhouette in Cream Bouclé",
    description: "An architectural focal point for living spaces. Soft organic curves wrapped in high-texture bouclé fabric with high-resilience memory foam cushioning.",
    price: 89999,
    originalPrice: 109999,
    rating: 4.9,
    reviewsCount: 52,
    badge: "Showroom Feature",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "High-Density Duroflex Foam Core",
      "Stain-Resistant Wool-Blend Bouclé",
      "Internal Solid Birch Skeleton",
      "Includes Matching Accent Pillows"
    ],
    sizes: ["3-Seater", "4-Seater Curved"]
  },
  {
    id: "zenith-power-recliner",
    name: "Zenith Zero-Gravity Recliner",
    category: "furniture",
    subcategory: "Recliners",
    tagline: "Electric Zero-Gravity Motion & Wireless Charging",
    description: "Indulge in total spinal weightlessness. Dual motor electric recliner in top-grain amber leather with integrated USB-C, wireless phone charging, and headrest adjustment.",
    price: 64999,
    originalPrice: 79999,
    rating: 4.9,
    reviewsCount: 77,
    badge: "Motorized Luxury",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "Dual Motor Independent Lumbar & Leg Adjustment",
      "Italian Top-Grain Aniline Leather",
      "Wireless Fast-Charging Armrest",
      "Zero-Gravity Weightless Recline Position"
    ],
    sizes: ["Single Motorized Recliner"]
  },

  // PILLOWS
  {
    id: "contour-memory-pillow",
    name: "Duropedic Ergonomic Pillow",
    category: "pillows",
    subcategory: "Memory Foam",
    tagline: "Cervical Spine Support with Cooling Gel Mesh",
    description: "Contoured memory foam pillow specially shaped to align neck muscles and relieve cervical stress for back and side sleepers.",
    price: 3499,
    originalPrice: 4499,
    rating: 4.8,
    reviewsCount: 512,
    badge: "Doctor Approved",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "Dual Contour Height Profile",
      "Removable Tencel Eucalyptus Cover",
      "Cooling Gel Mesh Center",
      "Antimicrobial Dust-Mite Resistant"
    ],
    sizes: ["Standard Contour", "King Contour"]
  },

  // BEDDING
  {
    id: "hotel-tencel-duvet-set",
    name: "400 TC Pure Tencel Duvet Suite",
    category: "bedding",
    subcategory: "Bed Linen",
    tagline: "Silky 400 Thread Count Organic Tencel Lyocell",
    description: "Transform your bedroom into a 5-star suite. Ultra-soft Tencel sheets derived from sustainable eucalyptus trees with natural cooling luster.",
    price: 8999,
    originalPrice: 11999,
    rating: 4.9,
    reviewsCount: 189,
    badge: "5-Star Hotel Line",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "100% Organic Tencel Lyocell Fiber",
      "Silky Smooth 400 Thread Count",
      "Naturally Moisture-Wicking & Hypoallergenic",
      "Includes 1 Fitted Sheet, 1 Duvet Cover, 2 Pillowcases"
    ],
    sizes: ["Queen Suite", "King Suite"]
  }
];
