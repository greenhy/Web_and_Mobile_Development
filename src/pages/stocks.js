import React from "react";
import SearchBar from "../components/searchBar";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockTable from "../components/stockTable";

export default function Stocks() {
    return (
        <Container>
            {/* <Row>
                <Col>
                    <p>Select Stock
                        <SearchBar/>
                    </p>
                </Col>
                <Col>
                    <p>Select Industry
                        <SearchBar />
                    </p>
                </Col>
            </Row> */}
            <StockTable/>
        </Container>

        

        
    );
}