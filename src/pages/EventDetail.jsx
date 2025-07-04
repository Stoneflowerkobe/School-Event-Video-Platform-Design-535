import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../contexts/AuthContext';

const { FiPlay, FiDownload, FiShoppingCart, FiCalendar, FiUsers, FiClock, FiStar, FiArrowLeft } = FiIcons;

const EventDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [isPurchased, setIsPurchased] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Mock data - in real app, fetch by ID
  const event = {
    id: parseInt(id),
    title: '2024年 春の運動会',
    school: '○○小学校',
    date: '2024年5月15日',
    time: '9:00-15:00',
    grade: '全学年',
    type: '運動会',
    price: 500,
    thumbnail: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop',
    previewVideo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop',
    duration: '2:30:00',
    participants: 450,
    description: 'みんなが楽しみにしていた春の運動会！全学年の子どもたちが一生懸命頑張る姿を、プロのカメラマンが4K高画質で撮影しました。お子様の輝く瞬間を見逃すことなく記録した感動の映像です。',
    highlights: [
      '開会式・校長先生のお話',
      '各学年の競技・演技',
      '全校リレー',
      '閉会式・表彰式',
      '個人ハイライト集'
    ],
    specs: {
      resolution: '4K (3840×2160)',
      format: 'MP4',
      size: '約2.5GB',
      subtitles: '日本語字幕対応'
    },
    rating: 4.8,
    reviews: 24
  };

  const relatedEvents = [
    {
      id: 2,
      title: '卒業式 2024',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
      price: 800,
      grade: '6年生'
    },
    {
      id: 3,
      title: '音楽発表会',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop',
      price: 600,
      grade: '3-4年生'
    }
  ];

  const handlePurchase = () => {
    // In real app, integrate with Stripe
    alert('Stripe決済画面に遷移します');
    setIsPurchased(true);
  };

  const handleDownload = () => {
    alert('動画のダウンロードを開始します');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/events" className="hover:text-blue-600 flex items-center space-x-1">
            <SafeIcon icon={FiArrowLeft} />
            <span>行事一覧に戻る</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="bg-black rounded-xl overflow-hidden mb-6">
              <div className="relative aspect-video">
                <img
                  src={event.previewVideo}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-300 shadow-xl"
                  >
                    <SafeIcon 
                      icon={FiPlay} 
                      className="text-4xl text-blue-600" 
                    />
                  </motion.button>
                </div>
                
                {/* Video overlay info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black bg-opacity-70 rounded-lg p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm opacity-75">
                          {isPurchased ? '完全版' : 'プレビュー版'}
                        </p>
                        <p className="font-semibold">
                          {isPurchased ? event.duration : '0:30 / 0:30'}
                        </p>
                      </div>
                      {!isPurchased && (
                        <div className="text-sm text-yellow-400">
                          完全版は購入後に視聴可能
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {event.grade}
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h1>
                  <p className="text-lg text-gray-600">{event.school}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    <SafeIcon icon={FiStar} className="text-yellow-400" />
                    <span className="font-semibold">{event.rating}</span>
                    <span className="text-gray-500 text-sm">({event.reviews}件)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <SafeIcon icon={FiCalendar} className="text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">{event.date}</p>
                    <p className="text-xs">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <SafeIcon icon={FiUsers} className="text-green-500" />
                  <div>
                    <p className="text-sm font-medium">{event.participants}名</p>
                    <p className="text-xs">参加者</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <SafeIcon icon={FiClock} className="text-purple-500" />
                  <div>
                    <p className="text-sm font-medium">{event.duration}</p>
                    <p className="text-xs">再生時間</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <SafeIcon icon={FiDownload} className="text-orange-500" />
                  <div>
                    <p className="text-sm font-medium">{event.specs.size}</p>
                    <p className="text-xs">ファイルサイズ</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">動画の内容</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {event.description}
                </p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">収録内容：</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical Specs */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">技術仕様</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">解像度</p>
                    <p className="font-medium">{event.specs.resolution}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">ファイル形式</p>
                    <p className="font-medium">{event.specs.format}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">ファイルサイズ</p>
                    <p className="font-medium">{event.specs.size}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">字幕</p>
                    <p className="font-medium">{event.specs.subtitles}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Purchase Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  ¥{event.price.toLocaleString()}
                </div>
                <p className="text-gray-600">一度購入すれば無期限で視聴可能</p>
              </div>

              {user ? (
                isPurchased ? (
                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                      <p className="text-green-800 font-medium">購入済み</p>
                      <p className="text-green-600 text-sm">いつでも視聴・ダウンロードできます</p>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                    >
                      <SafeIcon icon={FiDownload} />
                      <span>ダウンロード</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handlePurchase}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:shadow-lg transition-all font-semibold flex items-center justify-center space-x-2"
                  >
                    <SafeIcon icon={FiShoppingCart} />
                    <span>今すぐ購入</span>
                  </button>
                )
              ) : (
                <div className="space-y-3">
                  <Link
                    to="/login"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:shadow-lg transition-all font-semibold flex items-center justify-center space-x-2"
                  >
                    <SafeIcon icon={FiShoppingCart} />
                    <span>ログインして購入</span>
                  </Link>
                  <p className="text-center text-sm text-gray-600">
                    購入にはログインが必要です
                  </p>
                </div>
              )}

              {/* Purchase benefits */}
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold text-gray-900 mb-3">購入特典</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <SafeIcon icon={FiIcons.FiCheck} className="text-green-500 flex-shrink-0" />
                    <span>4K高画質での視聴</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <SafeIcon icon={FiIcons.FiCheck} className="text-green-500 flex-shrink-0" />
                    <span>無制限ダウンロード</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <SafeIcon icon={FiIcons.FiCheck} className="text-green-500 flex-shrink-0" />
                    <span>視聴期限なし</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <SafeIcon icon={FiIcons.FiCheck} className="text-green-500 flex-shrink-0" />
                    <span>7日間返金保証</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Related Events */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                関連する行事動画
              </h3>
              <div className="space-y-4">
                {relatedEvents.map(relatedEvent => (
                  <Link
                    key={relatedEvent.id}
                    to={`/event/${relatedEvent.id}`}
                    className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <img
                      src={relatedEvent.thumbnail}
                      alt={relatedEvent.title}
                      className="w-16 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm truncate">
                        {relatedEvent.title}
                      </p>
                      <p className="text-xs text-gray-500 mb-1">{relatedEvent.grade}</p>
                      <p className="text-sm font-semibold text-blue-600">
                        ¥{relatedEvent.price.toLocaleString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventDetail;