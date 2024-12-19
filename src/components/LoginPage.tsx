import React, { useState } from 'react';
import { Phone, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from './ui/Input';
import { validatePhoneNumber, validatePincode } from '../utils/validation';
import { authenticateUser } from '../services/auth';
import { useLanguage } from '../contexts/LanguageContext';

export const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(value);
  };

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setPincode(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validatePhoneNumber(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    if (!validatePincode(pincode)) {
      setError('Please enter a valid 6-digit PIN');
      return;
    }

    try {
      const isAuthenticated = await authenticateUser(phone, pincode);
      if (isAuthenticated) {
        navigate('/main');
      } else {
        setError('Invalid phone number or PIN');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white">{t('welcome_back')}</h2>
          <p className="text-purple-200 mt-2">{t('please_login')}</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 text-red-100 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder={t('enter_phone')}
            icon={Phone}
            maxLength={10}
            label={t('phone_number')}
            theme="dark"
          />

          <Input
            type="password"
            value={pincode}
            onChange={handlePincodeChange}
            placeholder={t('enter_pin')}
            icon={Lock}
            maxLength={6}
            label={t('pin_code')}
            theme="dark"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            {t('login')}
          </button>
        </form>
      </div>
    </div>
  );
};