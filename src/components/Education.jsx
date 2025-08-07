import React from 'react'

export default function Education() {
  const items = [
    {
      title: "Master of Computer Science",
      institution: "University of Bridgeport, CT",
      year: "2023",
    },
    {
      title: "B.Tech – Electronics & Communication",
      institution: "JNTU, India",
      year: "2022",
    },
  ];

  return (
    <section className="px-6 py-12 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-semibold mb-8">Education</h2>

      <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b from-blue-600 via-black to-red-600">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative w-5/6 md:w-1/2 px-6 py-4 bg-gray-900 rounded-xl shadow-lg text-left ${
              index % 2 === 0 ? "ml-auto" : "mr-auto"
            }`}
          >
            <div className="absolute top-4 left-[-10px] w-5 h-5 bg-red-600 border-4 border-gray-800 rounded-full"></div>
            <h3 className="text-xl font-bold text-blue-400">{item.title}</h3>
            <p className="text-gray-300">{item.institution}</p>
            <p className="text-sm text-gray-500">{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
