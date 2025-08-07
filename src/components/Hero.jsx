import React from 'react'
import { Link } from 'react-router-dom';
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center px-4 text-white"
      style={{
        backgroundImage: "url('/bg-dark.jpg')",
        backgroundColor: "rgba(0,0,0,0.7)",
        backgroundBlendMode: "darken",
      }}
    >
      <img src="../public/jayadeep.jpg" className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-white" />
      <h1 className="text-4xl font-bold">Jayadeep Sai</h1>
      <p className="text-xl text-gray-200 mt-2">Full Stack Java Developer | Cloud | React | Spring Boot</p>
      <Link to="/contact-form">
  <button className="bg-blue-600 text-white px-6 py-3 mt-6 rounded-lg hover:bg-red-600 transition">
    Contact Me
  </button>
</Link>
    </section>
  );
}
