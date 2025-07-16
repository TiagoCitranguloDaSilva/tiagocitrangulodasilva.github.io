import "./Menu.css";

function Menu(){

    let handleCloseHamburguerMenuSlowly = () => {
        document.querySelector("body").style.overflow = "auto"
        document.querySelector("#menuButton").style.display = "block"
        document.querySelector("#menu").classList.remove("showMenu")
    }

    let handleCloseHamburguerMenu = () => {
        document.querySelector("body").style.overflow = "auto"
        document.querySelector("#menu").style.display = "none"
        document.querySelector("#menu").classList.remove("showMenu")
        setTimeout(() => {
            document.querySelector("#menu").style.display = "block"
        }, 300)
    }

    return(
        <div id="menu">
            <div id="xButton" onClick={handleCloseHamburguerMenuSlowly}></div>
            <ul>
                <li><a href="#sobre" onClick={handleCloseHamburguerMenu}>Sobre</a></li>
                <li><a href="#habilidades" onClick={handleCloseHamburguerMenu}>Habilidades</a></li>
                <li><a href="#idiomas" onClick={handleCloseHamburguerMenu}>Idiomas</a></li>
                <li><a href="#projetos" onClick={handleCloseHamburguerMenu}>Projetos</a></li>
                <li><a href="#contato" onClick={handleCloseHamburguerMenu}>Contato</a></li>
            </ul>
        </div>
    )

}

export default Menu