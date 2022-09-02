import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img src='https://img1.freepng.es/20180401/opw/kisspng-infiniti-logo-infinity-symbol-polygonal-5ac0724acaa2d8.21936903152256161083.jpg' width={50} height={50}/>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#galeria">Galeria</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget cart={3}/>
                </Container>
            </Navbar>
            <br />
        </>
    );
}


export default NavBar;
