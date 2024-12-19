import React from 'react';
import { Modal } from './ui/Modal';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LanguageModal: React.FC<LanguageModalProps> = ({ isOpen, onClose }) => {
  const { setLanguage, t } = useLanguage();

  const handleLanguageSelect = (lang: 'en' | 'kn') => {
    setLanguage(lang);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('select_language')}>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleLanguageSelect('en')}
          className="flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-105"
        >
          <span className="text-2xl mb-2">🇬🇧</span>
          <span className="font-medium">{t('english')}</span>
        </button>
        <button
          onClick={() => handleLanguageSelect('kn')}
          className="flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-105"
        >
          <span className="text-2xl mb-2">🇮🇳</span>
          <span className="font-medium">{t('kannada')}</span>
        </button>
      </div>
    </Modal>
  );
};