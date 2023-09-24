import './App.css'
import Navbar from "./components/navbar.jsx"
import HeroSection from './components/HeroSection.jsx'
import ProjectsSection from "./components/ProjectsSection.jsx"
import SkillsSection from "./components/SkillsSection.jsx"
import AboutSection from "./components/AboutSection.jsx"
function App() {
 
  return (
    <>
    <div className="box-border w-full h-auto">
    <Navbar />
    <HeroSection/>
    <ProjectsSection/>
    <SkillsSection/>
    <AboutSection/>
    </div>
    
    </>
  )
}

export default App
