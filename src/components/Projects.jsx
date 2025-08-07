// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Projects() {
//   const projects = [
//     {
//       name: "SmartBank",
//       image: "/src/assets/smartbank.png",
//       link: "/projects/smartbank",
//       brief: "Fraud detection dashboard using ML, Kafka, React, and Spring Boot."
//     },
//     {
//       name: "ClaimsPro",
//       image: "/src/assets/claimspro.png",
//       link: "/projects/claimspro",
//       brief: "Claims portal with Angular, GraphQL, and PostgreSQL."
//     }
//   ];

//   return (
//     <section className="px-6 py-12 bg-gray-900 text-white text-center">
//       <h2 className="text-3xl font-semibold mb-6">Projects</h2>
//       <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//         {projects.map((proj) => (
//           <Link to={proj.link} key={proj.name} className="bg-gray-800 rounded-lg shadow hover:scale-105 transition-transform">
//             <img src={proj.image} alt={proj.name} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-xl font-bold">{proj.name}</h3>
//               <p className="text-gray-400 text-sm mt-2">{proj.brief}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: "SmartBank",
    image: "/src/assets/smartbank.png",
    link: "/projects/smartbank",
    brief: "Fraud detection dashboard using ML, Kafka, React, and Spring Boot."
  },
  {
    name: "ClaimsPro",
    image: "/src/assets/claimspro.png",
    link: "/projects/claimspro",
    brief: "Claims portal with Angular, GraphQL, and PostgreSQL."
  }
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextProject = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
      setAnimating(false);
    }, 700); // <- slower transition
  };

  const project = projects[current];

  return (
    <section className="bg-gray-900 text-white text-center py-16">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-[3px] border-gradient-to-r from-blue-600 via-black to-red-600">
        <Link to={project.link}>
          <div
            className={`transition-all duration-700 ease-in-out transform ${
              animating ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-4 bg-gray-800">
              <h3 className="text-xl font-bold mb-1">{project.name}</h3>
              <p className="text-gray-300 text-sm">{project.brief}</p>
            </div>
          </div>
        </Link>
      </div>

      <button
        onClick={nextProject}
        className="mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-gray-700 to-red-600 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
      >
        <div className="flex items-center gap-2">
          <span>Next Project</span>
          <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center">→</span>
        </div>
      </button>
    </section>
  );
}
