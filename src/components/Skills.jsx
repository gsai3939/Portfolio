import React from 'react'
import {
  FaReact, FaAngular, FaJava, FaAws, FaDocker, FaDatabase, FaGitAlt,
} from 'react-icons/fa'
import {
  SiSpringboot, SiMongodb, SiPostgresql, SiTypescript,
  SiHtml5, SiCss3
} from 'react-icons/si'

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Angular", icon: <FaAngular className="text-red-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-400" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Java", icon: <FaJava className="text-orange-300" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
        { name: "REST APIs", icon: <FaDatabase className="text-yellow-400" /> },
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "AWS", icon: <FaAws className="text-yellow-300" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-red-400" /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
      ],
    },
  ]

  return (
    <section id="skills" className="bg-gradient-to-r from-blue-950 via-black to-red-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-red-400">
          My Tech Stack
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Tools & technologies I work with to build scalable solutions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="bg-gray-800/40 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
              <ul className="grid grid-cols-2 gap-4 text-gray-300 transition-all duration-500">
                {items.map(({ name, icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    <span className="text-xl transition-transform duration-300 hover:scale-125">
                      {icon}
                    </span>
                    <span className="text-white">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
