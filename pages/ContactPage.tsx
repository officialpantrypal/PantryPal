
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have questions about PantryPal? We're here to help. <br/>
            We typically respond within 24–48 hours.
          </p>
        </div>

        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-soft p-8 border border-gray-100 dark:border-gray-700">
          {submitted ? (
            <div className="text-center py-12 animate-in fade-in zoom-in">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <h3 className="text-2xl font-bold text-text-main dark:text-white mb-2">Message Sent!</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thanks for reaching out. We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-text-main dark:text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-text-main dark:text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-text-main dark:text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-glow hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
              >
                Send Message
              </button>

              <div className="pt-4 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Or email us directly at <a href="mailto:support@pantrypal.app" className="text-primary hover:underline">support@pantrypal.app</a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
