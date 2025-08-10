import React from 'react';
import { ClipboardDocumentListIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const TermsOfService = () => (
  <div className="min-h-screen flex justify-center items-center">
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
      <p className="text-lg text-center mb-20">
        Welcome to the EduQuest landing page. Please read these terms to understand how this demonstration site works.
      </p>

      <div className="space-y-10 mb-20">
        <section className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-6">
          <div className="flex items-center mb-3">
            <ClipboardDocumentListIcon className="w-6 h-6 text-purple-600 mr-2" />
            <h2 className="text-xl font-semibold">Purpose of This Site</h2>
          </div>
          <p>
            This site is designed to showcase the EduQuest brand concept. It does not yet provide full services, and the waitlist form is a preview feature for visual demonstration.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mt-6">
          <div className="flex items-center mb-3">
            <InformationCircleIcon className="w-6 h-6 text-yellow-600 mr-2" />
            <h2 className="text-xl font-semibold">Data Handling</h2>
          </div>
          <p>
            We do not store, process, or share any personal data submitted through this site. Any email entered in the waitlist form stays only in your browser and is not sent anywhere.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default TermsOfService;
