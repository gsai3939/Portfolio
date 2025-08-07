// import React from 'react'
// export default function About() {
//   return (
//     <section className="px-6 py-12 bg-gray-800 text-white text-center">
//       <h2 className="text-3xl font-semibold mb-4">About Me</h2>
//       <p className="max-w-3xl mx-auto text-gray-300">I’m a Full Stack Developer with 3+ years of experience building scalable applications using Java, Spring Boot, React, and Angular. I work on cloud deployments, APIs, and secure, responsive UI designs.</p>
//     </section>
//   )
// }
import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side – Introduction */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-blue-400">Who I Am</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm <span className="text-white font-semibold">Jayadeep Sai</span>, a passionate Full Stack Developer with <strong>3+ years</strong> of hands-on experience in crafting enterprise-grade applications.
            <br /><br />
            I specialize in building secure, scalable, and user-friendly solutions using modern stacks like <span className="text-blue-300">Java, Spring Boot, React, and Angular</span>. 
            I enjoy designing clean architectures, working with cloud infrastructure (AWS, Azure), and writing resilient APIs that drive real business value.
          </p>

          <blockquote className="mt-6 italic text-sm text-gray-400 border-l-4 border-blue-500 pl-4">
            “Clean code, scalable systems, cloud-native thinking — that's my development mantra.”
          </blockquote>
        </div>

        {/* Right Side – Quick Highlights */}
        <div className="bg-gray-800/50 p-6 rounded-xl shadow-md backdrop-blur-md border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">🛠️ Core Skills</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Java", "Spring Boot", "React", "Angular", 
              "REST APIs", "Microservices", "AWS", "Docker", "SQL", "Git"
            ].map(skill => (
              <span
                key={skill}
                className="bg-blue-600/30 text-sm px-3 py-1 rounded-full text-white border border-blue-500"
              >
                {skill}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4 text-white">📈 Quick Highlights</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>✔️ Built cloud-native apps for banking & finance</li>
            <li>✔️ Deployed scalable APIs using Spring Boot</li>
            <li>✔️ Created reusable UI libraries in React & Angular</li>
            <li>✔️ Hands-on with Docker, GitHub Actions, Azure DevOps</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
