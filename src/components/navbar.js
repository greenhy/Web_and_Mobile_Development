import React from "react";
import logo from '../assets/images/risk.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Stocks from "../pages/stocks";
import Quote from "../pages/quote";
import History from "../pages/history";
import AfterSearchHistory from "../pages/afterSearchHistory";
import SymbolHistory from "../pages/symbolHistory";
import Home from "../pages/home";
import { Navbar, Nav, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/components.css';


import { useSymbolData } from "../api/financialmodelingprepAPI";


export default function NavbarCus() {
    
  const { loading, stocksAll, error } = useSymbolData();
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg" >
                <Navbar.Brand as={Link} to="/">
                    <div style={{marginRight:"30px", marginTop:"20px"}}>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    Stock Market
                    </div>
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
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/stocks">
                    <Stocks stocksAll={stocksAll}/>
                </Route>
                <Route exact path="/quote">
                    <Quote stocksAll={stocksAll} />
                </Route>
                <Route exact path="/history">
                    <History stocksAll={stocksAll} />
                </Route>
                
                <Route exact path="/history/:symbol" render={(props) => <SymbolHistory stocksAll={stocksAll}  {...props} />}/>
                <Route exact path="/history/:symbol/:from" render={(props) => <AfterSearchHistory stocksAll={stocksAll}  {...props} />} />

            </Switch>
        </Router>


    );
}
