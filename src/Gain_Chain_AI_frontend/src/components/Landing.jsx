import React from 'react';
import FeatureSection from './Landing/FeatureSection';
import BlockchainAI from './Landing/BlockChainAI';
import TestimonialSlider from './Landing/Testimonials';
import NewsSection from './Landing/NewsSection';
import Hero from './Landing/Hero';
import Header from './Landing/Header';
import Contact from './Landing/contact';
import Footer from './Landing/Footer';
import FAQ from './Landing/FAQ';
import TeamSection from './Landing/TeamSection';
import CallToAction from './Landing/CallToAction';

const Landing = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Header />
      <Hero />
      <FeatureSection />
      <BlockchainAI />
      <TeamSection />
      <TestimonialSlider />
      <CallToAction />
      <Contact />
      <NewsSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Landing;