import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFilter, FiSearch, FiPlay, FiShoppingCart, FiCalendar, FiUsers } = FiIcons;

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Mock data
  const events = [
    {
      id: 1,
      title: '2024年 春の運動会',
      school: '○○小学校',
      date: '2024年5月15日',
      grade: '全学年',
      type: '運動会',
      price: 500,
      thumbnail: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop',
      duration: '2:30:00',
      participants: 450,
      preview: true
    },
    {
      id: 2,
      title: '卒業式 2024',
      school: '○○小学校',
      date: '2024年3月20日',
      grade: '6年生',
      type: '卒業式',
      price: 800,
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      duration: '1:45:00',
      participants: 75,
      preview: true
    },
    {
      id: 3,
      title: '音楽発表会',
      school: '○○小学校',
      date: '2024年2月10日',
      grade: '3-4年生',
      type: '発表会',
      price: 600,
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      duration: '1:20:00',
      participants: 150,
      preview: true
    },
    {
      id: 4,
      title: '秋の体育祭',
      school: '○○小学校',
      date: '2023年10月28日',
      grade: '全学年',
      type: '体育祭',
      price: 500,
      thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      duration: '2:15:00',
      participants: 420,
      preview: true
    },
    {
      id: 5,
      title: '学芸会 2023',
      school: '○○小学校',
      date: '2023年12月15日',
      grade: '1-2年生',
      type: '学芸会',
      price: 700,
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      duration: '1:30:00',
      participants: 120,
      preview: true
    },
    {
      id: 6,
      title: '入学式 2024',
      school: '○○小学校',
      date: '2024年4月8日',
      grade: '1年生',
      type: '入学式',
      price: 600,
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
      duration: '1:10:00',
      participants: 80,
      preview: true
    }
  ];

  const grades = ['全学年', '1年生', '2年生', '3年生', '4年生', '5年生', '6年生', '1-2年生', '3-4年生', '5-6年生'];
  const eventTypes = ['運動会', '体育祭', '発表会', '学芸会', '卒業式', '入学式'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.school.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = !selectedGrade || event.grade === selectedGrade;
    const matchesType = !selectedType || event.type === selectedType;
    
    return matchesSearch && matchesGrade && matchesType;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            行事動画一覧
          </h1>
          <p className="text-lg text-gray-600">
            お子様の大切な瞬間を高画質動画でお楽しみください
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <SafeIcon icon={FiFilter} className="text-blue-600 text-xl" />
            <h2 className="text-lg font-semibold text-gray-900">フィルター</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <SafeIcon 
                icon={FiSearch} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              />
              <input
                type="text"
                placeholder="行事名・学校名で検索"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Grade Filter */}
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">学年を選択</option>
              {grades.map(grade => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>

            {/* Event Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">行事タイプを選択</option>
              {eventTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredEvents.length}件の行事動画が見つかりました
          </p>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="bg-white bg-opacity-90 rounded-full p-3">
                    <SafeIcon icon={FiPlay} className="text-2xl text-blue-600" />
                  </div>
                </div>
                {event.preview && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    プレビュー可
                  </div>
                )}
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {event.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                    {event.type}
                  </span>
                  <span className="text-gray-500 text-sm">{event.grade}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>

                <p className="text-gray-600 mb-4">{event.school}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiCalendar} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiUsers} />
                    <span>{event.participants}名</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    ¥{event.price.toLocaleString()}
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      to={`/event/${event.id}`}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-1"
                    >
                      <SafeIcon icon={FiPlay} className="text-sm" />
                      <span>詳細</span>
                    </Link>
                    <Link
                      to={`/event/${event.id}?purchase=true`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1"
                    >
                      <SafeIcon icon={FiShoppingCart} className="text-sm" />
                      <span>購入</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <SafeIcon icon={FiSearch} className="text-6xl mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              該当する行事動画が見つかりませんでした
            </h3>
            <p className="text-gray-600 mb-6">
              検索条件を変更してもう一度お試しください
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedGrade('');
                setSelectedType('');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              フィルターをリセット
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EventList;