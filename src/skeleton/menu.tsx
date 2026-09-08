import { Link } from "react-router-dom"

function Menu() { return (

    <nav id='menu'>
        <Link to="/">Home</Link> |{" "}
        <Link to="/programme">Programme</Link> |{" "}
        <Link to="/contact">Contact</Link>
    </nav>

)}

export default Menu
