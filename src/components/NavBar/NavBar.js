import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () =>{
    return(
        <div>
            <div className="logo">
                <img className="logo__img" src="./logo.png" alt="logo Studenta"/>
            </div>
            <nav className="nav">
                <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Quienes Somos</a></li>
                <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <form id="buscador" className="buscador">
                <input placeholder="Buscar articulos" className="buscador__ingresetexto" type="text" name="search"/>
                <input href="resultado-busqueda.html"type="submit" className="buscador__enviar" value="Buscar" name="buscar"/>
            <CartWidget/>
            </form>
        </div>
    )
}

export default NavBar