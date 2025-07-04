import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiChevronDown, FiArrowRight } = FiIcons;

const FAQPreview = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: '購入前に動画の内容を確認できますか？',
      answer: 'はい、各動画には短いプレビュー版をご用意しております。お子様が映っているかどうか事前にご確認いただけますので、安心してご購入いただけます。'
    },
    {
      question: '他の保護者の方に見られる心配はありませんか？',
      answer: '学校コードによる限定アクセスシステムを採用しており、該当する学校・学年の保護者の方のみがアクセス可能です。セキュリティ面でも万全の対策を講じております。'
    },
    {
      question: 'ダウンロードして保存することはできますか？',
      answer: 'はい、購入いただいた動画は高画質でダウンロードが可能です。スマートフォンやパソコンに保存して、いつでもお楽しみいただけます。'
    },
    {
      question: '支払い方法は何が利用できますか？',
      answer: 'クレジットカード（Visa、Mastercard、JCB、American Express）での決済が可能です。安全なStripe決済システムを使用しており、お客様の情報は暗号化されて保護されます。'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            よくあるご質問
          </h2>
          <p className="text-xl text-gray-600">
            保護者の皆様からよくいただくご質問にお答えします
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SafeIcon icon={FiChevronDown} className="text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            その他のご質問がございましたら、お気軽にお問い合わせください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/faq"
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <span>すべてのFAQを見る</span>
              <SafeIcon icon={FiArrowRight} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
            >
              <span>お問い合わせ</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQPreview;