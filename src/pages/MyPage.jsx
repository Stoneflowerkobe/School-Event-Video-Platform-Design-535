import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../contexts/AuthContext';

const { FiUser, FiVideo, FiBell, FiDownload, FiPlay, FiCalendar, FiEdit3, FiPlus } = FiIcons;

const MyPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('purchased');

  // Mock data
  const purchasedVideos = [
    {
      id: 1,
      title: '2024年 春の運動会',
      school: '○○小学校',
      date: '2024年5月15日',
      price: 500,
      purchaseDate: '2024年5月20日',
      thumbnail: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=200&fit=crop',
      duration: '2:30:00',
      downloadCount: 2,
      lastViewed: '2024年5月25日'
    },
    {
      id: 2,
      title: '音楽発表会',
      school: '○○小学校',
      date: '2024年2月10日',
      price: 600,
      purchaseDate: '2024年2月15日',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop',
      duration: '1:20:00',
      downloadCount: 1,
      lastViewed: '2024年3月1日'
    }
  ];

  const children = [
    {
      id: 1,
      name: '佐藤 太郎',
      grade: '小学1年',
      class: '1組',
      birthday: '2017年4月15日'
    }
  ];

  const notifications = [
    {
      id: 1,
      title: '新しい行事動画が追加されました',
      message: '2024年 夏の体育祭の動画が公開されました',
      date: '2024年6月1日',
      read: false
    },
    {
      id: 2,
      title: '購入した動画の評価をお願いします',
      message: '春の運動会の動画はいかがでしたか？',
      date: '2024年5月22日',
      read: true
    }
  ];

  const tabs = [
    { id: 'purchased', name: '購入済み動画', icon: FiVideo },
    { id: 'profile', name: 'プロフィール', icon: FiUser },
    { id: 'notifications', name: '通知', icon: FiBell }
  ];

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">ログインが必要です</p>
          <a href="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            ログインする
          </a>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            マイページ
          </h1>
          <p className="text-lg text-gray-600">
            こんにちは、{user.name}さん
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <SafeIcon icon={tab.icon} />
                  <span>{tab.name}</span>
                  {tab.id === 'notifications' && notifications.filter(n => !n.read).length > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications.filter(n => !n.read).length}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Purchased Videos Tab */}
            {activeTab === 'purchased' && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">購入済み動画</h2>
                  <div className="text-sm text-gray-600">
                    合計 {purchasedVideos.length} 本
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {purchasedVideos.map((video) => (
                    <div key={video.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex space-x-4">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-24 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1 truncate">
                            {video.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">{video.school}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                            <span>{video.date}</span>
                            <span>{video.duration}</span>
                            <span>¥{video.price.toLocaleString()}</span>
                          </div>
                          <div className="flex space-x-2">
                            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors flex items-center space-x-1">
                              <SafeIcon icon={FiPlay} className="text-xs" />
                              <span>視聴</span>
                            </button>
                            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300 transition-colors flex items-center space-x-1">
                              <SafeIcon icon={FiDownload} className="text-xs" />
                              <span>DL</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
                        <div className="flex justify-between">
                          <span>購入日: {video.purchaseDate}</span>
                          <span>最終視聴: {video.lastViewed}</span>
                        </div>
                        <div className="mt-1">
                          ダウンロード回数: {video.downloadCount}回
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {purchasedVideos.length === 0 && (
                  <div className="text-center py-12">
                    <SafeIcon icon={FiVideo} className="text-6xl text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      まだ購入した動画がありません
                    </h3>
                    <p className="text-gray-600 mb-6">
                      行事動画を購入して、お子様の大切な瞬間をお楽しみください
                    </p>
                    <a
                      href="/events"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      行事動画を探す
                    </a>
                  </div>
                )}
              </motion.div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="space-y-8"
              >
                {/* User Info */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">基本情報</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                      <SafeIcon icon={FiEdit3} className="text-sm" />
                      <span>編集</span>
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">お名前</label>
                        <p className="text-gray-900">{user.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                        <p className="text-gray-900">{user.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">学校コード</label>
                        <p className="text-gray-900">{user.schoolCode}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">登録日</label>
                        <p className="text-gray-900">2024年4月1日</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Children Info */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">お子様情報</h2>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                      <SafeIcon icon={FiPlus} className="text-sm" />
                      <span>追加</span>
                    </button>
                  </div>
                  <div className="space-y-4">
                    {children.map((child) => (
                      <div key={child.id} className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-gray-900">{child.name}</h3>
                          <button className="text-blue-600 hover:text-blue-700">
                            <SafeIcon icon={FiEdit3} />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">学年・クラス:</span>
                            <p className="font-medium">{child.grade} {child.class}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">生年月日:</span>
                            <p className="font-medium">{child.birthday}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">購入動画数:</span>
                            <p className="font-medium">{purchasedVideos.length}本</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">通知</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    すべて既読にする
                  </button>
                </div>

                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-xl border ${
                        notification.read
                          ? 'bg-white border-gray-200'
                          : 'bg-blue-50 border-blue-200'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full ${
                          notification.read ? 'bg-gray-100' : 'bg-blue-100'
                        }`}>
                          <SafeIcon 
                            icon={FiBell} 
                            className={`text-sm ${
                              notification.read ? 'text-gray-500' : 'text-blue-600'
                            }`} 
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-medium ${
                            notification.read ? 'text-gray-900' : 'text-blue-900'
                          }`}>
                            {notification.title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {notification.message}
                          </p>
                          <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                            <SafeIcon icon={FiCalendar} />
                            <span>{notification.date}</span>
                          </div>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {notifications.length === 0 && (
                  <div className="text-center py-12">
                    <SafeIcon icon={FiBell} className="text-6xl text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      通知はありません
                    </h3>
                    <p className="text-gray-600">
                      新しい行事動画や重要なお知らせがあるとここに表示されます
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MyPage;