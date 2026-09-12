import { Link } from "react-router-dom"
import BurgerButton from "../elements/burger_button"
import { useState } from "react"

function Menu() { 
    
    /* State of menu */
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)


    
    return (
    <div id='menu' className={isOpen ? "menu-ouvert" : "menu-ferme"}>
        <BurgerButton isOpen={isOpen} onClick={toggleMenu}/>
        <nav className={isOpen ? "open" : ""}>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/programme">Programme</Link>
            <Link className="link" to="/contact">Contact</Link>
        </nav>
    </div>

)}

export default Menu
