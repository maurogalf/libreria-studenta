import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';

const NavBar = () =>{
    const {qCart} = useContext(CartContext);
    return(
        <div>
            <div className="logo">
                <Link to="/libreria-studenta">
                <img className="logo__img" src= "https://firebasestorage.googleapis.com/v0/b/libreria-studenta.appspot.com/o/img%2Flogo.png?alt=media&token=0842558a-e76d-419b-8d79-9b002347eb5e" alt="logo Studenta"/>
                </Link>
            </div>
            <nav className="nav">
                <ul>
                <li><Link to ="/libreria-studenta">Inicio</Link></li>
                <li><Link to ="/category/libreria">Librería</Link></li>
                <li><Link to ="/category/jugueteria">Juguetería</Link></li>
                </ul>
            </nav>
            <form id="buscador" className="buscador">
            { qCart !== 0 ? <><CartWidget/></> : <div></div>}
            </form>
        </div>
    )
}

export default NavBar