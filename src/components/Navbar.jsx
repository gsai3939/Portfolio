import React from "react"

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-5xl px-[2px] py-[2px] rounded-full shadow-lg
      bg-gradient-to-r from-blue-600 via-black to-red-600">
      
      <div className="backdrop-blur-md bg-black/60 border border-white/20 rounded-full px-6 py-2">
        <ul className="flex justify-center gap-4 sm:gap-6 text-sm font-medium text-white">
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="cursor-pointer px-3 py-1 rounded-full hover:bg-white/10 transition duration-300"
            >
              {section.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
