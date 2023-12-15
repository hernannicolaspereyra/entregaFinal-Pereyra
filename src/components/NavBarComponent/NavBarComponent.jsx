//Librerias
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
//Componentes
import { CartWidgetComponent } from "../CartWidgetComponent"
//Css
import "./NavBarComponent.css"
//Imagenes
import logo from "./assets/logo-tienda.png"

export function NavBarComponent() {

  return (

    <Navbar expand="lg" className="bg-body nav-style">
      <Container >
        <Link to={"/"}><img src={logo} alt="logo" style={{ width: 100, height: 70 }} /></Link>
        <Navbar.Brand><Link to={"/"}>All-Store</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <Nav.Link className='link-categoria' as={Link} to={`/category/juegos`}>juegos</Nav.Link>
              <Nav.Link className='link-categoria' as={Link} to={`/category/accesorios`}>accesorios</Nav.Link>
              <Nav.Link className='link-categoria' as={Link} to={`/category/consolas`}>consolas</Nav.Link>  
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}