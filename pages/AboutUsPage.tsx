import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-background-dark min-h-screen pt-12 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center sm:text-left">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider mb-4 uppercase">
            Our Story
          </span>
          <h1 className="text-4xl font-black text-text-main dark:text-white mb-6">
            About PantryPal
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A student-founded project dedicated to making everyday meal planning easier and reducing household food waste.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-text-main dark:text-white mb-4">Our Origins</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              PantryPal is a student-founded project developed through a high school business incubator program. It started as a simple idea to help our families manage groceries and prevent wasting food. We believe that by providing people with the right tools, we can collectively make a highly significant impact on global food waste.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main dark:text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Our goal is simple: help people waste less food and make everyday meal planning easier. We’re building PantryPal as a learning-driven startup, continuously improving the platform through direct user feedback and testing. Every feature we build is focused on providing practical value to busy households and budget-conscious individuals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main dark:text-white mb-4">A Student-Led Initiative</h2>
            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                "We aren't a massive tech corporation, we're a team of students trying to learn how to build tools that solve real problems. By using PantryPal, you're not just organizing your kitchen, but you're also helping us grow as developers and entrepreneurs while contributing to a more sustainable future."
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-main dark:text-white mb-4">How You Can Help</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              As an early-stage startup, your feedback is our most valuable resource. If you find a bug, have a feature request, or just want to share how PantryPal has helped you, we'd love to hear from you. Your input directly shapes the future of this platform.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;