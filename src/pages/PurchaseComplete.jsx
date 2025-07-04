import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiPlay, FiDownload, FiUser, FiHome } = FiIcons;

const PurchaseComplete = () => {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('eventId') || '1';
  const amount = searchParams.get('amount') || '500';

  // Mock event data
  const event = {
    id: eventId,
    title: '2024年 春の運動会',
    school: '○○小学校',
    date: '2024年5月15日',
    thumbnail: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop',
    duration: '2:30:00'
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-8 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
            className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6"
          >
            <SafeIcon icon={FiCheckCircle} className="text-4xl text-green-600" />
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ご購入ありがとうございました！
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            決済が正常に完了しました。<br />
            動画の視聴・ダウンロードが可能になりました。
          </p>
        </motion.div>

        {/* Purchase Details */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            購入内容
          </h2>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            {/* Event Thumbnail */}
            <div className="md:w-1/3">
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Event Details */}
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4">{event.school}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-500">開催日</span>
                  <p className="font-medium">{event.date}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">再生時間</span>
                  <p className="font-medium">{event.duration}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">購入金額</span>
                  <p className="font-medium text-blue-600">¥{parseInt(amount).toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">購入日時</span>
                  <p className="font-medium">{new Date().toLocaleDateString('ja-JP')}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/event/${event.id}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiPlay} />
                  <span>今すぐ視聴</span>
                </Link>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2">
                  <SafeIcon icon={FiDownload} />
                  <span>ダウンロード</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ご利用方法
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiPlay} className="text-2xl text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. 即座に視聴</h3>
              <p className="text-gray-600 text-sm">
                購入後すぐに高画質動画をお楽しみいただけます
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiDownload} className="text-2xl text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. ダウンロード保存</h3>
              <p className="text-gray-600 text-sm">
                端末に保存していつでもオフラインで視聴可能
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiUser} className="text-2xl text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. マイページで管理</h3>
              <p className="text-gray-600 text-sm">
                購入履歴や再ダウンロードはマイページから
              </p>
            </div>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8"
        >
          <h3 className="font-semibold text-blue-900 mb-3">
            重要なお知らせ
          </h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>購入した動画は視聴期限なしでお楽しみいただけます</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>ダウンロード回数に制限はありません</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>領収書はマイページからPDFでダウンロードできます</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>動画に問題がある場合は7日以内に返金対応いたします</span>
            </li>
          </ul>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/mypage"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiUser} />
              <span>マイページへ</span>
            </Link>
            <Link
              to="/events"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiIcons.FiVideo} />
              <span>他の動画を見る</span>
            </Link>
            <Link
              to="/"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiHome} />
              <span>トップページへ</span>
            </Link>
          </div>
          
          <p className="text-gray-600 text-sm">
            ご不明な点がございましたら、{' '}
            <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              お問い合わせ
            </Link>
            {' '}からお気軽にご連絡ください
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PurchaseComplete;