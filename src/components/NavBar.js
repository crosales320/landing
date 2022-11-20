import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import Style from './Styles.css';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img src='https://estaticos.muyinteresante.es/uploads/images/article/5e7dc2975bafe8360a764f04/infinito-f_0.jpg' width={70} height={50} />
                    <Nav className="me-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/categoria/servicios">Productos</NavLink>
                        <NavLink to="/categoria/galeria">Servicios</NavLink>
                        <NavLink to="/cart"><CartWidget /></NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}


export default NavBar;
