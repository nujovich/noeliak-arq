import { useState } from "react";

export const ProjectsTabView = ({title, projects = []}) => {

    const[activeTabIndex, setActiveTabIndex] = useState(0)
    const[project, setProject] = useState({})

    const activateTab = (index, project) => {
        setActiveTabIndex(index)
        setProject(project)
    }

    return (
        <section className='projects-section' id="projects">
            <h2 className='section-title'>{title}</h2>
            <div className="projects-tab-container">
            {
                projects.length === 0 
                ? <div>No projects</div>
                : <div className='project-tabs'>
                    {
                        projects.map(project => {
                            return (
                                <li key={project.id}>
                                   <div className={activeTabIndex === project.id ? "active-tab" : "tab"}>
                                        <button className="button-tab" onClick={() => activateTab(project.id, project)}>
                                                <span className="tab-text">{project.name}</span>
                                                <span className='tab-icon'><box-icon name='hard-hat' type='solid'></box-icon></span>
                                        </button>
                                    </div>
                                </li>
                            )
                        })
                    }    
                </div>
            }
                <div className='project-content'>{project.id === 1 ? project.descripcion : "No hay contenido"}</div>
            </div>
        </section>
    )
}