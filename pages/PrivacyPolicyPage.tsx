
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-background-dark min-h-screen pt-12 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Effective Date: October 26, 2024
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto text-gray-600 dark:text-gray-300 space-y-8">
          
          <section>
            <p className="lead">
              PantryPal (“we,” “our,” or “us”) values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the PantryPal mobile application and website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Account information:</strong> email address, login credentials.</li>
              <li><strong>Pantry data:</strong> food items, quantities, purchase dates.</li>
              <li><strong>Usage data:</strong> features used, interactions within the app.</li>
              <li><strong>Subscription and billing status:</strong> processed securely by third-party providers.</li>
            </ul>
            <p className="mt-4 font-bold text-text-main dark:text-white">We do not sell your personal data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Provide pantry tracking features.</li>
              <li>Generate expiration estimates and freshness alerts.</li>
              <li>Suggest recipes based on your inventory.</li>
              <li>Manage subscriptions and billing.</li>
              <li>Improve app performance and reliability.</li>
              <li>Communicate important updates regarding the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Receipt Scanning</h2>
            <p>
              When you scan a receipt, the image is processed to extract item information. Receipt images are not stored permanently unless required for debugging specific issues or providing direct user support by the PantryPal team.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Data Storage & Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect your data. While no system is completely secure, we take privacy seriously and strive to use commercially acceptable means to protect your personal information in PantryPal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Third-Party Services</h2>
            <p>We may use trusted third-party services for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Authentication</strong> (e.g., verifying your login).</li>
              <li><strong>Payment processing</strong> (e.g., Stripe, Apple In-App Purchase).</li>
              <li><strong>Analytics</strong> (e.g., understanding how the app is used to improve features).</li>
            </ul>
            <p className="mt-2">These services operate under their own privacy policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Your Rights</h2>
            <p>You may:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Update or correct your information within the app settings.</li>
              <li>Request account deletion effectively removing your data from our servers.</li>
              <li>Cancel subscriptions at any time through your app store or account management page.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Children’s Privacy</h2>
            <p>
              PantryPal is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted within the app or on this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <a href="mailto:support@pantrypal.app" className="text-primary hover:underline font-medium">support@pantrypal.app</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
