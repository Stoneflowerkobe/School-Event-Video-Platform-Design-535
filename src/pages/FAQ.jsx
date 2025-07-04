import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiSearch, FiHelpCircle } = FiIcons;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: '購入・支払いについて',
      questions: [
        {
          question: '購入前に動画の内容を確認できますか？',
          answer: 'はい、各動画には短いプレビュー版をご用意しております。お子様が映っているかどうか事前にご確認いただけますので、安心してご購入いただけます。プレビューは約30秒程度で、動画の雰囲気や画質をご確認いただけます。'
        },
        {
          question: '支払い方法は何が利用できますか？',
          answer: 'クレジットカード（Visa、Mastercard、JCB、American Express）での決済が可能です。安全なStripe決済システムを使用しており、お客様の情報は暗号化されて保護されます。デビットカードもご利用いただけます。'
        },
        {
          question: '返金は可能ですか？',
          answer: '動画に技術的な問題がある場合や、お子様が全く映っていない場合は、購入から7日以内であれば全額返金いたします。返金をご希望の場合は、お問い合わせフォームからご連絡ください。'
        },
        {
          question: '領収書は発行されますか？',
          answer: 'はい、購入完了後にマイページから領収書をPDF形式でダウンロードいただけます。会社名や宛名の変更も可能です。'
        }
      ]
    },
    {
      category: '動画の視聴・ダウンロードについて',
      questions: [
        {
          question: 'ダウンロードして保存することはできますか？',
          answer: 'はい、購入いただいた動画は高画質（最大4K）でダウンロードが可能です。スマートフォン、タブレット、パソコンに保存して、いつでもお楽しみいただけます。ダウンロード回数に制限はありません。'
        },
        {
          question: '視聴期限はありますか？',
          answer: '購入いただいた動画に視聴期限はございません。一度購入いただければ、永続的にご視聴いただけます。また、マイページからいつでも再ダウンロードも可能です。'
        },
        {
          question: 'スマートフォンで視聴できますか？',
          answer: 'はい、iPhone、Android端末の両方で視聴可能です。専用アプリのインストールは不要で、ブラウザから直接ご視聴いただけます。Wi-Fi環境での視聴をおすすめします。'
        },
        {
          question: '動画の画質はどの程度ですか？',
          answer: 'プロ用機材を使用して4K（3840×2160）で撮影しており、フルHD（1920×1080）以上の高画質でご提供しています。お客様の環境に合わせて画質を選択してご視聴いただけます。'
        }
      ]
    },
    {
      category: 'プライバシー・セキュリティについて',
      questions: [
        {
          question: '他の保護者の方に見られる心配はありませんか？',
          answer: '学校コードによる限定アクセスシステムを採用しており、該当する学校・学年の保護者の方のみがアクセス可能です。また、個人情報は厳重に管理しており、第三者に提供することはございません。'
        },
        {
          question: '子どもの個人情報は保護されていますか？',
          answer: 'はい、お子様の個人情報は厳重に保護されています。動画内でお子様のお名前が呼ばれる場合もありますが、動画は限定公開となっており、関係者以外は視聴できません。'
        },
        {
          question: 'アカウント情報の管理について教えてください。',
          answer: 'アカウント情報は暗号化されて安全に保存されています。パスワードは定期的に変更することをおすすめします。不正なアクセスを検知した場合は、即座にアカウントを保護し、ご連絡いたします。'
        }
      ]
    },
    {
      category: '技術的な問題について',
      questions: [
        {
          question: '動画が再生されない場合はどうすればよいですか？',
          answer: 'まず、インターネット接続を確認してください。次に、ブラウザのキャッシュをクリアし、ページを再読み込みしてください。それでも解決しない場合は、お問い合わせフォームからご連絡ください。'
        },
        {
          question: 'ダウンロードが途中で止まってしまいます。',
          answer: 'Wi-Fi環境での安定した接続をご確認ください。ダウンロードが中断された場合は、マイページから再度ダウンロードを開始できます。大容量ファイルのため、時間に余裕をもってダウンロードしてください。'
        },
        {
          question: '推奨ブラウザを教えてください。',
          answer: 'Chrome、Safari、Firefox、Edgeの最新版を推奨しています。古いバージョンのブラウザでは正常に動作しない場合があります。スマートフォンでは、OSの最新版をご利用ください。'
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      categoryIndex,
      questionIndex,
      category: category.category
    }))
  );

  const filteredQuestions = searchTerm
    ? allQuestions.filter(
        q =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allQuestions;

  const handleToggle = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-8 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            よくあるご質問
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            保護者の皆様からよくいただくご質問にお答えします。<br />
            こちらで解決しない場合は、お気軽にお問い合わせください。
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <SafeIcon 
              icon={FiSearch} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" 
            />
            <input
              type="text"
              placeholder="質問を検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </motion.div>

        {/* FAQ Content */}
        <div className="space-y-8">
          {searchTerm ? (
            /* Search Results */
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  検索結果 ({filteredQuestions.length}件)
                </h2>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredQuestions.map((item, index) => (
                  <div key={`search-${index}`} className="p-6">
                    <button
                      onClick={() => handleToggle(item.categoryIndex, item.questionIndex)}
                      className="w-full text-left flex items-center justify-between hover:text-blue-600 transition-colors"
                    >
                      <div>
                        <span className="text-sm text-blue-600 font-medium mb-1 block">
                          {item.category}
                        </span>
                        <span className="font-semibold text-gray-900 pr-4">
                          {item.question}
                        </span>
                      </div>
                      <motion.div
                        animate={{ 
                          rotate: openIndex === `${item.categoryIndex}-${item.questionIndex}` ? 180 : 0 
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <SafeIcon icon={FiChevronDown} className="text-gray-500" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === `${item.categoryIndex}-${item.questionIndex}` && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 text-gray-600 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* Categories */
            faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <SafeIcon icon={FiHelpCircle} className="text-blue-600" />
                    <span>{category.category}</span>
                  </h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {category.questions.map((item, questionIndex) => (
                    <div key={questionIndex} className="p-6">
                      <button
                        onClick={() => handleToggle(categoryIndex, questionIndex)}
                        className="w-full text-left flex items-center justify-between hover:text-blue-600 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {item.question}
                        </span>
                        <motion.div
                          animate={{ 
                            rotate: openIndex === `${categoryIndex}-${questionIndex}` ? 180 : 0 
                          }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <SafeIcon icon={FiChevronDown} className="text-gray-500" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openIndex === `${categoryIndex}-${questionIndex}` && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 text-gray-600 leading-relaxed">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* No Results */}
        {searchTerm && filteredQuestions.length === 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center py-12"
          >
            <SafeIcon icon={FiSearch} className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              該当する質問が見つかりませんでした
            </h3>
            <p className="text-gray-600 mb-6">
              別のキーワードで検索するか、お問い合わせフォームからご質問ください
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
            >
              検索をクリア
            </button>
            <a
              href="/contact"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              お問い合わせ
            </a>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            解決しない問題がございますか？
          </h3>
          <p className="text-lg mb-6 opacity-90">
            お気軽にお問い合わせください。専門スタッフが丁寧にサポートいたします。
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            お問い合わせする
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQ;