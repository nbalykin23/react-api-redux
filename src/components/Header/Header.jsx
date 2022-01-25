import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import logo from './Logo/Без названия.jpeg'
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="success" variant="success">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="60"
                            width="80"
                            className="d-inline-block align-top rounded-circle"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <div className="m-3">

                                <Link to="/">Home</Link>

                            </div>
                            <div className="m-3">
                                <Link to="/cat">Cat</Link>
                            </div>

                            <div className="m-3">
                                <Link to="/dog">Dog</Link>
                            </div>
                            <div className="m-3">
                                <Link to="/favorite">Favorite</Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
