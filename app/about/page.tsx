import React from 'react';

const AboutPage = () => (
  <div className="max-w-4xl mx-auto p-8">
    <h1 className="text-3xl font-bold mb-6">About EduQuest</h1>
    
    <div className="space-y-6 text-gray-700">
      <section>
        <h2 className="text-xl font-semibold mb-3">Demo Project</h2>
        <p>This is a demonstration landing page showcasing modern web development practices with Next.js, TypeScript, and Tailwind CSS.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">No Real Service</h2>
        <p>EduQuest is a fictional educational platform created for demonstration purposes. No actual educational services are provided.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Technical Implementation</h2>
        <p>Built with security and privacy in mind, implementing best practices for domain reputation protection.</p>
      </section>
    </div>
  </div>
);

export default AboutPage;
