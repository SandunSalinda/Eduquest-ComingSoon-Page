import React from 'react';
import { ShieldCheckIcon, EnvelopeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const PrivacyPolicy = () => (
  <div className="min-h-screen flex items-center justify-center py-12 px-4">
    <div className="max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <p className="text-lg text-center mb-12">
        Your privacy matters to us. While this page is part of a demonstration landing experience, we take steps to ensure your data is respected.
      </p>

      <div className="space-y-10">
        <section className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center mb-3">
            <ShieldCheckIcon className="w-6 h-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold">What We Collect</h2>
          </div>
          <p>
            We may invite you to enter your email to join our waitlist. These emails are <strong>not stored in any database</strong> or used for marketing campaigns. They remain within your browser session for display purposes only.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center mb-3">
            <EnvelopeIcon className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">How Your Email is Used</h2>
          </div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Validated in your browser to check format</li>
            <li>Displayed with a confirmation message</li>
            <li>Not sent to a backend or third-party service</li>
            <li>Never stored, sold, or shared</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center mb-3">
            <ExclamationTriangleIcon className="w-6 h-6 text-red-600 mr-2" />
            <h2 className="text-xl font-semibold">Email Safety</h2>
          </div>
          <p>
            This domain does not send outgoing emails. We maintain strict SPF and DMARC policies to prevent unauthorized email use and protect our visitors from phishing or spam.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>If you have any privacy concerns, email us at <a href="mailto:hello@eduquest.global" className="text-blue-600 hover:underline">hello@eduquest.global</a>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
