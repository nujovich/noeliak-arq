
import './App.css'

function App() {

  return (
    <div className="App">
    <header className="header">
      <img src="src/assets/logo.png" alt="Logo" className="logo" />
      <input type="checkbox"  id='check'/>
      <label htmlFor="check" className="hamburguer-menu">
        <box-icon name='menu-alt-right'></box-icon>
      </label>
      <nav className="menu">
        <a href="#">Home</a>
        <a href="#">Proyectos</a>
        <label htmlFor="check" className="collapse-menu">
          <box-icon name='right-arrow-alt'></box-icon>
      </label>
      </nav>  
    </header>
    <section className="about-me-section" id='about-me'>
      <h2 className="section-title">Noelia Kronemberger</h2>
      <div className="about-me-container">
        <p className="about-me-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni rem odit accusantium amet, ipsum magnam veniam quisquam quis quidem, dicta omnis iste voluptates asperiores doloremque! Expedita quidem excepturi modi enim aliquid, nisi molestias consequuntur eum distinctio consequatur repudiandae dolore illo.</p>
        <img src="src/assets/profile_picture.jpg" alt="Noelia" className="profile-picture" />
      </div>
      <div className="about-me-buttons-container">
        <button type='button' className='section-button'>
          <span className='button-text'>Mi Curriculum</span>
          <span className='button-icon'>
            <box-icon name='cloud-download'></box-icon>
          </span>
        </button>
        <button type='button' className="section-button">
        <span className='button-text'>Mi Contacto</span>
          <span className='button-icon'>
          <box-icon name='contact' type='solid'></box-icon>
          </span>
        </button>
      </div>
    </section>
    <hr className="separator" />
    <section className='projects-section' id='projects'>
      <h2 className='section-title top-title'>Mis Proyectos</h2>
      <div className="projects-buttons-container">
        <button type='button' className='section-button'>
          <span className='button-text'>Casa Patio</span>
          <span className='button-icon'>
          <box-icon name='hard-hat' type='solid'></box-icon>
          </span>
        </button>
        <button type='button' className="section-button">
        <span className='button-text'>Casa AEI</span>
          <span className='button-icon'>
            <box-icon name='hard-hat' type='solid'></box-icon>
          </span>
        </button>
        <button type='button' className="section-button">
        <span className='button-text'>Casa AA</span>
          <span className='button-icon'>
            <box-icon name='hard-hat' type='solid'></box-icon>
          </span>
        </button>
        <button type='button' className="section-button">
        <span className='button-text'>Casa Don Mateo</span>
          <span className='button-icon'>
            <box-icon name='hard-hat' type='solid'></box-icon>
          </span>
        </button>
        <button type='button' className="section-button">
        <span className='button-text'>Casa Leones</span>
          <span className='button-icon'>
            <box-icon name='hard-hat' type='solid'></box-icon>
          </span>
        </button>
      </div>
    </section>
    <hr className="separator top" />
    <section className='casa-patio-section' id='casa-patio'>
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
      <button type='button' className="section-button detail-button">
        <span className='button-text'>Ver Detalles</span>
          <span className='button-icon'>
            <box-icon name='detail' ></box-icon>
          </span>
      </button>
      <span className='details'>Se proyecto desde el primer boseto un patio interno que permitiera al área pública, orientada al sur, contar con iluminación natural tanto directa como indirectamente. Este patio interno paso a ser el protagonista de esa vivienda, permitiendo separar fisicamente el área privada de la pública.
        El área privada de la casa, orientada al norte, consta de dos dormitorios y un baño. Uno de los dormitorios, el principal, fue pensado para poder alojar un área de escritorio con vista al patio interno y el dormitorio secundario para visitas. 
        El área pública se planteo como un espacio abierto e integrado entre el living, comedor y cocina. 
      </span>
    </section>
    </div>
  )
}

export default App
