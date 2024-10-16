import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductCard ";
import BrowseByDressStyle from "../components/BrowseByDressStyle";
import Marquee from "../components/Marquee";
import ExploreStyles from "../components/ExploreStyles";
import ProductGrid from "../components/products";
import HeroSectionSub from "../components/HeroSectionSub";
import BestSellers from "../components/BestSellers";
import InstagramSection from "../components/InstagramSection";
import ReviewCarousel from "../components/Reviews";
import Footer from "../components/Footer";
const Homepage: React.FC  = ()=>{
    return (
        <>
      <Navbar/>
      <HeroSection/>
      <ProductSection/>
      <BrowseByDressStyle/>
      <Marquee/>
      <ExploreStyles/>
      <ProductGrid/>
      <HeroSectionSub/>
      <BestSellers/>
      <InstagramSection/>
      <ReviewCarousel/>
      <Footer/>
        </>
    )
};
export default Homepage