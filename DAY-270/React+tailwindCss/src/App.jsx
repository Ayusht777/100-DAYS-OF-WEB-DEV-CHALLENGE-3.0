import './App.css'
import Navbar from "./components/navbar"
import HeroSection from './components/HeroSection'
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"
import AboutSection from "./components/AboutSection"
import  ContactMeSection from "./components/contactMeSection"
import Footer from "./components/footer"



function App() {
  return (
   
      <div className="box-border w-full h-auto ">
 
      <Navbar/>
      <HeroSection/> 
      <ProjectsSection /> 
      <SkillsSection /> 
      <AboutSection /> 
      <ContactMeSection/> 
      <Footer/>
     
    </div>
        
    
  )
}

export default App
 
