import React, { useState } from "react";
import { Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useQuoteData } from "../api/financialmodelingprepAPI";
import SearchBar from "./searchBar";
import Loader from "../components/loader";
import '../assets/css/components.css';

export default function QuoteTable(props) {
    const [symbolSearch, setSymbolSearch] = useState("");
    const [flag, setFlag] = useState("");
    const { loading, quote, error } = useQuoteData(symbolSearch);
    const stocksAll = props.stocksAll;
    const columns = [
        { hearderName: "Symbol", field: "symbol" },
        { hearderName: "Date", field: "date" },
        { hearderName: "Open", field: "open" },
        { hearderName: "High", field: "high" },
        { hearderName: "Low", field: "low" },
        { hearderName: "Close", field: "close" },
        { hearderName: "Volumes", field: "volume" },
    ];

    let stocks = [];

    if (typeof stocksAll !== "undefined") {
        if (typeof symbolSearch === "undefined" || symbolSearch === "") {
            stocks = stocksAll;
        } else {
            for (let i = 0; i < stocksAll.length; i++) {
                if (stocksAll[i].symbol === symbolSearch) {
                    stocks.push(stocksAll[i]);
                }
            }
        }
    }

    if (loading) {
        return (
            <Loader />
        );
    }

    if (error) {
        return <p>Something failed: {error}</p>
    }

    return (
        <Container>
            <Row>
                <Row className="mx-auto my-4">
                    <div className="div-margin"> Select Stock</div>
                    <SearchBar
                        labels={StocksToLable(stocksAll)}
                        type="quote"
                        onClick={setFlag}
                        onSubmit={setSymbolSearch} />
                </Row>

            </Row>

            <div className="ag-theme-balham">

                <AgGridReact columnDefs={columns} rowData={quote} pagination={true} />
            </div>

        </Container>

    );
}

export function StocksToLable(stocks) {
    let symbols = [];

    stocks.map((stock) => (
        symbols.push(stock.symbol)
    ));

    return symbols;
}