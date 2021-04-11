import React from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <div className="container  nav-bg">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <Navbar  expand="lg" className="px-3 py-3 navbar">
                            <NavLink to="/" className="navbar-brand">Shubham Gupta</NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className="navx">
                                <Nav className="ml-auto">
                                    <NavLink activeClassName="menu_item" exact to="/"  className="px-3 a">Home</NavLink>
                                    <NavLink activeClassName="menu_item" exact to="/about" className="px-3 a">About</NavLink>
                                    <NavLink activeClassName="menu_item" exact to="/service" className="px-3 a">Service</NavLink>
                                    <NavLink activeClassName="menu_item" exact  to="/contact" className="px-3 a">Contact</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;