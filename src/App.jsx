import { useRef } from "react"
import FileSaver from "file-saver";
import { ScrollUp } from "./components/ScrollUp";


function App() {

  const FILE_PATH = 'assets/CV ARQ KRONEMBERGER NOELIA 2022 AGOSTO.pdf'

  const downloadCV = () => {
    FileSaver.saveAs(import.meta.env.BASE_URL + FILE_PATH, "CV_Noelia_Kronemberger.pdf");
}

  const home = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  const casaPatio = useRef(null)
  const casaAA = useRef(null)
  const casaAei = useRef(null)
  const casaDonMateo = useRef(null)
  const casaLeones = useRef(null)

  const scrollToSection = elementRef => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }


  return (
    <div className="App">
    <ScrollUp />
    <header className="header">
      <img src="/assets/logo.png" alt="Logo" className="logo" />
      <input type="checkbox"  id='check'/>
      <label htmlFor="check" className="hamburguer-menu">
        <box-icon name='menu-alt-right'></box-icon>
      </label>
      <nav className="menu">
        <ul>
          <li className="menu-link" onClick={() => scrollToSection(home)}>Sobre mí</li>
          <li className="menu-link" onClick={() => scrollToSection(projects)}>Proyectos</li>
        </ul>
        <label htmlFor="check" className="collapse-menu">
          <box-icon name='right-arrow-alt'></box-icon>
      </label>
      </nav>  
    </header>
    <section className="about-me-section" ref={home}>
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
    <div className="separator">
      <hr/>
    </div>
    <section className='projects-section' ref={projects}>
      <h2 className='section-title'>Mis Proyectos</h2>
      <div className="projects-buttons-container">
        <button type='button' className='section-button' onClick={() => scrollToSection(casaPatio)}>
          <span className='button-text'>Casa Patio</span>
          <span className='button-icon'>
          <box-icon name='hard-hat' type='solid'></box-icon>
          </span>
        </button>
        <button type='button' className="section-button" onClick={() => scrollToSection(casaAei)}>
        <span className='button-text'>Casa AEI</span>
          <span className='button-icon'>
            <box-icon name='hard-hat' type='solid'></box-icon>
          </span>
        </button>
        <button type='button' className="section-button" onClick={() => scrollToSection(casaAA)}>
        <span className='button-text'>Casa AA</span>
          <span className='button-icon'>
            <box-icon name='hard-hat' type='solid'></box-icon>
          </span>
        </button>
        <button type='button' className="section-button" onClick={() => scrollToSection(casaDonMateo)}>
        <span className='button-text'>Casa Don Mateo</span>
          <span className='button-icon'>
            <box-icon name='hard-hat' type='solid'></box-icon>
          </span>
        </button>
        <button type='button' className="section-button" onClick={() => scrollToSection(casaLeones)}>
        <span className='button-text'>Casa Leones</span>
          <span className='button-icon'>
            <box-icon name='hard-hat' type='solid'></box-icon>
          </span>
        </button>
      </div>
    </section>
    <div className="separator">
      <hr/>
    </div>
    <section className='casa-patio-section' ref={casaPatio}>
      <h2 className='section-title'>Casa Patio</h2>
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
      <div className="buttons-container">
        <button type='button' className="section-button">
        <span className='button-text'>Ver Detalles</span>
          <span className='button-icon'>
            <box-icon name='detail' ></box-icon>
          </span>
        </button>
        <button type='button' className="section-button" onClick={() => scrollToSection(projects)}>
        <span className='button-text'>Volver</span>
          <span className='button-icon'>
          <box-icon name='up-arrow-alt'></box-icon>
          </span>
        </button>
      </div>
      <span className='details'>Se proyecto desde el primer boseto un patio interno que permitiera al área pública, orientada al sur, contar con iluminación natural tanto directa como indirectamente. Este patio interno paso a ser el protagonista de esa vivienda, permitiendo separar fisicamente el área privada de la pública.
        El área privada de la casa, orientada al norte, consta de dos dormitorios y un baño. Uno de los dormitorios, el principal, fue pensado para poder alojar un área de escritorio con vista al patio interno y el dormitorio secundario para visitas. 
        El área pública se planteo como un espacio abierto e integrado entre el living, comedor y cocina. 
      </span>
    </section>
    <div className="separator">
      <hr/>
    </div>
    <section className='casa-aei-section' ref={casaAei}>
      <h2 className='section-title'>Casa AEI</h2>
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
      <div className="buttons-container">
        <button type='button' className="section-button">
        <span className='button-text'>Ver Detalles</span>
          <span className='button-icon'>
            <box-icon name='detail' ></box-icon>
          </span>
        </button>
        <button type='button' className="section-button" onClick={() => scrollToSection(projects)}>
        <span className='button-text'>Volver</span>
          <span className='button-icon'>
          <box-icon name='up-arrow-alt'></box-icon>
          </span>
        </button>
      </div>
      <span className='details'>Se proyecto desde el primer boseto un patio interno que permitiera al área pública, orientada al sur, contar con iluminación natural tanto directa como indirectamente. Este patio interno paso a ser el protagonista de esa vivienda, permitiendo separar fisicamente el área privada de la pública.
        El área privada de la casa, orientada al norte, consta de dos dormitorios y un baño. Uno de los dormitorios, el principal, fue pensado para poder alojar un área de escritorio con vista al patio interno y el dormitorio secundario para visitas. 
        El área pública se planteo como un espacio abierto e integrado entre el living, comedor y cocina. 
      </span>
    </section>
    <div className="separator">
      <hr/>
    </div>
    <section className='casa-aa-section' ref={casaAA}>
      <h2 className='section-title'>Casa AA</h2>
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
      <div className="buttons-container">
        <button type='button' className="section-button">
        <span className='button-text'>Ver Detalles</span>
          <span className='button-icon'>
            <box-icon name='detail' ></box-icon>
          </span>
        </button>
        <button type='button' className="section-button" onClick={() => scrollToSection(projects)}>
        <span className='button-text'>Volver</span>
          <span className='button-icon'>
          <box-icon name='up-arrow-alt'></box-icon>
          </span>
        </button>
      </div>
      <span className='details'>Se proyecto desde el primer boseto un patio interno que permitiera al área pública, orientada al sur, contar con iluminación natural tanto directa como indirectamente. Este patio interno paso a ser el protagonista de esa vivienda, permitiendo separar fisicamente el área privada de la pública.
        El área privada de la casa, orientada al norte, consta de dos dormitorios y un baño. Uno de los dormitorios, el principal, fue pensado para poder alojar un área de escritorio con vista al patio interno y el dormitorio secundario para visitas. 
        El área pública se planteo como un espacio abierto e integrado entre el living, comedor y cocina. 
      </span>
    </section>
    <div className="separator">
      <hr/>
    </div>
    <section className='casa-don-mateo-section' ref={casaDonMateo}>
      <h2 className='section-title'>Casa Don Mateo</h2>
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
      <div className="buttons-container">
        <button type='button' className="section-button">
        <span className='button-text'>Ver Detalles</span>
          <span className='button-icon'>
            <box-icon name='detail' ></box-icon>
          </span>
        </button>
        <button type='button' className="section-button" onClick={() => scrollToSection(projects)}>
        <span className='button-text'>Volver</span>
          <span className='button-icon'>
          <box-icon name='up-arrow-alt'></box-icon>
          </span>
        </button>
      </div>
      <span className='details'>Se proyecto desde el primer boseto un patio interno que permitiera al área pública, orientada al sur, contar con iluminación natural tanto directa como indirectamente. Este patio interno paso a ser el protagonista de esa vivienda, permitiendo separar fisicamente el área privada de la pública.
        El área privada de la casa, orientada al norte, consta de dos dormitorios y un baño. Uno de los dormitorios, el principal, fue pensado para poder alojar un área de escritorio con vista al patio interno y el dormitorio secundario para visitas. 
        El área pública se planteo como un espacio abierto e integrado entre el living, comedor y cocina. 
      </span>
    </section>
    <div className="separator">
      <hr/>
    </div>
    <section className='casa-leones-section' ref={casaLeones}>
      <h2 className='section-title'>Casa Leones</h2>
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
      <div className="buttons-container">
        <button type='button' className="section-button">
        <span className='button-text'>Ver Detalles</span>
          <span className='button-icon'>
            <box-icon name='detail' ></box-icon>
          </span>
        </button>
        <button type='button' className="section-button" onClick={() => scrollToSection(projects)}>
        <span className='button-text'>Volver</span>
          <span className='button-icon'>
          <box-icon name='up-arrow-alt'></box-icon>
          </span>
        </button>
      </div>
      <span className='details'>Se proyecto desde el primer boseto un patio interno que permitiera al área pública, orientada al sur, contar con iluminación natural tanto directa como indirectamente. Este patio interno paso a ser el protagonista de esa vivienda, permitiendo separar fisicamente el área privada de la pública.
        El área privada de la casa, orientada al norte, consta de dos dormitorios y un baño. Uno de los dormitorios, el principal, fue pensado para poder alojar un área de escritorio con vista al patio interno y el dormitorio secundario para visitas. 
        El área pública se planteo como un espacio abierto e integrado entre el living, comedor y cocina. 
      </span>
    </section>
    <div className="separator">
      <hr/>
    </div>
    <section className="contact" ref={contact}>
      <h2 className="section-title">Contacto</h2>
      <div className="buttons-container">
        <button type='button' className="section-button detail-button" onClick={() => window.location = 'https://wa.me/3416908817'}>
          <span className='button-text'>WhatSapp</span>
            <span className='button-icon'>
            <box-icon name='whatsapp' type='logo' ></box-icon>
            </span>
        </button>
        <button type='button' className="section-button detail-button" onClick={() => window.location = 'mailto:noeliakronemberger@gmail.com'}>
          <span className='button-text'>E-Mail</span>
            <span className='button-icon'>
            <box-icon name='envelope' type='solid' ></box-icon>
            </span>
        </button>
      </div>
    </section>
    <footer className='footer-section'>
      <p>Sitio hecho por</p><a className='footer-link' href='https://nujovich.github.io/portfolio'>Nadia Ujovich</a>
      <a className='footer-link' href='https://linkedin.com/in/nadiaujovich'><box-icon name='linkedin-square' type='logo' ></box-icon></a>
      <a className='footer-link' href="https://github.com/nujovich"><box-icon name='github' type='logo' ></box-icon></a>
    </footer>
    </div>
  )
}

export default App
