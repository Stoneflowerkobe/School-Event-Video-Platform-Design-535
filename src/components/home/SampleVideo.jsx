import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlay, FiPause } = FiIcons;

const SampleVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            実際の動画サンプル
          </h2>
          <p className="text-xl text-gray-600">
            プロが撮影・編集した高品質な映像をご覧ください
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-black rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Video placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop"
              alt="運動会サンプル動画"
              className="w-full h-full object-cover"
            />
            
            {/* Play overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayPause}
                className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-300 shadow-xl"
              >
                <SafeIcon 
                  icon={isPlaying ? FiPause : FiPlay} 
                  className="text-4xl text-blue-600" 
                />
              </motion.button>
            </div>

            {/* Video info overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black bg-opacity-70 rounded-lg p-4 text-white">
                <h3 className="text-lg font-semibold mb-2">
                  2024年 ○○小学校 運動会ハイライト
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span>再生時間: 1:30</span>
                  <span className="text-green-400">プレビュー版</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video controls */}
          <div className="bg-gray-900 p-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <button onClick={handlePlayPause}>
                  <SafeIcon 
                    icon={isPlaying ? FiPause : FiPlay} 
                    className="text-xl hover:text-blue-400 transition-colors" 
                  />
                </button>
                <span className="text-sm">0:00 / 1:30</span>
              </div>
              <div className="text-sm text-gray-400">
                完全版は購入後にご視聴いただけます
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sample features */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { title: '4K高画質', description: 'クリアで美しい映像' },
            { title: 'プロ編集', description: '感動的な構成・演出' },
            { title: '安全配信', description: '限定アクセスで安心' }
          ].map((feature, index) => (
            <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SampleVideo;