
import React from 'react';

export default function SmartBank() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8">
      <div className="max-w-5xl mx-auto">

        {/* Project Title */}
        <h1 className="text-4xl font-extrabold text-blue-400 text-center mb-4">
          SmartBank – Fraud Detection Dashboard
        </h1>

        {/* Tagline */}
        <p className="text-center text-gray-400 text-lg mb-10">
          Real-time transaction monitoring powered by ML and Kafka
        </p>

        {/* Visual Project Display */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700 mb-8">
          <img
            src="/src/assets/smartbank.png"
            alt="SmartBank UI"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Contribution Sections */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Tech Stack */}
          <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 border border-gray-700 shadow">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">Tech Stack</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-md">
              <li><span className="text-blue-200 font-medium">React</span> (frontend UI)</li>
              <li><span className="text-green-300 font-medium">Spring Boot</span> (backend microservices)</li>
              <li><span className="text-yellow-300 font-medium">Apache Kafka</span> (event streaming)</li>
              <li><span className="text-purple-300 font-medium">JWT + OAuth</span> (authentication)</li>
              <li><span className="text-pink-300 font-medium">Tailwind CSS</span> (styling)</li>
            </ul>
          </div>

          {/* Responsibilities */}
          <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 border border-gray-700 shadow">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">My Role & Contributions</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-md">
              <li>Designed dynamic dashboard UI using React and Tailwind CSS</li>
              <li>Integrated backend microservices using Spring Boot and Kafka</li>
              <li>Engineered ML pipeline to detect fraud in transaction data</li>
              <li>Implemented secure access with JWT and OAuth</li>
              <li>Optimized performance for real-time monitoring</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/gsai3939"
            target="_blank"
            className="inline-block bg-gradient-to-r from-blue-600 via-black to-red-600 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform"
          >
            View Code on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
