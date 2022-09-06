import { forwardRef } from "react"

export const Contact = forwardRef((props, ref) => {


    const openWhatssap = () => {
        window.location = 'https://wa.me/3416908817'
    }

    const openEmail = () => {
       window.location = 'mailto:noeliakronemberger@gmail.com'
    }

    return (
        <section className="contact" ref={ref}>
        <h2 className="section-title">Contacto</h2>
        <div className="buttons-container">
            <button type='button' className="section-button detail-button" onClick={openWhatssap}>
            <span className='button-text'>WhatsApp</span>
                <span className='button-icon'>
                <box-icon name='whatsapp' type='logo' ></box-icon>
                </span>
            </button>
            <button type='button' className="section-button detail-button" onClick={openEmail}>
            <span className='button-text'>E-Mail</span>
                <span className='button-icon'>
                <box-icon name='envelope' type='solid' ></box-icon>
                </span>
            </button>
        </div>
        </section>
    )
})