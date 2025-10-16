"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/6612575/pexels-photo-6612575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A close-up view of a professional espresso machine with syrup bottles in a coffee shop setting." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/13735849/pexels-photo-13735849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A barista expertly brews coffee on an espresso machine in a warm, inviting cafe environment." },
  { "id": "feature-image", "url": "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A detailed view of aromatic roasted Arabica coffee beans, highlighting texture and brown color." },
  { "id": "product-image-1", "url": "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a barista pouring milk to create latte art in a coffee cup." },
  { "id": "product-image-2", "url": "https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of iced coffee in a mason jar on a wooden table, perfect for a café vibe." },
  { "id": "product-image-3", "url": "https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Flat lay of a white coffee cup with espresso on a black table, highlighting minimalist design." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="Coffee Haven" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Coffee Haven"
            description="Experience the finest coffee in town"
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[
              { text: "Explore Menu", href: "about" },
              { text: "Contact Us", href: "contact" },
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Our Story: Crafting Coffee with Passion"
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              {
                title: "Organic Beans",
                description: "Sourced from the best farms around the world",
                imageSrc: assetMap.find(a => a.id === "feature-image")?.url,
              },
            ]}
            title="Our Features"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              {
                id: "1",
                brand: "Coffee Haven",
                name: "Classic Latte",
                price: "$4.50",
                rating: 5,
                reviewCount: "120",
                imageSrc: assetMap.find(a => a.id === "product-image-1")?.url,
              },
              {
                id: "2",
                brand: "Coffee Haven",
                name: "Iced Brew",
                price: "$3.75",
                rating: 4,
                reviewCount: "98",
                imageSrc: assetMap.find(a => a.id === "product-image-2")?.url,
              },
              {
                id: "3",
                brand: "Coffee Haven",
                name: "Espresso",
                price: "$3.00",
                rating: 5,
                reviewCount: "150",
                imageSrc: assetMap.find(a => a.id === "product-image-3")?.url,
              }]
            }
            title="Our Menu"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Stay in Touch"
            title="Subscribe to Our Newsletter"
            description="Get the latest updates and offers."
            imageSrc={assetMap.find(a => a.id === "about-image")?.url}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Menu", href: "about" }, { label: "Contact", href: "contact" }] },
              { items: [{ label: "Privacy Policy", href: "privacy" }] }
            ]}
            logoText="Coffee Haven"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}