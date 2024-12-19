import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../ui/Modal';
import { useLanguage } from '../../contexts/LanguageContext';

interface UsersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UsersModal: React.FC<UsersModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const buttons = [
    { label: 'users_list', path: '/users/list' },
    { label: 'user_add', path: '/users/add' },
    { label: 'user_remove', path: '/users/remove' }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('users_data')}>
      <div className="grid gap-4">
        {buttons.map(({ label, path }) => (
          <button
            key={label}
            onClick={() => {
              onClose();
              navigate(path);
            }}
            className="w-full p-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium transition-all duration-300 transform hover:scale-105"
          >
            {t(label)}
          </button>
        ))}
      </div>
    </Modal>
  );
};