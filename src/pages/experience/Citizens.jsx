
// import React from "react";
// import bg from "../../assets/citizens.png";

// export default function Citizens() {
//   return (
//     <div className="text-white bg-gradient-to-br from-gray-900 via-black to-blue-950 min-h-screen">
//       <div
//         className="bg-cover bg-center h-60 flex items-center justify-center"
//         style={{ backgroundImage: `url(${bg})` }}
//       >
//         <h1 className="text-4xl font-bold bg-black bg-opacity-50 px-6 py-2 rounded-xl">
//           Citizens Bank – Modern Banking Platform
//         </h1>
//       </div>
//       <div className="max-w-5xl mx-auto px-6 py-12">
//         <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">Tech Stack</h2>
//         <div className="flex flex-wrap gap-3 mb-8">
//           {["Java", "Spring Boot", "React", "Kafka", "TailwindCSS", "PostgreSQL", "AWS", "CI/CD"].map((tech) => (
//             <span key={tech} className="bg-blue-700 text-sm px-3 py-1 rounded-full">
//               {tech}
//             </span>
//           ))}
//         </div>
//         <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">My Contributions</h2>
//         <ul className="list-disc list-inside text-gray-300 space-y-3 mb-10">
//           <li>Developed Spring Boot microservices.</li>
//           <li>Integrated Kafka for real-time streams.</li>
//           <li>Built React dashboards.</li>
//         </ul>
//         <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">Delivery Process</h2>
//         <div className="grid md:grid-cols-4 gap-4 text-center text-sm text-gray-300">
//           {["Requirement", "Architecture", "Development", "Launch"].map((step, i) => (
//             <div key={i} className="bg-gray-800 p-4 rounded-lg border border-blue-700">
//               <h3 className="font-bold mb-2">{`${i + 1}. ${step}`}</h3>
//               <p>Details about {step}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import bg from "../../assets/citizens.png";

export default function Citizens() {
  return (
    <div className="text-white bg-gradient-to-br from-gray-900 via-black to-blue-950 min-h-screen">
      <div
        className="bg-cover bg-center h-60 flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-4xl font-bold text-yellow-300 bg-blue-900 bg-opacity-70 px-6 py-2 rounded-xl shadow-lg">
          Full Stack Developer
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {["Java", "Spring Boot", "React", "Kafka", "TailwindCSS", "PostgreSQL", "AWS", "CI/CD"].map((tech) => (
            <span key={tech} className="bg-blue-700 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">My Contributions</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-10">
          <li>Architected and implemented scalable microservices using Java Spring Boot, reducing maintenance by 30%.</li>
          <li>Built real-time Kafka event streaming pipelines for instant transaction insights.</li>
          <li>Created responsive dashboards using React, Tailwind CSS, and charting libraries.</li>
          <li>Deployed services to AWS with Docker, managed CI/CD via Jenkins pipelines.</li>
          <li>Integrated JWT-based auth and implemented RBAC for enhanced security.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">Delivery Process</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center text-sm text-gray-300">
          {["Requirement", "Architecture", "Development", "Launch"].map((step, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg border border-blue-700">
              <h3 className="font-bold mb-2">{`${i + 1}. ${step}`}</h3>
              <p>Details about {step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
