import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
            <footer>
                <div className="social">
                    <Facebook color='white' size={25}/>
                    <Instagram color='white' size={25}/>
                    <Twitter color='white' size={25}/>
                    <Youtube color='white' size={25}/>
                </div>
                <Container className="footer-links">
                    <Row className="links-row">
                        <Col className="links-col">
                            <a href="#link">Audiodescrizione</a>
                            <a href="#link">Rapporto con gli investitori</a>
                            <a href="#link">Note legali</a>
                        </Col>
                        <Col className="links-col">
                            <a href="#link">Centro assistenza</a>
                            <a href="#link">Opportunità di lavoro</a>
                            <a href="#link">Preferenze per i cookie</a>
                        </Col>
                        <Col className="links-col">
                            <a href="#link">Carte regalo</a>
                            <a href="#link">Condizioni di utilizzo</a>
                            <a href="#link">Informazioni sull'azienda</a>
                        </Col>
                        <Col className="links-col">
                            <a href="#link">Media Center</a>
                            <a href="#link">Privacy</a>
                            <a href="#link">Contattaci</a>
                        </Col>
                    </Row>                    
                </Container>
                <div className='button'>
                    <a href="#link" className='a-button'>Codice di servizio</a>
                </div>
                <small>&copy;1993-2022 Netflip, Inc. (123cc32n5-d03ufdw02-nd390u74-dn92dc7f931)</small>

            </footer>
            </div>
        )
    }
}

export default Footer;