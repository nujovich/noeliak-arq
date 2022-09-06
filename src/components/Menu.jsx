export const Menu = () => {
    
    return (
        <nav className="menu">
            <ul>
            <li>
                <a href="#about-me" className="menu-link">Sobre Mí</a>
            </li>
                
            <li>
                <a href="#projects" className="menu-link">Mis Proyectos</a>
            </li>
            </ul>
            <label htmlFor="check" className="collapse-menu">
            <box-icon name='right-arrow-alt'></box-icon>
        </label>
        </nav>  
    )
}