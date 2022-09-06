import {forwardRef } from "react"
import { scrollToSection } from "../Utils"

export const ProjectSection = forwardRef(({name, description, projectsRef}, ref)=> {
    return (
        <section className='project-section' ref={ref}>
        <h2 className='section-title'>{name}</h2>
        <div className="grid-container">
            <span className="detail-row">Arquitectos</span>
            <span className="detail-row right">Estudio Arq414; Noelia S. Kronemberger; Nestor Germán Sosa</span>
            <span className="detail-row">Área</span>
            <span className="detail-row right">130m² cubiertos; 35m² semicubiertos</span>
            <span className="detail-row">Superficie del terreno</span>
            <span className="detail-row right">494m²</span>
            <span className="detail-row">Superficie Pileta</span>
            <span className="detail-row right">30m²</span>
            <span className="detail-row">Orientación</span>
            <span className="detail-row right">Norte-Sur</span>
            <span className="detail-row">Año</span>
            <span className="detail-row right">2021-2022</span>
            <span className="detail-row">Barrio</span>
            <span className="detail-row right">Estación Alvear</span>
            <span className="detail-row">Localidad</span>
            <span className="detail-row right">Alvear, Santa Fe</span>
            <span className="detail-row">País</span>
            <span className="detail-row right">Argentina</span>
        </div>
        <span className='details'> {description ? description : 'No existe descripción del proyecto todavía'}
        </span>
        <div className="buttons-container">
            <button type='button' className="section-button" onClick={() => scrollToSection(projectsRef)}>
                <span className='button-text'>Volver</span>
                <span className='button-icon'>
                <box-icon name='up-arrow-alt'></box-icon>
                </span>
            </button>
        </div>
        </section>
    )
})