import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CheckoutPage from './pages/CheckoutPage';
import TermsPage from './pages/TermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SubscriptionPage from './pages/SubscriptionPage';
import PaymentErrorPage from './pages/PaymentErrorPage';
import SubscriptionCanceledPage from './pages/SubscriptionCanceledPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Global Toast Component
const Toast = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleTrigger = () => {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    };

    window.addEventListener('trigger-toast', handleTrigger);
    return () => window.removeEventListener('trigger-toast', handleTrigger);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-3 rounded-full bg-surface-dark px-6 py-3 text-white shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-300 dark:bg-white dark:text-surface-dark">
      <span className="material-symbols-outlined text-accent text-[20px]">info</span>
      <span className="text-sm font-bold">This section is coming soon.</span>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex min-h-screen w-full flex-col relative">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/payment-error" element={<PaymentErrorPage />} />
              <Route path="/subscription-canceled" element={<SubscriptionCanceledPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
            </Routes>
          </main>
          <Footer />
          <Toast />
        </div>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;