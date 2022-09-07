import { scrollToSection, constants } from "../Utils"
import { ProjectGrid } from "./ProjectGrid"


export const ProjectDetails = ({project})=> {

    const {data, details}= project
    return (
        <div className='project-content'>
            {data.length !== 0 && details != "" ?
            <div className="project-grid">
                <ProjectGrid data={data} details={details}/>
                <div className="buttons-container renders-button">
                    <button type='button' className="section-button" disabled>
                        <span className='button-text'>Renders</span>
                        <span className='button-icon'>
                        <box-icon type='solid' name='photo-album'></box-icon>
                        </span>
                    </button>
                </div>
            </div>
            : "No se encontraron datos del proyecto"}
        </div>
    )
}