// import React from 'react'
// export default function Contact() {
//   return (
//     <section className="px-6 py-12 bg-gray-900 text-white text-center">
//       <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
//       <p className="text-gray-300">Email: <a href="mailto:saig7739@gmail.com" className="text-blue-400 underline">saig7739@gmail.com</a></p>
//       <p className="text-gray-300">LinkedIn: <a href="https://linkedin.com/in/sai-g-781bb231a" target="_blank" className="text-blue-400 underline">sai-g-781bb231a</a></p>
//     </section>
//   )
// }
import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-blue-900 via-black to-red-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-10">Let’s Connect</h2>

      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row flex-wrap justify-center gap-6">
        {/* Email */}
        <a
          href="mailto:saig7739@gmail.com"
          className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 transition px-6 py-4 rounded-xl shadow-lg w-full sm:w-[45%] text-left"
        >
          <FaEnvelope className="text-blue-400 text-xl" />
          <span className="text-gray-200">saig7739@gmail.com</span>
        </a>

        {/* Phone */}
        <a
          href="tel:+11234567890"
          className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 transition px-6 py-4 rounded-xl shadow-lg w-full sm:w-[45%] text-left"
        >
          <FaPhone className="text-green-400 text-xl" />
          <span className="text-gray-200">+1 (469) 443‑6220</span> {/* Replace with real number */}
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/sai-g-781bb231a"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 transition px-6 py-4 rounded-xl shadow-lg w-full sm:w-[45%] text-left"
        >
          <FaLinkedin className="text-blue-500 text-xl" />
          <span className="text-gray-200">linkedin.com/in/sai-g-781bb231a</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/gsai3939"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 transition px-6 py-4 rounded-xl shadow-lg w-full sm:w-[45%] text-left"
        >
          <FaGithub className="text-white text-xl" />
          <span className="text-gray-200">github.com/gsai3939</span>
        </a>
      </div>

      <p className="text-sm text-gray-500 mt-10">&copy; {new Date().getFullYear()} Jayadeep Sai. All rights reserved.</p>
    </section>
  );
}

