import React, { useState, useEffect } from "react";
import { IntroScreen } from "./components/IntroScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrandStatement } from "./components/BrandStatement";
import { CategoryStory } from "./components/CategoryStory";
import { MattressCollection } from "./components/MattressCollection";
import { BedCollection } from "./components/BedCollection";
import { FurnitureShowcase } from "./components/FurnitureShowcase";
import { DarkStorySection } from "./components/DarkStorySection";
import { TechnologySection } from "./components/TechnologySection";
import { BeddingAccessories } from "./components/BeddingAccessories";
import { RoomTransformation } from "./components/RoomTransformation";
import { LifestyleGallery } from "./components/LifestyleGallery";
import { Testimonials } from "./components/Testimonials";
import { MattressFinder } from "./components/MattressFinder";
import { StoreLocator } from "./components/StoreLocator";
import { FAQSection } from "./components/FAQSection";
import { NighttimeHero } from "./components/NighttimeHero";
import { HorizontalScrollCollection } from "./components/HorizontalScrollCollection";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { WishlistDrawer } from "./components/WishlistDrawer";
import { SearchModal } from "./components/SearchModal";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { CheckoutModal } from "./components/CheckoutModal";
import { CompareModal } from "./components/CompareModal";
import { HeaderProgressBar } from "./components/HeaderProgressBar";
import { CustomCursor } from "./components/CustomCursor";
import { Toast } from "./components/Toast";
import { PRODUCTS } from "./data/products";
import { SlidersHorizontal } from "lucide-react";

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      ...PRODUCTS[0],
      quantity: 1,
      selectedSize: "King (78x72)"
    }
  ]);
  const [wishlistIds, setWishlistIds] = useState(["balance-latex-luxury"]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [selectedQuickView, setSelectedQuickView] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const handleAddToCart = (productWithDetails) => {
    setCartItems((prev) => {
      const size = productWithDetails.selectedSize || productWithDetails.sizes?.[0] || "Standard";
      const existingIdx = prev.findIndex(
        (item) => item.id === productWithDetails.id && item.selectedSize === size
      );
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += 1;
        return copy;
      }
      return [
        ...prev,
        {
          ...productWithDetails,
          quantity: 1,
          selectedSize: size
        }
      ];
    });
    showToast(`Added ${productWithDetails.name} to your shopping bag.`);
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(productId, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.selectedSize === size
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveCartItem = (productId, size) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.id === productId && item.selectedSize === size)
      )
    );
    showToast("Item removed from bag.");
  };

  const handleToggleWishlist = (product) => {
    setWishlistIds((prev) => {
      if (prev.includes(product.id)) {
        showToast(`Removed ${product.name} from Wishlist.`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved ${product.name} to Wishlist.`);
        return [...prev, product.id];
      }
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-[#FBF9F5] text-[#121212] font-sans selection:bg-[#C2A684] selection:text-white">
      {/* Scroll Progress Bar */}
      <HeaderProgressBar />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* 1. Cinematic Intro Screen */}
      <IntroScreen onComplete={() => {}} />

      {/* 2. Glassmorphic Navigation Bar */}
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Floating Action Button: Compare Mattresses */}
      <button
        onClick={() => setCompareOpen(true)}
        className="fixed bottom-6 left-6 z-40 px-4 py-3 bg-[#121212] hover:bg-[#C2A684] text-white text-xs uppercase tracking-widest font-medium rounded-full shadow-2xl transition-all border border-white/20 hidden md:flex items-center space-x-2"
      >
        <SlidersHorizontal className="w-4 h-4 text-[#C2A684]" />
        <span>Compare Specs</span>
      </button>

      {/* Main Page Layout Scenes */}
      <main>
        {/* 3 & 4. Cinematic Hero Section */}
        <Hero
          onExplore={() => scrollToSection("mattresses")}
          onOpenFinder={() => scrollToSection("finder")}
        />

        {/* 5. Editorial Brand Statement */}
        <BrandStatement />

        {/* 6 & 7. Sticky Camera Category Story */}
        <CategoryStory onSelectCategory={(catId) => scrollToSection(catId)} />

        {/* 7b. Horizontal Comfort Scroll Collection */}
        <HorizontalScrollCollection />

        {/* 8 & 9. Editorial Mattress Collection Showcase */}
        <MattressCollection
          onQuickView={(product) => setSelectedQuickView(product)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* 10. Parallax Bed Collection */}
        <BedCollection onExploreBeds={() => scrollToSection("furniture")} />

        {/* 11. Architectural Furniture Showcase */}
        <FurnitureShowcase
          onQuickView={(product) => setSelectedQuickView(product)}
          onAddToCart={handleAddToCart}
        />

        {/* 12. "A Better Way To Sleep" Dark Story */}
        <DarkStorySection />

        {/* 13. Interactive Technology & Science Explorer */}
        <TechnologySection />

        {/* 14. Soft Warm Bedding & Accessories */}
        <BeddingAccessories
          onQuickView={(product) => setSelectedQuickView(product)}
          onAddToCart={handleAddToCart}
        />

        {/* 15. Room Transformation Before/After Slider */}
        <RoomTransformation />

        {/* 16. Lifestyle Magazine Lookbook Gallery */}
        <LifestyleGallery />

        {/* 17. Client Testimonials */}
        <Testimonials />

        {/* 18. Interactive Mattress Match Quiz */}
        <MattressFinder
          onAddToCart={handleAddToCart}
          onQuickView={(product) => setSelectedQuickView(product)}
        />

        {/* 19. Store Locator & Interactive Map */}
        <StoreLocator />

        {/* 20. Client Concierge FAQ Accordion */}
        <FAQSection />

        {/* 21. Serene Nighttime Final Hero */}
        <NighttimeHero onExplore={() => scrollToSection("mattresses")} />
      </main>

      {/* 22. Multi-Column Dark Footer */}
      <Footer onNavigateSection={scrollToSection} onShowToast={showToast} />

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckoutSuccess={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onRemoveWishlist={(id) =>
          setWishlistIds((prev) => prev.filter((i) => i !== id))
        }
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onQuickView={(product) => setSelectedQuickView(product)}
        onNavigateSection={scrollToSection}
      />

      <ProductDetailModal
        product={selectedQuickView}
        onClose={() => setSelectedQuickView(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedQuickView ? wishlistIds.includes(selectedQuickView.id) : false}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        totalAmount={cartTotal}
        onOrderComplete={() => {
          setCartItems([]);
          showToast("Order verified & placed successfully! Receipt generated.");
        }}
      />

      <CompareModal
        isOpen={compareOpen}
        onClose={() => setCompareOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Notification Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
