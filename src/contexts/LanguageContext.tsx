import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
interface Translations {
  [key: string]: {
    en: string;
    kn: string;
  };
}

interface LanguageContextType {
  language: string;
  setLanguage: (lang: 'en' | 'kn') => void;
  t: (key: string) => string;
}

// Translations
const translations: Translations = {
  welcome_back: {
    en: 'Welcome Back',
    kn: 'ಮತ್ತೆ ಸ್ವಾಗತ'
  },
  please_login: {
    en: 'Please login to continue',
    kn: 'ಮುಂದುವರಿಯಲು ದಯವಿಟ್ಟು ಲಾಗಿನ್ ಮಾಡಿ'
  },
  enter_phone: {
    en: 'Enter phone number',
    kn: 'ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ'
  },
  enter_pin: {
    en: 'Enter PIN',
    kn: 'ಪಿನ್ ನಮೂದಿಸಿ'
  },
  phone_number: {
    en: 'Phone Number',
    kn: 'ಫೋನ್ ಸಂಖ್ಯೆ'
  },
  pin_code: {
    en: 'PIN Code',
    kn: 'ಪಿನ್ ಕೋಡ್'
  },
  login: {
    en: 'Login',
    kn: 'ಲಾಗಿನ್'
  },
  milk_record: {
    en: 'Milk Record',
    kn: 'ಹಾಲಿನ ದಾಖಲೆ'
  },
  morning: {
    en: 'Morning',
    kn: 'ಬೆಳಗ್ಗೆ'
  },
  evening: {
    en: 'Evening',
    kn: 'ಸಂಜೆ'
  },
  price: {
    en: 'Price',
    kn: 'ಬೆಲೆ'
  },
  users: {
    en: 'Users',
    kn: 'ಬಳಕೆದಾರರು'
  },
  language: {
    en: 'Language',
    kn: 'ಭಾಷೆ'
  },
  select_language: {
    en: 'Select Language',
    kn: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ'
  },
  english: {
    en: 'English',
    kn: 'ಇಂಗ್ಲಿಷ್'
  },
  kannada: {
    en: 'Kannada',
    kn: 'ಕನ್ನಡ'
  },
  users_data: {
    en: 'Users Data',
    kn: 'ಬಳಕೆದಾರರ ಡೇಟಾ'
  },
  users_list: {
    en: 'Users List',
    kn: 'ಬಳಕೆದಾರರ ಪಟ್ಟಿ'
  },
  user_add: {
    en: 'User Add',
    kn: 'ಬಳಕೆದಾರರನ್ನು ಸೇರಿಸಿ'
  },
  user_remove: {
    en: 'User Remove',
    kn: 'ಬಳಕೆದಾರರನ್ನು ತೆಗೆದುಹಾಕಿ'
  },
  name: {
    en: 'Name',
    kn: 'ಹೆಸರು'
  },
  serial_number: {
    en: 'Serial Number',
    kn: 'ಕ್ರಮ ಸಂಖ್ಯೆ'
  },
  date_time: {
    en: 'Date/Time',
    kn: 'ದಿನಾಂಕ/ಸಮಯ'
  },
  ok: {
    en: 'Ok',
    kn: 'ಸರಿ'
  },
  cancel: {
    en: 'Cancel',
    kn: 'ರದ್ದುಮಾಡಿ'
  },
  user_exists: {
    en: 'User Already present',
    kn: 'ಬಳಕೆದಾರರು ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದಾರೆ'
  },
  user_not_found: {
    en: 'User not present',
    kn: 'ಬಳಕೆದಾರರು ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ'
  }
};

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<'en' | 'kn'>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'en' || savedLanguage === 'kn') ? savedLanguage : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: 'en' | 'kn') => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};