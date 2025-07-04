import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import HeroSection from '../components/home/HeroSection';
import ValueProposition from '../components/home/ValueProposition';
import HowItWorks from '../components/home/HowItWorks';
import SampleVideo from '../components/home/SampleVideo';
import PricingSection from '../components/home/PricingSection';
import FAQPreview from '../components/home/FAQPreview';

const { FiPlay, FiSearch } = FiIcons;

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <HeroSection />
      <ValueProposition />
      <HowItWorks />
      <SampleVideo />
      <PricingSection />
      <FAQPreview />
      
      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              今すぐお子様の行事動画を探してみませんか？
            </h2>
            <p className="text-xl mb-8 opacity-90">
              プロが撮影した高品質な映像で、特別な瞬間を永遠に残しましょう
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiSearch} className="text-xl" />
                <span>行事を探す</span>
              </Link>
              <Link
                to="/login"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiPlay} className="text-xl" />
                <span>サンプル動画を見る</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;