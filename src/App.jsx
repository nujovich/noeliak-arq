import { ScrollUp } from "./components/ScrollUp";
import { Header } from "./components/Header";
import { Separator } from "./components/Separator";
import { ProjectsTabView } from "./components/ProjectsTabView";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AboutMe } from "./components/AboutMe";
import { useRef } from "react";
import projects from './assets/projects/projects.json';



function App() {

  const contactRef = useRef(null)
  const aboutMeRef = useRef(null)

  const projectsTabs = projects.data !== 'undefined' || projects.data.length != 0 ? projects.data : []

  return (
    <div className="App">
    <ScrollUp />
    <Header />
    <AboutMe contact={contactRef} ref={aboutMeRef}/>
    <Separator/>
    <ProjectsTabView title={"Mis Proyectos"} projects={projectsTabs}/>
    <Separator/>
    <Contact ref={contactRef}/>
    <Footer/>
    </div>
  )
}

export default App
