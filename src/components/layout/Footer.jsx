import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  const footerLinks = [
    { name: 'よくある質問', path: '/faq' },
    { name: 'プライバシーポリシー', path: '/privacy' },
    { name: '利用規約', path: '/terms' },
    { name: 'お問い合わせ', path: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <SafeIcon icon={FiIcons.FiVideo} className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold">スクールムービーズ</span>
            </div>
            <p className="text-gray-400 mb-4">
              お子様の晴れ舞台をプロの映像で記録し、<br />
              大切な思い出を永遠に残します。
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMapPin} className="text-blue-400" />
                <span>神戸市中央区</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="text-blue-400" />
                <span>078-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="text-blue-400" />
                <span>info@schoolmovies.jp</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors">
                  行事一覧
                </Link>
              </li>
              <li>
                <Link to="/mypage" className="text-gray-400 hover:text-white transition-colors">
                  マイページ
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                  ログイン
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サポート</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 スクールムービーズ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;