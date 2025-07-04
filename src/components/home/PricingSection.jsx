import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCheck, FiStar } = FiIcons;

const PricingSection = () => {
  const pricingPlans = [
    {
      name: '単発購入',
      price: '500',
      unit: '円/動画',
      description: '1つの行事動画をお求めの方に',
      features: [
        '高画質動画視聴',
        'ダウンロード可能',
        '視聴期限なし',
        'プレビュー確認可能'
      ],
      popular: false,
      buttonText: '動画を探す'
    },
    {
      name: 'まとめ購入',
      price: '1,800',
      unit: '円/4本セット',
      description: '複数の行事をまとめてお得に',
      features: [
        '高画質動画視聴',
        'ダウンロード可能',
        '視聴期限なし',
        'プレビュー確認可能',
        '1本あたり450円でお得'
      ],
      popular: true,
      buttonText: 'まとめ購入する'
    },
    {
      name: '年間パス',
      price: '3,600',
      unit: '円/年',
      description: '1年間の全行事が見放題',
      features: [
        '全行事動画見放題',
        'ダウンロード無制限',
        '新着動画の優先通知',
        '特別編集版の提供',
        '最大60%OFF相当'
      ],
      popular: false,
      buttonText: '年間パスを購入'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-xl text-gray-600">
            お客様のニーズに合わせた柔軟な料金体系
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 transform scale-105' 
                  : 'hover:shadow-xl'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <SafeIcon icon={FiStar} className="text-sm" />
                    <span>人気プラン</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">
                    ¥{plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.unit}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <SafeIcon 
                      icon={FiCheck} 
                      className="text-green-500 mr-3 flex-shrink-0" 
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-6 bg-blue-50 rounded-xl"
        >
          <p className="text-gray-700 mb-2">
            <strong>安心の返金保証：</strong>
            動画に問題がある場合は、購入から7日以内であれば全額返金いたします
          </p>
          <p className="text-sm text-gray-600">
            ※決済はStripeの安全なシステムを使用しています
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;