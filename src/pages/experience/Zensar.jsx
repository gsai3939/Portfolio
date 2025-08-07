
// import React from "react";
// import bg from "../../assets/zensar.png";

// export default function Zensar() {
//   return (
//     <div className="text-white bg-gradient-to-br from-gray-900 via-black to-blue-950 min-h-screen">
//       <div
//         className="bg-cover bg-center h-60 flex items-center justify-center"
//         style={{ backgroundImage: `url(${bg})` }}
//       >
//         <h1 className="text-4xl font-bold bg-black bg-opacity-50 px-6 py-2 rounded-xl">
//           Zensar Technologies – Enterprise Solutions
//         </h1>
//       </div>
//       <div className="max-w-5xl mx-auto px-6 py-12">
//         <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">Tech Stack</h2>
//         <div className="flex flex-wrap gap-3 mb-8">
//           {["React", "Spring Boot", "Java", "TailwindCSS", "AWS", "Docker", "CI/CD", "RabbitMQ"].map((tech) => (
//             <span key={tech} className="bg-blue-700 text-sm px-3 py-1 rounded-full">
//               {tech}
//             </span>
//           ))}
//         </div>
//         <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">My Contributions</h2>
//         <ul className="list-disc list-inside text-gray-300 space-y-3 mb-10">
//           <li>Built scalable React frontends and integrated Spring Boot APIs.</li>
//           <li>Utilized RabbitMQ for internal service communication.</li>
//           <li>Created reusable UI components for HRMS and finance domains.</li>
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
import bg from "../../assets/zensar.png";

export default function Zensar() {
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
          {["React", "Spring Boot", "Java", "TailwindCSS", "AWS", "Docker", "CI/CD", "RabbitMQ"].map((tech) => (
            <span key={tech} className="bg-blue-700 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">My Contributions</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-10">
          <li><strong>Developed scalable, high-performance frontends using React</strong>, integrating seamlessly with RESTful APIs powered by Spring Boot to ensure robust full-stack functionality.</li>
          <li><strong>Implemented RabbitMQ for asynchronous communication</strong> between internal microservices, improving system reliability and decoupling service dependencies.</li>
          <li><strong>Engineered modular and reusable UI components</strong> for HRMS and finance applications, enhancing development efficiency and ensuring consistent user experience across modules.</li>
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
