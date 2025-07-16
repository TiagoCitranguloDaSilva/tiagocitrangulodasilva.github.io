
import NavBar from "./nav/NavBar.jsx";
import Menu from "./Menu/Menu.jsx"
import "./Header.css"

function Header() {

    let handleShowHamburguerMenu = () => {
        document.querySelector("body").style.overflow = "hidden"
        document.querySelector("#menu").style.display = "block"
        document.querySelector("#menu").classList.add("showMenu")
    }

    return (
        
        <header>
            <Menu />
            <div id="menuButton" onClick={handleShowHamburguerMenu}></div>
            <div className="titulos">
                <h1>Portifólio</h1>
                <h2>Tiago Citrangulo da Silva</h2>
            </div>

            <NavBar />
        </header>
        
    )

}

export default Header;