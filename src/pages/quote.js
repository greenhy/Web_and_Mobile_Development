import React from "react";
import SearchBar from "../components/searchBar";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockTable from "../components/stockTable";

export default function Quote() {
    return (
        <Container>
            <Row>
                <Col>
                    Select Stock
                        <SearchBar/>
                    
                </Col>
                <Col>
                    Select Industry
                        <SearchBar />
                   
                </Col>
            </Row>
            <StockTable/>
        </Container>

        

        
    );
}