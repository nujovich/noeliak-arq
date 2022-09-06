import { Menu } from "./Menu"

export const Header = ({aboutMeRef, projectsRef}) => {
    return (
        <header className="header">
        <img src="/assets/logo.png" alt="Logo" className="logo" />
        <input type="checkbox"  id='check'/>
        <label htmlFor="check" className="hamburguer-menu">
            <box-icon name='menu-alt-right'></box-icon>
        </label>
        <Menu aboutMeRef={aboutMeRef} projectsRef={projectsRef}/>
        </header>
    )
}