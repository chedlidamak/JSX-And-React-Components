import Pic from "./images.png"

function NavBar() {
    return (
    <div>
    <nav className="nav">
        <img className="Nav-logo" src={Pic} alt="Logo"/>
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
    </nav>
    </div>
    );
}

export default NavBar;