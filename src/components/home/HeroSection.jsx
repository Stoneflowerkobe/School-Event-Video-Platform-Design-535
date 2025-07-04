import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlay, FiSearch } = FiIcons;

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-pink-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              お子様の晴れ舞台を、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                プロの手で
              </span><br />
              "未来に残す"
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              スマホじゃ撮れない、"わが子の主役感"を<br />
              高画質・感動的な映像でお届けします
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/events"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiSearch} className="text-xl" />
                <span>行事を探す</span>
              </Link>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <SafeIcon icon={FiPlay} className="text-xl" />
                <span>動画を見てみる</span>
              </button>
            </div>
          </motion.div>

          {/* Hero Image/Video */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-4">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop"
                alt="運動会の様子"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all cursor-pointer">
                  <SafeIcon icon={FiPlay} className="text-3xl text-blue-600" />
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-yellow-400 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
            >
              高画質撮影
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-green-400 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
            >
              プロ編集
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;