import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiVideo, FiUsers, FiShield } = FiIcons;

const ValueProposition = () => {
  const values = [
    {
      icon: FiVideo,
      title: 'プロが撮影＆編集',
      description: '高画質・感動的な映像をお届け',
      details: [
        '4K高画質での撮影',
        'プロの映像編集技術',
        '感動的なBGMと演出'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiUsers,
      title: '子ども中心編集',
      description: 'うちの子がちゃんと映る',
      details: [
        'お子様を中心とした構成',
        '複数アングルからの撮影',
        '個人ハイライト映像'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiShield,
      title: '安心設計',
      description: '関係者だけが見られる限定配信',
      details: [
        '学校コードでの限定アクセス',
        'セキュアな動画配信',
        'プライバシー保護'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            なぜスクールムービーズが選ばれるのか
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            お子様の大切な瞬間を、プロの技術と安心のサービスでお届けします
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                <SafeIcon icon={value.icon} className="text-2xl text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              
              <p className="text-lg text-gray-600 mb-6">
                {value.description}
              </p>
              
              <ul className="space-y-3">
                {value.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className={`w-2 h-2 bg-gradient-to-r ${value.color} rounded-full mr-3`}></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;