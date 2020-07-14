import React, {  Component} from 'react'
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <div className="footer-sec">
            <Container>
                <Row>
                    <Col md="12">
                        <p>©copyright@2020 Omkatech</p>
                    </Col>
                    <Col md="4">
                        <div className="navigate-link">
                        <h4>Navigate</h4>
                        <ul className="links-list">
                            <li><button>Home</button></li>
                            <li><button href="#">About Us</button></li>
                            <li><button href="#">Services</button></li>
                            <li><button href="#">Clients</button></li>
                            <li><button href="#">Contact Us</button></li>
                            <li><button href="#">Client Portal</button></li>
                        </ul>
                        </div>
                        </Col>
                    
                     <Col md="4">
                        <h4>Find Us Here</h4>
                        <div className="footer2-text-cont">
                        <address>Lorem ipsum dolor<br/>Lorem ipsum dolor sit amet,</address>
                        </div>
                        <div className="footer2-text-cont">9874563210<br/>
                        <a className="a-text" href="anb@gmail.com">abc@gmail.com</a>
                        </div>
                    </Col>  
                </Row>
            </Container>
        </div>
        )
    }
}

export default Footer;