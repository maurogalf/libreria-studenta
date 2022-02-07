import './NavBar.css'

const NavBar = () =>{
    return(
        <header>
            <div class="logo">
                <img class="logo__img" src="./logo.png" alt="logo Studenta"/>
            </div>
            <nav class="nav">
                <ul>
                <li><a>Inicio</a></li>
                <li><a>Productos</a></li>
                <li><a>Quienes Somos</a></li>
                <li><a>Contacto</a></li>
                </ul>
            </nav>
            <form id="buscador" class="buscador">
                <input placeholder="Buscar articulos" class="buscador__ingresetexto" type="text" name="search"/>
                <input href="resultado-busqueda.html"type="submit" class="buscador__enviar" value="Buscar" name="buscar"/>
            </form>
        </header>
    )
}

export default NavBar