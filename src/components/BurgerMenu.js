import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';

class BurgerMenu extends Component {
   
    render() {
        console.log(this.props);
        return (
            <div className={this.props.show}>
                <Row className="overlay-content">
                    <Col>
                        <div className="section-one">
                            <hr></hr>                        
                            <li>discover dives/homepage</li>
                            <li>about soakt</li>
                            <hr></hr>
                            <li>invite friends(& get 10$ off your next dive??)</li>
                            <hr></hr>
                            <li>privacy policy terms</li>
                            <hr></hr>
                            <li>help/FAQ</li>
                            <li>contact us</li>
                        </div>
                        <div className="section-two">
                            <li>FOR DIVE SHOPES, CHARTER AND DIVE BUSINESSES</li>
                            <hr></hr>
                            <li>business opportunity</li>
                            <li>register your business</li>
                            <hr></hr>
                            <li>login to your account</li>
                            <hr></hr>
                        </div>
                    </Col>
                    <Col>
                        <div className="section-one">
                            <hr></hr>
                            <label>Login</label>
                            <Form className="aglin-items-start">
                                <Form.Group >
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="light float-right" type="submit">
                                    GO>>
                            </Button>

                            </Form>
                        </div>
                        <div className="section-two">
                            <hr></hr>
                            <p>stay soakt </p>
                            <div className="contact-icon"><i className="fab fa-twitter-square"></i><i className="fab fa-instagram"></i><i className="fab fa-facebook-square"></i><i className="fab fa-youtube-square"></i></div>
                        </div>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default BurgerMenu
