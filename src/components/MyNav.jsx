import { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png' 
import { Search, BellFill, PersonCircle } from 'react-bootstrap-icons';

class MyNav extends Component {
    render() {
        return (
            <Navbar className="dark-bg navbar" expand="lg" >
                <Container>
                    <div className="leftSide">
                        <Navbar.Brand href="#home"><img src={logo} alt="Netflix logo" width="120px"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><span className="navLink">Home</span></Nav.Link>
                            <Nav.Link href="#link"><span className="navLink">Serie Tv</span></Nav.Link>
                            <Nav.Link href="#link"><span className="navLink">Film</span></Nav.Link>
                            <Nav.Link href="#link"><span className="navLink">Nuovi e popolari</span></Nav.Link>
                            <Nav.Link href="#link"><span className="navLink">La mia lista</span></Nav.Link>
                            <Nav.Link href="#link"><span className="navLink">Sfoglia per lingua</span></Nav.Link>
                        </Nav>
                    </div>
                    <div className="rightSide">
                        <Nav className="me-auto">
                            <Nav.Link href="#link"><Search color="white" size={25}/></Nav.Link>
                            <Nav.Link href="#link"><BellFill color="white" size={25}/></Nav.Link>
                            <Nav.Link href="#link"><PersonCircle color="white" size={25}/></Nav.Link>
                        </Nav>
                    </div>
                </Container>                
            </Navbar>
        )
    }
}

export default MyNav;