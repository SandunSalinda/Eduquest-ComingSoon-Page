import React from 'react';

const PrivacyPolicy = () => (
  <div className="max-w-4xl mx-auto p-8">
    <h1 className="text-3xl font-bold mb-6">Privacy Policy - EduQuest Landing Page</h1>
    
    <div className="space-y-6 text-gray-700">
      <section>
        <h2 className="text-xl font-semibold mb-3">Data Collection</h2>
        <p>This is a demonstration landing page. NO personal data, including email addresses, is collected, stored, processed, or transmitted to any servers.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Email Form</h2>
        <p>The "Join Waitlist" form is for user interface demonstration purposes only. Email addresses entered are:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Not stored in any database</li>
          <li>Not sent to any email service</li>
          <li>Not processed by any backend system</li>
          <li>Only validated in the browser for format checking</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">No Email Sending</h2>
        <p>This domain does not send any emails. We have implemented strict SPF (-all) and DMARC (p=reject) policies to prevent any unauthorized email usage.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Contact</h2>
        <p>For questions: hello@eduquest.global</p>
      </section>
    </div>
  </div>
);

export default PrivacyPolicy;
