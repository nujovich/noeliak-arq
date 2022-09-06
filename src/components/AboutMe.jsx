import { forwardRef } from "react"
import { downloadCV, scrollToSection } from "../Utils"

export const AboutMe = forwardRef(({contact}, ref) => {

    return(
        <section className="about-me-section" ref={ref} id="about-me">
        <h2 className="section-title">Noelia Kronemberger</h2>
        <div className="about-me-container">
            <p className="about-me-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <img src="/assets/profile_picture.jpg" alt="Noelia" className="profile-picture" />
        </div>
        <div className="about-me-buttons-container">
            <button type='button' className='section-button' onClick={() => downloadCV()}>
            <span className='button-text'>Mi Curriculum</span>
            <span className='button-icon'>
                <box-icon name='cloud-download'></box-icon>
            </span>
            </button>
            <button type='button' className="section-button" onClick={() => scrollToSection(contact)}>
            <span className='button-text'>Mi Contacto</span>
            <span className='button-icon'>
            <box-icon name='contact' type='solid'></box-icon>
            </span>
            </button>
        </div>
        </section>
    )
})