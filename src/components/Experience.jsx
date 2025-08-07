
// import React from "react";
// import { Link } from "react-router-dom";

// // ✅ Import images directly 
// import citizensBG from "../assets/citizens.png";
// import zensarBG from "../assets/zensar.png";
// export default function Experience() {
//   const items = [
//     {
//       background: citizensBG,
//       link: "/experience/citizens",
//       brief:
//         "Modernized digital banking systems at Citizens Bank using Java Spring Boot microservices, Kafka streaming, and dynamic dashboards with React for enhanced transaction visibility."
//     },
//     {
//       background: zensarBG,
//       link: "/experience/zensar",
//       brief:
//         "Delivered secure enterprise platforms with React, Spring Boot, and AWS. Spearheaded CI/CD integration and UI/UX performance tuning for large-scale systems at Zensar."
//     }
//   ];

//   return (
//     <section id="experience" className="bg-gradient-to-r from-blue-950 via-black to-red-950 text-white py-20 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-red-400">
//           Professional Experience
//         </h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {items.map((exp, index) => (
//             <Link
//               to={exp.link}
//               key={index}
//               className="bg-gray-900 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform border-[3px] border-transparent bg-clip-padding group"
//               style={{
//                     borderImage: "linear-gradient(to right, #3b82f6, #0f0f0f, #ef4444) 1"
//                     }}

//             >
//               {/* ✅ Top Image */}
//               <img
//                 src={exp.background}
//                 alt="Experience image"
//                 className="w-full h-48 object-cover"
//               />

//               {/* ✅ Description Only (No title, no logo) */}
//               <div className="p-5 text-left">
//                 <p className="text-gray-300 text-sm">{exp.brief}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
/*//////////////////////////////////////////////////////////////////////////////////*/
// import React from "react";

// import citizensBG from "../assets/citizens.png";
// import zensarBG from "../assets/zensar.png";

// export default function Experience() {
//   const experiences = [
//     {
//       name: "Citizens Bank",
//       bgImage: citizensBG,
//       tech: ["Java", "Spring Boot", "React", "Kafka", "TailwindCSS", "PostgreSQL", "AWS", "CI/CD"],
//       contributions: [
//         "Developed scalable Spring Boot microservices for transactions and customer APIs.",
//         "Integrated Kafka for real-time event streaming across the banking system.",
//         "Built dynamic React dashboards for financial insights and analytics.",
//         "Boosted performance with React Lazy and code splitting.",
//         "Used AWS Lambda and S3 for serverless workflows and storage.",
//         "Enabled continuous deployment using Jenkins and GitHub Actions."
//       ],
//       steps: [
//         { step: "1. Requirement", desc: "Gathered compliance needs and platform goals." },
//         { step: "2. Architecture", desc: "Designed microservices with Kafka and AWS." },
//         { step: "3. Development", desc: "Built full-stack features using agile sprints." },
//         { step: "4. Launch", desc: "Deployed with CI/CD and automated tests." }
//       ]
//     },
//     {
//       name: "Zensar Technologies",
//       bgImage: zensarBG,
//       tech: ["React", "Spring Boot", "Java", "TailwindCSS", "AWS", "Docker", "CI/CD", "RabbitMQ"],
//       contributions: [
//         "Built scalable React frontends and integrated Spring Boot APIs.",
//         "Utilized RabbitMQ for internal service communication.",
//         "Managed CI/CD pipelines using GitHub Actions and Jenkins.",
//         "Created reusable UI components for HRMS and finance domains.",
//         "Deployed Docker containers to AWS ECS with auto-scaling."
//       ],
//       steps: [
//         { step: "1. Requirement", desc: "Captured client needs and UX goals." },
//         { step: "2. Architecture", desc: "Planned scalable frontend/backend integration." },
//         { step: "3. Development", desc: "Developed UI and APIs in React & Spring Boot." },
//         { step: "4. Launch", desc: "Dockerized & deployed with CI/CD to AWS." }
//       ]
//     }
//   ];

//   return (
//     <section className="bg-gray-900 text-white px-4 py-12">
//       <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>

//       <div className="space-y-16 max-w-6xl mx-auto">
//         {experiences.map((exp, idx) => (
//           <div key={idx} className="rounded-2xl overflow-hidden border border-blue-900 shadow-xl">
//             {/* Background image */}
//             <div
//               className="h-60 bg-cover bg-center w-full"
//               style={{ backgroundImage: `url(${exp.bgImage})` }}
//             />

//             {/* Content */}
//             <div className="bg-gradient-to-br from-gray-950 via-black to-blue-950 px-6 py-10">
//               {/* Tech Stack */}
//               <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
//               <div className="flex flex-wrap gap-2 mb-8">
//                 {exp.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="bg-blue-800 text-sm px-3 py-1 rounded-full border border-blue-500"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* Contributions */}
//               <h3 className="text-2xl font-semibold mb-4">My Contributions</h3>
//               <ul className="list-disc list-inside text-gray-300 space-y-2 mb-10">
//                 {exp.contributions.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>

//               {/* Delivery Process */}
//               <h3 className="text-2xl font-semibold mb-4">Delivery Process</h3>
//               <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-300">
//                 {exp.steps.map(({ step, desc }) => (
//                   <div
//                     key={step}
//                     className="bg-gray-800 p-4 rounded-xl border border-blue-700 shadow"
//                   >
//                     <h4 className="font-bold mb-1">{step}</h4>
//                     <p>{desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
/*/////////////////////////////////////////////////////////////////////////////////*/
import React from "react";
import { Link } from "react-router-dom";
import citizensBG from "../assets/citizens.png";
import zensarBG from "../assets/zensar.png";

export default function Experience() {
  const items = [
    {
      name: "Citizens Bank",
      image: citizensBG,
      link: "/experience/citizens",
      brief:
        "Modernized legacy financial platforms for Citizens Bank by developing scalable Spring Boot microservices and implementing Apache Kafka for real-time data streaming. Built interactive dashboards to provide real-time insights, streamline operations, and support data-driven decision-making across financial services.",
    },
    {
      name: "Zensar Technologies",
      image: zensarBG,
      link: "/experience/zensar",
      brief:
        "Delivered secure and scalable full-stack solutions using React for dynamic frontends and Spring Boot for robust backend services. Leveraged AWS cloud services for deployment and infrastructure, and implemented CI/CD pipelines to enable seamless integration, testing, and delivery.",
    },
  ];

  return (
    <section className="px-6 py-12 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-semibold mb-6">Experience</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {items.map((exp) => (
          <Link
            to={exp.link}
            key={exp.name}
            className="relative group transition-transform hover:scale-105"
          >
            <div className="bg-gradient-to-r from-blue-600 via-black to-red-600 p-[2px] rounded-xl">
              <div className="bg-gray-900 rounded-xl h-full">
                <img
                  src={exp.image}
                  alt={exp.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <p className="text-gray-300 text-sm">{exp.brief}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

