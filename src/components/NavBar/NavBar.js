import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () =>{
    return(
        <div>
            <div className="logo">
                <Link to="/">
                <img className="logo__img" src="./logo.png" alt="logo Studenta"/>
                </Link>
            </div>
            <nav className="nav">
                <ul>
                <li><Link to ="/">Inicio</Link></li>
                <li><Link to ="/category/libreria">Librería</Link></li>
                <li><Link to ="/category/jugueteria">Juguetería</Link></li>
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