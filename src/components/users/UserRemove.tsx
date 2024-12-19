import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { removeUser } from '../../services/users';
import { Input } from '../ui/Input';
import { ClipboardList } from 'lucide-react';

export const UserRemove = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [serialNumber, setSerialNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!serialNumber) {
      setError('Please enter a serial number');
      return;
    }

    const result = await removeUser(serialNumber);
    
    if (!result.success) {
      setError(t(result.error || 'An error occurred'));
      return;
    }

    navigate('/main');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">{t('user_remove')}</h1>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 space-y-6">
          {error && (
            <div className="p-3 bg-red-500/20 border border-red-500/50 text-red-100 rounded-lg">
              {error}
            </div>
          )}

          <Input
            type="text"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            placeholder={t('serial_number')}
            icon={ClipboardList}
            label={t('serial_number')}
            theme="dark"
          />

          <div className="flex gap-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              {t('ok')}
            </button>
            <button
              onClick={() => navigate('/main')}
              className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              {t('cancel')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};