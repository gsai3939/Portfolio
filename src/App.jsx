// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'

// import Hero from './components/Hero'
// import About from './components/About'
// import Skills from './components/Skills'
// import Experience from './components/Experience'
// import Projects from './components/Projects'
// import Education from './components/Education'
// import Contact from './components/Contact'

// // Detail pages
// import Citizens from './pages/experience/Citizens'
// import Zensar from './pages/experience/Zensar'
// import SmartBank from './pages/projects/SmartBank'
// import ClaimsPro from './pages/projects/ClaimsPro'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Navbar />
//               <div id="home"><Hero /></div>
//               <div id="about"><About /></div>
//               <div id="skills"><Skills /></div>
//               <div id="experience"><Experience /></div>
//               <div id="projects"><Projects /></div>
//               <div id="education"><Education /></div>
//               <div id="contact"><Contact /></div>
//             </>
//           }
//         />
//         <Route path="/experience/citizens" element={<Citizens />} />
//         <Route path="/experience/zensar" element={<Zensar />} />
//         <Route path="/projects/smartbank" element={<SmartBank />} />
//         <Route path="/projects/claimspro" element={<ClaimsPro />} />
//       </Routes>
//     </Router>
//   )
// }

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience' // shows cards only
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import ContactForm from './pages/ContactForm';

// Detail pages
import Citizens from './pages/experience/Citizens'
import Zensar from './pages/experience/Zensar'
import SmartBank from './pages/projects/SmartBank'
import ClaimsPro from './pages/projects/ClaimsPro'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage with Experience cards */}
        <Route
          path="/"
          element={
            <>
              <div id="home"><Hero /></div>
              <div id="about"><About /></div>
              <div id="skills"><Skills /></div>
              <div id="experience"><Experience /></div>
              <div id="projects"><Projects /></div>
              <div id="education"><Education /></div>
              <div id="contact"><Contact /></div>
            </>
          }
        />

        {/* Client detail pages */}
        <Route path="/experience/citizens" element={<Citizens />} />
        <Route path="/experience/zensar" element={<Zensar />} />

        {/* Project detail pages */}
        <Route path="/projects/smartbank" element={<SmartBank />} />
        <Route path="/projects/claimspro" element={<ClaimsPro />} />

        <Route path="/contact-form" element={<ContactForm />} />
      </Routes>
    </Router>
  )
}

export default App
