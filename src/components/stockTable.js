import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useSymbolData } from "../api/alphavantageAPI";
import SearchBar from "./searchBar";


export default function StockTable() {
    const [symbolSearch, setSymbolSearch] = useState("");
    const [industrySearch, setIndustrySearch] = useState("");
    const { loading, stocksAll, error } = useSymbolData();
    const columns = [
        { hearderName: "Symbol", field: "symbol" },
        { hearderName: "Name", field: "name" },
        { hearderName: "Industry", field: "industry" },
    ];
    let stocks = [];
    console.log(symbolSearch);
    console.log(industrySearch);
    if (typeof stocksAll !== "undefined") {
        if ((typeof symbolSearch === "undefined" || symbolSearch === "") && (typeof industrySearch === "undefined" || industrySearch === "")) {
            stocks = stocksAll;
        } else {
            for (let i = 0; i < stocksAll.length; i++) {
                if (typeof symbolSearch !== "undefined" || symbolSearch !== "") {
                    if (stocksAll[i].symbol === symbolSearch) {
                        stocks.push(stocksAll[i]);
                        break;
                    }
                }
                if (typeof industrySearch !== "undefined" || industrySearch !== "")
                    if (stocksAll[i].industry === industrySearch) {
                        stocks.push(stocksAll[i]);
                        break;
                    }
            }
        }
    }


    return (
        <Container>
            <Row>
                <Col>
                    <p>Select Stock
                <SearchBar
                stock={stocksAll}
                contents="symbol"
                onSubmit={setSymbolSearch}/>
                    </p>
                </Col>
                <Col>
                    <p>Select Industry
                <SearchBar stock={stocksAll}
                contents="industry" onSubmit={setIndustrySearch} />
                    </p>
                </Col>
            </Row>


            <div className="ag-theme-balham" style={{
                height: "300px",
                width: "600px",
            }}>

                <AgGridReact columnDefs={columns} rowData={stocks} pagination={true} />
            </div>

        </Container>

    );
}