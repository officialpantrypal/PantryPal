
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-background-dark min-h-screen pt-12 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: October 24, 2024
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto text-gray-600 dark:text-gray-300 space-y-8">
          
          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the PantryPal application and website ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">2. Account Responsibilities</h2>
            <p>
              When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p className="mt-2">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">3. Subscription and Billing</h2>
            <p>
              Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
            </p>
            <p className="mt-2">
              At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or PantryPal cancels it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">4. Cancellation Policy</h2>
            <p>
              You may cancel your Subscription renewal either through your online account management page or by contacting PantryPal customer support team. You will not receive a refund for the fees you already paid for your current Subscription period, and you will be able to access the Service until the end of your current Subscription period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">5. Limitation of Liability</h2>
            <p>
              In no event shall PantryPal, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">6. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsPage;
