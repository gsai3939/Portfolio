
import React from 'react';

export default function ClaimsPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8">
      <div className="max-w-5xl mx-auto">

        {/* Project Title */}
        <h1 className="text-4xl font-extrabold text-red-400 text-center mb-4">
          ClaimsPro – Insurance Claims Management Portal
        </h1>

        {/* Tagline */}
        <p className="text-center text-gray-400 text-lg mb-10">
          Streamlined insurance claims with GraphQL and Angular
        </p>

        {/* Project Image */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700 mb-8">
          <img
            src="/src/assets/claimspro.png"
            alt="ClaimsPro UI"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Contribution Sections */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Tech Stack */}
          <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 border border-gray-700 shadow">
            <h2 className="text-2xl font-bold text-red-300 mb-4">Tech Stack</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-md">
              <li><span className="text-red-200 font-medium">Angular</span> (UI framework)</li>
              <li><span className="text-green-300 font-medium">Spring Boot</span> (backend APIs)</li>
              <li><span className="text-pink-300 font-medium">GraphQL</span> (data fetching)</li>
              <li><span className="text-blue-300 font-medium">PostgreSQL</span> (relational database)</li>
              <li><span className="text-purple-300 font-medium">Docker</span> (containerization)</li>
            </ul>
          </div>

          {/* Responsibilities */}
          <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 border border-gray-700 shadow">
            <h2 className="text-2xl font-bold text-red-300 mb-4">My Role & Contributions</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-md">
              <li>Developed responsive UI using Angular and SCSS modules</li>
              <li>Built GraphQL queries and mutations for claims workflows</li>
              <li>Created secure Spring Boot endpoints with validation & auth</li>
              <li>Set up PostgreSQL schemas and optimized complex joins</li>
              <li>Dockerized the full stack for smooth local & cloud deployment</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/gsai3939/claimspro"
            target="_blank"
            className="inline-block bg-gradient-to-r from-red-600 via-black to-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform"
          >
            View Code on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
