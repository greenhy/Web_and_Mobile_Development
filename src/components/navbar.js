import React from "react";
import logo from '../images/risk.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Stocks from "../pages/stocks";
import Quote from "../pages/quote";
import History from "../pages/history";
import Home from "../pages/home";
import Registration from "../pages/registration"
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarCus() {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Stock Market
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                                </Nav.Link>
                        <Nav.Link as={Link} to="/stocks">
                            Stock
                                </Nav.Link>
                        <Nav.Link as={Link} to="/quote">
                            Quote
                                </Nav.Link>
                        <Nav.Link as={Link} to="/history">
                            History
                                </Nav.Link>
                        <Nav.Link as={Link} to="/registration">
                            Registration|Sign up
                                </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/stocks">
                    <Stocks />
                </Route>
                <Route exact path="/history">
                    <History />
                </Route>
            </Switch>
        </Router>


    );
}
