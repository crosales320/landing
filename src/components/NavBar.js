import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img src='https://img1.freepng.es/20180401/opw/kisspng-infiniti-logo-infinity-symbol-polygonal-5ac0724acaa2d8.21936903152256161083.jpg' width={50} height={50}/>
                    <Nav className="me-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/nosotros">Nosotros</NavLink>
                        <NavLink to='/categoria/servicios'>Servicios</NavLink>
                        <NavLink to='/categoria/galeria'>Galeria</NavLink>
                        <NavLink to="/contacto">Contacto</NavLink>
                        <NavLink to="/cart"><CartWidget/></NavLink>
                    </Nav>
                    
                </Container>
            </Navbar>
            <br />
        </>
    );
}


export default NavBar;
