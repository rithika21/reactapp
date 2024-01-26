import "./NavBar.css"
import { Link } from "react-router-dom"
const NavBar = () => {
    return(
        <ol>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/login">login</Link></li>
        </ol>
    )
}
export default NavBar;