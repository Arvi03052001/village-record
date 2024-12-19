import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SplashScreen } from './components/SplashScreen';
import { LoginPage } from './components/LoginPage';
import { MainPage } from './components/MainPage';
import { UserAdd } from './components/users/UserAdd';
import { UserRemove } from './components/users/UserRemove';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/users/add" element={<UserAdd />} />
          <Route path="/users/remove" element={<UserRemove />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;