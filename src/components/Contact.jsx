import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-indigo-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-8">
        {/* Left: Statement + primary actions */}
        <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
          <h2 className="text-4xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
            Let’s connect.
          </h2>
          <p className="text-gray-300 mb-8">
            Full Stack Developer specializing in Java, Spring Boot, React, and
            cloud solutions. Get in touch for opportunities or collaborations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:saig7739@gmail.com"
              className="inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-indigo-600 hover:to-cyan-600 transition shadow-lg"
            >
              <FaEnvelope className="text-white text-lg" />
              <span>Email</span>
            </a>
            <a
              href="tel:+14694436220"
              className="inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-white/10 transition"
            >
              <FaPhoneAlt className="text-green-400 text-lg" />
              <span>+1 (469) 443-6220</span>
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            Prefer async? Email is best. I usually respond within a day.
          </p>
        </div>

        {/* Right: Link cards */}
        <div className="md:col-span-2 space-y-4">
          <a
            href="https://linkedin.com/in/sai-g-781bb231a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition"
          >
            <div className="p-3 rounded-xl bg-blue-600/20">
              <FaLinkedin className="text-blue-400 text-2xl" />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-400">LinkedIn</div>
              <div className="font-medium break-all">
                linkedin.com/in/sai-g-781bb231a
              </div>
            </div>
          </a>

          <a
            href="mailto:saig7739@gmail.com"
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition"
          >
            <div className="p-3 rounded-xl bg-cyan-600/20">
              <FaEnvelope className="text-cyan-300 text-2xl" />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-400">Email</div>
              <div className="font-medium break-all">saig7739@gmail.com</div>
            </div>
          </a>

          <a
            href="https://github.com/gsai3939"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition"
          >
            <div className="p-3 rounded-xl bg-white/10">
              <FaGithub className="text-white text-2xl" />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-400">GitHub</div>
              <div className="font-medium break-all">github.com/gsai3939</div>
            </div>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="text-center text-sm text-gray-500 py-6">
          &copy; {new Date().getFullYear()} Jayadeep Sai. All rights reserved.
        </p>
      </div>
    </section>
  );
}
